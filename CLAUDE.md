# Euler Lab - Guía de Desarrollo

100 problemas de Project Euler como **excusa para enseñar programación y matemáticas**.

## Filosofía Central

> **El objetivo NO es resolver problemas. Es ENSEÑAR conceptos.**

Cada problema introduce o profundiza en un concepto específico:
- Un problema de Collatz enseña **memoización**
- Un problema de caminos enseña **combinatoria y DP**
- Un problema de factorial enseña **BigInt y límites numéricos**

### Principios pedagógicos

1. **Profundidad sobre amplitud**: Mejor explicar un concepto a fondo que mencionar varios superficialmente
2. **El "por qué" antes del "cómo"**: Explicar por qué funciona, no solo mostrar que funciona
3. **Visualización**: Diagramas, animaciones, ejemplos paso a paso
4. **Conexión con el mundo real**: ¿Dónde se usa esto fuera de Euler?

---

## Estructura de Niveles (Flexible: 2-4)

### Nivel 1: Entendimiento (SIEMPRE)

**Objetivo**: Asegurar que se entiende el problema antes de escribir código.

Contenido:
- Resolver el caso pequeño del enunciado **a mano**
- Visualización del problema (diagramas, grids, árboles...)
- Identificar el **concepto central** que enseña este problema
- Anticipar dificultades y casos borde
- Mostrar la respuesta final (spoiler intencional - el valor está en el camino)

Elementos típicos:
- `step-card` con pasos numerados
- Visualizaciones interactivas (Canvas, SVG)
- `concept-tag` para los conceptos clave
- `result-box` con la respuesta

### Nivel 2: Implementación Directa (SIEMPRE)

**Objetivo**: Primera solución funcional, clara y bien explicada.

**Variantes (incluir 2-3 si aportan valor pedagógico)**:
- Variante A: `while True` + `break`
- Variante B: `while` con condición
- Variante C: `for` con `range` o función

**Cuándo NO incluir 3 variantes**:
- Si el problema es trivial en Python (ej: `sum(int(d) for d in str(2**1000))`)
- Si las variantes serían artificialmente diferentes
- Si solo hay una forma natural de hacerlo

**Profundizar en cada concepto**:
```
❌ Mal:  "Usamos un bucle for"
✓ Bien: "El bucle for en Python es diferente a otros lenguajes.
         No es un contador, es un iterador sobre una secuencia.
         range(10) genera los números 0-9 bajo demanda (lazy)."
```

Incluir siempre:
- Comentarios explicativos en el código
- Complejidad temporal y espacial
- Por qué esta solución es "fuerza bruta" (qué la hace ineficiente)

### Nivel 3: Solución Elegante (SI APORTA)

**Incluir si**: Hay una forma significativamente más pythónica/elegante.

**NO incluir si**: Sería básicamente lo mismo con syntax sugar.

Ejemplos de cuándo SÍ:
- Usar `math.prod()` vs bucle manual
- Generator expression vs lista completa
- `itertools` para combinaciones
- Comprehensions anidadas para matrices

Ejemplos de cuándo NO:
- `sum(range(n))` vs bucle - demasiado trivial
- Cambiar `for` por `while` - no es más elegante

### Nivel 4: Optimización/Matemática (SI APORTA)

**Incluir si**: Hay una mejora significativa en complejidad o un insight matemático profundo.

**Tipos de Nivel 4**:

| Tipo | Ejemplo | Cuándo usar |
|------|---------|-------------|
| **Fórmula O(1)** | Gauss para suma 1..n | Si existe fórmula cerrada |
| **Memoización** | Collatz con caché | Si hay subproblemas repetidos |
| **Programación Dinámica** | Caminos en grid | Si hay estructura óptima |
| **Algoritmo específico** | Criba de Eratóstenes | Si hay algoritmo clásico |
| **Optimización matemática** | Euclides para GCD | Si matemáticas reducen trabajo |

**NO incluir si**:
- No hay optimización real posible
- La "optimización" sería micro-optimización sin valor pedagógico

---

## Conceptos por Rango de Problemas

### Problemas 001-010: Fundamentos
- Variables y tipos básicos
- Bucles (`for`, `while`)
- Condicionales
- Funciones básicas (`sum`, `max`, `range`)
- Divisibilidad, primos básicos
- Fórmulas matemáticas clásicas (Gauss, Pitágoras)

### Problemas 011-020: Estructuras de Datos
- **Listas 2D / Matrices** (011, 018)
- **Strings como secuencias** (013, 017)
- **BigInt / Números grandes** (013, 016, 020)
- **Memoización / Caché** (014)
- **Programación Dinámica** (015, 018)
- **Fechas y calendario** (019)
- **Divisores y factorización** (012)

### Problemas 021-030: (Por definir)
- Recursión avanzada
- Grafos básicos
- Optimización
- ...

---

## Plantilla de Decisión por Problema

Antes de crear un problema, responder:

```
1. ¿Cuál es el CONCEPTO CENTRAL que enseña?
   → Este concepto debe explicarse a fondo

2. ¿Tiene solución O(1) o fórmula cerrada?
   → Sí: Incluir Nivel 4 matemático
   → No: ¿Hay optimización algorítmica relevante?

3. ¿Hay forma pythónica significativamente diferente?
   → Sí: Incluir Nivel 3
   → No: Saltarlo

4. ¿Las variantes de Nivel 2 aportan valor?
   → Sí: Incluir 2-3 variantes
   → No: Una sola implementación bien explicada

5. ¿Qué visualización ayudaría a entender?
   → Grid, árbol, gráfico, animación paso a paso...
```

---

## Mapeo Problemas 011-020

| # | Título | Concepto Central | Niveles | Nivel 3/4 es... |
|---|--------|------------------|---------|-----------------|
| 011 | Producto en grid | Matrices 2D, direcciones | 3 | Numpy vectorizado |
| 012 | Número triangular | Divisores, τ(n) | 3 | Fórmula τ(n) |
| 013 | Suma grande | BigInt, strings numéricos | 2 | (trivial en Python) |
| 014 | Collatz | Memoización | 3 | Memoización/caché |
| 015 | Caminos grid | Combinatoria, DP | 3 | C(40,20) directo |
| 016 | Dígitos 2^1000 | BigInt | 2 | (trivial en Python) |
| 017 | Letras en números | Strings, diccionarios | 2-3 | Diccionario elegante |
| 018 | Ruta máxima | Programación Dinámica | 3 | DP bottom-up |
| 019 | Domingos | Fechas, módulo | 2-3 | Fórmula de Zeller |
| 020 | Dígitos 100! | BigInt, factorial | 2 | (trivial en Python) |

---

## Componentes HTML

### Result box
```html
<div class="result-box">
    <div>
        <div class="text-sm text-[var(--text-muted)] mb-1">Respuesta</div>
        <div class="result-value">NÚMERO</div>
    </div>
    <div class="text-right">
        <div class="text-sm text-[var(--text-muted)] mb-1">Info adicional</div>
        <div class="mono text-lg">DATO</div>
    </div>
</div>
```

### Concept box (para explicar conceptos a fondo)
```html
<div class="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
    <h4 class="font-medium mb-4 text-[var(--accent-purple)]">¿Qué es la Memoización?</h4>
    <p class="text-[var(--text-secondary)] mb-4">
        Explicación detallada del concepto...
    </p>
    <div class="bg-[var(--bg-elevated)] p-4 rounded-lg mono text-sm">
        <pre>Ejemplo de código ilustrativo</pre>
    </div>
</div>
```

### Comparison table
```html
<table class="perf-table">
    <thead>
        <tr>
            <th>Método</th>
            <th>Complejidad</th>
            <th>Tiempo (n=1M)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sin caché</td>
            <td>O(n × k)</td>
            <td>
                ~30 segundos
                <div class="perf-bar"><div class="perf-bar-fill perf-slow" style="width: 100%"></div></div>
            </td>
        </tr>
        <tr>
            <td>Con memoización</td>
            <td>O(n)</td>
            <td>
                ~0.5 segundos
                <div class="perf-bar"><div class="perf-bar-fill perf-fast" style="width: 1.6%"></div></div>
            </td>
        </tr>
    </tbody>
</table>
```

---

## Estilo de Explicaciones

### ❌ Evitar
- "Ahora hacemos un bucle" (sin explicar por qué)
- Código sin contexto
- Asumir conocimiento previo sin verificar
- Saltar del problema a la solución

### ✓ Preferir
- "Necesitamos recorrer todos los números porque..."
- Construir la solución paso a paso
- Explicar cada decisión de diseño
- Mostrar qué pasa si no hacemos X

### Ejemplo de buena explicación

```
❌ "Usamos memoización para acelerar"

✓ "Sin memoización, calcular collatz(13) requiere calcular:
   13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

   Pero si después calculamos collatz(40), repetimos TODO
   el trabajo desde 40 en adelante.

   Con memoización, guardamos que collatz(40) = 8 pasos,
   y la próxima vez lo consultamos en O(1).

   Esto convierte O(n × k) en O(n), donde k es la longitud
   promedio de secuencia."
```

---

## URLs

- **GitHub**: https://github.com/cjlkaiser-cpu/euler-lab
- **GitHub Pages**: https://cjlkaiser-cpu.github.io/euler-lab
- **Parte de**: EigenLab (submodule en Mathematics/)

## Stack

- HTML5 + Tailwind CSS (CDN)
- JavaScript vanilla
- Pyodide v0.24.1 (Python en browser)
- Fuentes: Source Serif 4, Inter, JetBrains Mono
