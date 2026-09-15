"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type BrandLogo = {
  name: string;
  icon: string;
};

const brands: BrandLogo[] = [
  { name: "Instagram", icon: "IG" },
  { name: "Facebook", icon: "FB" },
  { name: "YouTube", icon: "YT" },
  { name: "TikTok", icon: "TK" },
  { name: "LinkedIn", icon: "IN" },
  { name: "X", icon: "X" },
  { name: "Google", icon: "G" },
  { name: "Meta", icon: "M" },
  { name: "Shopify", icon: "S" },
  { name: "WordPress", icon: "W" },
  { name: "Amazon", icon: "A" },
  { name: "WhatsApp", icon: "WA" },
  { name: "Pinterest", icon: "P" },
  { name: "Snapchat", icon: "SC" },
  { name: "Reddit", icon: "R" },
  { name: "Spotify", icon: "SP" },
  { name: "Discord", icon: "D" },
  { name: "Telegram", icon: "TG" },
];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function Globe() {
  const group = useRef<THREE.Group>(null);

  const points = (() => {
    const count = 2400;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      "#ff2f92",
      "#7b5cff",
      "#16d9ff",
      "#4cff94",
      "#ffd166",
      "#ffffff",
    ];

    for (let i = 0; i < count; i++) {
      const u = seededRandom(i + 10);
      const v = seededRandom(i + 10000);

      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const radius = 2.12;

      const x =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      const y =
        radius *
        Math.cos(phi);

      const z =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const color = new THREE.Color(
        palette[
          Math.floor(
            seededRandom(i + 20000) * palette.length
          )
        ]
      );

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return {
      positions,
      colors,
    };
  })();

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += delta * 0.13;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.14,
      0.025
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      state.pointer.x * 0.16,
      0.025
    );
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points.positions, 3]}
          />

          <bufferAttribute
            attach="attributes-color"
            args={[points.colors, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.034}
          vertexColors
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      <mesh>
        <sphereGeometry args={[2.18, 64, 64]} />

        <meshBasicMaterial
          color="#675bff"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.26, 64, 64]} />

        <meshBasicMaterial
          color="#26dfff"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

type FlyingLogoProps = {
  brand: BrandLogo;
  index: number;
};

function FlyingLogo({
  brand,
  index,
}: FlyingLogoProps) {
  const angle =
    (index / brands.length) * Math.PI * 2;

  const radius =
    300 + (index % 4) * 72;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const rotate =
    (index % 2 === 0 ? -1 : 1) *
    (8 + (index % 5) * 3);

  return (
    <div
      className="dowork-intro-logo"
      style={
        {
          "--x": `${x}px`,
          "--y": `${y}px`,
          "--r": `${rotate}deg`,
          "--delay": `${index * 0.05}s`,
        } as React.CSSProperties
      }
    >
      <span>{brand.icon}</span>
      <small>{brand.name}</small>
    </div>
  );
}

export default function DOWORKIntro() {
  const [phase, setPhase] = useState<
    "globe" | "charge" | "explode" | "finish"
  >("globe");

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const chargeTimer = window.setTimeout(() => {
      setPhase("charge");
    }, 2500);

    const explodeTimer = window.setTimeout(() => {
      setPhase("explode");
    }, 5000);

    const finishTimer = window.setTimeout(() => {
      setPhase("finish");
    }, 10500);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 12000);

    return () => {
      window.clearTimeout(chargeTimer);
      window.clearTimeout(explodeTimer);
      window.clearTimeout(finishTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`dowork-intro dowork-intro-${phase}`}
      aria-hidden="true"
    >
      {/* Background atmosphere */}
      <div className="dowork-intro-bg" />

      {/* Film grain */}
      <div className="dowork-intro-noise" />

      {/* Global 3D globe */}
      <div className="dowork-intro-globe">
        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 38,
          }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <ambientLight intensity={1} />

          <pointLight
            position={[3, 2, 4]}
            intensity={15}
          />

          <pointLight
            position={[-3, -2, 2]}
            intensity={10}
          />

          <Globe />
        </Canvas>
      </div>

      {/* Global digital ecosystem */}
      <div className="dowork-logo-field">
        {brands.map((brand, index) => (
          <FlyingLogo
            key={`${brand.name}-${index}`}
            brand={brand}
            index={index}
          />
        ))}
      </div>

      {/* DOWORK identity */}
      <div className="dowork-intro-center">
        <div className="dowork-intro-kicker">
          DOWORK / GLOBAL DIGITAL
        </div>

        <div className="dowork-intro-name">
          <span>DO</span>
          <span>WORK</span>
        </div>

        <div className="dowork-intro-subtitle">
          STRATEGY · BRAND · TECHNOLOGY · GROWTH
        </div>
      </div>

      {/* Progress */}
      <div className="dowork-intro-progress">
        <span />
      </div>

      {/* Phase labels */}
      <div className="dowork-intro-corner dowork-intro-corner-left">
        GLOBAL DIGITAL ECOSYSTEM
      </div>

      <div className="dowork-intro-corner dowork-intro-corner-right">
        001 / 001
      </div>
    </div>
  );
}