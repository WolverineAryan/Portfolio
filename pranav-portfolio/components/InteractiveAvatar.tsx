"use client";

import { useRef } from "react";

export default function InteractiveAvatar() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;

    ref.current!.style.transform = `
      rotateY(${x}deg)
      rotateX(${-y}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    ref.current!.style.transform = `
      rotateY(0deg)
      rotateX(0deg)
      scale(1)
    `;
  };

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={ref}
        className="transition-transform duration-300 ease-out"
      >
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-[280px] md:w-[350px] rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}