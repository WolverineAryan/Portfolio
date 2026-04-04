"use client";

import { motion } from "framer-motion";
import AboutAvatar from "@/components/AboutAvatar";

export default function AboutPage() {
  return (
    <motion.div
      className="min-h-screen px-6 py-20 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* 🔥 HERO WITH 3D */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

        {/* TEXT */}
        <div>
          <h1 className="text-5xl font-bold mb-6">
            I Build Products, Not Just Code.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm Pranav Thormise — a full-stack developer and product builder
            focused on creating scalable digital experiences using MERN,
            Kotlin, and AI-driven systems.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My approach combines engineering, design thinking, and product
            strategy to build solutions that actually solve real-world problems.
          </p>
        </div>

        {/* 3D AVATAR */}
        <AboutAvatar />
      </div>

      {/* 🔥 HIGHLIGHT */}
      <div className="mb-20 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
        <p className="text-xl">
          “Focused on building scalable products with real impact.”
        </p>
      </div>

      {/* 🔥 SKILLS VISUAL */}
      <div className="mb-24">
        <h2 className="text-2xl font-semibold mb-8">What I Work With</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Frontend",
              items: "React, Next.js, Tailwind, Framer Motion",
            },
            {
              title: "Backend",
              items: "Node.js, Express, MongoDB, APIs",
            },
            {
              title: "Mobile & AI",
              items: "Kotlin, Firebase, AI Integrations",
            },
          ].map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-primary)] transition"
            >
              <h3 className="font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.items}</p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 JOURNEY */}
      <div className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">My Journey</h2>

        <p className="text-gray-400 leading-relaxed max-w-3xl">
          I started with curiosity for building apps, and over time,
          transitioned into a product-focused developer. I enjoy solving
          meaningful problems, designing systems, and creating user-centered
          experiences.
        </p>
      </div>

      {/* 🔥 PROJECT FOCUS */}
      <div className="mb-24 grid md:grid-cols-2 gap-6">

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-3">UniClubb</h3>
          <p className="text-gray-400 text-sm">
            Built an Android platform for managing clubs, events, and
            communication in colleges.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-3">LEV-GRESS</h3>
          <p className="text-gray-400 text-sm">
            Currently building a gamified system to track student growth
            and skills.
          </p>
        </div>

      </div>

      {/* 🔥 CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">
          Let’s Build Something Meaningful
        </h2>

        <p className="text-gray-400 mb-6">
          Open to collaborations, internships, and product development.
        </p>

        <a
          href="mailto:your@email.com"
          className="px-6 py-3 bg-[var(--color-primary)] text-black rounded-full"
        >
          Contact Me
        </a>
      </div>

    </motion.div>
  );
}