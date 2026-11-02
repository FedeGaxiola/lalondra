// src/palettes.js
// Elige una de las 5 paletas al azar en cada visita y la aplica en <body data-palette>.
// Para probar una en concreto: agrega #rosa, #inrainbows, #stoneroses, #angles o #definitelymaybe a la URL.

export const PALETTES = ['rosa', 'inrainbows', 'stoneroses', 'angles', 'definitelymaybe'];

function rng(seed) {
  return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
}

// Mancha irregular: un círculo deformado con varias ondas
function blobPath(g, cx, cy, r, rnd, wobble) {
  const n = 48, k = [rnd() * 6, rnd() * 6, rnd() * 6];
  g.beginPath();
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = r * (1 + wobble * (Math.sin(a * 3 + k[0]) * .5 + Math.sin(a * 5 + k[1]) * .3 + Math.sin(a * 9 + k[2]) * .2));
    const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
    if (i) g.lineTo(x, y); else g.moveTo(x, y);
  }
  g.closePath();
}

// In Rainbows: remolinos de cera sobre negro, con borde turquesa, interior azul noche,
// rocío rojo anaranjado con algo de magenta, brillos amarillos difusos, gotas sueltas y polvo dorado
function wax() {
  const W = 900, H = 1500, cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d'), rnd = rng(2007);
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
  g.fillStyle = '#0A0A0C'; g.fillRect(0, 0, W, H);

  function swirl(cx, cy, R, a0, a1, maxTh, so) {
    const N = 200, P = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N, a = a0 + (a1 - a0) * t;
      const w = 1 + .04 * Math.sin(a * 3 + so) + .025 * Math.sin(a * 7 + so);
      P.push({ a, R: R * w, th: maxTh * Math.pow(Math.sin(Math.PI * t), .6) });
    }
    const pt = (p, r) => [cx + Math.cos(p.a) * r, cy + Math.sin(p.a) * r];
    const path = (off, dr = 0) => {
      g.beginPath();
      P.forEach((p, i) => { const [x, y] = pt(p, p.R - p.th * off + dr); if (i) g.lineTo(x, y); else g.moveTo(x, y); });
    };
    // interior azul noche
    g.filter = 'blur(26px)';
    P.forEach(p => {
      const [x, y] = pt(p, p.R - p.th * .45);
      g.fillStyle = 'rgba(38,28,108,.14)'; g.beginPath(); g.arc(x, y, p.th * .55 + 10, 0, 7); g.fill();
    });
    // estelas magenta, rojo anaranjado y rosa
    g.filter = 'blur(14px)'; g.lineCap = 'round';
    for (const [off, col, lw] of [[.2, 'rgba(214,28,128,.42)', .16], [.48, 'rgba(240,72,24,.55)', .32], [.72, 'rgba(242,95,160,.35)', .12]]) {
      g.strokeStyle = col; g.lineWidth = maxTh * lw; path(off); g.stroke();
    }
    // rocío fino
    g.filter = 'none';
    const spray = ['236,58,28', '240,80,24', '228,36,40', '247,140,30', '255,196,40', '236,58,28', '214,28,128', '250,110,30'];
    for (let i = 0; i < 14000; i++) {
      const p = P[Math.floor(rnd() * N)];
      if (rnd() > p.th / maxTh) continue;
      const [x, y] = pt(p, p.R - p.th * (.1 + Math.pow(rnd(), 1.4) * .85));
      g.fillStyle = `rgba(${spray[Math.floor(rnd() * spray.length)]},${.25 + rnd() * .6})`;
      g.beginPath(); g.arc(x + gauss() * 8, y + gauss() * 8, .5 + Math.pow(rnd(), 3) * 2.4, 0, 7); g.fill();
    }
    // brillos amarillos y naranjas, alargados a lo largo del remolino
    g.filter = 'blur(12px)';
    for (let k = 0; k < 8; k++) {
      const p = P[Math.floor((.25 + rnd() * .5) * N)];
      const [x, y] = pt(p, p.R - p.th * (.55 + gauss() * .14));
      const r = p.th * (.14 + rnd() * .18), warm = rnd() < .65;
      const gr = g.createRadialGradient(x, y, 0, x, y, r * 1.6);
      gr.addColorStop(0, warm ? 'rgba(255,206,40,.95)' : 'rgba(250,120,170,.75)');
      gr.addColorStop(.45, warm ? 'rgba(252,168,18,.85)' : 'rgba(232,60,130,.6)');
      gr.addColorStop(.8, 'rgba(240,96,22,.4)');
      gr.addColorStop(1, 'rgba(240,96,22,0)');
      g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, r * 1.6, r * .9, p.a + Math.PI / 2, 0, 7); g.fill();
    }
    // borde turquesa difuso: un halo ancho, un trazo suave y un hilo claro tenue
    g.filter = 'blur(8px)';
    g.strokeStyle = 'rgba(30,150,200,.45)'; g.lineWidth = 26; path(0); g.stroke();
    g.filter = 'blur(3px)';
    g.strokeStyle = 'rgba(40,160,205,.6)'; g.lineWidth = 9; path(0); g.stroke();
    g.filter = 'blur(1.5px)';
    g.strokeStyle = 'rgba(150,220,240,.35)'; g.lineWidth = 3; path(0, -3); g.stroke();
    // gotas sólidas fuera del borde
    g.filter = 'blur(.6px)';
    for (let k = 0; k < 10; k++) {
      const p = P[Math.floor((.08 + rnd() * .84) * N)];
      const [x, y] = pt(p, p.R + 20 + rnd() * 55);
      g.fillStyle = rnd() < .6 ? 'rgba(236,190,40,.95)' : 'rgba(242,228,190,.9)';
      g.beginPath(); g.arc(x, y, 4 + rnd() * 11, 0, 7); g.fill();
    }
    // motas blancas dentro
    g.filter = 'none';
    for (let i = 0; i < 600; i++) {
      const p = P[Math.floor(rnd() * N)];
      const [x, y] = pt(p, p.R - p.th * rnd());
      g.fillStyle = `rgba(255,250,235,${.4 + rnd() * .5})`;
      g.beginPath(); g.arc(x, y, .5 + Math.pow(rnd(), 4) * 3, 0, 7); g.fill();
    }
  }

  swirl(W * 1.12, H * .27, W * .82, Math.PI * 1.32, Math.PI * .64, 360, 1);
  swirl(-W * .12, H * .82, W * .56, -Math.PI * .42, Math.PI * .42, 250, 4);
  // polvo dorado en todo el fondo
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = `rgba(${rnd() < .6 ? '240,215,150' : '255,250,240'},${.25 + rnd() * .6})`;
    g.beginPath(); g.arc(rnd() * W, rnd() * H, .4 + Math.pow(rnd(), 4) * 1.8, 0, 7); g.fill();
  }
  // velo oscuro ligero para que el texto encima se lea bien
  g.fillStyle = 'rgba(10,10,12,.22)'; g.fillRect(0, 0, W, H);
  return cv.toDataURL('image/jpeg', .88);
}

// The Stone Roses: goteo denso estilo Pollock, en mosaico sin costuras
function splatter() {
  const S = 560, cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const g = cv.getContext('2d'), rnd = rng(1989);
  g.fillStyle = '#E9E7DF'; g.fillRect(0, 0, S, S);
  const wrap = draw => { for (const dx of [-S, 0, S]) for (const dy of [-S, 0, S]) { g.save(); g.translate(dx, dy); draw(); g.restore(); } };
  // capas de color: verdes musgo, grises, oliva y ocre
  const patches = ['95,127,90', '124,150,112', '112,112,112', '150,150,150', '140,138,94', '176,144,80', '80,112,80', '200,200,196'];
  for (let i = 0; i < 90; i++) {
    const c = patches[Math.floor(rnd() * patches.length)], x = rnd() * S, y = rnd() * S, r = 8 + rnd() * 34, a = .45 + rnd() * .4;
    const seedA = rnd();
    rnd(); rnd(); // mantiene la misma secuencia aleatoria que el diseño original
    wrap(() => {
      const r2 = rng(Math.floor(seedA * 1e6) + 1);
      g.fillStyle = `rgba(${c},${a})`; blobPath(g, x, y, r, r2, .45); g.fill();
    });
  }
  // hilos de pintura: negros, grises oscuros y blancos
  const threads = [['20,20,20', .85], ['50,50,50', .8], ['245,245,240', .9], ['80,90,80', .7], ['245,245,240', .85]];
  for (let i = 0; i < 260; i++) {
    const [c, a] = threads[i % threads.length];
    const w = .5 + Math.pow(rnd(), 2) * 3.2;
    let x = rnd() * S, y = rnd() * S, ang = rnd() * Math.PI * 2;
    const pts = [[x, y]], steps = 12 + Math.floor(rnd() * 40);
    for (let k = 0; k < steps; k++) { ang += (rnd() - .5) * .9; x += Math.cos(ang) * 8; y += Math.sin(ang) * 8; pts.push([x, y]); }
    wrap(() => {
      g.strokeStyle = `rgba(${c},${a})`; g.lineWidth = w; g.lineCap = 'round'; g.lineJoin = 'round';
      g.beginPath(); pts.forEach(([px, py], j) => { if (j) g.lineTo(px, py); else g.moveTo(px, py); }); g.stroke();
    });
  }
  // salpicaduras finas
  for (let i = 0; i < 700; i++) {
    const [c] = threads[Math.floor(rnd() * threads.length)];
    const x = rnd() * S, y = rnd() * S, r = .5 + Math.pow(rnd(), 3) * 4;
    wrap(() => { g.fillStyle = `rgba(${c},.8)`; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); });
  }
  return cv.toDataURL('image/jpeg', .85);
}

export function pickPalette() {
  const fromHash = window.location.hash.slice(1);
  if (PALETTES.includes(fromHash)) return fromHash;
  return PALETTES[Math.floor(Math.random() * PALETTES.length)];
}

export function applyPalette(id) {
  const body = document.body;
  if (id === 'rosa') delete body.dataset.palette;
  else body.dataset.palette = id;

  // Los fondos pintados solo se generan para la paleta que los usa
  try {
    if (id === 'inrainbows') body.style.setProperty('--wax', `url(${wax()})`);
    if (id === 'stoneroses') body.style.setProperty('--splat', `url(${splatter()})`);
  } catch (e) {
    // Sin canvas (p. ej. en tests) queda el color de fondo liso
  }
}
