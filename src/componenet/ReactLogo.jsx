import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ReactLogo = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/react.glb');
  const { actions } = useAnimations(animations, group);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={group} {...props} scale={0.27}>
      <mesh
        geometry={nodes['React-Logo_Material002_0'].geometry}
        material={materials['Material.002']}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  );
};

useGLTF.preload('/models/react.glb')
export default ReactLogo;