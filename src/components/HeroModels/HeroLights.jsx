import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={80}
        penumbra={1}
        color="white"
      >
        <primitive
          object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
          position={[1, 3, 4]}
          intensity={10}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />

        <pointLight position={[0, 3, 0]} intensity={12} color="#7209b7" />

        <pointLight position={[1, 3, -2]} intensity={12} color="#0d00a4" />
      </spotLight>
    </>
  );
};

export default HeroLights;
