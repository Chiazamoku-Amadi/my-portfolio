import { useGSAP } from "@gsap/react";
import { Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";

const RubiksCube = (props) => {
  const { nodes, materials } = useGLTF("/models/rubiks_cube.glb");

  const rubiksCubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1, // Infinite loop
        repeatDelay: 0.5, // Short pause between loops
      })
      .to(rubiksCubeRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`, // Rotate 360° around Y-axis (or faster if hovered)
        x: hovered ? "+=2" : `-=${Math.PI * 2}`, // Rotate 360° around X-axis in the opposite direction
        duration: 2.5,
        stagger: {
          each: 0.15, // Adds a small delay to make the animation smoother
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group
        rrotation={[Math.PI / 2, 0, 0]}
        scale={15}
        dispose={null}
        {...props}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            ref={rubiksCubeRef}
            castShadow
            receiveShadow
            geometry={nodes.RubixCube_RubixCube_0.geometry}
            material={materials.RubixCube}
            rotation={[Math.PI / 2, 0, 0]}
            scale={100}
            onPointerEnter={() => setHovered(true)}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/rubiks_cube.glb");

export default RubiksCube;
