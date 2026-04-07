"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#00C853" wireframe />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      <Sphere />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}