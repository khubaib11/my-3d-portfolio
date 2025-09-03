import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

// Individual Skill Orb Component
function SkillOrb({ skill, position, index }) {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const { camera } = useThree();


  // Create icon texture
  const iconTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext("2d");

    // Create gradient background
    const gradient = context.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);

    // Draw icon text
    context.fillStyle = "#ffffff";
    context.shadowColor = "rgba(0, 0, 0, 0.5)";
    context.shadowBlur = 4;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.font = "bold 140px Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(skill.icon || "?", 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [skill.icon]);

  // Animation loop
  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // Float animation
      meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.1;

      // Rotation animation
      meshRef.current.rotation.y = Math.sin(time) * (Math.PI / 4);
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;

      // Mouse interaction
      const targetRotationX = mouse.y * 0.2;
      const targetRotationZ = mouse.x * 0.2;
      meshRef.current.rotation.x +=
        (targetRotationX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.z +=
        (targetRotationZ - meshRef.current.rotation.z) * 0.05;

      // Hover scaling
      const targetScale = isHovered ? 1.5 : 1.4;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }

    // Wireframe opacity animation
    if (wireframeRef.current) {
      const targetOpacity = isHovered ? 0.3 : 0.1;
      wireframeRef.current.material.opacity +=
        (targetOpacity - wireframeRef.current.material.opacity) * 0.1;
    }

  });

  return (
    <group position={position}>
      {/* Main sphere group */}
      <group
        ref={meshRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        {/* Main sphere */}
        // --- inside SkillOrb ---
        <mesh castShadow receiveShadow>
          {/* Smaller sphere */}
          <sphereGeometry args={[0.36, 55, 55]} />
          <meshPhysicalMaterial
            color={skill.color}
            metalness={0.7}
            roughness={0.2}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.9}
            envMapIntensity={1.0}
            emissive={isHovered ? skill.color : 0x000000}
            emissiveIntensity={isHovered ? 0.2 : 0}
          />
        </mesh>
        {/* Wireframe smaller */}
        <mesh ref={wireframeRef}>
          <sphereGeometry args={[0.38, 35, 35]} />
          <meshBasicMaterial
            color={0xffffff}
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
        {/* Icon plane smaller */}
        <mesh position={[0, 0, 0.381]}>
          <planeGeometry args={[0.6]} />
          <meshBasicMaterial
            map={iconTexture}
            transparent
            alphaTest={0.01}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>


      {/* Skill name tooltip */}
      {isHovered && (
        <Html
          position={[0, -1.2, 0]}
          center
          style={{
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg border border-gray-700/50 whitespace-nowrap shadow-xl">
            {skill.name}
          </div>
        </Html>
      )}
    </group>
  );
}
function SkillsScene({ skills, isMobile }) {
  const positions = useMemo(() => {
    const cols = isMobile ? 3 : 6; // 👈 mobile = 3 per row, desktop = 5
    const spacingX = isMobile ? 1.5 : 2; // 👈 adjust horizontal spacing
    const spacingY = 1;
    const skillPositions = [];

    skills.forEach((_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const x = (col - (cols - 1) / 2) * spacingX;
      const y = -(row * spacingY);
      skillPositions.push([x, y, 0]);
    });

    return skillPositions;
  }, [skills, isMobile]);

  return (
    <>
      <perspectiveCamera makeDefault position={[0, 0, 12]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={1.2} castShadow />
      <pointLight position={[-2, 2, -2]} intensity={0.8} color="#4facfe" />
      <pointLight position={[0, 0, -5]} intensity={0.5} />

      {/* Shift upward */}
      <group   position={isMobile ? [0, 3, 0] : [0, 1.8, 0]}>
        {skills.map((skill, index) => (
          <SkillOrb
            key={skill.name}
            skill={skill}
            position={positions[index]}
            index={index}
          />
        ))}
      </group>
    </>
  );
}



// Main Skills Component
export default function Skills() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const skills = [
    { name: "React", icon: "⚛️", color: 0x61dafb, colorHex: "#61dafb" },
    { name: "Next.js", icon: "▲", color: 0x000000, colorHex: "#000000" },
    { name: "JavaScript", icon: "JS", color: 0xf7df1e, colorHex: "#f7df1e" },
    { name: "TypeScript", icon: "TS", color: 0x3178c6, colorHex: "#3178c6" },
    { name: "Three.js", icon: "🎯", color: 0x049ef4, colorHex: "#049ef4" },
    { name: "Node.js", icon: "⬢", color: 0x339933, colorHex: "#339933" },
    { name: "Python", icon: "🐍", color: 0x3776ab, colorHex: "#3776ab" },
    { name: "MongoDB", icon: "🍃", color: 0x47a248, colorHex: "#47a248" },
    { name: "PostgreSQL", icon: "🐘", color: 0x336791, colorHex: "#336791" },
    { name: "Docker", icon: "🐳", color: 0x2496ed, colorHex: "#2496ed" },
    { name: "AWS", icon: "☁️", color: 0xff9900, colorHex: "#ff9900" }
  ];

  return (
    <section className="c-space my-2 ">

<div className="h-[500px] sm:h-[600px] lg:h-[700px] w-full">
        <Canvas
          shadows
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <SkillsScene skills={skills} isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
