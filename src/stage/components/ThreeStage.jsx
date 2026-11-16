import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { getPatternById } from '../../shared/patterns';

function buildCenterpiece(patternId, colors) {
  const group = new THREE.Group();
  const primaryColor = new THREE.Color(colors.primary);
  const secondaryColor = new THREE.Color(colors.secondary);
  const accentColor = new THREE.Color(colors.accent);

  const wireMat = new THREE.MeshStandardMaterial({
    color: primaryColor,
    emissive: primaryColor,
    emissiveIntensity: 0.6,
    metalness: 0.85,
    roughness: 0.2,
    wireframe: true,
  });

  const solidGoldMat = new THREE.MeshStandardMaterial({
    color: primaryColor,
    emissive: secondaryColor,
    emissiveIntensity: 0.35,
    metalness: 0.9,
    roughness: 0.18,
  });

  const ringMat = new THREE.MeshBasicMaterial({
    color: accentColor,
    transparent: true,
    opacity: 0.85,
  });

  if (patternId === 'dong-son') {
    // 3D Dong Son Bronze Drum Rings & 12-point Sun Star
    const outerRim = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.08, 16, 96),
      solidGoldMat
    );
    const midRim = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.045, 16, 80),
      ringMat
    );
    const innerRim = new THREE.Mesh(
      new THREE.TorusGeometry(1.35, 0.035, 16, 64),
      solidGoldMat
    );
    const coreDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(1.15, 1.15, 0.08, 48),
      new THREE.MeshStandardMaterial({
        color: secondaryColor,
        emissive: secondaryColor,
        emissiveIntensity: 0.45,
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.65,
      })
    );
    coreDisc.rotation.x = Math.PI / 2;

    // 12 Lac Viet Sun Rays around center
    const raysGroup = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(0.11, 0.55, 4),
        ringMat
      );
      cone.position.set(Math.cos(angle) * 1.68, Math.sin(angle) * 1.68, 0.06);
      cone.rotation.z = angle - Math.PI / 2;
      raysGroup.add(cone);
    }

    const orbitRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.05, 0.02, 12, 96),
      ringMat
    );
    orbitRing.rotation.x = Math.PI / 3;

    group.add(outerRim, midRim, innerRim, coreDisc, raysGroup, orbitRing);
    group.userData = { raysGroup, orbitRing, outerRim };
  } else if (patternId === 'holo-globe') {
    // 3D Hologram Digital Globe (scaled cleanly above TouchPods safe-zone)
    const globe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.62, 2),
      wireMat
    );
    const innerCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.06, 32, 32),
      new THREE.MeshStandardMaterial({
        color: secondaryColor,
        emissive: primaryColor,
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.35,
      })
    );
    const eqRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.18, 0.024, 12, 96),
      ringMat
    );
    eqRing1.rotation.x = Math.PI / 2.4;

    const eqRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.42, 0.018, 12, 96),
      ringMat
    );
    eqRing2.rotation.y = Math.PI / 3;
    eqRing2.rotation.x = -Math.PI / 5;

    group.add(globe, innerCore, eqRing1, eqRing2);
    group.userData = { globe, eqRing1, eqRing2 };
  } else if (patternId === 'smart-city') {
    // 3D Smart City Skyline Cluster on Floating Energy Platform
    const cityGroup = new THREE.Group();
    const baseDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(2.5, 2.7, 0.14, 48),
      solidGoldMat
    );
    baseDisc.position.y = -1.1;
    cityGroup.add(baseDisc);

    const bldgMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      emissive: secondaryColor,
      emissiveIntensity: 0.55,
      metalness: 0.8,
      roughness: 0.25,
    });

    const towers = [
      { x: 0, z: 0, w: 0.55, h: 2.3 },
      { x: -0.85, z: 0.35, w: 0.42, h: 1.65 },
      { x: 0.85, z: -0.25, w: 0.44, h: 1.85 },
      { x: -0.5, z: -0.8, w: 0.38, h: 1.4 },
      { x: 0.6, z: 0.75, w: 0.4, h: 1.55 },
      { x: -1.35, z: -0.35, w: 0.32, h: 1.1 },
      { x: 1.35, z: 0.35, w: 0.34, h: 1.2 },
    ];
    towers.forEach((t) => {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(t.w, t.h, t.w),
        bldgMat
      );
      mesh.position.set(t.x, -1.03 + t.h / 2, t.z);
      const wire = new THREE.Mesh(
        new THREE.BoxGeometry(t.w + 0.02, t.h + 0.02, t.w + 0.02),
        wireMat
      );
      wire.position.copy(mesh.position);
      cityGroup.add(mesh, wire);
    });

    const haloRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.85, 0.03, 12, 96),
      ringMat
    );
    haloRing.rotation.x = Math.PI / 2;
    haloRing.position.y = -0.9;
    cityGroup.add(haloRing);

    group.add(cityGroup);
    group.userData = { cityGroup, haloRing };
  } else {
    // 3D Crystal Energy Core
    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.65, 0),
      new THREE.MeshStandardMaterial({
        color: primaryColor,
        emissive: primaryColor,
        emissiveIntensity: 0.55,
        metalness: 0.95,
        roughness: 0.1,
        flatShading: true,
      })
    );
    const cage = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.95, 0),
      wireMat
    );
    const r1 = new THREE.Mesh(new THREE.TorusGeometry(2.55, 0.025, 12, 80), ringMat);
    const r2 = new THREE.Mesh(new THREE.TorusGeometry(2.75, 0.025, 12, 80), ringMat);
    r2.rotation.x = Math.PI / 2;
    const r3 = new THREE.Mesh(new THREE.TorusGeometry(2.95, 0.02, 12, 80), ringMat);
    r3.rotation.y = Math.PI / 2;
    group.add(crystal, cage, r1, r2, r3);
    group.userData = { crystal, cage, r1, r2, r3 };
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

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(colors.bgBottom, 0.045);

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
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      colors.bloomStrength,
      0.55,
      0.2
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    const keyLight = new THREE.PointLight(colors.primary, 45, 30);
    keyLight.position.set(3, 5, 6);
    const rimLight = new THREE.PointLight(colors.accent, 30, 30);
    rimLight.position.set(-4, -2, 4);
    scene.add(ambient, keyLight, rimLight);

    // 3D Stage Grid Floor
    const grid = new THREE.GridHelper(36, 36, colors.primary, colors.grid);
    grid.position.y = -3.4;
    grid.material.transparent = true;
    grid.material.opacity = 0.35;
    scene.add(grid);

    // Centerpiece 3D Group
    const centerpiece = buildCenterpiece(patternId, colors);
    scene.add(centerpiece);

    // 3D Particle Field
    const particleCount = 1600;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pBase = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 3.5 + Math.random() * 12;
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
      size: 0.085,
      transparent: true,
      opacity: 0.85,
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
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const {
        phase: curPhase,
        progress: curProg,
        coreY: cY,
        coreScale: cScale,
        hideCenterpiece: hideCore,
      } = stateRef.current;

      const isCharging = curPhase === 'charging';
      const isCeleb = curPhase === 'celebration';
      const speedMul = isCharging ? 1 + (curProg / 100) * 3.5 : isCeleb ? 0.65 : 1;

      // Hide centerpiece clutter cleanly during celebration Photo-Op or custom activation video
      const targetVisibleScale = isCeleb || hideCore ? 0.001 : cScale;
      centerpiece.scale.lerp(
        new THREE.Vector3(targetVisibleScale, targetVisibleScale, targetVisibleScale),
        0.08
      );
      const baseLiftY = patternId === 'holo-globe' ? 0.72 : 0.45;
      centerpiece.position.y = THREE.MathUtils.lerp(
        centerpiece.position.y,
        baseLiftY - cY * 0.008,
        0.1
      );

      // Animate pattern-specific 3D meshes
      const ud = centerpiece.userData;
      if (patternId === 'dong-son') {
        if (ud.raysGroup) ud.raysGroup.rotation.z = t * 0.25 * speedMul;
        if (ud.orbitRing) {
          ud.orbitRing.rotation.y = t * 0.5 * speedMul;
          ud.orbitRing.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.15;
        }
        centerpiece.rotation.y = Math.sin(t * 0.35) * 0.18;
      } else if (patternId === 'holo-globe') {
        if (ud.globe) ud.globe.rotation.y = t * 0.32 * speedMul;
        if (ud.eqRing1) ud.eqRing1.rotation.z = t * 0.45 * speedMul;
        if (ud.eqRing2) ud.eqRing2.rotation.z = -t * 0.38 * speedMul;
      } else if (patternId === 'smart-city') {
        if (ud.cityGroup) ud.cityGroup.rotation.y = t * 0.22 * speedMul;
      } else if (patternId === 'crystal-core') {
        if (ud.crystal) {
          ud.crystal.rotation.y = t * 0.45 * speedMul;
          ud.crystal.rotation.x = Math.sin(t * 0.6) * 0.2;
        }
        if (ud.cage) ud.cage.rotation.y = -t * 0.3 * speedMul;
        if (ud.r1) ud.r1.rotation.x = t * 0.7 * speedMul;
        if (ud.r2) ud.r2.rotation.y = t * 0.6 * speedMul;
      }

      // Camera motion per ceremony phase
      const targetZ = isCharging ? 9.2 - (curProg / 100) * 1.8 : isCeleb ? 11.2 : 9.2;
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.2 - pointer.y, 0.04);
      camera.lookAt(0, 0, 0);

      // Particle field motion
      particles.rotation.y = t * (isCharging ? 0.28 : 0.04);
      const posAttr = pGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const bx = pBase[i * 3];
        const by = pBase[i * 3 + 1];
        const bz = pBase[i * 3 + 2];
        if (isCharging) {
          const pull = 1 - (curProg / 100) * 0.65;
          posAttr.setXYZ(i, bx * pull, by * pull + Math.sin(t * 2 + i) * 0.08, bz * pull);
        } else {
          posAttr.setXYZ(i, bx, by + Math.sin(t + i * 0.2) * 0.25, bz);
        }
      }
      posAttr.needsUpdate = true;

      bloomPass.strength = isCharging
        ? colors.bloomStrength + (curProg / 100) * 0.55
        : colors.bloomStrength;

      composer.render();
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      pGeo.dispose();
      pMat.dispose();
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

