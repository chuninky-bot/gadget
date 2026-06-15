const source = document.querySelector("#source");
const chars = document.querySelector("#chars");
const charsNoSpace = document.querySelector("#chars-no-space");
const words = document.querySelector("#words");
const lines = document.querySelector("#lines");
const clear = document.querySelector("#clear");

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

const sample = document.querySelector("#sample");

sample.addEventListener("click", () => {
  source.value = "Web-Tool.Shop 테스트 예문입니다.\n브라우저에서 바로 글자 수, 단어 수, 줄 수를 확인합니다.";
  updateStats();
  source.focus();
});
