const input = document.querySelector("#ascii-input");
const output = document.querySelector("#ascii-output");
const status = document.querySelector("#ascii-status");
const generateButton = document.querySelector("#generate");
const sampleButton = document.querySelector("#sample");
const copyButton = document.querySelector("#copy");
const clearButton = document.querySelector("#clear");
const modeButtons = document.querySelectorAll("[data-mode]");
const textPanel = document.querySelector("#text-panel");
const imagePanel = document.querySelector("#image-panel");
const imageInput = document.querySelector("#image-input");
const imageWidth = document.querySelector("#image-width");
const charsetSelect = document.querySelector("#charset-select");
const invertOutput = document.querySelector("#invert-output");
const imageCanvas = document.querySelector("#image-canvas");

let activeMode = "text";
let loadedImage = null;

const glyphs = {
  A: ["  #  ", " # # ", "#####", "#   #", "#   #"],
  B: ["#### ", "#   #", "#### ", "#   #", "#### "],
  C: [" ####", "#    ", "#    ", "#    ", " ####"],
  D: ["#### ", "#   #", "#   #", "#   #", "#### "],
  E: ["#####", "#    ", "#### ", "#    ", "#####"],
  F: ["#####", "#    ", "#### ", "#    ", "#    "],
  G: [" ####", "#    ", "#  ##", "#   #", " ####"],
  H: ["#   #", "#   #", "#####", "#   #", "#   #"],
  I: ["#####", "  #  ", "  #  ", "  #  ", "#####"],
  J: ["#####", "   # ", "   # ", "#  # ", " ##  "],
  K: ["#   #", "#  # ", "###  ", "#  # ", "#   #"],
  L: ["#    ", "#    ", "#    ", "#    ", "#####"],
  M: ["#   #", "## ##", "# # #", "#   #", "#   #"],
  N: ["#   #", "##  #", "# # #", "#  ##", "#   #"],
  O: [" ### ", "#   #", "#   #", "#   #", " ### "],
  P: ["#### ", "#   #", "#### ", "#    ", "#    "],
  Q: [" ### ", "#   #", "#   #", "#  ##", " ####"],
  R: ["#### ", "#   #", "#### ", "#  # ", "#   #"],
  S: [" ####", "#    ", " ### ", "    #", "#### "],
  T: ["#####", "  #  ", "  #  ", "  #  ", "  #  "],
  U: ["#   #", "#   #", "#   #", "#   #", " ### "],
  V: ["#   #", "#   #", "#   #", " # # ", "  #  "],
  W: ["#   #", "#   #", "# # #", "## ##", "#   #"],
  X: ["#   #", " # # ", "  #  ", " # # ", "#   #"],
  Y: ["#   #", " # # ", "  #  ", "  #  ", "  #  "],
  Z: ["#####", "   # ", "  #  ", " #   ", "#####"],
  0: [" ### ", "#  ##", "# # #", "##  #", " ### "],
  1: ["  #  ", " ##  ", "  #  ", "  #  ", "#####"],
  2: [" ### ", "#   #", "   # ", "  #  ", "#####"],
  3: ["#### ", "    #", " ### ", "    #", "#### "],
  4: ["#   #", "#   #", "#####", "    #", "    #"],
  5: ["#####", "#    ", "#### ", "    #", "#### "],
  6: [" ####", "#    ", "#### ", "#   #", " ### "],
  7: ["#####", "   # ", "  #  ", " #   ", "#    "],
  8: [" ### ", "#   #", " ### ", "#   #", " ### "],
  9: [" ### ", "#   #", " ####", "    #", " ### "],
  ".": ["     ", "     ", "     ", "     ", "  #  "],
  "-": ["     ", "     ", "#####", "     ", "     "],
  "_": ["     ", "     ", "     ", "     ", "#####"],
  "/": ["    #", "   # ", "  #  ", " #   ", "#    "],
  ":": ["     ", "  #  ", "     ", "  #  ", "     "],
  " ": ["   ", "   ", "   ", "   ", "   "],
};

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function renderTextArt(text) {
  const normalized = text.toUpperCase().replace(/[^\x20-\x7E]/g, " ");
  const rows = ["", "", "", "", ""];

  for (const char of normalized) {
    const glyph = glyphs[char] || ["?????", "?   ?", "  ?? ", "     ", "  ?  "];
    for (let row = 0; row < rows.length; row += 1) {
      rows[row] += `${glyph[row]}  `;
    }
  }

  return rows.map((row) => row.trimEnd()).join("\n");
}

function renderImageArt(image) {
  const targetWidth = Math.max(24, Math.min(160, Number(imageWidth.value) || 80));
  const ratio = image.naturalHeight / image.naturalWidth;
  const targetHeight = Math.max(1, Math.round(targetWidth * ratio * 0.48));
  const context = imageCanvas.getContext("2d", { willReadFrequently: true });
  const charset = charsetSelect.value || "@%#*+=-:. ";
  const chars = invertOutput.checked ? Array.from(charset).reverse().join("") : charset;

  imageCanvas.width = targetWidth;
  imageCanvas.height = targetHeight;
  context.drawImage(image, 0, 0, targetWidth, targetHeight);

  const pixels = context.getImageData(0, 0, targetWidth, targetHeight).data;
  const rows = [];

  for (let y = 0; y < targetHeight; y += 1) {
    let row = "";
    for (let x = 0; x < targetWidth; x += 1) {
      const index = (y * targetWidth + x) * 4;
      const alpha = pixels[index + 3] / 255;
      const brightness = (pixels[index] * 0.299 + pixels[index + 1] * 0.587 + pixels[index + 2] * 0.114) * alpha + 255 * (1 - alpha);
      const charIndex = Math.min(chars.length - 1, Math.floor((brightness / 255) * (chars.length - 1)));
      row += chars[charIndex];
    }
    rows.push(row.trimEnd());
  }

  return rows.join("\n");
}

function setMode(mode) {
  activeMode = mode;
  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  textPanel.hidden = mode !== "text";
  imagePanel.hidden = mode !== "image";
  textPanel.classList.toggle("is-active", mode === "text");
  imagePanel.classList.toggle("is-active", mode === "image");
  status.textContent = message("결과가 여기에 표시됩니다.");
}

function generate() {
  if (activeMode === "image") {
    if (!loadedImage) {
      status.textContent = message("이미지를 선택하거나 테스트 예문을 생성하세요.");
      return;
    }
    output.textContent = renderImageArt(loadedImage);
    status.textContent = message("IMAGE2ART를 생성했습니다.");
    return;
  }

  const value = input.value.trim() || "WEB TOOL";
  output.textContent = renderTextArt(value);
  status.textContent = message("TEXT2ART를 생성했습니다.");
}

function loadImageFromSource(source) {
  const image = new Image();
  image.onload = () => {
    loadedImage = image;
    generate();
  };
  image.src = source;
}

function loadSampleImage() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 180;
  canvas.height = 110;
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#111827");
  gradient.addColorStop(0.5, "#22c55e");
  gradient.addColorStop(1, "#f8fafc");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(255,255,255,0.9)";
  context.beginPath();
  context.arc(58, 55, 28, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(15,23,42,0.85)";
  context.fillRect(105, 25, 46, 60);
  loadImageFromSource(canvas.toDataURL("image/png"));
}

modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));

generateButton.addEventListener("click", generate);
sampleButton.addEventListener("click", () => {
  if (activeMode === "image") {
    loadSampleImage();
    return;
  }
  input.value = "WEB TOOL";
  generate();
});
copyButton.addEventListener("click", () => {
  navigator.clipboard?.writeText(output.textContent);
});
clearButton.addEventListener("click", () => {
  input.value = "";
  imageInput.value = "";
  loadedImage = null;
  output.textContent = message("결과가 여기에 표시됩니다.");
  status.textContent = message("결과가 여기에 표시됩니다.");
});
imageInput.addEventListener("change", () => {
  const file = imageInput.files?.[0];
  if (!file) return;
  loadImageFromSource(URL.createObjectURL(file));
});
imageWidth.addEventListener("change", generate);
charsetSelect.addEventListener("change", generate);
invertOutput.addEventListener("change", generate);

generate();
