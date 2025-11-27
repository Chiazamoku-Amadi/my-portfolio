import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";

const Target = (props) => {
  const targetRef = useRef();

  const { scene } = useGLTF("/models/bullseye_target.glb");

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1, // Repeats the animation forever
      yoyo: true,
    });
  });

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={0.12}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
