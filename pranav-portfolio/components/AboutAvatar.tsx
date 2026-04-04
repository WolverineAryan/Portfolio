"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function AboutAvatar() {
  return (
    <div className="w-full h-[350px] md:h-[450px]">

      <Canvas camera={{ position: [0, 0, 5] }}>
        
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1.5} />
        <pointLight position={[-2, -2, -2]} intensity={1} />

        {/* Floating Object */}
        <Float
          speed={2}
          rotationIntensity={1.2}
          floatIntensity={2}
        >
          <mesh>
            <icosahedronGeometry args={[2, 1]} />
            <meshStandardMaterial
              color="#22c55e"
              wireframe
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>
        </Float>

      </Canvas>

    </div>
  );
}