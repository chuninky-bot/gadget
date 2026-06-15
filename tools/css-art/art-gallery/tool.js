const effects = [
  ["Glowing border", "glow-border", ".glow-border { position: relative; border-radius: 16px; background: #111827; color: white; }\n.glow-border::before { content: \"\"; position: absolute; inset: -2px; z-index: -1; border-radius: inherit; background: linear-gradient(90deg,#22c55e,#3b82f6,#ec4899,#22c55e); background-size: 300%; animation: glow 3s linear infinite; }\n@keyframes glow { to { background-position: 300% 0; } }"],
  ["Wavy background", "wave-bg", ".wave-bg { background: radial-gradient(circle at 20% 20%,#60a5fa,transparent 30%), radial-gradient(circle at 80% 30%,#f472b6,transparent 30%), #111827; animation: wave 6s ease-in-out infinite alternate; }\n@keyframes wave { from { background-position: 0 0, 0 0; } to { background-position: 40px 30px, -30px 40px; } }"],
  ["Frosted glass", "frosted-glass", ".frosted-glass { background: rgba(255,255,255,.24); backdrop-filter: blur(18px); border: 1px solid rgba(255,255,255,.38); box-shadow: 0 20px 60px rgba(15,23,42,.2); }"],
  ["Neon text", "neon-text", ".neon-text { color: #fff; text-shadow: 0 0 6px #22d3ee, 0 0 18px #2563eb, 0 0 36px #7c3aed; }"],
  ["Scan lines", "scan-lines", ".scan-lines { background: repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 2px, transparent 2px 6px), #111827; }"],
  ["Grain card", "grain-card", ".grain-card { background: linear-gradient(135deg,#f8fafc,#e2e8f0); position: relative; overflow: hidden; }\n.grain-card::after { content:\"\"; position:absolute; inset:0; opacity:.18; background-image: radial-gradient(#0f172a 1px, transparent 1px); background-size: 6px 6px; }"],
];

const grid = document.querySelector("#art-grid");
grid.innerHTML = effects.map((effect) => `<article class="art-card"><div class="art-demo ${effect[1]}"><span>${effect[0]}</span></div><h2>${effect[0]}</h2><pre>${effect[2]}</pre></article>`).join("");
