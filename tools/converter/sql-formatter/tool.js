const input = document.querySelector("#sql-input");
const output = document.querySelector("#sql-output");
const status = document.querySelector("#sql-status");
const sampleButton = document.querySelector("#sample");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function formatSql(writeRepair = false) {
  const repaired = window.formatUtils.repairSql(input.value);
  const changed = repaired !== input.value;
  if (writeRepair) input.value = repaired;
  output.textContent = window.formatUtils.formatSql(input.value);
  status.textContent = changed ? message("자동 복구 후 정리했습니다.") : message("정리했습니다.");
}

sampleButton.addEventListener("click", () => {
  input.value = "select id,name,email from users where status = 'active order by created_at desc";
  formatSql(true);
  input.focus();
});
input.addEventListener("input", () => formatSql(true));

formatSql(true);
