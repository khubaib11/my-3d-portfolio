import  {  useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import { easing } from 'maath';
export default function HeroCamera({children, isMobile, isTablet, isSmallScreen}) {
    const groupRef = useRef();
    useFrame((state,delta) => {
       isMobile? easing.damp3(state.camera.position, [0, 0, 12], 0.2, delta):easing.damp3(state.camera.position, [0, 4, 13], 0.2, delta);
       if(!isMobile){
        easing.dampE(groupRef.current.rotation, [-state.pointer.y/3,state.pointer.x/5,0], 0.25, delta);
       }
    });

  return (
  <group ref={groupRef}>
    {children}
  </group>
  )
}
