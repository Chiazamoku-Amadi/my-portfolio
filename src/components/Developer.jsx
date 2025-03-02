import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// eslint-disable-next-line react/prop-types
const Developer = ({ animationName, ...props }) => {
  const groupRef = useRef();

  // Loads the base 3D character model
  const { nodes, materials } = useGLTF("/models/animations/developer.glb");

  // Loads animations from 3 different FBX files
  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: beckoningAnimation } = useFBX(
    "/models/animations/beckoning.fbx"
  );
  const { animations: armGestureAnimation } = useFBX(
    "/models/animations/arm_gesture.fbx"
  );

  // To remove the prefix Mixamo adds to the track names
  const cleanAnimationTrackNames = (animations, prefixToRemove) => {
    animations.forEach((animation) => {
      animation.tracks.forEach((track) => {
        if (track.name.startsWith(prefixToRemove)) {
          track.name = track.name.replace(prefixToRemove, "");
        }
      });
    });
  };

  cleanAnimationTrackNames(idleAnimation, "mixamorig");
  cleanAnimationTrackNames(beckoningAnimation, "mixamorig");
  cleanAnimationTrackNames(armGestureAnimation, "mixamorig");

  // Manually renaming the animations
  idleAnimation[0].name = "idle";
  beckoningAnimation[0].name = "beckoning";
  armGestureAnimation[0].name = "arm_gesture";

  // Connects animations to the character model using the useAnimations hook
  const { actions } = useAnimations(
    [idleAnimation[0], beckoningAnimation[0], armGestureAnimation[0]],
    groupRef
  );

  // Changes the animation when the animationName prop changes
  useEffect(() => {
    if (actions && actions[animationName])
      actions[animationName].reset().fadeIn(0.5).play();

    // Rotate only for the "idle" animation
    if (animationName === "idle") {
      groupRef.current.rotation.x = THREE.MathUtils.degToRad(15); // 15-degree along the x-axis
      // You can do same for other axes as well
    } else {
      groupRef.current.rotation.x = 0; // Reset rotation for other animations
    }

    return () => {
      if (actions && actions[animationName])
        actions[animationName].fadeOut(0.5);
    };
  }, [animationName, actions]);

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");

export default Developer;
