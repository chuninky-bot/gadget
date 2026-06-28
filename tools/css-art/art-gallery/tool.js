const categories = [
  ["Text effects", "Text motion, hover reveal, and headline styles."],
  ["Background effects", "Animated patterns and ambient CSS backgrounds."],
  ["3D and shape effects", "Perspective, polygon, and depth-based CSS experiments."],
  ["Card and surface effects", "Borders, glass, texture, and layered surface ideas."],
  ["Interactive accents", "Hover-ready details for buttons and small UI moments."],
];

const filters = [
  ["all", "All"],
  ["text", "Text"],
  ["background", "Background"],
  ["interaction", "Interaction"],
  ["motion", "Motion"],
  ["3d", "3D"],
  ["polygon", "Polygon"],
  ["hover", "Hover"],
  ["glass", "Glass"],
  ["pattern", "Pattern"],
];

const effects = [
  {
    category: "Card and surface effects",
    title: "Glowing border",
    className: "glow-border",
    code: `.glow-border {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 16px;
  background: #111827;
  color: white;
}
.glow-border::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  background: conic-gradient(from 0deg, #22d3ee, #a78bfa, #f472b6, #facc15, #22d3ee);
  filter: blur(12px);
  animation: glow 3s linear infinite;
}
.glow-border::after {
  content: "";
  position: absolute;
  inset: 7px;
  z-index: 1;
  border-radius: 10px;
  background: #111827;
}
.glow-border > * {
  position: relative;
  z-index: 2;
}
@keyframes glow {
  to { transform: rotate(1turn); }
}`,
  },
  {
    category: "Background effects",
    title: "Wavy background",
    className: "wave-bg",
    code: `.wave-bg {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 18%, rgba(96,165,250,.92), transparent 28%),
    radial-gradient(circle at 82% 28%, rgba(244,114,182,.82), transparent 30%),
    linear-gradient(135deg, #0f172a, #312e81 58%, #111827);
}
.wave-bg::before {
  content: "";
  position: absolute;
  width: 58px;
  aspect-ratio: 1;
  left: 20px;
  top: 42px;
  border-radius: 999px;
  background: radial-gradient(circle at 32% 28%, #fff, #7dd3fc 22%, #2563eb 54%, #1e1b4b 100%);
  animation: wave 6s ease-in-out infinite alternate;
}
@keyframes wave {
  from { transform: translate3d(0, 0, 0) scale(.92); }
  to { transform: translate3d(86px, -18px, 0) scale(1.08); }
}`,
  },
  {
    category: "Card and surface effects",
    title: "Frosted glass",
    className: "frosted-glass",
    code: `.frosted-glass {
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 22% 24%, #fb7185 0 16%, transparent 17%),
    radial-gradient(circle at 78% 28%, #38bdf8 0 18%, transparent 19%),
    linear-gradient(135deg, #312e81, #0f172a);
}
.frosted-glass > * {
  padding: 24px 36px;
  border: 1px solid rgba(255,255,255,.42);
  border-radius: 16px;
  background: rgba(255,255,255,.22);
  backdrop-filter: blur(18px) saturate(150%);
  box-shadow: 0 20px 60px rgba(15,23,42,.32);
  color: white;
}`,
  },
  {
    category: "Text effects",
    title: "Neon text",
    className: "neon-text",
    code: `.neon-text {
  color: #fff;
  text-shadow:
    0 0 6px #22d3ee,
    0 0 18px #2563eb,
    0 0 36px #7c3aed;
}`,
  },
  {
    category: "Background effects",
    title: "Scan lines",
    className: "scan-lines",
    code: `.scan-lines {
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 2px, transparent 2px 6px),
    #111827;
}`,
  },
  {
    category: "Card and surface effects",
    title: "Grain card",
    className: "grain-card",
    code: `.grain-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}
.grain-card::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .18;
  background-image: radial-gradient(#0f172a 1px, transparent 1px);
  background-size: 6px 6px;
}`,
  },
  {
    category: "Text effects",
    title: "Wavy text",
    className: "text-wave",
    code: `.text-wave span {
  display: inline-block;
  animation: textWave 1.8s ease-in-out infinite;
  text-shadow: 0 14px 22px rgba(0, 0, 0, .28);
}
@keyframes textWave {
  0%, 100% { transform: translateY(0) skewX(0deg); }
  50% { transform: translateY(-10px) skewX(-8deg); }
}`,
  },
  {
    category: "Text effects",
    title: "Focus reveal text",
    className: "focus-reveal",
    code: `.focus-reveal span {
  filter: blur(5px);
  opacity: .52;
  letter-spacing: .06em;
  transition: filter .28s ease, opacity .28s ease, letter-spacing .28s ease;
}
.focus-reveal:hover span {
  filter: blur(0);
  opacity: 1;
  letter-spacing: 0;
}`,
  },
  {
    category: "Text effects",
    title: "Gradient shine text",
    className: "gradient-shine",
    code: `.gradient-shine span {
  color: transparent;
  background: linear-gradient(90deg, #f8fafc, #22d3ee, #f472b6, #f8fafc);
  background-size: 240% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shineText 3s linear infinite;
}
@keyframes shineText {
  to { background-position: -240% 0; }
}`,
  },
  {
    category: "Text effects",
    title: "Type cursor",
    className: "type-cursor",
    code: `.type-cursor span::after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 6px;
  background: currentColor;
  vertical-align: -0.14em;
  animation: cursorBlink .85s step-end infinite;
}
@keyframes cursorBlink {
  50% { opacity: 0; }
}`,
  },
  {
    category: "Background effects",
    title: "Aurora background",
    className: "aurora-bg",
    code: `.aurora-bg {
  background:
    linear-gradient(120deg, rgba(20,184,166,.72), transparent 34%),
    linear-gradient(240deg, rgba(244,114,182,.72), transparent 38%),
    linear-gradient(135deg, #111827, #172554);
  background-size: 180% 180%;
  animation: auroraMove 7s ease-in-out infinite alternate;
}
@keyframes auroraMove {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}`,
  },
  {
    category: "Background effects",
    title: "Mesh gradient",
    className: "mesh-gradient",
    code: `.mesh-gradient {
  background:
    radial-gradient(circle at 20% 30%, #fb7185 0 18%, transparent 31%),
    radial-gradient(circle at 76% 24%, #38bdf8 0 20%, transparent 32%),
    radial-gradient(circle at 48% 82%, #facc15 0 18%, transparent 30%),
    #312e81;
  animation: meshDrift 8s ease-in-out infinite alternate;
}
@keyframes meshDrift {
  to { filter: hue-rotate(28deg) saturate(1.18); }
}`,
  },
  {
    category: "Background effects",
    title: "Dot matrix",
    className: "dot-matrix",
    code: `.dot-matrix {
  background:
    radial-gradient(circle, rgba(255,255,255,.42) 1px, transparent 1.5px),
    linear-gradient(135deg, #111827, #0f766e);
  background-size: 14px 14px, auto;
}
.dot-matrix::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, transparent 0 28%, rgba(15,23,42,.72) 70%);
}`,
  },
  {
    category: "Card and surface effects",
    title: "Holographic card",
    className: "holo-card",
    code: `.holo-card {
  background: linear-gradient(135deg, #111827, #1f2937);
}
.holo-card::before {
  content: "";
  position: absolute;
  inset: -45%;
  background: conic-gradient(from 90deg, #22d3ee, #f472b6, #facc15, #22c55e, #22d3ee);
  opacity: .32;
  animation: holoSpin 4.8s linear infinite;
}
@keyframes holoSpin {
  to { transform: rotate(1turn); }
}`,
  },
  {
    category: "Card and surface effects",
    title: "Paper cut layers",
    className: "paper-cut",
    code: `.paper-cut {
  color: #334155;
  background: #f8fafc;
  box-shadow:
    inset 12px 12px 0 #e0f2fe,
    inset -12px -12px 0 #ffe4e6,
    0 18px 34px rgba(15,23,42,.14);
}
.paper-cut span {
  color: #0f172a;
}`,
  },
  {
    category: "Interactive accents",
    title: "3D tilt card",
    className: "tilt-card-3d",
    tags: ["3d", "interaction", "hover"],
    code: `.tilt-card-3d {
  perspective: 900px;
  background: linear-gradient(135deg, #082f49, #312e81);
}
.tilt-card-3d span {
  padding: 22px 30px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,255,255,.36));
  color: #0f172a;
  box-shadow: 0 24px 50px rgba(15,23,42,.34);
  transform: rotateX(12deg) rotateY(-18deg);
  transition: transform .28s ease;
}
.tilt-card-3d:hover span {
  transform: rotateX(-8deg) rotateY(16deg) translateY(-4px);
}`,
  },
  {
    category: "3D and shape effects",
    title: "Rotating CSS cube",
    className: "css-cube-demo",
    tags: ["3d", "motion"],
    demoHtml: `<div class="css-cube"><i></i><i></i><i></i><i></i></div>`,
    code: `.css-cube-demo {
  perspective: 720px;
  background: radial-gradient(circle, #1e3a8a, #020617 72%);
}
.css-cube {
  width: 70px;
  aspect-ratio: 1;
  position: relative;
  transform-style: preserve-3d;
  animation: cubeSpin 5s linear infinite;
}
.css-cube i {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255,255,255,.44);
  background: rgba(56,189,248,.22);
  box-shadow: inset 0 0 22px rgba(255,255,255,.18);
}
@keyframes cubeSpin {
  to { transform: rotateX(1turn) rotateY(1turn); }
}`,
  },
  {
    category: "3D and shape effects",
    title: "Flip panel",
    className: "flip-panel-3d",
    tags: ["3d", "interaction", "hover"],
    code: `.flip-panel-3d {
  perspective: 900px;
  background: linear-gradient(135deg, #0f172a, #155e75);
}
.flip-panel-3d span {
  display: grid;
  place-items: center;
  width: 150px;
  height: 84px;
  border-radius: 12px;
  background: #f8fafc;
  color: #0f172a;
  transform-style: preserve-3d;
  transition: transform .45s ease;
}
.flip-panel-3d:hover span {
  transform: rotateY(180deg);
}`,
  },
  {
    category: "3D and shape effects",
    title: "Polygon morph slider",
    className: "polygon-morph",
    tags: ["polygon", "interaction", "motion"],
    control: { label: "Polygon sides", min: 3, max: 12, value: 6 },
    code: `.polygon-morph {
  --poly-path: 50% 4%, 93% 25%, 93% 75%, 50% 96%, 7% 75%, 7% 25%;
  background: linear-gradient(135deg, #0f172a, #064e3b);
}
.polygon-morph::before {
  content: "";
  width: 112px;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #facc15, #22d3ee);
  clip-path: polygon(var(--poly-path));
  transition: clip-path .2s ease;
}`,
  },
  {
    category: "3D and shape effects",
    title: "Perspective grid",
    className: "perspective-grid",
    tags: ["3d", "background", "motion", "pattern"],
    code: `.perspective-grid {
  background: #020617;
}
.perspective-grid::before {
  content: "";
  position: absolute;
  inset: 18px -20px -36px;
  background:
    linear-gradient(rgba(34,211,238,.26) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,211,238,.26) 1px, transparent 1px);
  background-size: 24px 24px;
  transform: perspective(220px) rotateX(58deg);
  animation: gridSlide 2.8s linear infinite;
}
@keyframes gridSlide {
  to { background-position: 0 24px, 24px 0; }
}`,
  },
  {
    category: "3D and shape effects",
    title: "Layered prisms",
    className: "layered-prisms",
    tags: ["3d", "polygon", "pattern"],
    code: `.layered-prisms {
  background: linear-gradient(135deg, #111827, #312e81);
}
.layered-prisms::before,
.layered-prisms::after {
  content: "";
  position: absolute;
  width: 108px;
  aspect-ratio: 1;
  clip-path: polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%);
  transform: rotateX(58deg) rotateZ(28deg);
}
.layered-prisms::before { background: rgba(34,211,238,.74); }
.layered-prisms::after { background: rgba(244,114,182,.58); transform: translate(24px, 16px) rotateX(58deg) rotateZ(28deg); }`,
  },
  {
    category: "Interactive accents",
    title: "Magnetic hover button",
    className: "magnetic-button",
    tags: ["interaction", "hover"],
    code: `.magnetic-button span {
  padding: 14px 24px;
  border-radius: 999px;
  background: #f8fafc;
  color: #111827;
  box-shadow: 0 14px 26px rgba(15,23,42,.28);
  transition: transform .22s ease, box-shadow .22s ease;
}
.magnetic-button:hover span {
  transform: translateY(-5px) scale(1.04);
  box-shadow: 0 20px 36px rgba(15,23,42,.36);
}`,
  },
];

const grid = document.querySelector("#art-grid");
let activeFilter = "all";

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getEffectTags(effect) {
  const detected = [];
  if (/animation|transition|transform/i.test(effect.code)) detected.push("motion");
  if (/:hover/i.test(effect.code)) detected.push("hover", "interaction");
  if (/perspective|rotateX|rotateY|translateZ|transform-style/i.test(effect.code)) detected.push("3d");
  if (/polygon|clip-path/i.test(effect.code)) detected.push("polygon");
  if (/radial-gradient|repeating-linear-gradient|background-size/i.test(effect.code)) detected.push("pattern");

  const base = [
    effect.category,
    effect.title,
    effect.className,
    ...(effect.tags || []),
    ...detected,
  ].join(" ").toLowerCase();
  return base;
}

function matchesFilter(effect) {
  if (activeFilter === "all") return true;
  return getEffectTags(effect).includes(activeFilter);
}

function polygonPath(sides) {
  const points = [];
  for (let index = 0; index < sides; index += 1) {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / sides;
    const x = 50 + Math.cos(angle) * 46;
    const y = 50 + Math.sin(angle) * 46;
    points.push(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  }
  return points.join(", ");
}

function renderCard(effect) {
  const title = message(effect.title);
  const demo = effect.demoHtml || `<span>${escapeHtml(title)}</span>`;
  const control = effect.control
    ? `<label class="art-control">${escapeHtml(message(effect.control.label))}<input type="range" min="${effect.control.min}" max="${effect.control.max}" value="${effect.control.value}" data-art-control="${effect.className}"><output>${effect.control.value}</output></label>`
    : "";
  return `<article class="art-card"><div class="art-demo ${effect.className}">${demo}</div>${control}<h3>${escapeHtml(title)}</h3><pre>${escapeHtml(effect.code)}</pre></article>`;
}

function renderFilters() {
  return `<div class="art-filters" role="list">${filters.map(([key, label]) => {
    const active = key === activeFilter ? " is-active" : "";
    return `<button class="art-filter${active}" type="button" data-filter="${key}" role="listitem">${escapeHtml(message(label))}</button>`;
  }).join("")}</div>`;
}

function renderEffects() {
  const content = categories.map(([category, description]) => {
    const cards = effects
      .filter(matchesFilter)
      .filter((effect) => effect.category === category)
      .map(renderCard)
      .join("");

    if (!cards) return "";
    return `<section class="art-category"><div class="art-category-heading"><h2>${escapeHtml(message(category))}</h2><p>${escapeHtml(message(description))}</p></div><div class="art-grid">${cards}</div></section>`;
  }).join("");

  grid.innerHTML = `${renderFilters()}${content || `<p class="status-line">${escapeHtml(message("No CSS art effects found."))}</p>`}`;
  bindInteractions();
}

function bindInteractions() {
  if (!grid.querySelectorAll) return;

  grid.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderEffects();
    });
  });

  grid.querySelectorAll("[data-art-control='polygon-morph']").forEach((input) => {
    const demo = input.closest(".art-card")?.querySelector(".polygon-morph");
    const output = input.parentElement?.querySelector("output");
    const update = () => {
      const sides = Number(input.value);
      if (demo) demo.style.setProperty("--poly-path", polygonPath(sides));
      if (output) output.textContent = String(sides);
    };
    input.addEventListener("input", update);
    update();
  });
}

window.addEventListener("gadget:languagechange", renderEffects);
renderEffects();
