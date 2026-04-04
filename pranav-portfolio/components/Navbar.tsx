"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition ${
        scrolled ? "bg-white/5 backdrop-blur-xl border-b border-white/10" : ""
      }`}
    >
      <h1 className="font-bold text-lg">Pranav</h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="/about" className="hover:text-white">About</a>
        <a href="/contact" className="hover:text-white">Contact</a>
      </div>
    </div>
  );
}