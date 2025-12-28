# Euler Lab

100 problemas de [Project Euler](https://projecteuler.net) resueltos de forma pedagógica, con 4 niveles de profundidad cada uno.

**[Ver demo](https://cjlkaiser-cpu.github.io/euler-lab)**

## Filosofía

Cada problema tiene **4 niveles de solución**:

| Nivel | Nombre | Enfoque |
|-------|--------|---------|
| 1 | **A mano** | Entender el problema antes de programar |
| 2 | **Fuerza bruta** | Múltiples variantes (while True, while, for) |
| 3 | **Pythónico** | Generadores, comprehensions, idiomas |
| 4 | **Matemático** | Fórmulas cerradas, O(1) cuando es posible |

## Características

- **Ejecución interactiva**: Python corre en el navegador via [Pyodide](https://pyodide.org)
- **Sin servidor**: Todo es HTML/CSS/JS estático
- **Código editable**: Modifica y experimenta con las soluciones
- **Explicaciones detalladas**: Línea por línea, concepto por concepto

## Uso

```bash
# Abre index.html en tu navegador
open index.html

# O con servidor local
python -m http.server 8000
```

## Estructura

```
euler-lab/
├── index.html              # Índice con cards animadas
├── shared/
│   ├── styles.css          # Estilos compartidos
│   └── pyodide-runner.js   # Lógica de ejecución Python
├── problems/
│   ├── 001/index.html      # Múltiplos de 3 y 5
│   ├── 002/index.html      # Fibonacci pares
│   └── ...
└── README.md
```

## Problemas

| # | Problema | Categoría |
|---|----------|-----------|
| 001 | Múltiplos de 3 y 5 | Números |
| 002 | Fibonacci pares | Secuencias |
| 003 | Factor primo mayor | Primos |
| 004 | Palíndromo más grande | Números |
| 005 | Mínimo común múltiplo | Números |
| 006 | Suma vs cuadrado | Números |
| 007 | Primo 10001 | Primos |
| 008 | Producto en serie | Strings |
| 009 | Triplete pitagórico | Números |
| 010 | Suma de primos | Primos |

## Stack

- HTML5 + Tailwind CSS
- JavaScript vanilla
- [Pyodide](https://pyodide.org) v0.24.1

## Parte de EigenLab

Este proyecto forma parte del ecosistema [EigenLab](https://github.com/cjlkaiser-cpu).

## Licencia

MIT
