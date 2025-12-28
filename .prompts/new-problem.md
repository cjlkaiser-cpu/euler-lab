# Prompt: Crear nuevo problema de Euler Lab

## Filosofía Central

> **El objetivo NO es resolver problemas. Es ENSEÑAR conceptos.**

Cada problema es una excusa para profundizar en un concepto específico:
- Un problema de Collatz enseña **memoización**
- Un problema de caminos enseña **combinatoria y DP**
- Un problema de factorial enseña **BigInt y límites numéricos**

**Principios:**
1. Profundidad sobre amplitud - Mejor explicar un concepto a fondo que mencionar varios
2. El "por qué" antes del "cómo" - Explicar por qué funciona, no solo mostrar que funciona
3. Visualización - Diagramas, animaciones, ejemplos paso a paso
4. Conexión con el mundo real - ¿Dónde se usa esto fuera de Euler?

---

## Contexto

Euler Lab es una colección de 100 problemas de Project Euler resueltos pedagógicamente con **2-4 niveles flexibles** según lo que aporte cada problema. Cada problema tiene su propio archivo HTML en `problems/XXX/index.html`.

---

## Paso 0: Decisión de estructura

**ANTES de escribir código**, responder:

```
1. ¿Cuál es el CONCEPTO CENTRAL que enseña este problema?
   → Este concepto debe explicarse A FONDO

2. ¿Tiene solución O(1) o fórmula cerrada?
   → Sí: Incluir Nivel 4 matemático
   → No: ¿Hay optimización algorítmica relevante (memoización, DP, sieve)?

3. ¿Hay forma pythónica SIGNIFICATIVAMENTE diferente?
   → Sí: Incluir Nivel 3
   → No: Saltarlo (no añadir syntax sugar sin valor)

4. ¿Las variantes de Nivel 2 aportan valor pedagógico?
   → Sí: Incluir 2-3 variantes
   → No: Una sola implementación bien explicada

5. ¿Qué visualización ayudaría a entender?
   → Grid, árbol, gráfico, animación paso a paso...
```

---

## Instrucciones

Crea el problema **#{{NÚMERO}}** de Project Euler: **{{TÍTULO}}**

### Paso 1: Investigar el problema

1. Lee el enunciado oficial en https://projecteuler.net/problem={{NÚMERO}}
2. Identifica:
   - Qué se pide calcular
   - El caso ejemplo del enunciado
   - La respuesta correcta
   - **El concepto central que enseña**
   - Categoría: Números | Secuencias | Primos | Combinatoria | Strings | Matrices | DP
   - Dificultad: 1-5

### Paso 2: Crear `problems/{{NÚMERO}}/index.html`

Usa un problema existente similar como referencia.

#### Header
- Breadcrumb: `#{{NÚMERO}}`
- Título: `{{TÍTULO}}`
- `<title>`: `#{{NÚMERO}} {{TÍTULO}} — Euler Lab`

#### Enunciado
- Traducir al español
- Destacar valores clave con `<strong class="text-white">`

---

### Nivel 1: Entendimiento (SIEMPRE)

**Objetivo**: Asegurar que se entiende el problema ANTES de escribir código.

Contenido obligatorio:
- Resolver el caso pequeño **a mano** paso a paso
- **Visualización** del problema (Canvas, SVG, diagramas)
- Identificar el **concepto central** que enseña
- Anticipar dificultades y casos borde
- **Mostrar la respuesta final** (spoiler intencional - el valor está en el camino)

Elementos:
- `step-card` con pasos numerados
- Visualizaciones interactivas
- `concept-tag` para los conceptos clave
- `result-box` con la respuesta

---

### Nivel 2: Implementación Directa (SIEMPRE)

**Objetivo**: Primera solución funcional, clara y BIEN EXPLICADA.

**Variantes**: Incluir 2-3 SOLO si aportan valor pedagógico diferente.

```
Cuándo SÍ incluir variantes:
- while True + break vs while condición enseña diferentes patrones
- for con range vs itertools enseña abstracción
- Diferentes estructuras de datos para el mismo problema

Cuándo NO incluir variantes:
- El problema es trivial (ej: sum(int(d) for d in str(2**1000)))
- Las variantes serían artificialmente diferentes
- Solo hay una forma natural de hacerlo
```

**Profundizar en CADA concepto:**

```
❌ Mal:  "Usamos un bucle for"

✓ Bien: "El bucle for en Python es diferente a otros lenguajes.
         No es un contador, es un iterador sobre una secuencia.
         range(10) genera los números 0-9 bajo demanda (lazy).
         Esto significa que range(1_000_000_000) no crea mil millones
         de números en memoria - los genera uno a uno."
```

Incluir SIEMPRE:
- Comentarios explicativos en el código
- Complejidad temporal y espacial con EXPLICACIÓN
- Por qué esta solución es "fuerza bruta" (qué la hace ineficiente)
- Tags de conceptos aprendidos

---

### Nivel 3: Solución Elegante (SI APORTA)

**Incluir si**: Hay una forma significativamente más pythónica/elegante.

**NO incluir si**: Sería básicamente lo mismo con syntax sugar.

Ejemplos de cuándo SÍ:
- `math.prod()` vs bucle manual (enseña stdlib)
- Generator expression vs lista completa (enseña lazy evaluation)
- `itertools` para combinaciones (enseña herramientas especializadas)
- Comprehensions anidadas para matrices

Ejemplos de cuándo NO:
- `sum(range(n))` vs bucle - demasiado trivial
- Cambiar `for` por `while` - no es más elegante
- Añadir type hints - no cambia la lógica

Si se incluye:
- Desglose paso a paso de la expresión
- Comparación con Nivel 2
- Cuándo usar cada enfoque
- ID: code-pythonic, output-pythonic

---

### Nivel 4: Optimización/Matemática (SI APORTA)

**Incluir si**: Hay mejora significativa en complejidad O insight matemático profundo.

**Tipos de Nivel 4:**

| Tipo | Ejemplo | Cuándo usar |
|------|---------|-------------|
| Fórmula O(1) | Gauss para suma 1..n | Si existe fórmula cerrada |
| Memoización | Collatz con caché | Si hay subproblemas repetidos |
| Programación Dinámica | Caminos en grid | Si hay estructura óptima |
| Algoritmo específico | Criba de Eratóstenes | Si hay algoritmo clásico |
| Optimización matemática | Euclides para GCD | Si matemáticas reducen trabajo |

**NO incluir si:**
- No hay optimización real posible (muchos problemas de BigInt en Python)
- La "optimización" sería micro-optimización sin valor pedagógico
- El problema ya es O(1) en Nivel 2

Si se incluye:
- Derivación matemática completa
- Visualización del algoritmo
- Tabla de complejidad con barras de rendimiento
- ID: code-math, output-math

---

### Footer / Navegación (en header)

**IMPORTANTE**: Usar siempre `index.html` explícito en los enlaces:

```html
<!-- Link a Euler Lab -->
<a href="../../index.html">← Euler Lab</a>

<!-- Links entre problemas -->
<a href="../011/index.html">← 011</a>
<a href="../013/index.html">013 →</a>
```

**NO usar** formato sin `index.html` (`../011/`, `../../`) porque falla al abrir localmente.

---

## Paso 3: Navegación

- En problema anterior: link "Siguiente →" apunta al nuevo (`../{{NÚMERO}}/index.html`)
- En problema nuevo: link "← Anterior" apunta al anterior (`../{{NÚMERO-1}}/index.html`)

---

## Paso 4: Commit y push

```bash
cd "Mathematics/Euler Lab"
git add .
git commit -m "feat: add problem {{NÚMERO}} - {{TÍTULO}}"
git push
```

**Nota**: El índice (`index.html`) se actualiza en batches cada 10 problemas.

---

## Checklist final

### Obligatorios (todos los problemas)
- [ ] Concepto central identificado y explicado a fondo
- [ ] Enunciado traducido correctamente
- [ ] Nivel 1 resuelve el caso ejemplo con visualización
- [ ] Nivel 2 explica cada línea y concepto de Python
- [ ] Result box muestra la respuesta correcta
- [ ] Navegación anterior/siguiente correcta
- [ ] Commit y push realizados

### Si aplica
- [ ] Nivel 2 tiene variantes (solo si aportan valor)
- [ ] Nivel 3 usa idiomas pythónicos significativamente diferentes
- [ ] Nivel 4 tiene fórmula/optimización con derivación
- [ ] Todos los botones "Ejecutar" funcionan

---

## Estilo de explicaciones

### Evitar
- "Ahora hacemos un bucle" (sin explicar por qué)
- Código sin contexto
- Asumir conocimiento previo sin verificar
- Saltar del problema a la solución

### Preferir
- "Necesitamos recorrer todos los números porque..."
- Construir la solución paso a paso
- Explicar cada decisión de diseño
- Mostrar qué pasa si NO hacemos X

### Ejemplo

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

## Variables a reemplazar

- `{{NÚMERO}}`: Número del problema con padding (001, 002, etc.)
- `{{TÍTULO}}`: Título en español del problema

## Ejemplo de uso

```
Crea el problema #014 de Euler Lab: Secuencia Collatz más larga

Concepto central: MEMOIZACIÓN
- Nivel 1: Visualizar la secuencia, entender el problema
- Nivel 2: Fuerza bruta (lento pero correcto)
- Nivel 3: Omitir (no hay forma pythónica significativamente diferente)
- Nivel 4: Con memoización (60x más rápido)
```
