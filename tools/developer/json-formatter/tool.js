const input = document.querySelector("#json-input");
const output = document.querySelector("#json-output");
const status = document.querySelector("#json-status");
const formatButton = document.querySelector("#format");
const repairButton = document.querySelector("#repair");
const minifyButton = document.querySelector("#minify");
const copyButton = document.querySelector("#copy");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function renderJson(space, writeRepair = false) {
  const result = window.formatUtils.parseJsonWithRepair(input.value);

  if (!result.value) {
    output.textContent = result.repaired || input.value;
    status.textContent = `${message("JSON 오류:")} ${result.error.message}`;
    return;
  }

  if (writeRepair) input.value = result.repaired;
  output.textContent = JSON.stringify(result.value, null, space);
  status.textContent = result.changed ? message("자동 복구 후 정리했습니다.") : message("유효한 형식입니다.");
}

formatButton.addEventListener("click", () => renderJson(2));
repairButton.addEventListener("click", () => renderJson(2, true));
minifyButton.addEventListener("click", () => renderJson(0));
copyButton.addEventListener("click", () => {
  navigator.clipboard?.writeText(output.textContent);
});

const sampleButton = document.querySelector("#sample");

sampleButton.addEventListener("click", () => {
  input.value = '{name:"Gadget Box", ready:true, items:["json","xml",';
  renderJson(2, true);
  input.focus();
});
