import { notFound } from "next/navigation";
import CaseStudyClient from "@/components/CaseStudyClient";


const projects: any = {
  uniclubb: {
    title: "UniClubb",
    tagline: "Connecting students with college communities",
    problem:
      "Students face difficulty in discovering clubs, managing events, and staying updated with announcements.",
    solution:
      "Built a mobile app that centralizes club activities, event scheduling, and communication in one platform.",
    role:
      "Designed UI/UX and developed core features using Kotlin and Jetpack Compose.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    github: "https://github.com/shreyash-leo/UniClubb",
    live: "#",
    images: [
  "/projects/uniclubb1.png",
  "/projects/uniclubb2.png",
  "/projects/uniclubb3.png",
  "/projects/uniclubb4.png",
  "/projects/uniclubb5.png",
  "/projects/uniclubb6.png",
  "/projects/uniclubb7.png",
  "/projects/uniclubb8.png",
],
  },

  attendance: {
    title: "AI Attendance System",
    tagline: "Smart insights from attendance data",
    problem:
      "Manual attendance tracking lacks insights and predictive capabilities.",
    solution:
      "Developed an AI-powered system that analyzes datasets and provides insights.",
    role:
      "Built frontend dashboard and integrated AI backend.",
    tech: ["React", "Python", "AI/ML"],
    github: "https://github.com/WolverineAryan/Attendance-Prediction",
    live: "https://attendance-prediction.vercel.app",
    images: [
  "/projects/APS1.png",
  "/projects/APS2.png",
  "/projects/APS3.png",
  "/projects/APS4.png",
  "/projects/APS5.png",
  "/projects/APS6.png",
  "/projects/APS7.png",
  "/projects/APS8.png",
    ],
  },

  levgress: {
    title: "LEV-GRESS",
    tagline: "Gamifying student growth",
    problem:
      "Students lack motivation and structured tracking for skill development.",
    solution:
      "Currently building a gamified platform with leaderboards and progress tracking.",
    role:
      "Developing full-stack MERN architecture and gamification system.",
    tech: ["MERN", "JWT", "Gamification"],
    github: "https://github.com/WolverineAryan/Levgress",
    live: "#",
  },
};

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) return notFound();

  return <CaseStudyClient project={project} />;
}