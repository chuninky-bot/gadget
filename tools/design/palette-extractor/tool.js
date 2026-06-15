const context = canvas.getContext("2d");
const palette = document.querySelector("#palette");
const output = document.querySelector("#css-output");

function toHex(r, g, b) {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

file.addEventListener("change", () => {
  const selected = file.files[0];
  if (!selected) return;

  const image = new Image();
  image.onload = () => {
    canvas.width = 120;
    canvas.height = Math.max(1, Math.round((120 * image.naturalHeight) / image.naturalWidth));
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const counts = new Map();
    for (let index = 0; index < data.length; index += 16) {
      const key = toHex(data[index] & 240, data[index + 1] & 240, data[index + 2] & 240);
      counts.set(key, (counts.get(key) || 0) + 1);
    }

    const colors = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map((entry) => entry[0]);
    palette.innerHTML = colors.map((color) => `<button class="palette-swatch" style="background:${color}" type="button">${color}</button>`).join("");
    output.textContent = colors.join("\n");
    document.querySelectorAll(".palette-swatch").forEach((button) => button.addEventListener("click", () => navigator.clipboard?.writeText(button.textContent)));
  };
  image.src = URL.createObjectURL(selected);
});
