const plainInput = document.querySelector("#plain-input");
const encodedInput = document.querySelector("#encoded-input");
const status = document.querySelector("#url-status");
const spaceAsPlus = document.querySelector("#space-as-plus");
const swapButton = document.querySelector("#swap");
const sampleButton = document.querySelector("#sample");
const clearButton = document.querySelector("#clear");

let activeSide = "plain";

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

const samples = {
  ko: "안녕하세요 Web-Tool.Shop? q=한글 테스트&lang=ko",
  en: "Hello Web-Tool.Shop? q=english test&lang=en",
  ja: "こんにちは Web-Tool.Shop? q=日本語テスト&lang=ja",
  zh: "你好 Web-Tool.Shop? q=中文测试&lang=zh",
};

function encodeText(value) {
  const encoded = encodeURIComponent(value);
  return spaceAsPlus.checked ? encoded.replace(/%20/g, "+") : encoded;
}

function decodeText(value) {
  const normalized = spaceAsPlus.checked ? value.replace(/\+/g, "%20") : value;
  return decodeURIComponent(normalized);
}

function setStatus(text, isError = false) {
  status.textContent = message(text);
  status.dataset.state = isError ? "error" : "ok";
}

function syncFromPlain() {
  encodedInput.value = encodeText(plainInput.value);
  setStatus("URL 인코딩을 완료했습니다.");
}

function syncFromEncoded() {
  try {
    plainInput.value = decodeText(encodedInput.value);
    setStatus("URL 디코딩을 완료했습니다.");
  } catch (_) {
    setStatus("URL 인코딩 문자열이 올바르지 않습니다.", true);
  }
}

function sync() {
  if (activeSide === "encoded") syncFromEncoded();
  else syncFromPlain();
}

plainInput.addEventListener("input", () => {
  activeSide = "plain";
  syncFromPlain();
});
encodedInput.addEventListener("input", () => {
  activeSide = "encoded";
  syncFromEncoded();
});
spaceAsPlus.addEventListener("change", sync);
swapButton.addEventListener("click", () => {
  const plain = plainInput.value;
  plainInput.value = encodedInput.value;
  encodedInput.value = plain;
  activeSide = activeSide === "plain" ? "encoded" : "plain";
  setStatus("두 값을 서로 바꿨습니다.");
});
sampleButton.addEventListener("click", () => {
  activeSide = "plain";
  plainInput.value = localizedSample(samples);
  syncFromPlain();
  plainInput.focus();
});
clearButton.addEventListener("click", () => {
  plainInput.value = "";
  encodedInput.value = "";
  setStatus("결과가 여기에 표시됩니다.");
});

sampleButton.click();
