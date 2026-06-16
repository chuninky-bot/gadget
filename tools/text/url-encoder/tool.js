const input = document.querySelector("#plain-input");
const output = document.querySelector("#encoded-input");
const status = document.querySelector("#url-status");
const spaceAsPlus = document.querySelector("#space-as-plus");
const sampleButton = document.querySelector("#sample");
const clearButton = document.querySelector("#clear");

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

function setStatus(text, isError = false) {
  status.textContent = message(text);
  status.dataset.state = isError ? "error" : "ok";
}

function encodeText(value) {
  const encoded = encodeURIComponent(value);
  return spaceAsPlus.checked ? encoded.replace(/%20/g, "+") : encoded;
}

function decodeText(value) {
  const normalized = spaceAsPlus.checked ? value.replace(/\+/g, "%20") : value;
  return decodeURIComponent(normalized);
}

function looksUrlEncoded(value) {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (/%[0-9a-f]{2}/i.test(trimmed)) return true;
  return spaceAsPlus.checked && trimmed.includes("+") && !trimmed.includes(" ");
}

function convert() {
  const value = input.value;
  if (!value) {
    output.value = "";
    setStatus("결과가 여기에 표시됩니다.");
    return;
  }

  if (!looksUrlEncoded(value)) {
    output.value = encodeText(value);
    setStatus("입력 문자를 URL 인코딩했습니다.");
    return;
  }

  try {
    output.value = decodeText(value);
    setStatus("URL 인코딩을 일반문자로 디코딩했습니다.");
  } catch (_) {
    output.value = "";
    setStatus("URL 인코딩 문자열이 올바르지 않습니다.", true);
  }
}

input.addEventListener("input", convert);
spaceAsPlus.addEventListener("change", convert);
sampleButton.addEventListener("click", () => {
  input.value = localizedSample(samples);
  convert();
  input.focus();
});
clearButton.addEventListener("click", () => {
  input.value = "";
  output.value = "";
  setStatus("결과가 여기에 표시됩니다.");
});

sampleButton.click();
