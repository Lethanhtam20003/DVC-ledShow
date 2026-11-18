import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { getPatternById } from '../../shared/patterns';
import {
  createBuildingFacadeTexture,
  createGlowParticleTexture,
} from './threeAssets';

const TEXTURE_KEYS = [
  'map',
  'normalMap',
  'roughnessMap',
  'metalnessMap',
  'emissiveMap',
  'aoMap',
  'bumpMap',
  'alphaMap',
  'lightMap',
  'envMap',
  'specularMap',
];

function disposeMaterial(mat) {
  if (!mat) return;
  TEXTURE_KEYS.forEach((key) => {
    if (mat[key] && typeof mat[key].dispose === 'function') {
      mat[key].dispose();
    }
  });
  mat.dispose();
}

function disposeObject3D(root) {
  if (!root) return;
  root.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach(disposeMaterial);
      } else {
        disposeMaterial(obj.material);
      }
    }
  });
}

function createCurvedPetalGeometry(length = 1.45, width = 0.44) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(width, length * 0.25, width * 0.86, length * 0.72, 0, length);
  shape.bezierCurveTo(-width * 0.86, length * 0.72, -width, length * 0.25, 0, 0);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelThickness: 0.018,
    bevelSize: 0.018,
    bevelSegments: 2,
    curveSegments: 14,
  });

  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const cupZ = -(y * y) * 0.12 + (x * x) * 0.22;
    pos.setZ(i, z + cupZ);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

function applyPlanarCenterUVs(
  geometry,
  fullRadius,
  centerU = 0.5,
  centerV = 0.5
) {
  const pos = geometry.attributes.position;
  const uv = geometry.attributes.uv;
  const diameter = fullRadius * 2;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    uv.setXY(i, centerU + x / diameter, centerV + y / diameter);
  }
  uv.needsUpdate = true;
  return geometry;
}

function createRoundedArcSegment(radius, tubeRadius, startAngle, arcAngle, material) {
  const arcGroup = new THREE.Group();
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(radius, tubeRadius, 18, 72, arcAngle),
    material
  );
  torus.rotation.z = startAngle;
  arcGroup.add(torus);

  const capGeo = new THREE.SphereGeometry(tubeRadius, 16, 16);
  const startCap = new THREE.Mesh(capGeo, material);
  startCap.position.set(
    Math.cos(startAngle) * radius,
    Math.sin(startAngle) * radius,
    0
  );
  const endAngle = startAngle + arcAngle;
  const endCap = new THREE.Mesh(capGeo, material);
  endCap.position.set(
    Math.cos(endAngle) * radius,
    Math.sin(endAngle) * radius,
    0
  );
  arcGroup.add(startCap, endCap);
  return arcGroup;
}

function buildCenterpiece(patternId, colors, disposableTextures) {
  const group = new THREE.Group();
  const primaryColor = new THREE.Color(colors.primary);
  const secondaryColor = new THREE.Color(colors.secondary);
  const accentColor = new THREE.Color(colors.accent);

  const wireMat = new THREE.MeshStandardMaterial({
    color: primaryColor,
    emissive: primaryColor,
    emissiveIntensity: 0.65,
    metalness: 0.85,
    roughness: 0.18,
    wireframe: true,
  });

  const solidGoldMat = new THREE.MeshStandardMaterial({
    color: primaryColor,
    emissive: secondaryColor,
    emissiveIntensity: 0.3,
    metalness: 0.94,
    roughness: 0.14,
  });

  const ringMat = new THREE.MeshBasicMaterial({
    color: accentColor,
    transparent: true,
    opacity: 0.85,
  });

  if (patternId === 'cdsqg-2026') {
    // Official 10.10.2026 National Digital Transformation Day Emblem & 3 Convergence Rings
    const loader = new THREE.TextureLoader();
    const logoTex = loader.load('./logo-cdsqg-2026.png');
    logoTex.colorSpace = THREE.SRGBColorSpace;
    logoTex.anisotropy = 8;
    disposableTextures.push(logoTex);

    const goldMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FBAB18'),
      emissive: new THREE.Color('#E65925'),
      emissiveIntensity: 0.45,
      metalness: 0.78,
      roughness: 0.18,
      clearcoat: 0.9,
    });

    const orangeMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#E65925'),
      emissive: new THREE.Color('#B5121B'),
      emissiveIntensity: 0.48,
      metalness: 0.72,
      roughness: 0.2,
      clearcoat: 0.85,
    });

    const crimsonMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#B5121B'),
      emissive: new THREE.Color('#7A0C12'),
      emissiveIntensity: 0.55,
      metalness: 0.68,
      roughness: 0.22,
      clearcoat: 0.9,
    });

    const emblemGroup = new THREE.Group();

    // Official 10.10.2026 logo material
    const logoFaceMat = new THREE.MeshStandardMaterial({
      map: logoTex,
      emissiveMap: logoTex,
      emissive: new THREE.Color('#FBAB18'),
      emissiveIntensity: 0.28,
      metalness: 0.18,
      roughness: 0.35,
      transparent: true,
      alphaTest: 0.03,
      side: THREE.FrontSide,
    });

    // Split at the exact transparent radial gap (410px / 900px) around the true
    // geometric center (893.3, 928.8) of the 1800x1800 logo texture
    const fullRadius = 1.42;
    const splitRadius = fullRadius * (410 / 900);
    const logoCenterU = 893.3 / 1800;
    const logoCenterV = 1 - 928.8 / 1800;

    // 1. Stationary upright central human figure
    const coreHumanGeo = applyPlanarCenterUVs(
      new THREE.CircleGeometry(splitRadius, 96),
      fullRadius,
      logoCenterU,
      logoCenterV
    );
    const coreHumanDisc = new THREE.Mesh(coreHumanGeo, logoFaceMat);

    // 2. Rotating 3 outer crescent blades of the logo
    const outerBladesGeo = applyPlanarCenterUVs(
      new THREE.RingGeometry(splitRadius, fullRadius, 128, 1),
      fullRadius,
      logoCenterU,
      logoCenterV
    );
    const outerBladesRing = new THREE.Mesh(outerBladesGeo, logoFaceMat);

    // Subtle outer golden frame ring completely outside the emblem blades
    const emblemFrameRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.56, 0.022, 18, 128),
      goldMat
    );

    emblemGroup.add(coreHumanDisc, outerBladesRing, emblemFrameRing);

    // 3 Concentric 3D Convergence Rings ("Vòng hội tụ": Kết quả -> Dữ liệu -> Nền tảng)
    const innerConvRing = new THREE.Group();
    innerConvRing.add(
      createRoundedArcSegment(1.94, 0.052, -0.38, Math.PI * 1.48, goldMat),
      createRoundedArcSegment(1.94, 0.044, Math.PI * 1.24, Math.PI * 0.22, orangeMat)
    );

    const midConvRing = new THREE.Group();
    midConvRing.add(
      createRoundedArcSegment(2.38, 0.055, -Math.PI * 0.48, Math.PI * 1.56, orangeMat),
      createRoundedArcSegment(2.38, 0.055, Math.PI * 0.78, Math.PI * 0.14, goldMat)
    );

    const outerConvRing = new THREE.Group();
    outerConvRing.add(
      createRoundedArcSegment(2.82, 0.05, -Math.PI * 0.65, Math.PI * 1.38, crimsonMat),
      createRoundedArcSegment(2.82, 0.046, Math.PI * 0.86, Math.PI * 0.36, orangeMat)
    );

    group.add(
      emblemGroup,
      innerConvRing,
      midConvRing,
      outerConvRing
    );
    group.userData = {
      emblemGroup,
      coreHumanDisc,
      outerBladesRing,
      emblemFrameRing,
      innerConvRing,
      midConvRing,
      outerConvRing,
    };
  } else if (patternId === 'dong-son') {
    // Load authentic high-res Ngoc Lu Dong Son drum texture from public/dong-son-drum.png
    const loader = new THREE.TextureLoader();
    const drumTex = loader.load('./dong-son-drum.png');
    drumTex.colorSpace = THREE.SRGBColorSpace;
    drumTex.anisotropy = 8;
    disposableTextures.push(drumTex);

    const outerRim = new THREE.Mesh(
      new THREE.TorusGeometry(2.7, 0.055, 24, 128),
      solidGoldMat
    );
    const outerBevel = new THREE.Mesh(
      new THREE.TorusGeometry(2.84, 0.018, 16, 128),
      ringMat
    );

    const drumFaceMat = new THREE.MeshStandardMaterial({
      map: drumTex,
      bumpMap: drumTex,
      bumpScale: 0.05,
      emissiveMap: drumTex,
      emissive: new THREE.Color('#ffd54f'),
      emissiveIntensity: 0.16,
      metalness: 0.12,
      roughness: 0.68,
      transparent: true,
      alphaTest: 0.04,
      side: THREE.DoubleSide,
    });
    const coreDisc = new THREE.Mesh(
      new THREE.CircleGeometry(2.68, 96),
      drumFaceMat
    );
    coreDisc.position.z = 0.02;

    // Outer sleek orbital ring framing the drum
    const orbitRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(3.22, 0.018, 16, 128),
      ringMat
    );
    orbitRing1.rotation.x = Math.PI / 3;

    group.add(outerRim, outerBevel, coreDisc, orbitRing1);
    group.userData = { coreDisc, orbitRing1, outerRim };
  } else if (patternId === 'holo-globe') {
    // Detailed 3D Hologram Digital Globe: wireframe + dotted data sphere + curved data arcs
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1.62, 32, 24),
      wireMat
    );
    const innerCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.12, 48, 48),
      new THREE.MeshPhysicalMaterial({
        color: secondaryColor,
        emissive: primaryColor,
        emissiveIntensity: 0.45,
        metalness: 0.15,
        roughness: 0.12,
        clearcoat: 1,
        transparent: true,
        opacity: 0.45,
      })
    );

    // Spherical surface data points
    const dotGeo = new THREE.BufferGeometry();
    const dotCount = 360;
    const dotPos = new Float32Array(dotCount * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < dotCount; i++) {
      const y = 1 - (i / (dotCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const r = 1.66;
      dotPos[i * 3] = Math.cos(theta) * radiusAtY * r;
      dotPos[i * 3 + 1] = y * r;
      dotPos[i * 3 + 2] = Math.sin(theta) * radiusAtY * r;
    }
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
    const dotTex = createGlowParticleTexture();
    disposableTextures.push(dotTex);
    const globeDots = new THREE.Points(
      dotGeo,
      new THREE.PointsMaterial({
        color: accentColor,
        map: dotTex,
        size: 0.11,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );

    // Curved data link arcs on globe surface
    const arcsGroup = new THREE.Group();
    const arcPairs = [
      [new THREE.Vector3(1.2, 0.8, 0.7), new THREE.Vector3(-1.1, 0.6, 1.0)],
      [new THREE.Vector3(-0.8, -0.9, 1.1), new THREE.Vector3(1.1, -0.4, -1.1)],
      [new THREE.Vector3(0.2, 1.4, -0.7), new THREE.Vector3(-1.3, -0.6, -0.7)],
    ];
    arcPairs.forEach(([start, end]) => {
      const mid = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(2.25);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 32, 0.018, 8, false),
        ringMat
      );
      arcsGroup.add(tube);
    });

    const eqRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.18, 0.024, 18, 128),
      ringMat
    );
    eqRing1.rotation.x = Math.PI / 2.4;

    const eqRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.44, 0.018, 18, 128),
      solidGoldMat
    );
    eqRing2.rotation.y = Math.PI / 3;
    eqRing2.rotation.x = -Math.PI / 5;

    // Orbiting satellite nodes
    const sat1 = new THREE.Mesh(new THREE.OctahedronGeometry(0.09, 0), ringMat);
    sat1.position.set(2.18, 0, 0);
    eqRing1.add(sat1);

    const sat2 = new THREE.Mesh(new THREE.OctahedronGeometry(0.08, 0), ringMat);
    sat2.position.set(-2.44, 0, 0);
    eqRing2.add(sat2);

    group.add(globe, innerCore, globeDots, arcsGroup, eqRing1, eqRing2);
    group.userData = { globe, globeDots, arcsGroup, eqRing1, eqRing2 };
  } else if (patternId === 'smart-city') {
    // Detailed 3D Smart City: tiered skyscrapers, illuminated window facades, spires & orbital drones
    const cityGroup = new THREE.Group();
    const facadeTex = createBuildingFacadeTexture(colors.primary, colors.accent);
    disposableTextures.push(facadeTex);

    const baseDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(2.55, 2.85, 0.16, 64),
      solidGoldMat
    );
    baseDisc.position.y = -1.1;
    const baseTrim = new THREE.Mesh(
      new THREE.TorusGeometry(2.68, 0.03, 16, 112),
      ringMat
    );
    baseTrim.rotation.x = Math.PI / 2;
    baseTrim.position.y = -1.03;
    cityGroup.add(baseDisc, baseTrim);

    const bldgMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      map: facadeTex,
      emissiveMap: facadeTex,
      emissive: primaryColor,
      emissiveIntensity: 0.72,
      metalness: 0.78,
      roughness: 0.22,
    });

    const towers = [
      { x: 0, z: 0, w: 0.62, h: 2.35, spire: true },
      { x: -0.88, z: 0.32, w: 0.44, h: 1.72, spire: true },
      { x: 0.88, z: -0.28, w: 0.46, h: 1.9, spire: true },
      { x: -0.5, z: -0.84, w: 0.4, h: 1.45 },
      { x: 0.58, z: 0.78, w: 0.42, h: 1.58 },
      { x: -1.42, z: -0.35, w: 0.34, h: 1.15 },
      { x: 1.4, z: 0.38, w: 0.36, h: 1.25 },
      { x: 0.12, z: 1.25, w: 0.35, h: 1.05 },
      { x: -0.15, z: -1.35, w: 0.34, h: 1.18 },
      { x: -1.08, z: 1.05, w: 0.3, h: 0.92 },
      { x: 1.1, z: -1.02, w: 0.3, h: 0.98 },
    ];

    towers.forEach((t) => {
      const mainMesh = new THREE.Mesh(
        new THREE.BoxGeometry(t.w, t.h, t.w),
        bldgMat
      );
      mainMesh.position.set(t.x, -1.02 + t.h / 2, t.z);

      const crown = new THREE.Mesh(
        new THREE.BoxGeometry(t.w * 0.72, t.h * 0.16, t.w * 0.72),
        solidGoldMat
      );
      crown.position.set(t.x, -1.02 + t.h + (t.h * 0.16) / 2, t.z);

      const wire = new THREE.Mesh(
        new THREE.BoxGeometry(t.w + 0.025, t.h + 0.025, t.w + 0.025),
        wireMat
      );
      wire.position.copy(mainMesh.position);
      cityGroup.add(mainMesh, crown, wire);

      if (t.spire) {
        const spire = new THREE.Mesh(
          new THREE.CylinderGeometry(0.012, 0.03, 0.45, 8),
          ringMat
        );
        spire.position.set(t.x, -1.02 + t.h * 1.16 + 0.22, t.z);
        cityGroup.add(spire);
      }
    });

    const haloRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.92, 0.028, 16, 128),
      ringMat
    );
    haloRing.rotation.x = Math.PI / 2;
    haloRing.position.y = -0.88;

    const skyOrbitRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.45, 0.016, 12, 112),
      ringMat
    );
    skyOrbitRing.rotation.x = Math.PI / 2.2;
    skyOrbitRing.position.y = 0.65;

    cityGroup.add(haloRing, skyOrbitRing);
    group.add(cityGroup);
    group.userData = { cityGroup, haloRing, skyOrbitRing };
  } else if (patternId === 'lotus-3d') {
    // Hoa Sen Vang 3D: layered curved lotus petals in gold/amber/rose-gold + radiant stamen core + orbital halos
    const lotusGroup = new THREE.Group();
    lotusGroup.position.y = -0.35;

    const goldPetalMat = new THREE.MeshPhysicalMaterial({
      color: primaryColor.clone().lerp(new THREE.Color('#ffd54f'), 0.4),
      emissive: secondaryColor.clone().lerp(new THREE.Color('#ff8f00'), 0.45),
      emissiveIntensity: 0.36,
      metalness: 0.78,
      roughness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
      side: THREE.DoubleSide,
    });

    const roseGoldPetalMat = new THREE.MeshPhysicalMaterial({
      color: primaryColor.clone().lerp(new THREE.Color('#ff9e80'), 0.45),
      emissive: new THREE.Color('#ff6e40'),
      emissiveIntensity: 0.32,
      metalness: 0.72,
      roughness: 0.2,
      clearcoat: 0.85,
      side: THREE.DoubleSide,
    });

    const innerPetalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#fff3c4'),
      emissive: accentColor.clone().lerp(new THREE.Color('#ffb300'), 0.5),
      emissiveIntensity: 0.55,
      metalness: 0.65,
      roughness: 0.14,
      clearcoat: 1.0,
      side: THREE.DoubleSide,
    });

    const outerPetalGeo = createCurvedPetalGeometry(1.65, 0.48);
    const midPetalGeo = createCurvedPetalGeometry(1.38, 0.4);
    const innerPetalGeo = createCurvedPetalGeometry(1.08, 0.32);

    const outerPetals = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const pivot = new THREE.Group();
      pivot.rotation.y = a;
      const petal = new THREE.Mesh(outerPetalGeo, goldPetalMat);
      petal.position.set(0, 0, 0.52);
      petal.rotation.x = 0.96;
      pivot.add(petal);
      outerPetals.add(pivot);
    }

    const midPetals = new THREE.Group();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 + Math.PI / 10;
      const pivot = new THREE.Group();
      pivot.rotation.y = a;
      const petal = new THREE.Mesh(midPetalGeo, roseGoldPetalMat);
      petal.position.set(0, 0.08, 0.38);
      petal.rotation.x = 0.64;
      pivot.add(petal);
      midPetals.add(pivot);
    }

    const innerPetals = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const pivot = new THREE.Group();
      pivot.rotation.y = a;
      const petal = new THREE.Mesh(innerPetalGeo, innerPetalMat);
      petal.position.set(0, 0.16, 0.24);
      petal.rotation.x = 0.34;
      pivot.add(petal);
      innerPetals.add(pivot);
    }

    // Golden calyx pedestal ring
    const calyxBase = new THREE.Mesh(
      new THREE.TorusGeometry(0.62, 0.06, 16, 64),
      solidGoldMat
    );
    calyxBase.rotation.x = Math.PI / 2;
    calyxBase.position.y = -0.02;

    // Radiant stamen core + filaments
    const stamenCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, 32, 32),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#fff8e1'),
        emissive: new THREE.Color('#ffca28'),
        emissiveIntensity: 1.15,
        metalness: 0.3,
        roughness: 0.15,
      })
    );
    stamenCore.position.y = 0.52;

    const stamenRing = new THREE.Group();
    stamenRing.position.y = 0.42;
    const filamentGeo = new THREE.CylinderGeometry(0.012, 0.018, 0.45, 8);
    const tipGeo = new THREE.SphereGeometry(0.045, 10, 10);
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const fPivot = new THREE.Group();
      fPivot.rotation.y = a;
      const filament = new THREE.Mesh(filamentGeo, solidGoldMat);
      filament.position.set(0, 0.22, 0.46);
      filament.rotation.x = 0.28;
      const tip = new THREE.Mesh(tipGeo, ringMat);
      tip.position.set(0, 0.44, 0.52);
      fPivot.add(filament, tip);
      stamenRing.add(fPivot);
    }

    const haloRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.38, 0.024, 16, 112),
      ringMat
    );
    haloRing1.position.y = 0.45;
    haloRing1.rotation.x = Math.PI / 2.6;

    const haloRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.68, 0.018, 16, 112),
      solidGoldMat
    );
    haloRing2.position.y = 0.45;
    haloRing2.rotation.x = -Math.PI / 3.2;
    haloRing2.rotation.y = Math.PI / 5;

    lotusGroup.add(
      calyxBase,
      outerPetals,
      midPetals,
      innerPetals,
      stamenCore,
      stamenRing,
      haloRing1,
      haloRing2
    );
    group.add(lotusGroup);
    group.userData = {
      lotusGroup,
      outerPetals,
      midPetals,
      innerPetals,
      stamenCore,
      stamenRing,
      haloRing1,
      haloRing2,
    };
  } else if (patternId === 'golden-star') {
    // Ngoi Sao Vang 3D: extruded/faceted 5-point 3D star + inner wireframe star + rotating orbital rings
    const starGroup = new THREE.Group();
    const starShape = new THREE.Shape();
    const points = 5;
    const outerR = 1.82;
    const innerR = 0.76;
    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = (i * Math.PI) / points + Math.PI / 2;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) starShape.moveTo(x, y);
      else starShape.lineTo(x, y);
    }
    starShape.closePath();

    const starGeo = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.28,
      bevelSize: 0.06,
      bevelSegments: 1,
    });
    starGeo.center();

    const starMat = new THREE.MeshPhysicalMaterial({
      color: primaryColor.clone().lerp(new THREE.Color('#ffd740'), 0.5),
      emissive: secondaryColor.clone().lerp(new THREE.Color('#ff8f00'), 0.35),
      emissiveIntensity: 0.42,
      metalness: 0.92,
      roughness: 0.14,
      clearcoat: 1.0,
      flatShading: true,
    });

    const starMesh = new THREE.Mesh(starGeo, starMat);
    const starWire = new THREE.Mesh(starGeo, wireMat);
    starWire.scale.setScalar(1.14);

    const starCore = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.42, 0),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#fff9c4'),
        emissive: accentColor,
        emissiveIntensity: 1.1,
        metalness: 0.5,
        roughness: 0.1,
      })
    );
    starCore.position.z = 0.28;

    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.38, 0.024, 16, 112),
      ringMat
    );
    ring1.rotation.x = Math.PI / 3;

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.68, 0.018, 16, 112),
      solidGoldMat
    );
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = -Math.PI / 4;

    const orbNode1 = new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), ringMat);
    orbNode1.position.set(2.38, 0, 0);
    ring1.add(orbNode1);

    const orbNode2 = new THREE.Mesh(new THREE.OctahedronGeometry(0.09, 0), ringMat);
    orbNode2.position.set(-2.68, 0, 0);
    ring2.add(orbNode2);

    starGroup.add(starMesh, starWire, starCore, ring1, ring2);
    group.add(starGroup);
    group.userData = { starGroup, starMesh, starWire, starCore, ring1, ring2 };
  } else if (patternId === 'ai-cube') {
    // Chip AI & Lap Phuong So: nested glowing tech cubes, wireframe cage, circuit/data rings, floating corner nodes
    const aiGroup = new THREE.Group();

    const innerCube = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 0.92, 0.92),
      new THREE.MeshStandardMaterial({
        color: accentColor,
        emissive: primaryColor,
        emissiveIntensity: 0.95,
        metalness: 0.55,
        roughness: 0.15,
      })
    );

    const midCube = new THREE.Mesh(
      new THREE.BoxGeometry(1.56, 1.56, 1.56),
      new THREE.MeshPhysicalMaterial({
        color: secondaryColor,
        emissive: primaryColor,
        emissiveIntensity: 0.35,
        metalness: 0.25,
        roughness: 0.1,
        clearcoat: 1.0,
        transparent: true,
        opacity: 0.42,
      })
    );

    const outerCage = new THREE.Mesh(
      new THREE.BoxGeometry(2.15, 2.15, 2.15),
      wireMat
    );

    // 8 floating corner nodes
    const cornerNodes = new THREE.Group();
    const nodeGeo = new THREE.OctahedronGeometry(0.14, 0);
    const offsets = [-1.28, 1.28];
    offsets.forEach((x) => {
      offsets.forEach((y) => {
        offsets.forEach((z) => {
          const node = new THREE.Mesh(nodeGeo, solidGoldMat);
          node.position.set(x, y, z);
          cornerNodes.add(node);
        });
      });
    });

    const dataRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.48, 0.022, 16, 112),
      ringMat
    );
    dataRing1.rotation.x = Math.PI / 2.3;

    const dataRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.76, 0.018, 16, 112),
      solidGoldMat
    );
    dataRing2.rotation.y = Math.PI / 2.6;
    dataRing2.rotation.x = -Math.PI / 5;

    const packet1 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.14), ringMat);
    packet1.position.set(2.48, 0, 0);
    dataRing1.add(packet1);

    const packet2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), ringMat);
    packet2.position.set(-2.76, 0, 0);
    dataRing2.add(packet2);

    aiGroup.add(innerCube, midCube, outerCage, cornerNodes, dataRing1, dataRing2);
    group.add(aiGroup);
    group.userData = {
      aiGroup,
      innerCube,
      midCube,
      outerCage,
      cornerNodes,
      dataRing1,
      dataRing2,
    };
  } else {
    // Detailed 3D Crystal Energy Core (used for 'crystal-core' and 'custom-ceremony')
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: primaryColor,
      emissive: secondaryColor,
      emissiveIntensity: 0.45,
      metalness: 0.35,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      iridescence: 0.85,
      flatShading: true,
    });

    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.55, 1),
      crystalMat
    );
    const innerHeart = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.88, 0),
      ringMat
    );
    const cage = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.92, 0),
      wireMat
    );

    const shardsGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const shard = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.16, 0),
        crystalMat
      );
      shard.position.set(
        Math.cos(a) * 2.35,
        Math.sin(a * 2) * 0.45,
        Math.sin(a) * 2.35
      );
      shard.scale.set(0.7, 1.5, 0.7);
      shardsGroup.add(shard);
    }

    const r1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.58, 0.028, 18, 112),
      ringMat
    );
    const r2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.024, 18, 112),
      solidGoldMat
    );
    r2.rotation.x = Math.PI / 2;
    const r3 = new THREE.Mesh(
      new THREE.TorusGeometry(3.02, 0.02, 18, 112),
      ringMat
    );
    r3.rotation.y = Math.PI / 2;

    group.add(crystal, innerHeart, cage, shardsGroup, r1, r2, r3);
    group.userData = { crystal, innerHeart, cage, shardsGroup, r1, r2, r3 };
  }

  return group;
}

export default function ThreeStage({
  patternId,
  phase,
  progress,
  coreY = 0,
  coreScale = 1,
  hideCenterpiece = false,
  isPreview = false,
  custom3dModelType = 'preset',
  custom3dModelId = 'crystal-core',
  custom3dModelUrl = null,
}) {
  const containerRef = useRef(null);
  const stateRef = useRef({ phase, progress, coreY, coreScale, hideCenterpiece });

  useEffect(() => {
    stateRef.current = { phase, progress, coreY, coreScale, hideCenterpiece };
  }, [phase, progress, coreY, coreScale, hideCenterpiece]);

  const isCustomCeremony = patternId === 'custom-ceremony';
  const effectiveModelType = isCustomCeremony ? custom3dModelType : 'preset';
  const effectiveModelId = isCustomCeremony
    ? custom3dModelId || 'crystal-core'
    : patternId;
  const effectiveModelUrl =
    isCustomCeremony && custom3dModelType === 'uploaded' ? custom3dModelUrl : null;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pattern = getPatternById(patternId);
    const { colors } = pattern;
    const disposableTextures = [];
    const isNoneModel = isCustomCeremony && effectiveModelType === 'none';
    const isUploadedModel =
      isCustomCeremony &&
      effectiveModelType === 'uploaded' &&
      Boolean(effectiveModelUrl);
    const activeModelId = isCustomCeremony
      ? effectiveModelId || 'crystal-core'
      : patternId;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(colors.bgBottom, 0.04);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 120);
    camera.position.set(0, 0.45, 9.2);
    camera.lookAt(0, 0.45, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isPreview,
      alpha: true,
      powerPreference: 'high-performance',
    });
    const targetPixelRatio = isPreview
      ? 0.75
      : Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setSize(width, height);
    renderer.setPixelRatio(targetPixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.92;
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envRT = pmremGenerator.fromScene(roomEnv, 0.04);
    scene.environment = envRT.texture;
    scene.environmentIntensity = 0.42;
    roomEnv.dispose();

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    renderPass.clearColor = new THREE.Color(0x000000);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);

    const baseBloom = colors.bloomStrength * 0.48;
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      baseBloom,
      0.42,
      0.68
    );
    // Preserve canvas transparency on empty pixels so background video at z-0 shines through
    bloomPass.compositeMaterial.fragmentShader =
      bloomPass.compositeMaterial.fragmentShader.replace(
        /gl_FragColor\s*=\s*bloomStrength\s*\*([\s\S]*?);/,
        `vec4 bloomSum = bloomStrength * ($1);
         float bloomAlpha = clamp(max(bloomSum.r, max(bloomSum.g, bloomSum.b)) * 1.8, 0.0, 1.0);
         gl_FragColor = vec4(bloomSum.rgb, bloomAlpha);`
      );
    bloomPass.compositeMaterial.needsUpdate = true;
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    const keyLight = new THREE.PointLight(colors.primary, 18, 32);
    keyLight.position.set(3.5, 5.5, 6);
    const rimLight = new THREE.PointLight(colors.accent, 12, 32);
    rimLight.position.set(-4.5, -2, 4.5);
    scene.add(ambient, keyLight, rimLight);

    // Centerpiece 3D Group
    let mixer = null;
    let isDisposed = false;
    let centerpiece;

    if (isNoneModel) {
      centerpiece = new THREE.Group();
      centerpiece.visible = false;
    } else if (isUploadedModel) {
      centerpiece = new THREE.Group();
      const uploadedWrapper = new THREE.Group();
      centerpiece.add(uploadedWrapper);

      const gltfLoader = new GLTFLoader();
      gltfLoader.load(
        effectiveModelUrl,
        (gltf) => {
          if (isDisposed) {
            disposeObject3D(gltf.scene);
            return;
          }
          const modelRoot = gltf.scene;
          const normGroup = new THREE.Group();
          normGroup.add(modelRoot);
          normGroup.updateMatrixWorld(true);

          const box = new THREE.Box3().setFromObject(normGroup);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          box.getSize(size);
          box.getCenter(center);

          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0 && Number.isFinite(maxDim)) {
            const scale = 3.2 / maxDim;
            normGroup.scale.setScalar(scale);
            normGroup.position.set(
              -center.x * scale,
              -center.y * scale,
              -center.z * scale
            );
          }

          uploadedWrapper.add(normGroup);

          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(modelRoot);
            gltf.animations.forEach((clip) => {
              mixer.clipAction(clip).play();
            });
          }
        },
        undefined,
        (err) => {
          console.error('Failed to load custom 3D model:', err);
        }
      );
    } else {
      centerpiece = buildCenterpiece(activeModelId, colors, disposableTextures);
    }
    scene.add(centerpiece);

    // 3D Shockwave Ring triggered when entering celebration
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: colors.accent,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const shockwaveRing = new THREE.Mesh(
      new THREE.RingGeometry(0.85, 1.05, 96),
      shockwaveMat
    );
    shockwaveRing.position.set(0, 0.45, 0.2);
    scene.add(shockwaveRing);

    // Soft Glowing 3D Particle Field
    const particleTex = createGlowParticleTexture();
    disposableTextures.push(particleTex);

    const particleCount = isPreview ? 650 : 950;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pBase = new Float32Array(particleCount * 3);
    const pSeed = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const r = 3.4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 10;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r - 2;
      pPos[i * 3] = x;
      pPos[i * 3 + 1] = y;
      pPos[i * 3 + 2] = z;
      pBase[i * 3] = x;
      pBase[i * 3 + 1] = y;
      pBase[i * 3 + 2] = z;
      pSeed[i] = Math.random();
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: colors.particle,
      map: particleTex,
      size: 0.16,
      transparent: true,
      opacity: 0.88,
      alphaTest: 0.01,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let elapsed = 0;
    let prevPhase = stateRef.current.phase;
    let shockwaveLife = 0;
    let celebBurstTime = 0;
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      elapsed += dt;
      const t = elapsed;

      const {
        phase: curPhase,
        progress: curProg,
        coreY: cY,
        coreScale: cScale,
        hideCenterpiece: hideCore,
      } = stateRef.current;

      if (hideCore) {
        if (prevPhase !== curPhase) {
          renderer.clear();
          prevPhase = curPhase;
        }
        return;
      }

      if (prevPhase !== 'celebration' && curPhase === 'celebration') {
        shockwaveLife = 1.0;
        celebBurstTime = 0.001;
        shockwaveRing.scale.setScalar(0.5);
      } else if (curPhase !== 'celebration') {
        celebBurstTime = 0;
      }
      prevPhase = curPhase;

      if (celebBurstTime > 0) {
        celebBurstTime += dt;
      }

      if (shockwaveLife > 0) {
        shockwaveLife = Math.max(0, shockwaveLife - dt * 1.15);
        const expand = 1 + (1 - shockwaveLife) * 14;
        shockwaveRing.scale.setScalar(expand);
        shockwaveMat.opacity = shockwaveLife * 0.75;
      } else {
        shockwaveMat.opacity = 0;
      }

      const isCharging = curPhase === 'charging';
      const isCeleb = curPhase === 'celebration';
      const chargeNorm = Math.max(0, Math.min(1, curProg / 100));
      const speedMul = isCharging
        ? 1 + chargeNorm * 3.5 + chargeNorm * chargeNorm * 6.5
        : isCeleb
          ? 0.65
          : 1;

      if (mixer) {
        mixer.update(dt * (isCharging ? 1 + (curProg / 100) * 1.4 : 1));
      }

      if (!isNoneModel) {
        const pulseScale =
          isUploadedModel && isCharging
            ? 1 + Math.sin(t * 7.5) * (0.025 + (curProg / 100) * 0.045)
            : 1;
        const targetVisibleScale =
          isCeleb || hideCore ? 0.001 : cScale * pulseScale;
        const nextScale = THREE.MathUtils.damp(
          centerpiece.scale.x,
          targetVisibleScale,
          6.5,
          dt
        );
        centerpiece.scale.setScalar(nextScale);

        const baseLiftY = activeModelId === 'holo-globe' ? 0.72 : 0.45;
        const levitateOffset = isUploadedModel
          ? isCeleb
            ? 2.1
            : Math.sin(t * 1.4) * 0.12
          : isCeleb
            ? 1.4
            : 0;
        centerpiece.position.y = THREE.MathUtils.damp(
          centerpiece.position.y,
          baseLiftY - cY * 0.008 + levitateOffset,
          7.5,
          dt
        );

        if (isUploadedModel) {
          const rotSpeed = isCeleb
            ? 2.4
            : isCharging
              ? 0.45 + (curProg / 100) * 2.2
              : 0.32;
          centerpiece.rotation.y += dt * rotSpeed;
        } else {
          const ud = centerpiece.userData;
          if (activeModelId === 'cdsqg-2026') {
            // Accelerating spin as countdown progresses (1x -> 14x speed)
            const cdsqgAccel = isCharging
              ? 1 + chargeNorm * 4.5 + chargeNorm * chargeNorm * 8.5
              : isCeleb
                ? 0.8
                : 1;
            const rotStep = dt * cdsqgAccel;
            if (ud.outerBladesRing) {
              ud.outerBladesRing.rotation.z -= rotStep * 0.85;
            }
            if (ud.innerConvRing) {
              ud.innerConvRing.rotation.z += rotStep * 0.48;
            }
            if (ud.midConvRing) {
              ud.midConvRing.rotation.z -= rotStep * 0.36;
            }
            if (ud.outerConvRing) {
              ud.outerConvRing.rotation.z += rotStep * 0.25;
            }
          } else if (activeModelId === 'dong-son') {
            if (ud.coreDisc) ud.coreDisc.rotation.z = t * 0.09 * speedMul;
            if (ud.backHaloDisc) ud.backHaloDisc.rotation.z = -t * 0.05 * speedMul;
            if (ud.orbitRing1) {
              ud.orbitRing1.rotation.y = t * 0.4 * speedMul;
              ud.orbitRing1.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.14;
            }
            centerpiece.rotation.y = Math.sin(t * 0.35) * 0.16;
            centerpiece.rotation.x = Math.cos(t * 0.25) * 0.06;
          } else if (activeModelId === 'holo-globe') {
            if (ud.globe) ud.globe.rotation.y = t * 0.28 * speedMul;
            if (ud.globeDots) ud.globeDots.rotation.y = t * 0.28 * speedMul;
            if (ud.arcsGroup) ud.arcsGroup.rotation.y = t * 0.28 * speedMul;
            if (ud.eqRing1) ud.eqRing1.rotation.z = t * 0.45 * speedMul;
            if (ud.eqRing2) ud.eqRing2.rotation.z = -t * 0.38 * speedMul;
          } else if (activeModelId === 'smart-city') {
            if (ud.cityGroup) ud.cityGroup.rotation.y = t * 0.2 * speedMul;
            if (ud.skyOrbitRing) ud.skyOrbitRing.rotation.z = t * 0.65 * speedMul;
          } else if (activeModelId === 'lotus-3d') {
            if (ud.lotusGroup) ud.lotusGroup.rotation.y = t * 0.24 * speedMul;
            if (ud.stamenCore) {
              const pulse = 1 + Math.sin(t * 2.8 * speedMul) * 0.08;
              ud.stamenCore.scale.setScalar(pulse);
            }
            if (ud.stamenRing) ud.stamenRing.rotation.y = -t * 0.32 * speedMul;
            if (ud.haloRing1) {
              ud.haloRing1.rotation.z = t * 0.42 * speedMul;
              ud.haloRing1.rotation.y = Math.sin(t * 0.4) * 0.18;
            }
            if (ud.haloRing2) ud.haloRing2.rotation.z = -t * 0.34 * speedMul;
          } else if (activeModelId === 'golden-star') {
            if (ud.starGroup) {
              ud.starGroup.rotation.y = t * 0.38 * speedMul;
              ud.starGroup.rotation.z = Math.sin(t * 0.7) * 0.08;
            }
            if (ud.starCore) {
              ud.starCore.rotation.y = -t * 0.75 * speedMul;
              const corePulse = 1 + Math.sin(t * 3.0 * speedMul) * 0.1;
              ud.starCore.scale.setScalar(corePulse);
            }
            if (ud.ring1) ud.ring1.rotation.z = t * 0.52 * speedMul;
            if (ud.ring2) ud.ring2.rotation.z = -t * 0.44 * speedMul;
          } else if (activeModelId === 'ai-cube') {
            if (ud.aiGroup) ud.aiGroup.rotation.y = t * 0.25 * speedMul;
            if (ud.innerCube) {
              ud.innerCube.rotation.x = t * 0.65 * speedMul;
              ud.innerCube.rotation.y = -t * 0.55 * speedMul;
            }
            if (ud.midCube) {
              ud.midCube.rotation.y = t * 0.35 * speedMul;
              ud.midCube.rotation.z = Math.sin(t * 0.5) * 0.22;
            }
            if (ud.outerCage) {
              ud.outerCage.rotation.y = -t * 0.22 * speedMul;
              ud.outerCage.rotation.x = Math.cos(t * 0.4) * 0.15;
            }
            if (ud.cornerNodes) {
              const nodePulse = 1 + Math.sin(t * 2.4 * speedMul) * 0.07;
              ud.cornerNodes.scale.setScalar(nodePulse);
              ud.cornerNodes.rotation.y = -t * 0.22 * speedMul;
            }
            if (ud.dataRing1) ud.dataRing1.rotation.z = t * 0.58 * speedMul;
            if (ud.dataRing2) ud.dataRing2.rotation.z = -t * 0.48 * speedMul;
          } else {
            if (ud.crystal) {
              ud.crystal.rotation.y = t * 0.42 * speedMul;
              ud.crystal.rotation.x = Math.sin(t * 0.6) * 0.2;
            }
            if (ud.innerHeart) {
              ud.innerHeart.rotation.y = -t * 0.65 * speedMul;
            }
            if (ud.cage) ud.cage.rotation.y = -t * 0.28 * speedMul;
            if (ud.shardsGroup) {
              ud.shardsGroup.rotation.y = t * 0.36 * speedMul;
            }
            if (ud.r1) ud.r1.rotation.x = t * 0.65 * speedMul;
            if (ud.r2) ud.r2.rotation.y = t * 0.55 * speedMul;
            if (ud.r3) ud.r3.rotation.z = -t * 0.48 * speedMul;
          }
        }
      }

      const targetZ =
        activeModelId === 'cdsqg-2026'
          ? isCeleb
            ? 11.2
            : 9.2
          : isCharging
            ? 9.2 - (curProg / 100) * 1.8
            : isCeleb
              ? 11.2
              : 9.2;
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 4.0, dt);
      camera.position.x = 0;
      camera.position.y = 0.45;
      camera.lookAt(0, 0.45, 0);

      const logoCenterY = centerpiece.position.y || 0.45;
      if (isCharging) {
        particles.rotation.y = 0;
        pMat.opacity = Math.min(1, 0.85 + chargeNorm * 0.15);
        pMat.size = 0.16 + chargeNorm * 0.09;
      } else if (isCeleb && celebBurstTime > 0 && celebBurstTime < 3.0) {
        particles.rotation.y = t * 0.08;
        pMat.opacity = Math.max(0.78, 1 - celebBurstTime * 0.08);
        pMat.size = Math.max(0.16, 0.28 - celebBurstTime * 0.04);
      } else {
        particles.rotation.y = t * 0.045;
        pMat.opacity = 0.85;
        pMat.size = 0.16;
      }

      const posAttr = pGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const bx = pBase[i * 3];
        const by = pBase[i * 3 + 1];
        const bz = pBase[i * 3 + 2];
        const seed = pSeed[i];

        if (isCharging) {
          // Converge particles in an accelerating spiral vortex directly into the logo core (0, logoCenterY, 0)
          const streamCycle = (t * (0.45 + chargeNorm * 1.65) + seed) % 1;
          const envelope = Math.max(0.04, 1 - Math.pow(chargeNorm, 1.15) * 0.92);
          const radialFactor = envelope * (1 - streamCycle * (0.55 + chargeNorm * 0.42));
          const swirlAngle =
            (1 - radialFactor) * (2.2 + chargeNorm * 6.5) + seed * Math.PI * 2;
          const cosA = Math.cos(swirlAngle);
          const sinA = Math.sin(swirlAngle);
          const rx = bx * cosA - by * sinA;
          const ry = bx * sinA + by * cosA;

          posAttr.setXYZ(
            i,
            rx * radialFactor,
            logoCenterY + (ry - logoCenterY) * radialFactor,
            bz * radialFactor
          );
        } else if (isCeleb && celebBurstTime > 0) {
          // Explosive outward radial burst from the logo center (0, logoCenterY, 0) when countdown finishes
          const dy = by - logoCenterY;
          const dist = Math.hypot(bx, dy, bz) || 1;
          const dirX = bx / dist;
          const dirY = dy / dist;
          const dirZ = bz / dist;

          const burstSpeed = 6.5 + seed * 14.0;
          const burstProgress = 1 - Math.exp(-celebBurstTime * 2.6);
          const burstDist = 0.15 + burstProgress * burstSpeed;
          const settleMix = Math.min(1, Math.max(0, (celebBurstTime - 1.2) / 2.0));

          const burstX = dirX * burstDist;
          const burstY = logoCenterY + dirY * burstDist;
          const burstZ = dirZ * burstDist;

          const calmX = bx;
          const calmY = by + Math.sin(t + i * 0.2) * 0.25;
          const calmZ = bz;

          posAttr.setXYZ(
            i,
            burstX + (calmX - burstX) * settleMix,
            burstY + (calmY - burstY) * settleMix,
            burstZ + (calmZ - burstZ) * settleMix
          );
        } else {
          posAttr.setXYZ(i, bx, by + Math.sin(t + i * 0.2) * 0.25, bz);
        }
      }
      posAttr.needsUpdate = true;

      const targetBloom = isCharging
        ? Math.min(0.78, baseBloom + (curProg / 100) * 0.22)
        : baseBloom;
      bloomPass.strength = THREE.MathUtils.damp(
        bloomPass.strength,
        targetBloom,
        5.0,
        dt
      );

      composer.render();
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);

      if (mixer) {
        mixer.stopAllAction();
      }
      disposeObject3D(scene);
      disposableTextures.forEach((tex) => tex.dispose());
      envRT.dispose();
      pmremGenerator.dispose();
      composer.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [patternId, isCustomCeremony, effectiveModelType, effectiveModelId, effectiveModelUrl]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
