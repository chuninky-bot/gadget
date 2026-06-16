const effects = [
  ["Glowing border", "glow-border", ".glow-border { position: relative; isolation: isolate; overflow: hidden; border-radius: 16px; background: #111827; color: white; }\n.glow-border::before { content: \"\"; position: absolute; inset: 0; z-index: 0; border-radius: inherit; background: conic-gradient(from 0deg,#22d3ee,#a78bfa,#f472b6,#facc15,#22d3ee); filter: blur(12px); animation: glow 3s linear infinite; }\n.glow-border::after { content: \"\"; position: absolute; inset: 7px; z-index: 1; border-radius: 10px; background: #111827; }\n.glow-border > * { position: relative; z-index: 2; }\n@keyframes glow { to { transform: rotate(1turn); } }"],
  ["Wavy background", "wave-bg", ".wave-bg { position: relative; overflow: hidden; background: radial-gradient(circle at 18% 18%,rgba(96,165,250,.92),transparent 28%), radial-gradient(circle at 82% 28%,rgba(244,114,182,.82),transparent 30%), linear-gradient(135deg,#0f172a,#312e81 58%,#111827); }\n.wave-bg::before { content: \"\"; position: absolute; width: 58px; aspect-ratio: 1; left: 20px; top: 42px; border-radius: 999px; background: radial-gradient(circle at 32% 28%,#fff,#7dd3fc 22%,#2563eb 54%,#1e1b4b 100%); animation: wave 6s ease-in-out infinite alternate; }\n@keyframes wave { from { transform: translate3d(0,0,0) scale(.92); } to { transform: translate3d(86px,-18px,0) scale(1.08); } }"],
  ["Frosted glass", "frosted-glass", ".frosted-glass { display: grid; place-items: center; background: radial-gradient(circle at 22% 24%,#fb7185 0 16%,transparent 17%), radial-gradient(circle at 78% 28%,#38bdf8 0 18%,transparent 19%), linear-gradient(135deg,#312e81,#0f172a); }\n.frosted-glass > * { padding: 24px 36px; border: 1px solid rgba(255,255,255,.42); border-radius: 16px; background: rgba(255,255,255,.22); backdrop-filter: blur(18px) saturate(150%); box-shadow: 0 20px 60px rgba(15,23,42,.32); color: white; }"],
  ["Neon text", "neon-text", ".neon-text { color: #fff; text-shadow: 0 0 6px #22d3ee, 0 0 18px #2563eb, 0 0 36px #7c3aed; }"],
  ["Scan lines", "scan-lines", ".scan-lines { background: repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 2px, transparent 2px 6px), #111827; }"],
  ["Grain card", "grain-card", ".grain-card { background: linear-gradient(135deg,#f8fafc,#e2e8f0); position: relative; overflow: hidden; }\n.grain-card::after { content:\"\"; position:absolute; inset:0; opacity:.18; background-image: radial-gradient(#0f172a 1px, transparent 1px); background-size: 6px 6px; }"],
];

const grid = document.querySelector("#art-grid");

function message(key) {
  return window.gadgetTranslate ? window.gadgetTranslate(key) : key;
}

function renderEffects() {
  grid.innerHTML = effects.map((effect) => {
    const title = message(effect[0]);
    return `<article class="art-card"><div class="art-demo ${effect[1]}"><span>${title}</span></div><h2>${title}</h2><pre>${effect[2]}</pre></article>`;
  }).join("");
}

window.addEventListener("gadget:languagechange", renderEffects);
renderEffects();
