const source = document.querySelector("#source");
const chars = document.querySelector("#chars");
const charsNoSpace = document.querySelector("#chars-no-space");
const words = document.querySelector("#words");
const lines = document.querySelector("#lines");
const clear = document.querySelector("#clear");
const sample = document.querySelector("#sample");

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

const samples = {
  ko: "Web-Tool.Shop 테스트 예문입니다.\n브라우저에서 바로 글자 수, 단어 수, 줄 수를 확인합니다.",
  en: "This is a Web-Tool.Shop sample.\nCheck characters, words, and lines directly in your browser.",
  ja: "Web-Tool.Shopのサンプル文です。\nブラウザーで文字数、単語数、行数をすぐに確認できます。",
  zh: "这是 Web-Tool.Shop 示例文本。\n可直接在浏览器中查看字符数、单词数和行数。",
};

function updateStats() {
  const value = source.value;
  const trimmed = value.trim();

  chars.textContent = String(value.length);
  charsNoSpace.textContent = String(value.replace(/\s/g, "").length);
  words.textContent = trimmed ? String(trimmed.split(/\s+/).length) : "0";
  lines.textContent = value ? String(value.split(/\r\n|\r|\n/).length) : "0";
}

source.addEventListener("input", updateStats);
clear.addEventListener("click", () => {
  source.value = "";
  updateStats();
  source.focus();
});

sample.addEventListener("click", () => {
  source.value = localizedSample(samples);
  updateStats();
  source.focus();
});
