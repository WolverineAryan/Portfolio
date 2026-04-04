"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyClient({ project }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".fade-section");

    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen px-6 py-20 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* TITLE */}
      <div className="fade-section mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400">{project.tagline}</p>
      </div>

      {/* PROBLEM */}
      <div className="fade-section mb-16">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>
        <p className="text-gray-300 leading-relaxed">
          {project.problem}
        </p>
      </div>

      {/* 🔥 SLIDER */}
      <div className="fade-section mb-24 overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 snap-x snap-mandatory px-2">
          {project.images?.map((img: string, i: number) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[420px] lg:min-w-[500px] snap-center flex-shrink-0"
            >
              <div className="rounded-2xl overflow-hidden bg-black/20 border border-white/10 hover:border-[var(--color-primary)] transition">
                <img
                  src={img}
                  alt="project screenshot"
                  className="w-full h-[480px] object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOLUTION */}
      <div className="fade-section mb-16">
        <h2 className="text-2xl font-semibold mb-3">Solution</h2>
        <p className="text-gray-300 leading-relaxed">
          {project.solution}
        </p>
      </div>

      {/* ROLE */}
      <div className="fade-section mb-16">
        <h2 className="text-2xl font-semibold mb-3">My Role</h2>
        <p className="text-gray-300 leading-relaxed">
          {project.role}
        </p>
      </div>

      {/* TECH STACK */}
      <div className="fade-section mb-16">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div className="fade-section mb-20 p-6 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-xl font-semibold mb-3">Impact</h2>
        <p className="text-gray-300 leading-relaxed">
          Designed and developed with a focus on usability, scalability,
          and real-world problem solving. This project demonstrates
          product thinking, technical execution, and user-centered design.
        </p>
      </div>

      {/* 🔥 BUTTON SECTION (FIXED + CENTERED) */}
      <div className="fade-section flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">

        <MagneticButton>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[var(--color-primary)] text-black rounded-full font-medium hover:scale-105 transition"
          >
            Github
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-500 rounded-full hover:border-[var(--color-primary)] hover:scale-105 transition"
          >
            Live Demo
          </a>
        </MagneticButton>

      </div>
    </motion.div>
  );
}