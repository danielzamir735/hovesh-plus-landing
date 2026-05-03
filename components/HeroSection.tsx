"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const EkgScene = dynamic(() => import("./EkgScene"), { ssr: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
      aria-label="כותרת ראשית"
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-cyan-400 border border-cyan-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          כלי החובש המוביל בישראל – 2026
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-glow-cyan"
          style={{
            background: "linear-gradient(135deg, #e2e8f0 0%, #06b6d4 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          חובש +
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ WebkitTextFillColor: "inherit" }}>
            הכלי המתקדם ביותר לרפואת חירום בישראל
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          מחשבון כוויות, מחשבון צירים עם התראת פרוטוקול רשמי, ניווט לבתי חולים,
          פרוטוקולים רפואיים רשמיים ואתגרים יומיים ברפואה – הכל במקום אחד.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="https://hovesh-plus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-white overflow-hidden transition-all duration-300 neon-cyan"
            style={{
              background: "linear-gradient(135deg, #0891b2, #6d28d9)",
            }}
            aria-label="כניסה לאפליקציית חובש פלוס"
          >
            <span className="relative z-10">כניסה לאפליקציה</span>
            <span className="relative z-10 text-xl">←</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              }}
            />
          </Link>

          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-slate-300 glass border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300"
          >
            גלה את התכונות
            <span className="text-cyan-400">↓</span>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-3 glass rounded-2xl px-8 py-5 border border-cyan-500/20"
        >
          <div className="text-right">
            <div className="text-4xl font-black text-cyan-400 leading-none">
              <AnimatedCounter target={15000} suffix="+" />
            </div>
            <div className="text-slate-400 text-sm mt-1">חובשים כבר כאן</div>
          </div>
          <div className="w-px h-12 bg-slate-700" />
          <div className="flex -space-x-2 rtl:space-x-reverse">
            {["#06b6d4", "#8b5cf6", "#10b981", "#3b82f6"].map((color, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              >
                {["ד", "א", "מ", "ר"][i]}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3D EKG */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto mt-12"
        aria-label="אנימציית א.ק.ג תלת-ממדית"
      >
        <EkgScene />
        <div
          className="absolute inset-y-0 left-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to right, #020817, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to left, #020817, transparent)" }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan-400/50 animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
      </motion.div>
    </section>
  );
}
