const output = document.querySelector("#uuid-output");
const generateButton = document.querySelector("#generate");
const copyButton = document.querySelector("#copy");

function fallbackUuid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (char) =>
    (Number(char) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(char) / 4)))).toString(16)
  );
}

function generateUuid() {
  output.textContent = crypto.randomUUID ? crypto.randomUUID() : fallbackUuid();
}

generateButton.addEventListener("click", generateUuid);
copyButton.addEventListener("click", () => {
  navigator.clipboard?.writeText(output.textContent);
});

generateUuid();

const sampleButton = document.querySelector("#sample");

sampleButton.addEventListener("click", () => {
  output.textContent = "123e4567-e89b-42d3-a456-426614174000";
});
