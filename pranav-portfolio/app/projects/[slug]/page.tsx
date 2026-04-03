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