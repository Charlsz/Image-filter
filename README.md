# Image Filter

A browser-based image filter :)

## Features

- **Real-time SVG halftone filters**: Two filter styles (`half-tone` and `half-tone-hd`)
- **ASCII mode**: Converts images into text-based ASCII art in the browser
- **Color customization**: Color picker to adjust the effect tone
- **Client-side processing**: Runs entirely in the browser
- **Simple interface**: Upload an image, choose a filter, and preview the result instantly

## Usage

1. Open the app in your browser.
2. Select an image using the file picker.
3. Choose a filter: `None`, `half-tone`, `half-tone-hd`, or `ascii`.
4. Use the color picker to change the effect tone.
5. View the result instantly.

## How it works

The app uses two different approaches depending on the selected mode:

### Halftone filters
1. Luminance extraction: Converts the image to grayscale luminance values.
2. Threshold mapping: Splits luminance into 8 discrete levels.
3. Pattern generation: Applies circles of varying sizes based on brightness.
4. Final composition: Combines all levels to render the halftone effect.

### ASCII mode
1. The uploaded image is drawn to a hidden canvas.
2. Pixel brightness is sampled and converted to grayscale luminance.
3. Brightness is mapped to characters from a gradient string.
4. The result is rendered as ASCII text in the page.

## Filter types

- `half-tone`: 8x8 pixel grid with circles ranging from 0.5 to 4.0 radius.
- `half-tone-hd`: 4x4 pixel grid with circles ranging from 0.25 to 2.0 radius for higher detail.
- `ascii`: Converts the image into ASCII art text.

## Files

### `index.html`
- HTML structure and controls.
- SVG filter definitions.
- ASCII output container and hidden canvas.
- Preview image.

### `script.js`
- Handles file uploads.
- Applies SVG filters.
- Generates ASCII output with Canvas.
- Updates the effect color dynamically.

### `styles.css`
- Basic layout and spacing.
- Image display styles.
- ASCII output styling.

## No dependencies or server required.