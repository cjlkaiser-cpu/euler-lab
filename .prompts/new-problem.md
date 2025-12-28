# Prompt: Crear nuevo problema de Euler Lab

## Contexto

Euler Lab es una colección de 100 problemas de Project Euler resueltos pedagógicamente con 4 niveles de profundidad. Cada problema tiene su propio archivo HTML en `problems/XXX/index.html`.

## Instrucciones

Crea el problema **#{{NÚMERO}}** de Project Euler: **{{TÍTULO}}**

### Paso 1: Investigar el problema

1. Lee el enunciado oficial en https://projecteuler.net/problem={{NÚMERO}}
2. Identifica:
   - Qué se pide calcular
   - El caso ejemplo del enunciado
   - La respuesta correcta (si la conoces)
   - Categoría: Números | Secuencias | Primos | Combinatoria | Strings
   - Dificultad: 1-5 (basado en Project Euler)

### Paso 2: Crear `problems/{{NÚMERO}}/index.html`

Usa `problems/001/index.html` como plantilla. Modifica:

#### Header
- Breadcrumb: `#{{NÚMERO}}`
- Título: `{{TÍTULO}}`
- `<title>`: `#{{NÚMERO}} {{TÍTULO}} — Euler Lab`

#### Enunciado
- Traducir al español
- Destacar valores clave con `<strong class="text-white">`

#### Nivel 1: A mano
- Resolver el caso pequeño del enunciado paso a paso
- Explicar los conceptos matemáticos involucrados
- Mostrar por qué necesitamos código
- Usar `step-card` para los pasos
- Usar `math-block` para fórmulas

#### Nivel 2: Fuerza bruta (CRÍTICO)

**Siempre incluir 3 variantes mínimo:**

```
Variante A: while True + break
- Bucle infinito con salida manual
- Útil cuando la condición de salida es compleja
- ID: code-varA, output-varA

Variante B: while con condición
- La condición va en el while
- Útil cuando no sabes cuántas iteraciones
- ID: code-varB, output-varB

Variante C: for con range (o alternativa pythónica simple)
- Python gestiona el contador
- La más común para rangos conocidos
- ID: code-varC, output-varC
```

Para cada variante:
- Código comentado línea por línea
- Explicación de cuándo usarla
- Botón ejecutar funcional

Incluir:
- Nota azul explicando que hay múltiples formas válidas
- Tabla comparativa (líneas, ventaja, cuándo usar)
- Explicación de cada concepto de Python usado
- Tags de conceptos aprendidos

#### Nivel 3: Pythónico
- Una línea o pocas líneas usando:
  - Generator expressions
  - List comprehensions
  - `sum()`, `any()`, `all()`, `max()`, `min()`
  - `filter()`, `map()`, `reduce()`
- Desglose paso a paso
- Tabla comparativa con fuerza bruta
- ID: code-pythonic, output-pythonic

#### Nivel 4: Matemático
- Fórmula cerrada O(1) si existe
- Si no, optimización algorítmica (memoización, sieve, etc.)
- Derivación matemática paso a paso
- Tabla de complejidad (O(n) vs O(1) o O(n) vs O(√n))
- Barras de rendimiento visuales
- ID: code-math, output-math

#### Footer
- Link al problema anterior
- Link al problema siguiente

### Paso 3: Actualizar `index.html`

Añadir card del nuevo problema con:
- Número y título
- Dificultad (dots)
- Canvas animation (si aplica)
- Categoría tag
- Descripción corta

### Paso 4: Actualizar navegación

- En problema anterior: link "Siguiente →" apunta al nuevo
- En problema nuevo: link "← Anterior" apunta al anterior

### Paso 5: Commit y push

```bash
cd "Mathematics/Euler Lab"
git add .
git commit -m "feat: add problem {{NÚMERO}} - {{TÍTULO}}"
git push
```

---

## Checklist final

- [ ] Enunciado traducido correctamente
- [ ] Nivel 1 resuelve el caso ejemplo
- [ ] Nivel 2 tiene 3 variantes con IDs correctos
- [ ] Nivel 2 explica cada concepto de Python
- [ ] Nivel 3 usa idiomas pythónicos
- [ ] Nivel 4 tiene fórmula/optimización
- [ ] Todos los botones "Ejecutar" funcionan
- [ ] Result box muestra la respuesta correcta
- [ ] Navegación anterior/siguiente correcta
- [ ] Card añadida al índice
- [ ] Commit y push realizados

---

## Variables a reemplazar

- `{{NÚMERO}}`: Número del problema con padding (001, 002, etc.)
- `{{TÍTULO}}`: Título en español del problema

## Ejemplo de uso

```
Crea el problema #002 de Euler Lab: Fibonacci pares

El problema pide sumar los términos pares de Fibonacci que no excedan 4 millones.
```
