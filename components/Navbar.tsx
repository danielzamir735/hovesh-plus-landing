"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "#features", label: "תכונות" },
  { href: "#daily-challenge", label: "אתגרים" },
  { href: "#protocols", label: "פרוטוקולים" },
  { href: "#community", label: "קהילה" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
      role="banner"
    >
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-xl shadow-black/20" : ""
        }`}
        style={scrolled ? { borderColor: "rgba(255,255,255,0.06)" } : {}}
        aria-label="ניווט ראשי"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-xl text-white"
          aria-label="חובש פלוס – דף הבית"
        >
          <span
            className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black"
            style={{ background: "linear-gradient(135deg, #0891b2, #7c3aed)" }}
            aria-hidden="true"
          >
            ח+
          </span>
          <span
            style={{
              background: "linear-gradient(135deg, #e2e8f0, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            חובש +
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://hovesh-plus.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #0891b2, #7c3aed)",
            boxShadow: "0 0 20px rgba(6,182,212,0.25)",
          }}
          aria-label="כניסה לאפליקציית חובש פלוס"
        >
          כניסה לאפליקציה
        </a>
      </nav>
    </motion.header>
  );
}
