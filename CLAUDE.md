# Euler Lab - Guía de Automatización

100 problemas de Project Euler resueltos pedagógicamente con 4 niveles de profundidad.

## Filosofía

Cada problema enseña **programación progresivamente**:
- Nivel 1: Entender el problema sin código
- Nivel 2: Múltiples formas de resolverlo (variantes)
- Nivel 3: Código idiomático de Python
- Nivel 4: Matemáticas y optimización

## Estructura de archivos

```
euler-lab/
├── index.html              # Índice con cards animadas
├── shared/
│   ├── styles.css          # (futuro) Estilos extraídos
│   └── pyodide-runner.js   # (futuro) Lógica Pyodide
├── problems/
│   ├── 001/index.html      # Múltiplos de 3 y 5
│   ├── 002/index.html      # Fibonacci pares
│   └── .../
├── README.md
└── CLAUDE.md               # Este archivo
```

## Los 4 niveles

### Nivel 1: A mano
**Objetivo**: Entender el problema antes de programar.

Contenido:
- Resolver el caso pequeño del enunciado paso a paso
- Verificar que entendemos qué nos piden
- Identificar conceptos matemáticos clave
- Explicar por qué necesitamos código

Elementos HTML:
- `step-card` con pasos numerados
- `math-block` para fórmulas
- `concept-tag` para conceptos clave

### Nivel 2: Fuerza bruta
**Objetivo**: Mostrar que hay múltiples formas válidas de resolver el mismo problema.

**IMPORTANTE**: Siempre incluir mínimo 3 variantes:
- **Variante A**: `while True` + `break` (explícita, ideal para condiciones complejas)
- **Variante B**: `while` con condición (más limpia, sin break)
- **Variante C**: `for` con `range` (la más común en Python)

Cada variante tiene:
- Su propio `code-editor` con ID único (`code-varA`, `code-varB`, `code-varC`)
- Su propio `output` con ID correspondiente (`output-varA`, `output-varB`, `output-varC`)
- Explicación de cuándo usar cada una
- Tabla comparativa al final

Conceptos a explicar línea por línea:
- Variables y acumuladores
- Bucles (`while`, `for`)
- Condicionales (`if`)
- Operadores (`%`, `or`, `and`)
- `break`, `continue`, `range()`

### Nivel 3: Pythónico
**Objetivo**: Código idiomático de Python.

Mostrar:
- Generator expressions
- List comprehensions
- Funciones built-in (`sum`, `any`, `all`, `max`, `min`)
- Comparativa con fuerza bruta (líneas, legibilidad)

### Nivel 4: Matemático
**Objetivo**: Solución óptima O(1) cuando es posible.

Contenido:
- Fórmulas matemáticas con explicación
- Derivación paso a paso
- Comparativa de rendimiento (tabla + barras visuales)
- Complejidad algorítmica

---

## Componentes HTML reutilizables

### Header de problema
```html
<header>
    <div class="max-w-3xl mx-auto px-5 py-4">
        <div class="flex items-center justify-between">
            <div>
                <nav class="text-xs text-gray-600 mb-1 mono">
                    <a href="../../index.html" class="hover:text-blue-400 transition">Euler Lab</a>
                    <span class="mx-1.5 text-gray-800">/</span>
                    <span class="text-gray-500">#XXX</span>
                </nav>
                <h1 class="text-xl font-medium">TÍTULO DEL PROBLEMA</h1>
            </div>
            <div class="pyodide-status mono">
                <span class="status-dot loading" id="pyodide-dot"></span>
                <span id="pyodide-text">Cargando Python...</span>
            </div>
        </div>
    </div>
</header>
```

### Enunciado del problema
```html
<section class="mb-10">
    <div class="p-6 bg-gray-950 border border-gray-900 rounded-xl">
        <p class="serif text-lg text-gray-300 leading-relaxed">
            DESCRIPCIÓN DEL PROBLEMA con <strong class="text-white">valores destacados</strong>.
        </p>
    </div>
</section>
```

### Tabs de niveles
```html
<nav class="mb-8 flex justify-center">
    <div class="level-tabs">
        <button class="level-tab active" data-level="1">A mano</button>
        <button class="level-tab" data-level="2">Fuerza bruta</button>
        <button class="level-tab" data-level="3">Pythónico</button>
        <button class="level-tab" data-level="4">Matemático</button>
    </div>
</nav>
```

### Step card (pasos numerados)
```html
<div class="step-card">
    <div class="step-number">1</div>
    <div>
        <h3 class="font-medium mb-1">Título del paso</h3>
        <p class="text-gray-500 text-sm">Explicación con <code>código inline</code></p>
    </div>
</div>
```

### Math block (fórmulas)
```html
<div class="math-block">
    <div class="math-formula">n × (n + 1) / 2</div>
    <div class="math-description">Descripción de la fórmula</div>
</div>
```

### Code editor
```html
<div class="code-editor">
    <div class="code-header">
        <span class="code-lang">Python</span>
        <button class="run-btn" onclick="runCode('code-ID')">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Ejecutar
        </button>
    </div>
    <textarea id="code-ID" class="code-textarea" spellcheck="false">CÓDIGO PYTHON</textarea>
    <div class="code-output" id="output-ID">Pulsa "Ejecutar" para ver el resultado</div>
</div>
```

**IDs de código por nivel**:
- Nivel 2: `code-varA`, `code-varB`, `code-varC` (y sus outputs)
- Nivel 3: `code-pythonic`
- Nivel 4: `code-math`

### Result box
```html
<div class="result-box">
    <span class="text-gray-400">Resultado</span>
    <span class="result-value">NÚMERO</span>
</div>
```

### Concept tags
```html
<div class="flex flex-wrap gap-2">
    <span class="concept-tag">📦 Variables</span>
    <span class="concept-tag">🔁 while loop</span>
    <span class="concept-tag">🔄 for loop</span>
</div>
```

### Performance table
```html
<div class="bg-gray-950 border border-gray-900 rounded-xl overflow-hidden">
    <table class="perf-table">
        <thead>
            <tr><th>Método</th><th>Complejidad</th></tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-gray-400">Fuerza bruta</td>
                <td class="text-red-400">O(n)</td>
            </tr>
            <tr>
                <td class="text-gray-400">Matemático</td>
                <td class="text-green-400">O(1)</td>
            </tr>
        </tbody>
    </table>
</div>
```

### Footer de navegación
```html
<footer class="mt-16 pt-8 border-t border-gray-900 flex justify-between items-center">
    <a href="../XXX/index.html" class="text-gray-500 hover:text-white transition text-sm">← Problema anterior</a>
    <a href="../XXX/index.html" class="text-gray-500 hover:text-white transition text-sm">Problema siguiente →</a>
</footer>
```

---

## JavaScript requerido

### Tabs de niveles
```javascript
document.querySelectorAll('.level-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const level = tab.dataset.level;
        document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.level-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`level-${level}`).classList.add('active');
    });
});
```

### Pyodide (ejecutar Python)
```javascript
let pyodide = null;

async function initPyodide() {
    const dot = document.getElementById('pyodide-dot');
    const text = document.getElementById('pyodide-text');
    try {
        pyodide = await loadPyodide();
        dot.classList.remove('loading');
        dot.classList.add('ready');
        text.textContent = 'Python listo';
    } catch (e) {
        dot.classList.remove('loading');
        dot.classList.add('error');
        text.textContent = 'Error cargando Python';
    }
}

initPyodide();

async function runCode(textareaId) {
    if (!pyodide) {
        alert('Python aún está cargando.');
        return;
    }

    const textarea = document.getElementById(textareaId);
    const outputId = 'output-' + textareaId.replace('code-', '');
    const output = document.getElementById(outputId);
    const btn = textarea.closest('.code-editor').querySelector('.run-btn');

    btn.disabled = true;
    btn.classList.add('running');
    output.textContent = 'Ejecutando...';

    try {
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);
        pyodide.runPython(textarea.value);
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        output.textContent = stdout || '(sin salida)';
        output.classList.add('success');
    } catch (e) {
        output.textContent = e.message;
        output.classList.add('error');
    }

    btn.disabled = false;
    btn.classList.remove('running');
}
```

---

## Índice principal (index.html)

### Card de problema
```html
<a href="problems/XXX/index.html" class="card group relative p-0.5 rounded-2xl bg-gradient-to-br from-transparent to-transparent hover:from-COLOR hover:to-COLOR-dark transition-all duration-300 cat-CATEGORY">
    <div class="card-glow"></div>
    <div class="relative bg-black rounded-[14px] p-5 h-full">
        <div class="flex justify-between items-start mb-4">
            <span class="problem-number text-gray-600 uppercase">#XXX</span>
            <div class="flex gap-1">
                <span class="difficulty-dot bg-COLOR"></span>
                <!-- 1-5 dots según dificultad -->
            </div>
        </div>
        <canvas class="preview-canvas w-full h-24 rounded-lg mb-4 bg-gray-950"></canvas>
        <h3 class="text-white font-medium mb-1">TÍTULO</h3>
        <p class="text-gray-600 text-sm">DESCRIPCIÓN CORTA</p>
        <span class="inline-block mt-3 text-xs px-2 py-0.5 rounded-full tag-CATEGORY">CATEGORÍA</span>
    </div>
</a>
```

### Categorías y colores

| Categoría | Clase CSS | Color principal |
|-----------|-----------|-----------------|
| Números | `cat-numbers`, `tag-numbers` | `#3b82f6` (blue) |
| Secuencias | `cat-sequences`, `tag-sequences` | `#22c55e` (green) |
| Primos | `cat-primes`, `tag-primes` | `#a855f7` (purple) |
| Combinatoria | `cat-combinatorics`, `tag-combinatorics` | `#f59e0b` (amber) |
| Strings | `cat-strings`, `tag-strings` | `#ec4899` (pink) |

---

## Lista de problemas 001-010

| # | Título | Categoría | Dificultad |
|---|--------|-----------|------------|
| 001 | Múltiplos de 3 y 5 | Números | 1 |
| 002 | Fibonacci pares | Secuencias | 1 |
| 003 | Factor primo mayor | Primos | 1 |
| 004 | Palíndromo más grande | Números | 2 |
| 005 | Mínimo común múltiplo | Números | 1 |
| 006 | Suma vs cuadrado | Números | 1 |
| 007 | Primo 10001 | Primos | 2 |
| 008 | Producto en serie | Strings | 2 |
| 009 | Triplete pitagórico | Números | 1 |
| 010 | Suma de primos | Primos | 2 |

---

## Instrucciones para Claude

Al crear un nuevo problema:

1. **Crear directorio**: `problems/XXX/index.html`

2. **Copiar estructura** de `problems/001/index.html` como base

3. **Personalizar**:
   - Título en `<title>` y `<h1>`
   - Número en breadcrumb
   - Enunciado del problema
   - Los 4 niveles con contenido específico

4. **Nivel 2 - Variantes**:
   - Siempre 3 variantes mínimo
   - Adaptar al tipo de problema (no todos usan `range`)
   - Explicar cuándo usar cada variante

5. **Nivel 4 - Matemático**:
   - Si no hay fórmula cerrada, mostrar optimización algorítmica
   - Siempre incluir tabla de complejidad

6. **Actualizar index.html**:
   - Añadir card del nuevo problema
   - Actualizar canvas animation si es necesario

7. **Actualizar navegación**:
   - Links anterior/siguiente en footer

---

## URLs

- **GitHub**: https://github.com/cjlkaiser-cpu/euler-lab
- **GitHub Pages**: https://cjlkaiser-cpu.github.io/euler-lab
- **Parte de**: EigenLab (submodule en Mathematics/)

## Stack

- HTML5 + Tailwind CSS (CDN)
- JavaScript vanilla
- Pyodide v0.24.1 (Python en browser)
- Source Serif 4 + Inter + JetBrains Mono
