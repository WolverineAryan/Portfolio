"use client";

import dynamic from "next/dynamic";

// ✅ Prevent SSR issues
const Scene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

export default function HeroCanvas() {
  return <Scene />;
}