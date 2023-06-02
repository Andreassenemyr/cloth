import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/hoodie.glb');

  const logoTexture = useTexture(snap.logoDecal);

  useFrame((state, delta) => easing.dampC(materials.FABRIC_3_FRONT_1850.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  console.log(nodes, materials);
  console.log(logoTexture); // log the logo texture filename to the console
  console.log(snap.isLogoTexture); // log the value of snap.isLogoTexture to the console


  return (
    <group key={stateString}>
      {Object.keys(nodes).filter(nodeName => nodeName.startsWith('Hoodie_FABRIC_3_FRONT_1850_0')).map((nodeName, i) => (
  <mesh
  key={i}
  castShadow
  geometry={nodes[nodeName].geometry}
  material={materials.FABRIC_3_FRONT_1850}
  material-roughness={1}
  dispose={null}
>
  {snap.isLogoTexture && (
    <Decal 
      position={[0, 12.2, 0.6]} // adjust the position of the Decal component
      rotation={[0, 0, 0]}
      scale={0.25}
      map={logoTexture}
      map-anisotropy={16}
      depthTest={false}
      depthWrite={true}
    />
  )}
</mesh>
))}

    </group>
  )
}

export default Shirt