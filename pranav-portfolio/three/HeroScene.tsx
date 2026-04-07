"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#00C853"
          wireframe
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      dpr={[1, 1.5]} // ✅ limit resolution
      gl={{
        powerPreference: "low-power", // ✅ prevent GPU crash
        antialias: false, // ✅ reduce load
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />

      {/* Object */}
      <Sphere />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}