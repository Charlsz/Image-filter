# SVG Image Filter

A web application that applies halftone effects to images using client-side SVG filters. The app processes images in real time without needing a server, relying solely on the browser’s native capabilities.

## Features

- **Real-time halftone filters**: Two types of SVG filters (`half-tone` and `half-tone-hd`)
- **Color customization**: Color picker to adjust the effect tone
- **Client-side processing**: Everything runs directly in the browser
- **Minimalist interface**: Simple controls to upload an image, select a filter, and adjust color

## Technologies

- **HTML5**: Semantic structure with native elements
- **CSS3**: Modern styling with `oklch()` support
- **Vanilla JavaScript**: No frameworks, just native JavaScript
- **SVG Filters**: Advanced filters for image effects

## How does it work?

The application uses advanced SVG filters to create halftone effects:

1. **Luminance extraction**: Converts the image to grayscale luminance values  
2. **Threshold mapping**: Splits luminance into 8 discrete levels  
3. **Pattern generation**: Applies circles of varying sizes based on luminance  
4. **Final composition**: Combines all levels to render the halftone effect  

### Filter types

- **`half-tone`**: 8x8 pixel grid with circles ranging from 0.5 to 4.0 radius  
- **`half-tone-hd`**: 4x4 pixel grid with circles ranging from 0.25 to 2.0 radius for higher detail  

## Installation and usage

```bash
# Clone the repository
git clone https://github.com/Charlsz/SVG-image-filter.git
cd SVG-image-filter

# Open directly in the browser
# No dependencies or server required
```

Simply open the `index.html` file in your favorite web browser.


## Main files

### `index.html`
- Complete HTML structure with DOCTYPE, meta tags, and links  
- Interface controls: file upload, filter selector, color picker  
- SVG definitions for both halftone filters  
- Preview image with applicable filters  

### `script.js`
- Event handling for file uploads  
- Real-time color change control  
- Dynamic application of SVG filters  
- DOM management for interactive elements  

### `styles.css`
- Modern styles with `oklch()` for colors  
- Responsive image layout  
- Basic typography and spacing  

## Usage

1. **Open the app**: Open `index.html` in your browser  
2. **Select image**: Use the "Choose file" button to upload an image  
3. **Apply filter**: Select between "None", "half-tone", or "half-tone-hd"  
4. **Customize color**: Use the color picker to change the effect tone  
5. **View result**: The effect is applied instantly to the image  
