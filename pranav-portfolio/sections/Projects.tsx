"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

const projectData = [
  {
    title: "UniClubb",
    desc: "Android app for managing college clubs, events and communication.",
    tech: "Kotlin • Jetpack Compose • Firebase",
  },
  {
    title: "AI Attendance System",
    desc: "AI-based system for analyzing attendance and providing insights.",
    tech: "React • Python • AI/ML",
  },
  {
    title: "LEV-GRESS",
    desc: "Gamified platform for tracking student progress and skills.",
    tech: "MERN • JWT • Gamification • Currently Building",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="min-h-screen px-6 py-20">

      <h2 className="text-4xl font-bold mb-16 text-center">
        Products I’ve Built
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* ⭐ UniClubb */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedProject(projectData[0])}
          className="glass p-10 rounded-3xl cursor-pointer"
        >
          <h3 className="text-3xl font-bold mb-4">UniClubb</h3>
          <p className="text-gray-400 mb-4 text-lg">
            A modern Android app connecting students with college clubs and events.
          </p>
          <p className="text-[var(--color-primary)]">
            {projectData[0].tech}
          </p>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {projectData.slice(1).map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="glass p-6 rounded-2xl cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              <p className="text-[var(--color-primary)]">
                {project.tech}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}