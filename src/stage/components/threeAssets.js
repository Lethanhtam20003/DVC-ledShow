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
/**
 * Procedural Dong Son (Ngoc Lu) bronze drum face texture in golden filigree style
 * with transparent background so motifs float cleanly in 3D space.
 * Bands from center outward: 16-point Sun Star -> comb/circle bands ->
 * ceremonial figures -> marching deer/birds -> 12 flying Lac birds -> multi-ring outer rim.
 */
export function createDongSonFaceTexture(primary, secondary, accent) {
  const size = 2048;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const cx = size / 2;
  const cy = size / 2;

  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.translate(cx, cy);

  const goldBright = accent || '#fde047';
  const goldMain = primary || '#f5c542';
  const goldDeep = '#d97706';

  const drawRing = (r, width, color = goldMain, alpha = 0.95) => {
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.globalAlpha = alpha;
    ctx.stroke();
  };

  // 1. Central 16-point radiant Sun Star + chevron fills between rays
  const starPoints = 16;
  const outerStarR = 235;
  const innerStarR = 88;
  ctx.fillStyle = goldBright;
  ctx.globalAlpha = 0.96;
  ctx.beginPath();
  for (let i = 0; i < starPoints * 2; i++) {
    const r = i % 2 === 0 ? outerStarR : innerStarR;
    const a = (i / (starPoints * 2)) * Math.PI * 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();

  // Hollow inner sun ring & center medallion
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(0, 0, 62, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
  drawRing(64, 6, goldBright, 0.95);
  drawRing(44, 4, goldMain, 0.8);

  // V-shaped chevron fills between star rays
  ctx.strokeStyle = goldMain;
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.85;
  for (let i = 0; i < starPoints; i++) {
    const a = ((i + 0.5) / starPoints) * Math.PI * 2;
    ctx.save();
    ctx.rotate(a);
    ctx.beginPath();
    ctx.moveTo(145, -16);
    ctx.lineTo(185, 0);
    ctx.lineTo(145, 16);
    ctx.moveTo(175, -14);
    ctx.lineTo(212, 0);
    ctx.lineTo(175, 14);
    ctx.stroke();
    ctx.restore();
  }

  // 2. Inner concentric rings + radial comb-teeth + tangential circle-dots
  drawRing(252, 7, goldBright);
  drawRing(272, 4, goldMain);

  // Radial comb-tooth band (r = 276..312)
  ctx.strokeStyle = goldMain;
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.88;
  for (let i = 0; i < 120; i++) {
    const a = (i / 120) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * 276, Math.sin(a) * 276);
    ctx.lineTo(Math.cos(a) * 312, Math.sin(a) * 312);
    ctx.stroke();
  }
  drawRing(316, 5, goldBright);

  // Tangential circle-dot band (r = 320..366)
  ctx.strokeStyle = goldBright;
  ctx.fillStyle = goldMain;
  ctx.lineWidth = 3.5;
  for (let i = 0; i < 48; i++) {
    const a = (i / 48) * Math.PI * 2;
    const rx = Math.cos(a) * 343;
    const ry = Math.sin(a) * 343;
    ctx.beginPath();
    ctx.arc(rx, ry, 14, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(rx, ry, 4.5, 0, Math.PI * 2);
    ctx.fill();
  }
  drawRing(370, 6, goldMain);
  drawRing(386, 4, goldBright);

  // 3. Ceremonial figures & feathered dancers / pavilion band (r = 398..520)
  const figCount = 24;
  for (let i = 0; i < figCount; i++) {
    const a = (i / figCount) * Math.PI * 2;
    ctx.save();
    ctx.rotate(a);
    ctx.fillStyle = i % 6 === 0 ? goldBright : goldMain;
    ctx.strokeStyle = goldBright;
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.92;

    if (i % 6 === 0) {
      // Stylized Dong Son stilt house / ceremonial pavilion
      ctx.beginPath();
      ctx.moveTo(410, -28);
      ctx.lineTo(495, -42);
      ctx.lineTo(508, 0);
      ctx.lineTo(495, 42);
      ctx.lineTo(410, 28);
      ctx.closePath();
      ctx.stroke();
      ctx.fillRect(425, -18, 46, 36);
    } else {
      // Feathered warrior / dancer silhouette
      ctx.beginPath();
      ctx.arc(482, 0, 11, 0, Math.PI * 2); // head
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(493, 0);
      ctx.lineTo(516, -24); // headdress plume 1
      ctx.moveTo(493, 0);
      ctx.lineTo(514, 18); // headdress plume 2
      ctx.moveTo(470, 0);
      ctx.lineTo(426, -14); // leg 1
      ctx.moveTo(470, 0);
      ctx.lineTo(424, 16); // leg 2
      ctx.moveTo(466, -18);
      ctx.lineTo(462, 22); // arms / spear
      ctx.stroke();
      ctx.fillRect(448, -9, 24, 18); // torso
    }
    ctx.restore();
  }

  drawRing(532, 6, goldBright);
  drawRing(546, 4, goldMain);

  // 4. Inner marching deer / short-wing birds band (r = 558..640)
  const innerBirds = 28;
  for (let i = 0; i < innerBirds; i++) {
    const a = (i / innerBirds) * Math.PI * 2;
    ctx.save();
    ctx.rotate(a);
    ctx.fillStyle = goldMain;
    ctx.strokeStyle = goldBright;
    ctx.lineWidth = 3.5;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.moveTo(600, -18);
    ctx.quadraticCurveTo(618, -2, 608, 12);
    ctx.lineTo(626, 20);
    ctx.lineTo(594, 22);
    ctx.quadraticCurveTo(574, 8, 568, -14);
    ctx.quadraticCurveTo(586, -4, 600, -18);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  drawRing(652, 7, goldBright);
  drawRing(668, 4, goldMain);

  // 5. Prominent Flying Lac Birds band (r = 684..825) matching reference outer band
  const lacBirds = 14;
  for (let i = 0; i < lacBirds; i++) {
    const a = (i / lacBirds) * Math.PI * 2;
    ctx.save();
    ctx.rotate(a);
    ctx.fillStyle = goldBright;
    ctx.strokeStyle = goldDeep;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.96;

    // Long-beaked Lac bird in flight (counter-clockwise)
    ctx.beginPath();
    ctx.moveTo(758, -56); // long pointed beak tip
    ctx.quadraticCurveTo(766, -24, 756, -4); // head & crest
    ctx.lineTo(784, -18); // head crest plume
    ctx.lineTo(760, 8);
    ctx.quadraticCurveTo(796, -4, 816, -34); // upper swept wing
    ctx.quadraticCurveTo(794, 20, 758, 32); // body to tail
    ctx.lineTo(776, 62); // tail plume 1
    ctx.lineTo(748, 38);
    ctx.lineTo(732, 60); // tail plume 2
    ctx.lineTo(736, 26);
    ctx.quadraticCurveTo(704, 14, 692, -24); // lower swept wing
    ctx.quadraticCurveTo(722, -6, 742, -6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  // 6. Outer multi-ringed golden rim with comb-tooth & sawtooth bands (r = 842..998)
  drawRing(842, 7, goldBright);
  drawRing(860, 5, goldMain);

  // Sawtooth band (r = 866..904)
  ctx.strokeStyle = goldBright;
  ctx.lineWidth = 4.5;
  ctx.globalAlpha = 0.92;
  ctx.beginPath();
  const outerTeeth = 96;
  for (let i = 0; i <= outerTeeth; i++) {
    const a = (i / outerTeeth) * Math.PI * 2;
    const r = i % 2 === 0 ? 868 : 902;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  drawRing(910, 6, goldMain);

  // Outer radial comb-tooth hatch (r = 916..958)
  ctx.strokeStyle = goldMain;
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.88;
  for (let i = 0; i < 180; i++) {
    const a = (i / 180) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * 916, Math.sin(a) * 916);
    ctx.lineTo(Math.cos(a) * 958, Math.sin(a) * 958);
    ctx.stroke();
  }

  drawRing(964, 7, goldBright);
  drawRing(984, 9, goldMain);
  drawRing(1002, 5, goldBright);

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

  // Subtle perspective grid lines
  const step = 64;
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.72;
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

  // Radiating royal sun-rays from center
  ctx.strokeStyle = primary;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.38;
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(half + Math.cos(a) * 60, half + Math.sin(a) * 60);
    ctx.lineTo(half + Math.cos(a) * 470, half + Math.sin(a) * 470);
    ctx.stroke();
  }

  // Highlighted concentric ceremonial rings
  ctx.strokeStyle = primary;
  [110, 195, 285, 375, 455].forEach((r, idx) => {
    ctx.lineWidth = idx % 2 === 0 ? 3 : 1.8;
    ctx.globalAlpha = idx % 2 === 0 ? 0.78 : 0.45;
    ctx.beginPath();
    ctx.arc(half, half, r, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

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
