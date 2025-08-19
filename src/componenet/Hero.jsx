import { Canvas } from "@react-three/fiber";
import HackerRoom from "./HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
import Target from "./Target.jsx";
import { calculateSizes } from "../constant/index.js";
import ReactLogo from "./ReactLogo.jsx";
import Cube from "./Cube.jsx";
import Rings from "./Rings.jsx";
import HeroCamera from "./HeroCamera.jsx";
import Button from "./Button.jsx"
export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmallScreen, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col pt-24 sm:pt-32 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="sm:text-1xl text-3xl  text-white mb-4 font-generalsans">
            Hi, I am Khubaib <span className="waving-hand">👋</span>
          </h1>
          <p className="lg:text-5xl text-2xl font-bold text-gray-300">
             Building scalable, impactful products.
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0 pt-18 sm:pt-56">
        <Canvas className="w-full h-full ">
          <Suspense fallback={CanvasLoader}>
            <perspectiveCamera makeDefault position={[0, 0, 20]} />
              
            <HeroCamera isMobile={isMobile} isTablet={isTablet} isSmallScreen={isSmallScreen}>
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
            />

              </HeroCamera>

            <group scale={isMobile?1:1.1}>
              <Target position={sizes.targetPosition} isMobile={isMobile} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 w-full z-10 left-0 right-0 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's Work together" isBeam containerClass="sm:w-fit  sm:min-w-110 "/>
        </a>
      </div>
    </section>
  );
}
