const input = document.querySelector("#ascii-input");
const output = document.querySelector("#ascii-output");
const status = document.querySelector("#ascii-status");
const sampleButton = document.querySelector("#sample");
const clearButton = document.querySelector("#clear");
const modeButtons = document.querySelectorAll("[data-mode]");
const textPanel = document.querySelector("#text-panel");
const imagePanel = document.querySelector("#image-panel");
const imageInput = document.querySelector("#image-input");
const artWidth = document.querySelector("#art-width");
const widthValue = document.querySelector("#width-value");
const styleSelect = document.querySelector("#art-style");
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
  ",": ["     ", "     ", "     ", "  #  ", " #   "],
  "!": ["  #  ", "  #  ", "  #  ", "     ", "  #  "],
  "?": [" ### ", "#   #", "   # ", "     ", "  #  "],
  "-": ["     ", "     ", "#####", "     ", "     "],
  "_": ["     ", "     ", "     ", "     ", "#####"],
  "/": ["    #", "   # ", "  #  ", " #   ", "#    "],
  ":": ["     ", "  #  ", "     ", "  #  ", "     "],
  " ": ["   ", "   ", "   ", "   ", "   "],
};

const styleDefinitions = [
  ["classic", "Classic #", "#", 2, "none"],
  ["solid", "Solid █", "█", 2, "none"],
  ["shade", "Shade ▓", "▓", 2, "none"],
  ["light", "Light ░", "░", 2, "none"],
  ["star", "Stars *", "*", 2, "none"],
  ["dot", "Dots ·", "·", 2, "none"],
  ["plus", "Plus +", "+", 2, "none"],
  ["at", "At @", "@", 2, "none"],
  ["money", "Money $", "$", 2, "none"],
  ["slash", "Slash /", "/", 2, "none"],
  ["backslash", "Backslash \\", "\\", 2, "none"],
  ["pipe", "Pipe |", "|", 2, "none"],
  ["wide", "Wide", "#", 4, "none"],
  ["tight", "Tight", "#", 1, "none"],
  ["shadow", "Shadow", "#", 2, "shadow"],
  ["double-shadow", "Double Shadow", "#", 2, "doubleShadow"],
  ["outline", "Outline", "#", 2, "outline"],
  ["box", "Boxed", "#", 2, "box"],
  ["round-box", "Rounded Box", "#", 2, "roundBox"],
  ["bracket", "Bracket", "#", 2, "bracket"],
  ["underline", "Underline", "#", 2, "underline"],
  ["overline", "Overline", "#", 2, "overline"],
  ["banner", "Banner", "#", 2, "banner"],
  ["matrix", "Matrix", "1", 1, "matrix"],
  ["binary", "Binary", "1", 1, "binary"],
  ["wave", "Wave", "~", 2, "none"],
  ["spark", "Spark", "*", 2, "spark"],
  ["neon", "Neon", "▓", 2, "neon"],
  ["retro", "Retro", "■", 2, "none"],
  ["minimal", "Minimal", ".", 1, "none"],
  ["dense", "Dense", "M", 1, "none"],
  ["hollow", "Hollow", "□", 2, "none"],
  ["checker", "Checker", "#", 1, "checker"],
  ["code", "Code", "0", 1, "code"],
  ["stamp", "Stamp", "#", 2, "stamp"],
  ["skyline", "Skyline", "█", 1, "skyline"],
  ["laser", "Laser", "=", 1, "none"],
  ["terminal", "Terminal", ">", 1, "terminal"],
  ["bubble", "Bubble", "o", 2, "bubble"],
  ["heavy", "Heavy", "▓", 1, "heavy"],
];

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function currentLanguage() {
  const queryLocale = new URLSearchParams(window.location.search).get("locale");
  const locale = String(queryLocale || window.gadgetLanguage || "ko").toLowerCase();
  if (locale.startsWith("en")) return "en";
  if (locale.startsWith("ja")) return "ja";
  if (locale.startsWith("zh")) return "zh";
  return "ko";
}

function localizedSample(samples) {
  return samples[currentLanguage()] || samples.ko;
}

const textSamples = {
  ko: "WEB TOOL",
  en: "WEB TOOL",
  ja: "ASCII ART",
  zh: "WEB TOOL",
};

function populateStyles() {
  styleSelect.replaceChildren(...styleDefinitions.map(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }));
}

function currentStyle() {
  return styleDefinitions.find(([value]) => value === styleSelect.value) || styleDefinitions[0];
}

function mapRows(rows, fill, effect) {
  let mapped = rows.map((row, rowIndex) => row.replace(/#/g, (_, index) => {
    if (effect === "checker") return (rowIndex + index) % 2 ? fill : " ";
    if (effect === "binary") return (rowIndex + index) % 2 ? "1" : "0";
    if (effect === "matrix") return (rowIndex + index) % 3 ? "1" : "0";
    if (effect === "spark") return (rowIndex + index) % 4 ? fill : "+";
    if (effect === "code") return (rowIndex + index) % 2 ? "1" : "0";
    return fill;
  }));

  if (effect === "shadow") mapped = mapped.map((row) => `${row}  ░`);
  if (effect === "doubleShadow") mapped = mapped.map((row) => `${row}  ░▒`);
  if (effect === "outline") mapped = mapped.map((row) => row.replace(new RegExp(`\\${fill}`, "g"), "□"));
  if (effect === "neon") mapped = mapped.map((row) => row.replace(new RegExp(`\\${fill}`, "g"), "◆"));
  if (effect === "heavy") mapped = mapped.map((row) => row.replace(new RegExp(`\\${fill}`, "g"), "██"));
  if (effect === "bubble") mapped = mapped.map((row) => row.replace(new RegExp(`\\${fill}`, "g"), "●"));
  if (effect === "skyline") mapped = mapped.map((row, index) => index === mapped.length - 1 ? row.replace(/ /g, "▄") : row);
  if (effect === "terminal") mapped = mapped.map((row) => `> ${row}`);
  if (effect === "stamp") mapped = mapped.map((row) => row.toUpperCase());
  if (effect === "underline") mapped.push("=".repeat(Math.max(...mapped.map((row) => row.length))));
  if (effect === "overline") mapped.unshift("=".repeat(Math.max(...mapped.map((row) => row.length))));
  if (effect === "banner") {
    const width = Math.max(...mapped.map((row) => row.length));
    mapped = ["=".repeat(width), ...mapped, "=".repeat(width)];
  }
  if (effect === "box" || effect === "roundBox" || effect === "bracket") {
    const width = Math.max(...mapped.map((row) => row.length));
    const padded = mapped.map((row) => row.padEnd(width, " "));
    if (effect === "box") mapped = [`+${"-".repeat(width + 2)}+`, ...padded.map((row) => `| ${row} |`), `+${"-".repeat(width + 2)}+`];
    if (effect === "roundBox") mapped = [`╭${"─".repeat(width + 2)}╮`, ...padded.map((row) => `│ ${row} │`), `╰${"─".repeat(width + 2)}╯`];
    if (effect === "bracket") mapped = padded.map((row) => `[ ${row} ]`);
  }
  return mapped;
}

function renderTextArt(text) {
  const [, , fill, spacing, effect] = currentStyle();
  const normalized = text.toUpperCase().replace(/[^\x20-\x7E]/g, " ");
  const rows = ["", "", "", "", ""];

  for (const char of normalized) {
    const glyph = glyphs[char] || ["#####", "#   ", "###  ", "#    ", "#####"];
    for (let row = 0; row < rows.length; row += 1) {
      rows[row] += `${glyph[row]}${" ".repeat(spacing)}`;
    }
  }

  return mapRows(rows.map((row) => row.trimEnd()), fill, effect).join("\n");
}

function renderImageArt(image) {
  const targetWidth = Math.max(24, Math.min(220, Number(artWidth.value) || 96));
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
  render();
}

function render() {
  widthValue.textContent = artWidth.value;
  if (activeMode === "image") {
    if (!loadedImage) {
      output.textContent = message("이미지를 선택하거나 테스트 예문을 생성하세요.");
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
    render();
  };
  image.src = source;
}

function loadSampleImage() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 220;
  canvas.height = 140;
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#111827");
  gradient.addColorStop(0.45, "#22c55e");
  gradient.addColorStop(1, "#f8fafc");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(255,255,255,0.9)";
  context.beginPath();
  context.arc(70, 70, 34, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(15,23,42,0.85)";
  context.fillRect(130, 35, 52, 70);
  loadImageFromSource(canvas.toDataURL("image/png"));
}

populateStyles();

modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
input.addEventListener("input", render);
artWidth.addEventListener("input", render);
styleSelect.addEventListener("change", render);
charsetSelect.addEventListener("change", render);
invertOutput.addEventListener("change", render);
imageInput.addEventListener("change", () => {
  const file = imageInput.files?.[0];
  if (!file) return;
  loadImageFromSource(URL.createObjectURL(file));
});
sampleButton.addEventListener("click", () => {
  if (activeMode === "image") {
    loadSampleImage();
    return;
  }
  input.value = localizedSample(textSamples);
  render();
});
clearButton.addEventListener("click", () => {
  input.value = "";
  imageInput.value = "";
  loadedImage = null;
  output.textContent = message("결과가 여기에 표시됩니다.");
  status.textContent = message("입력하면 자동으로 변환됩니다.");
});

render();
