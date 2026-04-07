"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

// ✅ Prevent SSR issues for 3D canvas
const HeroCanvas = dynamic(() => import("@/three/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  const handleViewWork = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Projects section not found");
      const fallbackSection = document.querySelector("section[id*='project']");
      if (fallbackSection) {
        fallbackSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black -z-[5]" />

      <div className="absolute w-[500px] h-[500px] bg-[var(--color-primary)] blur-[180px] opacity-20 rounded-full top-20 -z-[3]"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Pranav Thormise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          Full Stack Developer (MERN) • Software Developer • Data Analytics • UI/UX Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-[var(--color-primary)] text-md md:text-lg"
        >
          Building scalable, user-centric applications with AI & modern web technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <button
            onClick={handleViewWork}
            className="px-6 py-3 bg-[var(--color-primary)] text-black rounded-full hover:scale-110 transition-all duration-300 cursor-pointer font-medium"
          >
            View Work
          </button>

          <Link href="/contact">
            <button className="px-6 py-3 border border-gray-600 rounded-full hover:border-[var(--color-primary)] transition-all duration-300 cursor-pointer font-medium">
              Contact
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}