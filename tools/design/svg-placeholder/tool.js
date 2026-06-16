const widthInput = document.querySelector("#w");
const heightInput = document.querySelector("#h");
const textInput = document.querySelector("#txt");
const output = document.querySelector("#css-output");
const preview = document.querySelector("#svg-preview");

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

const textDefaults = {
  ko: "임시 이미지",
  en: "Placeholder",
  ja: "仮画像",
  zh: "占位图",
};

function escapeSvg(text) {
  return text.replace(/[&<>]/g, (match) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[match]));
}

function render() {
  const width = Number(widthInput.value) || 640;
  const height = Number(heightInput.value) || 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="32">${escapeSvg(textInput.value)}</text></svg>`;
  preview.innerHTML = svg;
  output.textContent = svg;
}

if (!textInput.value || textInput.value === "640 x 360") {
  textInput.value = localizedSample(textDefaults);
}

document.querySelectorAll("input").forEach((input) => input.addEventListener("input", render));
render();
