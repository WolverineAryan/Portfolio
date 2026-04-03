"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ ADD THIS HERE (top-level, after imports)
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="h-screen flex items-center justify-center">
      <div ref={ref} className="text-center max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
        <p className="text-gray-400">
          I build scalable full-stack applications using MERN and modern UI systems,
          focusing on real-world impact and product thinking.
        </p>
      </div>
    </section>
  );
}