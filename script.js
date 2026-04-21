const preview = document.getElementById("preview");
const upload = document.getElementById("upload");
const color = document.getElementById("color");
const filterSelect = document.getElementById("filter-select");
const flood = document.getElementById("flood");
const floodHd = document.getElementById("floodHd");
const asciiOutput = document.getElementById("ascii-output");
const asciiCanvas = document.getElementById("ascii-canvas");
const asciiCtx = asciiCanvas.getContext("2d");

const chars = "@%#*+=-:. ";

upload.addEventListener("input", e => {
  const file = e.target.files[0];
  if (!file) return;
  preview.src = URL.createObjectURL(file);
});

preview.addEventListener("load", () => {
  if (filterSelect.value === "ascii") generateAscii();
});

color.addEventListener("input", () => {
  const val = color.value;
  flood.setAttribute("flood-color", val);
  floodHd.setAttribute("flood-color", val);
});

filterSelect.addEventListener("change", setFilter);

function setFilter() {
  const val = filterSelect.value;

  if (val === "ascii") {
    preview.style.display = "none";
    asciiOutput.style.display = "block";
    generateAscii();
    return;
  }

  preview.style.display = "block";
  asciiOutput.style.display = "none";
  preview.style.filter = val ? `url(#${val})` : "none";
}

function generateAscii() {
  if (!preview.complete || !preview.naturalWidth) return;

  const sourceWidth = preview.naturalWidth;
  const sourceHeight = preview.naturalHeight;

  const maxWidth = 300;
  const width = Math.min(sourceWidth, maxWidth);
  const scale = width / sourceWidth;
  const height = Math.max(1, Math.floor(sourceHeight * scale * 0.5));

  asciiCanvas.width = width;
  asciiCanvas.height = height;

  asciiCtx.drawImage(preview, 0, 0, width, height);
  const data = asciiCtx.getImageData(0, 0, width, height).data;

  let out = "";
  for (let y = 0; y < height; y++) {
    let row = "";
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      const idx = Math.floor((lum / 255) * (chars.length - 1));
      row += chars[idx];
    }
    out += row + "\n";
  }

  asciiOutput.textContent = out;
}

setFilter();