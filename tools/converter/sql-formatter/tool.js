const input = document.querySelector("#sql-input");
const output = document.querySelector("#sql-output");
const status = document.querySelector("#sql-status");
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
  ko: "select id,name,email from users where status = '활성 order by created_at desc",
  en: "select id,name,email from users where status = 'active order by created_at desc",
  ja: "select id,name,email from users where status = '有効 order by created_at desc",
  zh: "select id,name,email from users where status = '启用 order by created_at desc",
};

function formatSql(writeRepair = false) {
  if (!input.value.trim()) {
    output.textContent = message("결과가 여기에 표시됩니다.");
    status.textContent = message("결과가 여기에 표시됩니다.");
    return;
  }

  const repaired = window.formatUtils.repairSql(input.value);
  const changed = repaired !== input.value;
  if (writeRepair) input.value = repaired;
  output.textContent = window.formatUtils.formatSql(input.value);
  status.textContent = changed ? message("자동 복구 후 정리했습니다.") : message("정리했습니다.");
}

sampleButton.addEventListener("click", () => {
  input.value = localizedSample(samples);
  formatSql(true);
  input.focus();
});
input.addEventListener("input", () => formatSql(true));

formatSql(true);
