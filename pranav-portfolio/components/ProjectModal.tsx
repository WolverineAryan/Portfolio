"use client";

import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-[#111] max-w-3xl w-full p-8 rounded-2xl relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        <p className="text-gray-400 mb-6">{project.desc}</p>

        <p className="text-[var(--color-primary)] mb-6">
          {project.tech}
        </p>

        {/* Extra Content */}
        <div className="text-gray-300">
          <p>
            This project focuses on solving real-world problems with scalable architecture,
            clean UI, and performance optimization.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}