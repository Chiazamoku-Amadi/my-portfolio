import { useGSAP } from "@gsap/react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";

const Computer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/ultrawide_monitor.glb");

  const texture = useVideoTexture(
    // eslint-disable-next-line react/prop-types
    props.texture ? props.texture : "/textures/project/project1.mp4"
  );

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [texture]);

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group
            rotation={[0, 0, Math.PI / 2]}
            scale={[19.412, 536.206, 242.198]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Screen_0.geometry}
              material={materials.Screen}
            >
              <meshBasicMaterial map={texture} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0_1.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Lights_0.geometry}
              material={materials.Lights}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/ultrawide_monitor.glb");

export default Computer;
