import React, { useRef } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  const targetPosition = [1, 2, 3]; // replace with your target position
const shadowPosition = [targetPosition[0], targetPosition[1], targetPosition[2] - 0.14];
const light1Position = [targetPosition[0] - 1, targetPosition[1] + 5, targetPosition[2] - 10];
const light2Position = [targetPosition[0], targetPosition[1], targetPosition[2] - 9];

return (
  <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    scae={10}
    rotation={[Math.PI / 2, 0, 0]}
    position={shadowPosition}
    targetPosition={targetPosition}
  >
    <RandomizedLight 
      amount={4}
      radius={9}
      intensity={0.55}
      ambient={0.25}
      position={light1Position}
      targetPosition={targetPosition}
    />
    <RandomizedLight 
      amount={4}
      radius={5}
      intensity={0.25}
      ambient={0.55}
      position={light2Position}
      targetPosition={targetPosition}
    />
  </AccumulativeShadows>
);
}

export default Backdrop