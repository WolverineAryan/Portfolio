"use client";

import { motion } from "framer-motion";
import HeroCanvas from "@/three/HeroCanvas";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
  <HeroCanvas />
</div>
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-[var(--color-primary)] blur-[180px] opacity-20 rounded-full top-20"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black z-[-5]" />
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Pranav Thormise
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-gray-300"
      >
        Full Stack Developer (MERN) • UI/UX Designer
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-[var(--color-primary)] text-md md:text-lg"
      >
        Building scalable, user-centric applications with AI & modern web technologies
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-8 flex gap-4"
      >
        <button className="px-6 py-3 bg-[var(--color-primary)] text-black rounded-full hover:scale-110">
          View Work
        </button>

        <button className="px-6 py-3 border border-gray-600 rounded-full hover:border-[var(--color-primary)]">
          Contact
        </button>
      </motion.div>

    </section>
  );
}