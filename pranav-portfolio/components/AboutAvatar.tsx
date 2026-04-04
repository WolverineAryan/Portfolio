"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

export default function AboutAvatar() {
  return (
    <div className="w-full h-[350px] md:h-[450px]">
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <icosahedronGeometry args={[2, 1]} />
            <meshStandardMaterial
              color="#22c55e"
              wireframe
            />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}