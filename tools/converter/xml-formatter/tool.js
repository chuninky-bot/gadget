const input = document.querySelector("#xml-input");
const output = document.querySelector("#xml-output");
const status = document.querySelector("#xml-status");
const sampleButton = document.querySelector("#sample");

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
  ko: "<note priority=high><to>사용자</to><message>안녕하세요 & 환영합니다",
  en: "<note priority=high><to>User</to><message>Hello & welcome",
  ja: "<note priority=high><to>ユーザー</to><message>こんにちは & ようこそ",
  zh: "<note priority=high><to>用户</to><message>你好 & 欢迎",
};

function formatXml(writeRepair = false) {
  const result = window.formatUtils.formatXml(input.value);
  if (writeRepair) input.value = result.repaired;
  output.textContent = result.output;
  status.textContent = result.error ? `${message("XML 오류:")} ${result.error}` : (result.changed ? message("자동 복구 후 정리했습니다.") : message("유효한 형식입니다."));
}

sampleButton.addEventListener("click", () => {
  input.value = localizedSample(samples);
  formatXml(true);
  input.focus();
});
input.addEventListener("input", () => formatXml(true));

formatXml(true);
