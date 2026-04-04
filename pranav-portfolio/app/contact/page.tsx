"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  return (
    <motion.div
      className="min-h-screen px-6 py-20 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* 🔥 HERO */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Let’s Build Something Meaningful
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          I’m Pranav Thormise — a full-stack developer and product builder.
          I enjoy working on impactful ideas, scalable systems, and innovative products.
        </p>
      </div>

      {/* 🔥 QUICK INFO (CREDIBILITY) */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
          <h3 className="text-2xl font-semibold">MERN</h3>
          <p className="text-gray-400 text-sm">Full Stack Development</p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
          <h3 className="text-2xl font-semibold">Kotlin</h3>
          <p className="text-gray-400 text-sm">Android Development</p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
          <h3 className="text-2xl font-semibold">AI + ML</h3>
          <p className="text-gray-400 text-sm">Emerging Tech Focus</p>
        </div>

      </div>

      {/* 🔥 CONTACT OPTIONS */}
      <div className="flex flex-col items-center gap-6 mb-20">

        <MagneticButton>
          <a
            href="mailto:pranavthormise@gmail.com"
            className="px-10 py-4 bg-[var(--color-primary)] text-black rounded-full text-lg font-medium hover:scale-105 transition"
          >
            Email Me
          </a>
        </MagneticButton>

        <div className="flex gap-6 flex-wrap justify-center">

          <MagneticButton>
            <a
              href="https://www.linkedin.com/in/pranav-thormise-332206283/"
              target="_blank"
              className="px-8 py-3 border border-gray-600 rounded-full hover:border-[var(--color-primary)] transition"
            >
              LinkedIn
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="https://github.com/WolverineAryan"
              target="_blank"
              className="px-8 py-3 border border-gray-600 rounded-full hover:border-[var(--color-primary)] transition"
            >
              GitHub
            </a>
          </MagneticButton>

        </div>

      </div>

      {/* 🔥 AVAILABILITY + MESSAGE */}
      <div className="mb-20 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
        <h2 className="text-xl font-semibold mb-3">
          Currently Available
        </h2>

        <p className="text-gray-400">
          Open to internships, freelance work, and product collaborations.
          Especially interested in building scalable platforms and AI-driven solutions.
        </p>
      </div>

      {/* 🔥 RESUME */}
      <div className="text-center">

        <p className="text-gray-400 mb-4">
          Want to know more about my experience?
        </p>

        <MagneticButton>
          <a
            href="/resume.pdf"
            download
            className="px-10 py-3 border border-gray-600 rounded-full hover:border-[var(--color-primary)] transition"
          >
            📄 Download Resume
          </a>
        </MagneticButton>

      </div>

    </motion.div>
  );
}