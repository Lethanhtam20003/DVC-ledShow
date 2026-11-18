'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createGlowParticleTexture } from '../threeAssets';
import type { MotionFrameState } from './types';

interface LogoSpearheadThreeProps {
  frameRef: React.MutableRefObject<MotionFrameState>;
  logoSrc: string;
  isPreview?: boolean;
}

interface HexShard {
  mesh: THREE.Mesh;
  basePos: THREE.Vector3;
  vel: THREE.Vector3;
  rotVel: THREE.Vector3;
}

interface CyberBarrier {
  z: number;
  group: THREE.Group;
  shards: HexShard[];
  ring: THREE.Mesh;
  shattered: boolean;
  shatterElapsed: number;
}

interface ShockwavePulse {
  mesh: THREE.Mesh;
  active: boolean;
  age: number;
}

const TRAIL_COUNT = 6;
const TRAIL_SEGMENTS = 28;

function disposeMaterial(mat: THREE.Material | null | undefined) {
  if (!mat) return;
  const anyMat = mat as unknown as Record<string, unknown>;
  const texKeys = ['map', 'emissiveMap', 'alphaMap', 'envMap', 'roughnessMap'];
  for (const key of texKeys) {
    const tex = anyMat[key];
    if (tex && typeof (tex as THREE.Texture).dispose === 'function') {
      (tex as THREE.Texture).dispose();
    }
  }
  mat.dispose();
}

function disposeObject3D(root: THREE.Object3D | null) {
  if (!root) return;
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.geometry) {
      mesh.geometry.dispose();
    }
    if (mesh.material) {
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((m) => disposeMaterial(m));
      } else {
        disposeMaterial(mesh.material);
      }
    }
  });
}

export function LogoSpearheadThree({
  frameRef,
  logoSrc,
  isPreview = false,
}: LogoSpearheadThreeProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const logoTextureRef = useRef<THREE.Texture | null>(null);
  const logoSpriteMatRef = useRef<THREE.MeshBasicMaterial | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    let disposed = false;
    loader.load(
      logoSrc,
      (tex) => {
        if (disposed) {
          tex.dispose();
          return;
        }
        tex.colorSpace = THREE.SRGBColorSpace;
        const old = logoTextureRef.current;
        logoTextureRef.current = tex;
        if (logoSpriteMatRef.current) {
          logoSpriteMatRef.current.map = tex;
          logoSpriteMatRef.current.needsUpdate = true;
        }
        if (old) old.dispose();
      },
      undefined,
      () => {
        // Fallback silently to procedural 3D Logo geometry
      }
    );
    return () => {
      disposed = true;
    };
  }, [logoSrc]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 1280;
    const height = container.clientHeight || 720;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#07020a');
    scene.fog = new THREE.FogExp2('#07020a', 0.015);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 260);
    camera.position.set(0, 0.5, 8.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isPreview ? 1.25 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.92;
    container.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTarget = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envTarget.texture;
    pmrem.dispose();

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.36,
      0.38,
      0.82
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // Lighting (balanced so Logo stays crisp without harsh glare)
    const ambientLight = new THREE.AmbientLight('#fff4e6', 0.55);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight('#fbbf24', 2.6, 50);
    keyLight.position.set(3, 5, 6);
    scene.add(keyLight);

    const cyanRimLight = new THREE.PointLight('#22d3ee', 2.8, 60);
    cyanRimLight.position.set(-4, -2, -4);
    scene.add(cyanRimLight);

    // =========================================================================
    // 1. HERO 3D SPEARHEAD LOGO (3 Sweeping Wings + Digital Human Core + Emblem)
    // =========================================================================
    const logoGroup = new THREE.Group();
    logoGroup.position.set(0, 0.45, 0);
    scene.add(logoGroup);

    const goldWingMat = new THREE.MeshPhysicalMaterial({
      color: '#f59e0b',
      emissive: '#b45309',
      emissiveIntensity: 0.22,
      metalness: 0.86,
      roughness: 0.22,
      clearcoat: 0.9,
    });

    const cyanEdgeMat = new THREE.MeshStandardMaterial({
      color: '#67e8f9',
      emissive: '#06b6d4',
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.45,
    });

    const wingsGroup = new THREE.Group();
    logoGroup.add(wingsGroup);

    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const wingHolder = new THREE.Group();
      wingHolder.rotation.z = angle;

      const arcMesh = new THREE.Mesh(
        new THREE.TorusGeometry(1.48, 0.13, 18, 56, Math.PI * 0.56),
        goldWingMat
      );
      arcMesh.rotation.z = 0.18;
      wingHolder.add(arcMesh);

      const innerRim = new THREE.Mesh(
        new THREE.TorusGeometry(1.33, 0.035, 12, 48, Math.PI * 0.5),
        cyanEdgeMat
      );
      innerRim.rotation.z = 0.22;
      wingHolder.add(innerRim);

      wingsGroup.add(wingHolder);
    }

    // Glowing Logo Plane (displays official logo-cdsqg-2026.png or uploaded custom logo)
    const logoPlaneMat = new THREE.MeshBasicMaterial({
      map: logoTextureRef.current,
      color: '#e2d6c3',
      transparent: true,
      opacity: 0.94,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    logoSpriteMatRef.current = logoPlaneMat;
    const logoPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.45, 2.45), logoPlaneMat);
    logoPlane.position.z = 0.14;
    logoGroup.add(logoPlane);

    // Spearhead Plasma Nose Cone (subtle energy aura leading the charge)
    const coreGlowMesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.48, 2),
      new THREE.MeshBasicMaterial({
        color: '#f59e0b',
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    coreGlowMesh.position.z = -0.35;
    logoGroup.add(coreGlowMesh);

    // Dual Counter-Rotating Holographic Rings
    const outerHoloRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.025, 12, 96),
      cyanEdgeMat
    );
    logoGroup.add(outerHoloRing);

    const innerGoldRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.86, 0.022, 12, 84),
      goldWingMat
    );
    logoGroup.add(innerGoldRing);

    // =========================================================================
    // 2. SIX VOLUMETRIC LIGHT STREAMS TRAILING THE LOGO
    // =========================================================================
    const trailLines: THREE.Line[] = [];
    const trailTubes: THREE.Mesh[] = [];
    const trailColors = [
      '#fbbf24',
      '#22d3ee',
      '#fde047',
      '#38bdf8',
      '#fbbf24',
      '#22d3ee',
    ];

    for (let i = 0; i < TRAIL_COUNT; i++) {
      const positions = new Float32Array(TRAIL_SEGMENTS * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.LineBasicMaterial({
        color: trailColors[i],
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(geo, mat);
      scene.add(line);
      trailLines.push(line);

      // Glowing energy leader orb at each stream origin near Logo
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.11, 12, 12),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? '#fde047' : '#67e8f9',
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending,
        })
      );
      scene.add(orb);
      trailTubes.push(orb);
    }

    // =========================================================================
    // 3. THREE SHATTERABLE HEXAGONAL CYBER BARRIERS (at z = -15, -31, -47)
    // =========================================================================
    const barrierZPositions = [-15, -31, -47];
    const hexOffsets: Array<[number, number]> = [[0, 0]];
    const hexStep = 1.65;
    for (let ring = 1; ring <= 2; ring++) {
      for (let side = 0; side < 6; side++) {
        const a1 = (side / 6) * Math.PI * 2;
        const a2 = ((side + 2) / 6) * Math.PI * 2;
        for (let step = 0; step < ring; step++) {
          const x =
            Math.cos(a1) * hexStep * ring +
            Math.cos(a2) * hexStep * step;
          const y =
            Math.sin(a1) * hexStep * ring +
            Math.sin(a2) * hexStep * step;
          hexOffsets.push([x, y]);
        }
      }
    }

    const hexGeo = new THREE.CylinderGeometry(0.84, 0.84, 0.22, 6);
    hexGeo.rotateX(Math.PI / 2);

    const barriers: CyberBarrier[] = barrierZPositions.map((bz, bIdx) => {
      const bGroup = new THREE.Group();
      bGroup.position.set(0, 0.35, bz);
      scene.add(bGroup);

      const shards: HexShard[] = hexOffsets.map(([hx, hy], sIdx) => {
        const isCore = sIdx === 0;
        const mat = new THREE.MeshPhysicalMaterial({
          color: isCore ? '#7f1d1d' : '#0f172a',
          emissive: bIdx === 1 ? '#0891b2' : bIdx === 2 ? '#d97706' : '#dc2626',
          emissiveIntensity: isCore ? 1.2 : 0.65,
          metalness: 0.75,
          roughness: 0.2,
          transparent: true,
          opacity: 0.82,
        });
        const mesh = new THREE.Mesh(hexGeo, mat);
        mesh.position.set(hx, hy, 0);
        bGroup.add(mesh);

        const dir = new THREE.Vector3(
          hx === 0 && hy === 0 ? (Math.random() - 0.5) * 2 : hx,
          hx === 0 && hy === 0 ? (Math.random() - 0.5) * 2 : hy,
          -0.6 - Math.random() * 1.4
        ).normalize();

        return {
          mesh,
          basePos: new THREE.Vector3(hx, hy, 0),
          vel: dir.multiplyScalar(12 + Math.random() * 14),
          rotVel: new THREE.Vector3(
            (Math.random() - 0.5) * 9,
            (Math.random() - 0.5) * 9,
            (Math.random() - 0.5) * 9
          ),
        };
      });

      const ringMat = new THREE.MeshBasicMaterial({
        color: bIdx === 2 ? '#fde047' : '#22d3ee',
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.06, 12, 72), ringMat);
      bGroup.add(ring);

      return {
        z: bz,
        group: bGroup,
        shards,
        ring,
        shattered: false,
        shatterElapsed: 0,
      };
    });

    // Pool of 3D impact shockwave rings
    const shockwaves: ShockwavePulse[] = Array.from({ length: 4 }, (_, idx) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.09, 16, 72),
        new THREE.MeshBasicMaterial({
          color: idx % 2 === 0 ? '#67e8f9' : '#fde047',
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
        })
      );
      mesh.visible = false;
      scene.add(mesh);
      return { mesh, active: false, age: 0 };
    });

    const spawnShockwave = (z: number) => {
      const slot = shockwaves.find((s) => !s.active) || shockwaves[0];
      slot.active = true;
      slot.age = 0;
      slot.mesh.visible = true;
      slot.mesh.position.set(0, 0.4, z);
      slot.mesh.scale.setScalar(0.5);
      (slot.mesh.material as THREE.MeshBasicMaterial).opacity = 1;
    };

    // =========================================================================
    // 4. WARP STARFIELD / QUANTUM PARTICLES
    // =========================================================================
    const particleTex = createGlowParticleTexture();
    const particleCount = 1100;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const cGold = new THREE.Color('#fde047');
    const cCyan = new THREE.Color('#22d3ee');
    const cRed = new THREE.Color('#fb7185');

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 24;
      const angle = Math.random() * Math.PI * 2;
      pPositions[i * 3] = Math.cos(angle) * radius;
      pPositions[i * 3 + 1] = Math.sin(angle) * radius * 0.75;
      pPositions[i * 3 + 2] = 10 - Math.random() * 125;

      const c = i % 3 === 0 ? cGold : i % 3 === 1 ? cCyan : cRed;
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.34,
      map: particleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // =========================================================================
    // 5. NEXT-GEN MODERN TECH WORLD (Revealed around z = -76 in Dawn & Showcase)
    // =========================================================================
    const techWorldGroup = new THREE.Group();
    techWorldGroup.position.set(0, 0, -76);
    techWorldGroup.visible = false;
    scene.add(techWorldGroup);

    // Infinite Quantum Cyber Floor Grid
    const cyberGrid = new THREE.GridHelper(130, 52, '#22d3ee', '#0e7490');
    cyberGrid.position.set(0, -4.4, -10);
    const gridMats = Array.isArray(cyberGrid.material)
      ? cyberGrid.material
      : [cyberGrid.material];
    gridMats.forEach((m) => {
      m.transparent = true;
      m.opacity = 0.55;
    });
    techWorldGroup.add(cyberGrid);

    // Golden Horizon Rings
    const horizonRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(13, 0.07, 12, 120),
      new THREE.MeshBasicMaterial({
        color: '#fbbf24',
        transparent: true,
        opacity: 0.5,
      })
    );
    horizonRing1.rotation.x = Math.PI / 2;
    horizonRing1.position.set(0, -4.35, -4);
    techWorldGroup.add(horizonRing1);

    // 3D Neural AI Constellation (Nodes + Connections)
    const nodeCount = 54;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeo = new THREE.IcosahedronGeometry(0.16, 1);
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: '#67e8f9' });
    const nodeMatGold = new THREE.MeshBasicMaterial({ color: '#fde047' });

    for (let i = 0; i < nodeCount; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const x = side * (6.5 + Math.random() * 14);
      const y = -2.5 + Math.random() * 9.5;
      const z = 8 - Math.random() * 28;
      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      const nodeMesh = new THREE.Mesh(
        nodeGeo,
        i % 3 === 0 ? nodeMatGold : nodeMatCyan
      );
      nodeMesh.position.copy(pos);
      techWorldGroup.add(nodeMesh);
    }

    const lineVerts: number[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 7.2) {
          lineVerts.push(
            nodePositions[i].x,
            nodePositions[i].y,
            nodePositions[i].z,
            nodePositions[j].x,
            nodePositions[j].y,
            nodePositions[j].z
          );
        }
      }
    }
    const neuralGeo = new THREE.BufferGeometry();
    neuralGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(lineVerts, 3)
    );
    const neuralLines = new THREE.LineSegments(
      neuralGeo,
      new THREE.LineBasicMaterial({
        color: '#22d3ee',
        transparent: true,
        opacity: 0.42,
        blending: THREE.AdditiveBlending,
      })
    );
    techWorldGroup.add(neuralLines);

    // Holographic Data Light Pillars flanking the Modern Tech Horizon
    const pillarGeo = new THREE.CylinderGeometry(0.18, 0.42, 12, 16, 1, true);
    for (let i = 0; i < 16; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const lane = Math.floor(i / 2);
      const px = side * (8.2 + (lane % 4) * 3.4);
      const pz = 6 - lane * 3.5;
      const pMat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? '#fbbf24' : '#22d3ee',
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const col = new THREE.Mesh(pillarGeo, pMat);
      col.position.set(px, 1.5, pz);
      techWorldGroup.add(col);
    }

    // =========================================================================
    // 6. ANIMATION LOOP (60fps Driven by frameRef)
    // =========================================================================
    let rafId = 0;
    const clock = new THREE.Clock();
    const bgIdleColor = new THREE.Color('#230306');
    const bgWarpColor = new THREE.Color('#04091a');
    const bgTechColor = new THREE.Color('#020b1c');

    const resetBarriers = () => {
      for (const b of barriers) {
        b.shattered = false;
        b.shatterElapsed = 0;
        b.group.visible = true;
        (b.ring.material as THREE.MeshBasicMaterial).opacity = 0.85;
        b.ring.scale.setScalar(1);
        for (const s of b.shards) {
          s.mesh.position.copy(s.basePos);
          s.mesh.rotation.set(0, 0, 0);
          (s.mesh.material as THREE.MeshPhysicalMaterial).opacity = 0.82;
        }
      }
    };

    let prevStage = frameRef.current.stage;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const dt = Math.min(0.05, clock.getDelta());
      const t = clock.elapsedTime;
      const state = frameRef.current;

      if (state.stage === 'idle' && prevStage !== 'idle') {
        resetBarriers();
      }
      prevStage = state.stage;

      const p = state.progress;

      // Dynamic Logo Z & Y position + Camera choreography
      let targetLogoZ = 0;
      let targetLogoY = 0.45 + Math.sin(t * 1.6) * 0.14;
      let targetLogoScale = 1.0;
      let targetCamX = Math.sin(t * 0.5) * 0.22;
      let targetCamY = 0.55 + Math.cos(t * 0.4) * 0.12;
      let targetCamZ = 8.8;
      let targetFov = 48;
      let spinSpeed = 0.45;
      let targetBloom = 0.34;

      if (state.stage === 'idle') {
        const handBoost = state.activeHandCount * 0.12;
        spinSpeed = 0.45 + handBoost;
        targetBloom = 0.34 + handBoost * 0.18;
        techWorldGroup.visible = false;
        (scene.background as THREE.Color).lerp(bgIdleColor, 0.08);
        (scene.fog as THREE.FogExp2).color.lerp(bgIdleColor, 0.08);
      } else if (state.stage === 'ignition') {
        const localP = Math.min(1, p / 0.19);
        targetLogoZ = -localP * 4.5;
        targetLogoY = 0.45 * (1 - localP * 0.2);
        targetCamZ = 8.8 - localP * 2.2;
        targetFov = 48 + localP * 10;
        spinSpeed = 1.6 + localP * 4.2;
        targetBloom = 0.48 + localP * 0.18;
        techWorldGroup.visible = false;
        (scene.background as THREE.Color).lerp(bgWarpColor, 0.06);
        (scene.fog as THREE.FogExp2).color.lerp(bgWarpColor, 0.06);
      } else if (state.stage === 'breakthrough') {
        const localP = Math.max(0, Math.min(1, (p - 0.19) / 0.635));
        targetLogoZ = -4.5 - localP * 52;
        targetLogoY = 0.35 + Math.sin(t * 5.2) * 0.18;
        targetCamX = Math.sin(t * 2.2) * 0.75;
        targetCamY = 0.65 + Math.cos(t * 1.9) * 0.35;
        targetCamZ = targetLogoZ + 7.2;
        targetFov = 60 + Math.sin(localP * Math.PI) * 8;
        spinSpeed = 5.5;
        targetBloom = 0.62;
        techWorldGroup.visible = localP > 0.65;
        (scene.background as THREE.Color).lerp(bgWarpColor, 0.1);
        (scene.fog as THREE.FogExp2).color.lerp(bgWarpColor, 0.1);
      } else if (state.stage === 'dawn') {
        const localP = Math.max(0, Math.min(1, (p - 0.825) / 0.175));
        targetLogoZ = -56.5 - localP * 9.5;
        targetLogoY = 0.35 + localP * 2.75;
        targetLogoScale = 1.0 - localP * 0.18;
        targetCamX = 0;
        targetCamY = 0.85;
        targetCamZ = -52.5;
        targetFov = 62 - localP * 15;
        spinSpeed = 4.2 - localP * 3.0;
        targetBloom = 0.78 - localP * 0.42;
        techWorldGroup.visible = true;
        (scene.background as THREE.Color).lerp(bgTechColor, 0.12);
        (scene.fog as THREE.FogExp2).color.lerp(bgTechColor, 0.12);
      } else {
        // Showcase (6.3s+) — position Logo cleanly in unobstructed upper zone
        targetLogoZ = -66;
        targetLogoY = 3.12 + Math.sin(t * 1.3) * 0.08;
        targetLogoScale = 0.82;
        targetCamX = Math.sin(t * 0.35) * 0.45;
        targetCamY = 0.85 + Math.cos(t * 0.3) * 0.12;
        targetCamZ = -52.5;
        targetFov = 46;
        spinSpeed = 0.55;
        targetBloom = 0.36;
        techWorldGroup.visible = true;
        (scene.background as THREE.Color).lerp(bgTechColor, 0.12);
        (scene.fog as THREE.FogExp2).color.lerp(bgTechColor, 0.12);
      }

      // Smoothly move Logo & Camera
      logoGroup.position.z += (targetLogoZ - logoGroup.position.z) * 0.18;
      logoGroup.position.y += (targetLogoY - logoGroup.position.y) * 0.14;
      const nextScale =
        logoGroup.scale.x + (targetLogoScale - logoGroup.scale.x) * 0.14;
      logoGroup.scale.setScalar(nextScale);
      wingsGroup.rotation.z -= dt * spinSpeed;
      outerHoloRing.rotation.z += dt * (spinSpeed * 0.7);
      outerHoloRing.rotation.x = Math.sin(t * 0.9) * 0.25;
      innerGoldRing.rotation.z -= dt * (spinSpeed * 0.9);
      innerGoldRing.rotation.y = Math.cos(t * 0.8) * 0.22;
      coreGlowMesh.rotation.y += dt * 2.4;

      camera.position.x += (targetCamX - camera.position.x) * 0.12;
      camera.position.y += (targetCamY - camera.position.y) * 0.12;
      camera.position.z += (targetCamZ - camera.position.z) * 0.16;
      camera.fov += (targetFov - camera.fov) * 0.12;
      camera.updateProjectionMatrix();
      camera.lookAt(
        logoGroup.position.x * 0.3,
        state.stage === 'showcase' ? 0.25 : logoGroup.position.y,
        logoGroup.position.z - 6
      );

      keyLight.position.set(3, 5, logoGroup.position.z + 5);
      cyanRimLight.position.set(-4, -2, logoGroup.position.z - 3);
      bloomPass.strength += (targetBloom - bloomPass.strength) * 0.14;

      // Update 6 Volumetric Light Streams trailing the Spearhead Logo
      const isWarp = state.stage === 'ignition' || state.stage === 'breakthrough';
      const trailLength = isWarp ? 14 : state.stage === 'showcase' ? 9.5 : 5.2;
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const line = trailLines[i];
        const orb = trailTubes[i];
        const posAttr = line.geometry.getAttribute('position') as THREE.BufferAttribute;
        const baseAngle = (i / TRAIL_COUNT) * Math.PI * 2 + t * (isWarp ? 4.8 : 0.9);

        for (let s = 0; s < TRAIL_SEGMENTS; s++) {
          const frac = s / (TRAIL_SEGMENTS - 1);
          const spiralAngle = baseAngle - frac * (isWarp ? 2.4 : 1.1);
          const spreadR =
            state.stage === 'idle'
              ? 1.55 + frac * 2.4
              : state.stage === 'showcase'
                ? 1.3 + frac * 6.5
                : 0.45 + frac * 1.65;
          const x =
            logoGroup.position.x + Math.cos(spiralAngle) * spreadR;
          const y =
            state.stage === 'idle'
              ? logoGroup.position.y + Math.sin(spiralAngle) * spreadR * 0.65 - frac * 3.8
              : state.stage === 'showcase'
                ? logoGroup.position.y - frac * 4.5 + Math.sin(spiralAngle) * spreadR * 0.35
                : logoGroup.position.y + Math.sin(spiralAngle) * spreadR * 0.85;
          const z =
            state.stage === 'idle'
              ? logoGroup.position.z + frac * 3.2
              : state.stage === 'showcase'
                ? logoGroup.position.z - frac * 5.0
                : logoGroup.position.z + frac * trailLength;

          posAttr.setXYZ(s, x, y, z);
          if (s === 1) {
            orb.position.set(x, y, z);
          }
        }
        posAttr.needsUpdate = true;
      }

      // Check & Animate 3 Hexagonal Cyber Barriers
      for (const b of barriers) {
        if (!b.shattered && logoGroup.position.z <= b.z + 0.85) {
          b.shattered = true;
          b.shatterElapsed = 0;
          spawnShockwave(b.z);
        }

        if (b.shattered) {
          b.shatterElapsed += dt;
          const fade = Math.max(0, 1 - b.shatterElapsed / 1.2);
          (b.ring.material as THREE.MeshBasicMaterial).opacity = fade * 0.9;
          b.ring.scale.setScalar(1 + b.shatterElapsed * 4.5);

          for (const s of b.shards) {
            s.mesh.position.addScaledVector(s.vel, dt);
            s.mesh.rotation.x += s.rotVel.x * dt;
            s.mesh.rotation.y += s.rotVel.y * dt;
            s.mesh.rotation.z += s.rotVel.z * dt;
            (s.mesh.material as THREE.MeshPhysicalMaterial).opacity = fade * 0.85;
          }
          if (b.shatterElapsed > 1.35) {
            b.group.visible = false;
          }
        } else {
          b.ring.rotation.z += dt * 0.6;
        }
      }

      // Update 3D Shockwave Pulses
      for (const sw of shockwaves) {
        if (!sw.active) continue;
        sw.age += dt;
        const progressSw = sw.age / 0.85;
        if (progressSw >= 1) {
          sw.active = false;
          sw.mesh.visible = false;
        } else {
          sw.mesh.scale.setScalar(0.5 + progressSw * 12);
          (sw.mesh.material as THREE.MeshBasicMaterial).opacity = 1 - progressSw;
        }
      }

      // Animate Warp Particles
      const pAttr = particleGeo.getAttribute('position') as THREE.BufferAttribute;
      const speedZ = isWarp ? 42 : state.stage === 'showcase' ? 2.5 : 1.2;
      for (let i = 0; i < particleCount; i++) {
        let pz = pAttr.getZ(i) + dt * speedZ;
        if (pz > camera.position.z + 8) {
          pz = camera.position.z - 115;
        }
        pAttr.setZ(i, pz);
      }
      pAttr.needsUpdate = true;

      if (techWorldGroup.visible) {
        neuralLines.rotation.y = Math.sin(t * 0.25) * 0.08;
        horizonRing1.rotation.z += dt * 0.15;
      }

      composer.render();
    };

    animate();

    const ro = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth || 1280;
      const h = container.clientHeight || 720;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
      bloomPass.setSize(w, h);
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      disposeObject3D(scene);
      particleTex.dispose();
      envTarget.dispose();
      composer.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      logoSpriteMatRef.current = null;
    };
  }, [frameRef, isPreview]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
}
