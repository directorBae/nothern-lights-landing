// Northern Lights — starfield + constellation rendering
(function () {
  let densityFactor = 1;

  function placeStars(container, count, opts = {}) {
    container.innerHTML = "";
    const { minSize = 1, maxSize = 2.4, region = null } = opts;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      const size = minSize + Math.random() * (maxSize - minSize);
      const x = region ? region.x + Math.random() * region.w : Math.random() * 100;
      const y = region ? region.y + Math.random() * region.h : Math.random() * 100;
      const op = 0.35 + Math.random() * 0.6;
      const delay = Math.random() * 4;
      const dur = 3 + Math.random() * 4;
      s.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;opacity:${op};animation-delay:${delay}s;animation-duration:${dur}s;`;
      container.appendChild(s);
    }
  }

  function renderConstellation(svg) {
    if (!svg) return;
    // Pre-defined constellation points around Polaris (top-right area)
    // Loosely inspired by Ursa Minor (Little Dipper, which contains Polaris)
    const points = [
      { x: 78, y: 22, r: 4, polaris: true },   // Polaris (north star) — handled separately
      { x: 70, y: 30, r: 1.6 },
      { x: 64, y: 38, r: 1.4 },
      { x: 60, y: 46, r: 1.8 },
      { x: 56, y: 50, r: 1.6 },
      { x: 64, y: 54, r: 1.6 },
      { x: 70, y: 58, r: 2.0 },
    ];
    // Lines: connect path 0→1→2→3→4→5→6
    const lines = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]];

    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");

    let html = "";
    lines.forEach(([a,b]) => {
      const p1 = points[a], p2 = points[b];
      html += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="rgba(255,210,127,0.18)" stroke-width="0.08" stroke-dasharray="0.4 0.6" vector-effect="non-scaling-stroke"/>`;
    });
    points.forEach((p, i) => {
      if (p.polaris) return; // skip; rendered separately as Polaris
      html += `<circle cx="${p.x}" cy="${p.y}" r="${p.r * 0.18}" fill="#F4ECD8" opacity="0.9"/>`;
      html += `<circle cx="${p.x}" cy="${p.y}" r="${p.r * 0.5}" fill="rgba(244,236,216,0.15)"/>`;
    });
    svg.innerHTML = html;
  }

  function init() {
    const skyfield = document.querySelector(".nl-stars");
    if (skyfield) placeStars(skyfield, Math.round(120 * densityFactor));

    const c = document.querySelector(".nl-constellation");
    if (c) renderConstellation(c);

    // Other section stars (subtle)
    document.querySelectorAll(".nl-section-stars").forEach((el) => {
      placeStars(el, Math.round(30 * densityFactor), { maxSize: 1.6 });
    });
  }

  window.NL_setStarDensity = function (count) {
    const skyfield = document.querySelector(".nl-stars");
    if (skyfield) placeStars(skyfield, count);
    document.querySelectorAll(".nl-section-stars").forEach((el) => {
      placeStars(el, Math.round(count * 0.25), { maxSize: 1.6 });
    });
  };

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
