const card = document.querySelector("#glass-card");
const output = document.querySelector("#css-output");

function render() {
  const blurValue = Number(blur.value);
  const alpha = Number(alpha.value) / 100;
  const borderAlpha = Number(border.value) / 100;

  card.style.backdropFilter = `blur(${blurValue}px)`;
  card.style.background = `rgba(255,255,255,${alpha})`;
  card.style.borderColor = `rgba(255,255,255,${borderAlpha})`;
  output.textContent = [
    `background: rgba(255,255,255,${alpha});`,
    `backdrop-filter: blur(${blurValue}px);`,
    `border: 1px solid rgba(255,255,255,${borderAlpha});`,
  ].join("\n");
}

document.querySelectorAll("input").forEach((input) => input.addEventListener("input", render));
render();
