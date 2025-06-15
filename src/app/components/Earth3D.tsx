import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";

function EarthTextureLoader() {
  const texture = useLoader(TextureLoader, "/earth (dark) 1.jpg");
  const meshRef = useRef<Mesh>(null);

  const isDragging = useRef(false);
  const prevMouse = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  const autoRotate = useRef(true); // 🟢 Toggle for auto-rotation

  const ROTATION_SENSITIVITY = 0.0025;
  const FRICTION = 0.95;
  const AUTO_ROTATE_SPEED = 0.001;

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 🛑 Ignore drag if interacting with DOM (not canvas)
      if (
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("button") ||
        target.closest("select") ||
        target.closest("[data-ui-ignore]") || // optional: custom attribute for exclusions
        !target.closest("canvas") // not the 3D canvas
      ) {
        return;
      }

      isDragging.current = true;
      prevMouse.current = { x: e.clientX, y: e.clientY };
      velocity.current = { x: 0, y: 0 }; // reset velocity
      autoRotate.current = false; // ⛔ Stop auto-rotate when user interacts
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      // allow spin to continue from velocity; autoRotate will resume after it's done
    };

    const handlePointerMove = (e: MouseEvent) => {
      if (!isDragging.current || !meshRef.current) return;

      const deltaX = e.clientX - prevMouse.current.x;
      const deltaY = e.clientY - prevMouse.current.y;

      meshRef.current.rotation.y += deltaX * ROTATION_SENSITIVITY;
      meshRef.current.rotation.x += deltaY * ROTATION_SENSITIVITY;

      velocity.current = {
        x: deltaY * ROTATION_SENSITIVITY,
        y: deltaX * ROTATION_SENSITIVITY,
      };

      prevMouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  // 🌪️ Animate frame: spin + velocity + auto-rotation
  useFrame(() => {
    if (!meshRef.current) return;

    // 🌀 Inertia spin
    if (
      !isDragging.current &&
      (velocity.current.x !== 0 || velocity.current.y !== 0)
    ) {
      meshRef.current.rotation.y += velocity.current.y;
      meshRef.current.rotation.x += velocity.current.x;

      velocity.current.y *= FRICTION;
      velocity.current.x *= FRICTION;

      if (Math.abs(velocity.current.y) < 0.0001) velocity.current.y = 0;
      if (Math.abs(velocity.current.x) < 0.0001) velocity.current.x = 0;
    }

    // ✅ Resume auto-rotation only when not dragging and velocity has stopped
    if (
      !isDragging.current &&
      velocity.current.x === 0 &&
      velocity.current.y === 0
    ) {
      autoRotate.current = true;
    }

    if (autoRotate.current) {
      meshRef.current.rotation.y += AUTO_ROTATE_SPEED;
    }
  });

  // Set initial rotation
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 0.08;
      meshRef.current.rotation.x = -0.45;
    }
  }, []);

  return (
    <mesh ref={meshRef} position={[0, -2.25, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Earth3D() {
  return (
    <div className="absolute w-[100vw] aspect-square">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <EarthTextureLoader />
        <ambientLight intensity={10} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}

export default Earth3D;
