"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyClient({ project }: any) {
  const containerRef = useRef(null);

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
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen px-6 py-20 max-w-4xl mx-auto"
    >

      {/* Title */}
      <div className="fade-section mb-12">
        <h1 className="text-5xl font-bold mb-4">
          {project.title}
        </h1>
        <p className="text-gray-400">
          {project.tagline}
        </p>
      </div>

      {/* Problem */}
      <div className="fade-section mb-10">
        <h2 className="text-2xl font-semibold mb-2">Problem</h2>
        <p className="text-gray-300">{project.problem}</p>
      </div>

      {/* Solution */}
      <div className="fade-section mb-10">
        <h2 className="text-2xl font-semibold mb-2">Solution</h2>
        <p className="text-gray-300">{project.solution}</p>
      </div>

      {/* Role */}
      <div className="fade-section mb-10">
        <h2 className="text-2xl font-semibold mb-2">My Role</h2>
        <p className="text-gray-300">{project.role}</p>
      </div>

      {/* Tech */}
      <div className="fade-section mb-10">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="fade-section flex gap-4">
        <a
          href={project.github}
          className="px-6 py-3 bg-[var(--color-primary)] text-black rounded-full hover:scale-105"
        >
          GitHub
        </a>

        <a
          href={project.live}
          className="px-6 py-3 border border-gray-600 rounded-full hover:border-[var(--color-primary)]"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
}