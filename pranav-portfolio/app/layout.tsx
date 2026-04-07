import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Thormise | Full Stack Developer",
  description: "Portfolio of Pranav Thormise - Full Stack Developer specializing in MERN stack, UI/UX design, and modern web technologies",
  keywords: "Full Stack Developer, MERN, UI/UX Designer, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[var(--color-dark)] text-white overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          {children}
          <CursorGlow />
        </SmoothScroll>
      </body>
    </html>
  );
}