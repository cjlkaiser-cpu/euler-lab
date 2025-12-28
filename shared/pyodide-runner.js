/**
 * Euler Lab - Pyodide Runner
 * Shared script for loading and running Python code in the browser
 */

let pyodide = null;

/**
 * Initialize Pyodide and update status indicators
 */
async function initPyodide() {
    const dot = document.getElementById('pyodide-dot');
    const text = document.getElementById('pyodide-text');

    try {
        pyodide = await loadPyodide();
        if (dot) {
            dot.classList.remove('loading');
            dot.classList.add('ready');
        }
        if (text) text.textContent = 'Python listo';
        console.log('Pyodide loaded successfully');
    } catch (e) {
        if (dot) {
            dot.classList.remove('loading');
            dot.classList.add('error');
        }
        if (text) text.textContent = 'Error cargando Python';
        console.error('Failed to load Pyodide:', e);
    }
}

/**
 * Run Python code and display output
 * @param {string} textareaId - ID of the textarea containing the code
 */
async function runCode(textareaId) {
    if (!pyodide) {
        alert('Python aún está cargando. Espera un momento.');
        return;
    }

    const textarea = document.getElementById(textareaId);
    const outputId = 'output-' + textareaId.split('-').slice(1).join('-');
    const output = document.getElementById(outputId);
    const btn = textarea.closest('.code-editor').querySelector('.run-btn');

    // Update UI to running state
    btn.disabled = true;
    btn.classList.add('running');
    btn.innerHTML = `
        <svg class="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
        </svg>
        Ejecutando...
    `;
    output.className = 'code-output';
    output.textContent = 'Ejecutando...';

    try {
        // Redirect stdout
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);

        // Run user code
        pyodide.runPython(textarea.value);

        // Get stdout content
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        output.textContent = stdout || '(sin salida)';
        output.classList.add('success');
    } catch (e) {
        output.textContent = e.message;
        output.classList.add('error');
    }

    // Reset button
    btn.disabled = false;
    btn.classList.remove('running');
    btn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
        </svg>
        Ejecutar
    `;
}

/**
 * Run Python code and return result (for custom calculations)
 * @param {string} code - Python code to execute
 * @returns {*} Result of the Python expression
 */
async function runPython(code) {
    if (!pyodide) {
        throw new Error('Pyodide not loaded');
    }
    return pyodide.runPython(code);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPyodide);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initPyodide, runCode, runPython };
}
