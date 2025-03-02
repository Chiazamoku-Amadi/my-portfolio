import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import RubiksCube from "../components/RubiksCube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import bgImage from "/assets/bgImage.png";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      className="relative sm:-mt-6 bg-no-repeat bg-contain flex flex-col min-h-screen w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-0 right-0">
        <img
          src="/assets/spotlight1.png"
          alt="spotlight"
          className="rounded-xl object-cover h-96 w-full"
        />
      </div>

      <div className="absolute top-0 left-0">
        <img
          src="/assets/spotlight1.png"
          alt="spotlight"
          className="rounded-xl object-cover h-96 w-full"
        />
      </div>

      <div className="flex flex-col gap-3 mx-auto mt-28 sm:mt-36 c-space">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-arapey">
          Hi! I am Chiazamoku <span className="waving-hand">👋🏼</span>
        </p>
        <p className="typewriter hero_tag text-gray_gradient">
          Building Solutions One Line of Code at a Time
        </p>
      </div>

      <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <RubiksCube position={sizes.rubiksCubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-10 c-space w-full">
        <a href="#about" className="w-fit">
          <Button
            name="A Glimpse Into My Journey"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
