const input = document.querySelector("#sql-input");
const output = document.querySelector("#sql-output");
const status = document.querySelector("#sql-status");
const formatButton = document.querySelector("#format");
const repairButton = document.querySelector("#repair");
const copyButton = document.querySelector("#copy");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function formatSql(writeRepair = false) {
  const repaired = window.formatUtils.repairSql(input.value);
  if (writeRepair) input.value = repaired;
  output.textContent = window.formatUtils.formatSql(input.value);
  status.textContent = repaired !== input.value ? message("자동 복구 후 정리했습니다.") : message("정리했습니다.");
}

formatButton.addEventListener("click", () => formatSql(false));
repairButton.addEventListener("click", () => formatSql(true));
copyButton.addEventListener("click", () => navigator.clipboard?.writeText(output.textContent));

const sampleButton = document.querySelector("#sample");

sampleButton.addEventListener("click", () => {
  input.value = "select id,name,email from users where status = 'active order by created_at desc";
  formatSql(true);
  input.focus();
});
