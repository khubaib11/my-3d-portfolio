// BackgroundParticles.jsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Function to generate a circular texture
function generateCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "transparent");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
}

function Particle() {
  const particlesRef = useRef();
  const texture = useMemo(() => generateCircleTexture(), []);

  // 🔹 Change this number to control particle count
  const PARTICLE_COUNT = 1500;

  // Generate random particle positions & colors
  const { positions, colors, phases } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const phases = new Float32Array(PARTICLE_COUNT);

    const colorChoices = [
      new THREE.Color("#a020f0"), // purple
      new THREE.Color("#ffd700"), // golden
      new THREE.Color("#ffffff"), // white
      new THREE.Color("#1e90ff"), // dodger blue
      new THREE.Color("#32cd32"), // lime green
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Random color
      const color =
        colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Random phase for twinkle timing
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, colors, phases };
  }, [PARTICLE_COUNT]);

  // Animate particles (rotation + twinkle)
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        vertexColors
        size={0.05} // smaller & shinier
        transparent
        opacity={1.0}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export default function Particles() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "transparent",
      }}
    >
      <ambientLight intensity={0.5} />
      <Particle />
    </Canvas>
  );
}
