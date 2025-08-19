import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Target(props) {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/target.gltf");

  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.rotation.y += 0.002; // Smooth rotation
    }
  });

  return (
    <group ref={targetRef} {...props} scale={1.2}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/target.gltf");
