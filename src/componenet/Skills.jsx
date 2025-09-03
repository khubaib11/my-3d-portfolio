import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

// Simple Canvas Loader Component for Vanilla Three.js
const SimpleCanvasLoader = ({ isLoading, skillColor }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120px",
          height: "120px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "50%",
          zIndex: 10,
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            border: "3px solid rgba(255, 255, 255, 0.2)",
            borderTop: `3px solid ${skillColor || "#3498db"}`,
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            animation: "spin 1s linear infinite",
          }}
        />
        <p
          style={{
            fontSize: 10,
            color: "#F1F1F1",
            fontWeight: 600,
            marginTop: 8,
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          Loading{dots}
        </p>
      </div>

      {/* Keyframes for the spinner */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

const SkillOrb = ({ skill, index }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to true at start
    setIsLoading(true);

    // 🛡️ Early exit check for robust error handling
    if (!mountRef.current) {
      console.error("Mount point is not available.");
      setIsLoading(false);
      return;
    }

    // Delay to show loading state with staggered timing
    const setupDelay = setTimeout(() => {
      try {
        // SCENE SETUP
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        camera.position.z = 3;

        // RENDERER SETUP
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });
        renderer.setSize(120, 120);
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // 🛡️ Ensure the renderer is only appended once
        if (mountRef.current && mountRef.current.children.length === 0) {
          mountRef.current.appendChild(renderer.domElement);
        }
        rendererRef.current = renderer;

        // MESHES AND LIGHTING
        const geometry = new THREE.SphereGeometry(0.8, 64, 64);
        const material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(skill.color),
          metalness: 0.7,
          roughness: 0.2,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          transparent: true,
          opacity: 0.9,
          envMapIntensity: 1.0,
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.castShadow = true;
        sphere.receiveShadow = true;

        const wireframeGeometry = new THREE.SphereGeometry(0.82, 32, 32);
        const wireframeMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.1,
        });
        const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);

        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 512;
        const context = canvas.getContext("2d");

        // 🛡️ Null check for context
        if (!context) {
          console.error("Could not get 2D context from canvas");
          setIsLoading(false);
          return;
        }

        context.clearRect(0, 0, 512, 512);
        const gradient = context.createRadialGradient(
          256,
          256,
          0,
          256,
          256,
          256
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, 512, 512);
        context.fillStyle = "#ffffff";
        context.shadowColor = "rgba(0, 0, 0, 0.5)";
        context.shadowBlur = 4;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.font = "bold 140px Arial, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";

        // 🛡️ Safe text measurement with null checks
        const iconText = skill.icon || "?";
        const metrics = context.measureText(iconText);
        let actualHeight = 0;

        // Check if metrics and properties exist before accessing
        if (
          metrics &&
          metrics.actualBoundingBoxAscent !== undefined &&
          metrics.actualBoundingBoxAscent !== null &&
          metrics.actualBoundingBoxDescent !== undefined &&
          metrics.actualBoundingBoxDescent !== null
        ) {
          actualHeight =
            metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        } else {
          // Fallback: estimate height based on font size
          actualHeight = 140; // approximate height based on font size
        }

        context.fillText(iconText, 256, 256 + actualHeight * 0.1);

        // 🛡️ Safe texture creation
        let texture;
        try {
          texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;
        } catch (error) {
          console.warn(`Texture creation failed for ${skill.name}:`, error);
          texture = new THREE.Texture();
        }

        const iconMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          alphaTest: 0.01,
          side: THREE.DoubleSide,
        });
        const iconGeometry = new THREE.PlaneGeometry(1.4, 1.4);
        const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
        iconMesh.position.set(0, 0, 0.82);
        iconMesh.lookAt(camera.position);

        const group = new THREE.Group();
        group.add(sphere);
        group.add(wireframe);
        group.add(iconMesh);
        scene.add(group);
        meshRef.current = group;

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 50;
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 8;
        }
        particlesGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        const particlesMaterial = new THREE.PointsMaterial({
          color: skill.color,
          size: 0.02,
          transparent: true,
          opacity: 0.6,
        });
        const particles = new THREE.Points(
          particlesGeometry,
          particlesMaterial
        );
        scene.add(particles);

        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        scene.add(ambientLight);
        const pointLight1 = new THREE.PointLight(0xffffff, 1.2, 100);
        pointLight1.position.set(3, 3, 3);
        pointLight1.castShadow = true;
        pointLight1.shadow.mapSize.width = 1024;
        pointLight1.shadow.mapSize.height = 1024;
        scene.add(pointLight1);
        const pointLight2 = new THREE.PointLight(skill.color, 0.8, 100);
        pointLight2.position.set(-2, 2, -2);
        scene.add(pointLight2);
        const rimLight = new THREE.PointLight(0xffffff, 0.5, 100);
        rimLight.position.set(0, 0, -5);
        scene.add(rimLight);

        // ANIMATION LOOP
        let time = 0;
        let isAnimating = true;

        const animate = () => {
          // 🛡️ Check if component is still mounted and should continue animating
          if (!isAnimating || !mountRef.current) {
            return;
          }

          frameRef.current = requestAnimationFrame(animate);
          time += 0.01;

          // 🛡️ Safe mesh manipulation with null checks
          if (meshRef.current && meshRef.current.parent) {
            meshRef.current.position.y = Math.sin(time + index) * 0.1;
            meshRef.current.rotation.y = Math.sin(time) * (Math.PI / 4);
            meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;

            const targetRotationX = (mouseRef.current?.y || 0) * 0.2;
            const targetRotationY = (mouseRef.current?.x || 0) * 0.2;
            meshRef.current.rotation.x +=
              (targetRotationX - meshRef.current.rotation.x) * 0.05;
            meshRef.current.rotation.z +=
              (targetRotationY - meshRef.current.rotation.z) * 0.05;

            const targetScale = isHovered ? 1.5 : 1.4;
            const targetEmissiveIntensity = isHovered ? 0.2 : 0;
            const targetWireframeOpacity = isHovered ? 0.3 : 0.1;

            meshRef.current.scale.lerp(
              new THREE.Vector3(targetScale, targetScale, targetScale),
              0.1
            );

            // 🛡️ Safe material access with null checks
            if (sphere?.material) {
              sphere.material.emissiveIntensity +=
                (targetEmissiveIntensity - sphere.material.emissiveIntensity) *
                0.1;

              if (isHovered && sphere.material.emissiveIntensity > 0.01) {
                sphere.material.emissive.setHex(skill.color);
              } else if (
                !isHovered &&
                sphere.material.emissiveIntensity < 0.01
              ) {
                sphere.material.emissive.setHex(0x000000);
              }
            }

            if (wireframe?.material) {
              wireframe.material.opacity +=
                (targetWireframeOpacity - wireframe.material.opacity) * 0.1;
            }
          }

          // 🛡️ Safe particles manipulation
          if (particles && particles.geometry?.attributes?.position) {
            particles.rotation.y += 0.001;
            const positions = particles.geometry.attributes.position.array;
            if (positions) {
              for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += Math.sin(time + i) * 0.001;
              }
              particles.geometry.attributes.position.needsUpdate = true;
            }
          }

          // 🛡️ Safe renderer check
          if (renderer && scene && camera) {
            try {
              renderer.render(scene, camera);
            } catch (error) {
              console.warn("Render error:", error);
              isAnimating = false;
            }
          }
        };

        // 🚀 Start animation
        animate();

        // MOUSE HANDLER with null check
        const handleMouseMove = (event) => {
          if (!mountRef.current) return;
          const rect = mountRef.current.getBoundingClientRect();
          mouseRef.current.x =
            ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouseRef.current.y =
            -((event.clientY - rect.top) / rect.height) * 2 + 1;
        };

        // 🛡️ Safe event listener addition
        if (mountRef.current) {
          mountRef.current.addEventListener("mousemove", handleMouseMove);
        }

        // 🧹 COMPREHENSIVE CLEANUP
        const cleanup = () => {
          // 🛑 Stop animation loop immediately
          isAnimating = false;
          if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
          }

          // 🔌 Remove event listener with null check
          if (mountRef.current) {
            mountRef.current.removeEventListener("mousemove", handleMouseMove);
          }

          // 🗑️ Dispose of all Three.js resources to prevent memory leaks
          geometry?.dispose();
          material?.dispose();
          wireframeGeometry?.dispose();
          wireframeMaterial?.dispose();
          iconGeometry?.dispose();
          iconMaterial?.dispose();
          texture?.dispose();
          particlesGeometry?.dispose();
          particlesMaterial?.dispose();

          // Dispose and remove all scene children
          scene.traverse((object) => {
            if (object.isMesh || object.isLine || object.isPoints) {
              object.geometry?.dispose();
              if (Array.isArray(object.material)) {
                object.material.forEach((mat) => mat?.dispose());
              } else {
                object.material?.dispose();
              }
            }
          });

          // 🖼️ Clean up the renderer
          if (rendererRef.current) {
            rendererRef.current.domElement?.remove();
            rendererRef.current.dispose();
          }
        };

        // Set loading to false after everything is set up
        setIsLoading(false);

        // Return cleanup function
        return cleanup;
      } catch (error) {
        console.error("Error setting up Three.js scene:", error);
        setIsLoading(false);
      }
    }, 300 + index * 100); // Staggered loading with base delay

    // Cleanup function for the timeout
    return () => {
      clearTimeout(setupDelay);
    };
  }, [skill, index]);

  return (
    <div className="relative group">
      <div
        ref={mountRef}
        className="w-[120px] h-[120px] cursor-pointer rounded-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          filter: isHovered
            ? "drop-shadow(0 0 20px rgba(79, 172, 254, 0.4))"
            : "none",
          transition: "filter 0.3s ease",
          pointerEvents: "auto",
        }}
      />

      {/* Simple Canvas Loader */}
      <SimpleCanvasLoader isLoading={isLoading} skillColor={skill.colorHex} />

      {/* Skill name */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
        <div className="bg-gray-900/95 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg border border-gray-700/50 whitespace-nowrap shadow-xl">
          {skill.name}
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${skill.colorHex} 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

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
    { name: "AWS", icon: "☁️", color: 0xff9900, colorHex: "#ff9900" },
  ];

  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-6xl mx-auto relative z-4">
      {isMobile ? (
        <></>
      ) : (
        <div className="mt-10 flex flex-row flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <SkillOrb key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
