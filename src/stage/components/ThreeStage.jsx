import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { getPatternById } from '../../shared/patterns';
import {
  createBuildingFacadeTexture,
  createFloorGlowTexture,
  createGlowParticleTexture,
} from './threeAssets';

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

  if (patternId === 'dong-son') {
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
}) {
  const containerRef = useRef(null);
  const stateRef = useRef({ phase, progress, coreY, coreScale, hideCenterpiece });

  useEffect(() => {
    stateRef.current = { phase, progress, coreY, coreScale, hideCenterpiece };
  }, [phase, progress, coreY, coreScale, hideCenterpiece]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pattern = getPatternById(patternId);
    const { colors } = pattern;
    const disposableTextures = [];

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(colors.bgBottom, 0.04);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 120);
    camera.position.set(0, 1.4, 9.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    composer.addPass(new RenderPass(scene, camera));
    const baseBloom = colors.bloomStrength * 0.48;
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      baseBloom,
      0.42,
      0.68
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    const keyLight = new THREE.PointLight(colors.primary, 18, 32);
    keyLight.position.set(3.5, 5.5, 6);
    const rimLight = new THREE.PointLight(colors.accent, 12, 32);
    rimLight.position.set(-4.5, -2, 4.5);
    scene.add(ambient, keyLight, rimLight);

    // Smooth radial-faded 3D Stage Floor Disc + Royal Ceremonial 3D Rings
    const floorTex = createFloorGlowTexture(colors.primary, colors.grid);
    disposableTextures.push(floorTex);
    const floorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(34, 34),
      new THREE.MeshBasicMaterial({
        map: floorTex,
        transparent: true,
        opacity: 0.88,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -2.95;
    scene.add(floorMesh);

    const floorRingGroup = new THREE.Group();
    floorRingGroup.position.y = -2.92;
    const floorInnerRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.4, 0.032, 16, 128),
      new THREE.MeshBasicMaterial({
        color: colors.primary,
        transparent: true,
        opacity: 0.65,
      })
    );
    floorInnerRing.rotation.x = Math.PI / 2;

    const floorOuterRing = new THREE.Mesh(
      new THREE.TorusGeometry(5.1, 0.024, 16, 128),
      new THREE.MeshBasicMaterial({
        color: colors.accent,
        transparent: true,
        opacity: 0.45,
      })
    );
    floorOuterRing.rotation.x = Math.PI / 2;

    // 12 golden ceremonial floor markers around podium perimeter
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const marker = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.08, 0),
        new THREE.MeshBasicMaterial({
          color: colors.accent,
          transparent: true,
          opacity: 0.75,
        })
      );
      marker.position.set(Math.cos(a) * 4.25, 0.04, Math.sin(a) * 4.25);
      floorRingGroup.add(marker);
    }
    floorRingGroup.add(floorInnerRing, floorOuterRing);
    scene.add(floorRingGroup);

    // Centerpiece 3D Group
    const centerpiece = buildCenterpiece(patternId, colors, disposableTextures);
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

    const particleCount = 1600;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pBase = new Float32Array(particleCount * 3);
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

    // Mouse parallax
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener('pointermove', onPointerMove);

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

      if (prevPhase !== 'celebration' && curPhase === 'celebration') {
        shockwaveLife = 1.0;
        shockwaveRing.scale.setScalar(0.5);
      }
      prevPhase = curPhase;

      if (shockwaveLife > 0) {
        shockwaveLife = Math.max(0, shockwaveLife - dt * 1.15);
        const expand = 1 + (1 - shockwaveLife) * 11;
        shockwaveRing.scale.setScalar(expand);
        shockwaveMat.opacity = shockwaveLife * 0.55;
      } else {
        shockwaveMat.opacity = 0;
      }

      const isCharging = curPhase === 'charging';
      const isCeleb = curPhase === 'celebration';
      const speedMul = isCharging ? 1 + (curProg / 100) * 3.2 : isCeleb ? 0.65 : 1;

      floorMesh.rotation.z = t * 0.03 * speedMul;
      floorRingGroup.rotation.y = -t * 0.08 * speedMul;

      const targetVisibleScale = isCeleb || hideCore ? 0.001 : cScale;
      const nextScale = THREE.MathUtils.damp(
        centerpiece.scale.x,
        targetVisibleScale,
        6.5,
        dt
      );
      centerpiece.scale.setScalar(nextScale);

      const baseLiftY = patternId === 'holo-globe' ? 0.72 : 0.45;
      centerpiece.position.y = THREE.MathUtils.damp(
        centerpiece.position.y,
        baseLiftY - cY * 0.008,
        7.5,
        dt
      );

      const ud = centerpiece.userData;
      if (patternId === 'dong-son') {
        if (ud.coreDisc) ud.coreDisc.rotation.z = t * 0.09 * speedMul;
        if (ud.backHaloDisc) ud.backHaloDisc.rotation.z = -t * 0.05 * speedMul;
        if (ud.orbitRing1) {
          ud.orbitRing1.rotation.y = t * 0.4 * speedMul;
          ud.orbitRing1.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.14;
        }
        centerpiece.rotation.y = Math.sin(t * 0.35) * 0.16;
        centerpiece.rotation.x = Math.cos(t * 0.25) * 0.06;
      } else if (patternId === 'holo-globe') {
        if (ud.globe) ud.globe.rotation.y = t * 0.28 * speedMul;
        if (ud.globeDots) ud.globeDots.rotation.y = t * 0.28 * speedMul;
        if (ud.arcsGroup) ud.arcsGroup.rotation.y = t * 0.28 * speedMul;
        if (ud.eqRing1) ud.eqRing1.rotation.z = t * 0.45 * speedMul;
        if (ud.eqRing2) ud.eqRing2.rotation.z = -t * 0.38 * speedMul;
      } else if (patternId === 'smart-city') {
        if (ud.cityGroup) ud.cityGroup.rotation.y = t * 0.2 * speedMul;
        if (ud.skyOrbitRing) ud.skyOrbitRing.rotation.z = t * 0.65 * speedMul;
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

      const targetZ = isCharging ? 9.2 - (curProg / 100) * 1.8 : isCeleb ? 11.2 : 9.2;
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 4.0, dt);
      camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x, 3.5, dt);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, 1.2 - pointer.y, 3.5, dt);
      camera.lookAt(0, 0, 0);

      particles.rotation.y = t * (isCharging ? 0.28 : 0.045);
      pMat.opacity = isCharging ? 0.82 - (curProg / 100) * 0.28 : 0.82;
      const posAttr = pGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const bx = pBase[i * 3];
        const by = pBase[i * 3 + 1];
        const bz = pBase[i * 3 + 2];
        if (isCharging) {
          const pull = 1 - (curProg / 100) * 0.38;
          posAttr.setXYZ(
            i,
            bx * pull,
            by * pull + Math.sin(t * 2 + i) * 0.08,
            bz * pull
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
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      disposableTextures.forEach((tex) => tex.dispose());
      envRT.dispose();
      pmremGenerator.dispose();
      composer.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [patternId]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
