"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  return (
    <section id="projects" className="min-h-screen px-6 py-20">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16 text-center">
        Products I’ve Built
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* ⭐ UniClubb (Featured) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => router.push("/projects/uniclubb")}
          className="glass p-10 rounded-3xl cursor-pointer"
        >
          <h3 className="text-3xl font-bold mb-4">
            UniClubb
          </h3>

          <p className="text-gray-400 mb-4 text-lg">
            A modern Android app connecting students with college clubs,
            enabling event management, announcements, and communication.
          </p>

          <p className="text-[var(--color-primary)]">
            Kotlin • Jetpack Compose • Firebase • Mobile Product
          </p>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* AI Attendance */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/projects/attendance")}
            className="glass p-6 rounded-2xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3">
              AI Attendance System
            </h3>

            <p className="text-gray-400 mb-4">
              AI-powered system that analyzes attendance datasets
              and provides insights with intelligent assistance.
            </p>

            <p className="text-[var(--color-primary)]">
              React • Python • AI/ML • JWT
            </p>
          </motion.div>

          {/* LEV-GRESS */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/projects/levgress")}
            className="glass p-6 rounded-2xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3">
              LEV-GRESS
            </h3>

            <p className="text-gray-400 mb-4">
              A gamified platform for tracking student progress,
              skills, and performance using leaderboard systems.
            </p>

            <p className="text-[var(--color-primary)]">
              MERN • JWT • Gamification • Currently Building
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}