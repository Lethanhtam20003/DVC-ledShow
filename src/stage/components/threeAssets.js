import * as THREE from 'three';

/**
 * Creates a soft radial glow sprite texture so WebGL Points render as smooth light motes
 * instead of hard square pixels.
 */
export function createGlowParticleTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.25, 'rgba(255, 255, 255, 0.85)');
  grad.addColorStop(0.55, 'rgba(255, 255, 255, 0.28)');
  grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Procedural Dong Son bronze drum face texture with 12-point Lac Viet star,
 * concentric geometric rings, sawtooth bands, and stylized Lac bird arcs.
 */
export function createDongSonFaceTexture(primary, secondary, accent) {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const cx = size / 2;
  const cy = size / 2;

  // Base metallic bronze-crimson radial gradient
  const bg = ctx.createRadialGradient(cx, cy, 20, cx, cy, size * 0.49);
  bg.addColorStop(0, accent);
  bg.addColorStop(0.18, primary);
  bg.addColorStop(0.55, secondary);
  bg.addColorStop(1, '#1a0406');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  // Concentric engraved rings
  const ringRadii = [110, 155, 210, 275, 345, 410, 465];
  ringRadii.forEach((r, idx) => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = idx % 2 === 0 ? accent : primary;
    ctx.lineWidth = idx % 2 === 0 ? 4 : 2.5;
    ctx.globalAlpha = 0.85;
    ctx.stroke();
  });

  // 12-point central Lac Viet Sun Star
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = accent;
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  const points = 12;
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? 115 : 44;
    const a = (i / (points * 2)) * Math.PI * 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();

  // Sawtooth geometric band
  ctx.strokeStyle = primary;
  ctx.lineWidth = 2.5;
  ctx.globalAlpha = 0.78;
  const teeth = 48;
  ctx.beginPath();
  for (let i = 0; i <= teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const r = i % 2 === 0 ? 235 : 258;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Stylized Lac bird motifs along outer band
  const birds = 8;
  for (let i = 0; i < birds; i++) {
    const a = (i / birds) * Math.PI * 2;
    ctx.save();
    ctx.rotate(a);
    ctx.strokeStyle = accent;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.88;
    ctx.beginPath();
    ctx.moveTo(300, -18);
    ctx.quadraticCurveTo(325, -4, 355, -24);
    ctx.moveTo(312, 0);
    ctx.quadraticCurveTo(335, 16, 365, -4);
    ctx.stroke();
    ctx.restore();
  }

  // Outer dot ring
  ctx.fillStyle = accent;
  ctx.globalAlpha = 0.85;
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(Math.cos(a) * 438, Math.sin(a) * 438, 4.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

/**
 * Procedural glowing skyscraper window facade texture for Smart City buildings.
 */
export function createBuildingFacadeTexture(primary, accent) {
  const width = 256;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#070b18';
  ctx.fillRect(0, 0, width, height);

  const cols = 8;
  const rows = 24;
  const padX = 8;
  const padY = 6;
  const cellW = (width - padX * 2) / cols;
  const cellH = (height - padY * 2) / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Deterministic pseudo-random pattern so facades look architectural
      const hash = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
      const frac = hash - Math.floor(hash);
      if (frac > 0.28) {
        ctx.fillStyle = frac > 0.82 ? accent : primary;
        ctx.globalAlpha = 0.35 + frac * 0.55;
        ctx.fillRect(
          padX + c * cellW + 3,
          padY + r * cellH + 3,
          cellW - 6,
          cellH - 6
        );
      }
    }
  }
  ctx.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

/**
 * Radial-faded glowing grid floor texture so stage floor blends smoothly into fog.
 */
export function createFloorGlowTexture(primary, gridColor) {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const half = size / 2;

  ctx.clearRect(0, 0, size, size);

  // Subtle concentric rings
  const step = 64;
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1.5;
  for (let x = 0; x <= size; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
    ctx.stroke();
  }
  for (let y = 0; y <= size; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
  }

  // Highlighted center energy rings
  ctx.strokeStyle = primary;
  ctx.lineWidth = 2;
  [140, 250, 360].forEach((r) => {
    ctx.beginPath();
    ctx.arc(half, half, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Radial alpha mask to fade edges smoothly
  ctx.globalCompositeOperation = 'destination-in';
  const mask = ctx.createRadialGradient(half, half, 40, half, half, half);
  mask.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
  mask.addColorStop(0.55, 'rgba(255, 255, 255, 0.35)');
  mask.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = mask;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
