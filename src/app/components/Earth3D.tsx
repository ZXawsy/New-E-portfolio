import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, SpotLight, useHelper, useTexture } from "@react-three/drei";
import { SpotLightHelper, PointLightHelper, Mesh, TextureLoader } from "three";

function SpotLightWithHelper() {
  const light = useRef<any>(null);

  useHelper(light, SpotLightHelper, "orange");

  return (
    <spotLight
      ref={light}
      intensity={80}
      color={"white"}
      position={[0, 4, 0]}
    />
  );
}

function PointLightWithHelper() {
  const light = useRef<any>(null);

  useHelper(light, PointLightHelper, 1, "red");

  return (
    <spotLight
      ref={light}
      intensity={80}
      color={"white"}
      position={[0, 2, 0]}
    />
  );
}

function EarthTextureLoader() {
  // const texture = useTexture("/moon.jpg");
  const texture = useTexture("/earth (dark) 1.jpg");
  return (
    <mesh position={[0, -1, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Earth3D() {
  return (
    <div className="absolute w-[100vw] aspect-square">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        {/* 3D Sphere (Earth) */}
        <EarthTextureLoader />

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping={false}
          enableRotate={true}
        />

        {/* Strong ambient light to illuminate everything evenly */}
        <ambientLight intensity={10} color={"white"} />
      </Canvas>
    </div>
  );
}

export default Earth3D;
