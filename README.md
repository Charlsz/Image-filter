# SVG Image Filter

Una aplicación web que aplica efectos de semitonos (halftone) a imágenes usando filtros SVG del lado del cliente. La aplicación procesa imágenes en tiempo real sin necesidad de servidor, dependiendo únicamente de las capacidades nativas del navegador.

## Características

- **Filtros de semitono en tiempo real**: Dos tipos de filtros SVG (`half-tone` y `half-tone-hd`)
- **Personalización de color**: Selector de color para ajustar el tono del efecto
- **Procesamiento del lado del cliente**: Todo funciona directamente en el navegador
- **Interfaz minimalista**: Controles simples para subir imagen, seleccionar filtro y ajustar color

## Tecnologías

- **HTML5**: Estructura semántica con elementos nativos
- **CSS3**: Estilos modernos con soporte para `oklch()`
- **JavaScript Vanilla**: Sin frameworks, solo JavaScript nativo
- **SVG Filters**: Filtros avanzados para efectos de imagen

## ¿Cómo funciona?

La aplicación utiliza filtros SVG avanzados para crear efectos de semitono:

1. **Extracción de luminancia**: Convierte la imagen a valores de luminancia en escala de grises
2. **Mapeo de umbrales**: Divide la luminancia en 8 niveles discretos
3. **Generación de patrones**: Aplica círculos de tamaños variables basados en la luminancia
4. **Composición final**: Combina todos los niveles para renderizar el efecto de semitono

### Tipos de filtro

- **`half-tone`**: Cuadrícula de 8x8 píxeles con círculos que van de 0.5 a 4.0 de radio
- **`half-tone-hd`**: Cuadrícula de 4x4 píxeles con círculos que van de 0.25 a 2.0 de radio para mayor detalle

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/Charlsz/SVG-image-filter.git
cd SVG-image-filter

# Abrir directamente en el navegador
# No se requieren dependencias ni servidor
```

Simplemente abre el archivo `index.html` en tu navegador web favorito.

## Estructura del proyecto

```
SVG-image-filter/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este archivo
```

## Archivos principales

### `index.html`
- Estructura HTML completa con DOCTYPE, meta tags y enlaces
- Controles de interfaz: subida de archivo, selector de filtro, selector de color
- Definiciones SVG para ambos filtros de semitono
- Imagen de preview con filtros aplicables

### `script.js`
- Manejo de eventos para subida de archivos
- Control de cambios de color en tiempo real
- Aplicación dinámica de filtros SVG
- Gestión del DOM para elementos interactivos

### `styles.css`
- Estilos modernos con `oklch()` para colores
- Diseño responsivo para la imagen
- Tipografía y espaciado básico

## Uso

1. **Abrir la aplicación**: Abre `index.html` en tu navegador
2. **Seleccionar imagen**: Usa el botón "Elegir archivo" para subir una imagen
3. **Aplicar filtro**: Selecciona entre "None", "half-tone" o "half-tone-hd"
4. **Personalizar color**: Usa el selector de color para cambiar el tono del efecto
5. **Ver resultado**: El efecto se aplica instantáneamente a la imagen