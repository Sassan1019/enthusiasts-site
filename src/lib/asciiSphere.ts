// Ported from the ENTHUSIASTS v4 design file's `_startAscii` canvas routine:
// a pseudo-3D sphere rendered as ASCII characters, shaded by hash-based fbm noise.
const PALETTE = ["rgba(70,100,160,0.55)", "rgba(92,130,190,0.85)", "#9FC2E8", "#E8F2FF"];
const RAMP = " ;:-=+xX80@#";

function hash3(x: number, y: number, z: number) {
  let n = (x | 0) * 374761393 + (y | 0) * 668265263 + (z | 0) * 1274126177;
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

function sm(t: number) {
  return t * t * (3 - 2 * t);
}

function noise3(x: number, y: number, z: number) {
  const xi = Math.floor(x),
    yi = Math.floor(y),
    zi = Math.floor(z);
  const xf = x - xi,
    yf = y - yi,
    zf = z - zi;
  const u = sm(xf),
    v = sm(yf),
    w = sm(zf);
  const c000 = hash3(xi, yi, zi),
    c100 = hash3(xi + 1, yi, zi);
  const c010 = hash3(xi, yi + 1, zi),
    c110 = hash3(xi + 1, yi + 1, zi);
  const c001 = hash3(xi, yi, zi + 1),
    c101 = hash3(xi + 1, yi, zi + 1);
  const c011 = hash3(xi, yi + 1, zi + 1),
    c111 = hash3(xi + 1, yi + 1, zi + 1);
  const x00 = c000 + (c100 - c000) * u,
    x10 = c010 + (c110 - c010) * u;
  const x01 = c001 + (c101 - c001) * u,
    x11 = c011 + (c111 - c011) * u;
  const y0 = x00 + (x10 - x00) * v,
    y1 = x01 + (x11 - x01) * v;
  return y0 + (y1 - y0) * w;
}

function fbm(x: number, y: number, z: number) {
  return (
    0.55 * noise3(x, y, z) +
    0.3 * noise3(x * 2.1, y * 2.1, z * 2.1) +
    0.15 * noise3(x * 4.3, y * 4.3, z * 4.3)
  );
}

export function startAsciiSphere(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let W = 0,
    H = 0,
    dpr = 1;

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = Math.max(1, Math.round(r.width * dpr));
    H = Math.max(1, Math.round(r.height * dpr));
    canvas.width = W;
    canvas.height = H;
  };
  resize();
  window.addEventListener("resize", resize);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let heroVis = true;
  const hio = new IntersectionObserver((ents) => {
    heroVis = ents[0].isIntersecting;
  }, { threshold: 0 });
  hio.observe(canvas);

  // gentle pointer parallax — the sphere leans a few pixels toward the cursor
  let tx = 0,
    ty = 0,
    ox = 0,
    oy = 0;
  const onPointer = (e: PointerEvent) => {
    tx = (e.clientX / window.innerWidth - 0.5) * 2;
    ty = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  if (!reducedMotion) window.addEventListener("pointermove", onPointer, { passive: true });

  let last = 0;
  let raf = 0;

  const render = (now: number) => {
    const cols = PALETTE;
    const a = now * 0.00008;
    const drift = now * 0.00002;
    ctx.clearRect(0, 0, W, H);
    const fs = 12 * dpr;
    ctx.font = fs + "px monospace";
    ctx.textBaseline = "top";
    const cw = 9 * dpr,
      ch = 15 * dpr;
    const nx = Math.ceil(W / cw),
      ny = Math.ceil(H / ch);
    ox += (tx - ox) * 0.04;
    oy += (ty - oy) * 0.04;
    const cx = W * 0.66 + ox * W * 0.018,
      cy = H * 0.5 + oy * H * 0.024;
    const R = Math.min(W, H) * 0.44;
    const cosA = Math.cos(a),
      sinA = Math.sin(a);
    for (let j = 0; j < ny; j++) {
      const py = j * ch + ch * 0.5;
      for (let i = 0; i < nx; i++) {
        const px = i * cw + cw * 0.5;
        const dx = (px - cx) / R,
          dy = (py - cy) / R;
        const r2 = dx * dx + dy * dy;
        if (r2 <= 1) {
          const z = Math.sqrt(1 - r2);
          const X = dx * cosA + z * sinA;
          const Z = -dx * sinA + z * cosA;
          let v = fbm(X * 2.2 + drift, dy * 2.2, Z * 2.2);
          v *= 0.3 + 0.75 * z;
          if (v > 0.24) {
            const t01 = Math.min(1, (v - 0.24) / 0.5);
            const chIdx = Math.min(RAMP.length - 1, 1 + Math.floor(t01 * (RAMP.length - 1)));
            ctx.fillStyle = t01 > 0.82 ? cols[3] : t01 > 0.58 ? cols[2] : t01 > 0.3 ? cols[1] : cols[0];
            ctx.fillText(RAMP[chIdx], px - cw * 0.5, py - ch * 0.5);
          }
        } else if (r2 < 3.4) {
          const h = hash3(i * 7 + 1, j * 13 + 5, 99);
          if (h > 0.982) {
            const fl = 0.5 + 0.5 * Math.sin(now * 0.001 + h * 60);
            ctx.fillStyle = "rgba(120,150,200," + (0.1 + 0.22 * fl).toFixed(3) + ")";
            ctx.fillText(h > 0.994 ? "+" : ";", px - cw * 0.5, py - ch * 0.5);
          }
        }
      }
    }
  };

  const draw = (now: number) => {
    raf = requestAnimationFrame(draw);
    if (!heroVis || now - last < 66) return;
    last = now;
    render(now);
  };

  if (reducedMotion) {
    // single still frame — the composition survives without the motion
    render(0);
  } else {
    raf = requestAnimationFrame(draw);
  }

  return () => {
    cancelAnimationFrame(raf);
    hio.disconnect();
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointer);
  };
}
