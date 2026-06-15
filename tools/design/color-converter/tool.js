const hex = document.querySelector("#hex");
const preview = document.querySelector("#color-preview");
const output = document.querySelector("#css-output");

function convert() {
  let value = hex.value.replace("#", "");
  if (value.length === 3) value = value.split("").map((item) => item + item).join("");

  const numeric = parseInt(value, 16);
  if (Number.isNaN(numeric)) return;

  const r = (numeric >> 16) & 255;
  const g = (numeric >> 8) & 255;
  const b = numeric & 255;
  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  let s = 0;

  if (d) {
    s = d / (1 - Math.abs(2 * l - 1));
    h = max === r ? ((g - b) / 255 / d) % 6 : max === g ? (b - r) / 255 / d + 2 : (r - g) / 255 / d + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  preview.style.background = `#${value}`;
  output.textContent = [
    `HEX: #${value.toUpperCase()}`,
    `RGB: rgb(${r}, ${g}, ${b})`,
    `HSL: hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`,
  ].join("\n");
}

hex.addEventListener("input", convert);
convert();
