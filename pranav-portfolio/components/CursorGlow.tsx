"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth interpolation (LERP)
  useEffect(() => {
    const smoothMove = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.08,
        y: prev.y + (position.y - prev.y) * 0.08,
      }));

      requestAnimationFrame(smoothMove);
    };

    smoothMove();
  }, [position]);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-100"
      style={{
        transform: `translate(${smoothPos.x - 100}px, ${smoothPos.y - 100}px)`,
      }}
    >
      <div
        className="w-[200px] h-[200px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(0,200,83,0.4), transparent 100%)",
        }}
      />
    </div>
  );
}