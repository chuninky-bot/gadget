const txt = document.querySelector("#txt");
const bg = document.querySelector("#bg");
const fg = document.querySelector("#fg");
const radius = document.querySelector("#r");
const preview = document.querySelector("#badge-preview");
const output = document.querySelector("#css-output");

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
  ko: "웹 도구",
  en: "Web-Tool",
  ja: "Webツール",
  zh: "网页工具",
};

function escapeSvg(text) {
  return text.replace(/[&<>]/g, (match) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[match]));
}

function render() {
  const width = Math.max(90, Array.from(txt.value).length * 12 + 36);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="34"><rect width="${width}" height="34" rx="${radius.value}" fill="${bg.value}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fg.value}" font-family="Arial, sans-serif" font-size="15" font-weight="700">${escapeSvg(txt.value)}</text></svg>`;
  preview.innerHTML = svg;
  output.textContent = svg;
}

if (!txt.value || txt.value === "Web-Tool") {
  txt.value = localizedSample(textDefaults);
}

document.querySelectorAll("input").forEach((input) => input.addEventListener("input", render));
render();
