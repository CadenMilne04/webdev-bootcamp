import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function POSModel(props) {
  const { nodes, materials } = useGLTF("/assets/models/POSMachine.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.POS.geometry}
        material={materials.POS}
        position={[0, 1.076, 0.003]}
        rotation={[-2.732, 0, -Math.PI]}
        scale={[0.04, 0.04, 0.007]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/POSMachine.gltf");