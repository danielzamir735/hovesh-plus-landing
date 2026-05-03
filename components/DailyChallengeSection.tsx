"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const challenges = [
  {
    id: "clinical",
    icon: "🧠",
    color: "#f59e0b",
    title: "שאלות קליניות",
    description: "שאלות יומיות מבוססות תרחישי שטח אמיתיים. פתח מקרים, קבל פידבק מיידי ושפר קבלת החלטות תחת לחץ.",
    tag: "Clinical Questions",
  },
  {
    id: "medication",
    icon: "💊",
    color: "#06b6d4",
    title: "תרופה יומית",
    description: "למד תרופה אחת לעומק בכל יום – אינדיקציות, מינון, תופעות לוואי ואינטראקציות קריטיות.",
    tag: "Medication of the Day",
  },
  {
    id: "terminology",
    icon: "📖",
    color: "#8b5cf6",
    title: "מינוח ALS/BLS",
    description: "חזרה יומית על טרמינולוגיה רפואית, ראשי תיבות ומונחים בסיסיים לפי פרוטוקולי ALS ו-BLS.",
    tag: "ALS/BLS Terminology",
  },
];

export default function DailyChallengeSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="daily-challenge"
      className="relative py-24 px-4 overflow-hidden"
      aria-label="אתגרים יומיים ברפואה"
    >
      {/* BG accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            למידה גיימיפיקציה
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            אתגרים יומיים ברפואה
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            שפר את הידע שלך מדי יום עם שאלות קליניות, תרופת היום ומינוח
            ALS/BLS. צבור נקודות ועלה בדרגה.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Tabs */}
          <div className="lg:col-span-2 flex lg:flex-col gap-3">
            {challenges.map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 p-5 rounded-2xl text-right transition-all duration-300 w-full ${
                  active === i
                    ? "glass border"
                    : "hover:bg-white/5 border border-transparent"
                }`}
                style={active === i ? { borderColor: `${c.color}40` } : {}}
                aria-selected={active === i}
                aria-label={`אתגר יומי: ${c.title}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    backgroundColor: active === i ? `${c.color}20` : "transparent",
                    border: active === i ? `1px solid ${c.color}40` : "1px solid transparent",
                  }}
                  aria-hidden="true"
                >
                  {c.icon}
                </div>
                <div className="text-right min-w-0">
                  <p className="font-bold text-white text-sm truncate">{c.title}</p>
                  <p className="text-xs text-slate-500 truncate">{c.tag}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 glass rounded-3xl p-8 relative overflow-hidden"
            style={{ borderColor: `${challenges[active].color}25` }}
          >
            <div
              className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${challenges[active].color}15 0%, transparent 70%)`,
                transform: "translate(-30%, -30%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div
                className="text-5xl mb-6 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${challenges[active].color}15` }}
                aria-hidden="true"
              >
                {challenges[active].icon}
              </div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{
                  backgroundColor: `${challenges[active].color}20`,
                  color: challenges[active].color,
                }}
              >
                {challenges[active].tag}
              </span>
              <h3 className="text-2xl font-black text-white mb-3">
                {challenges[active].title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-base mb-8">
                {challenges[active].description}
              </p>

              {/* Mock challenge preview */}
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: `${challenges[active].color}08`, border: `1px solid ${challenges[active].color}20` }}
              >
                <p className="text-slate-300 text-sm font-semibold mb-3">
                  אתגר היום:
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {active === 0 && "חולה בן 40, נפל מגובה 3 מטר. GCS=12, BP=90/60, HR=130. מה הצעד הראשון שלך?"}
                  {active === 1 && "אדרנלין 1:1000 – מה המינון IM לאנפילקסיס בבוגר? מה תופעות הלוואי העיקריות?"}
                  {active === 2 && "מה ראשי התיבות SAMPLE? פרט כל אות ומתי משתמשים בהם."}
                </p>
                <a
                  href="https://hovesh-plus.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-bold transition-opacity hover:opacity-70"
                  style={{ color: challenges[active].color }}
                  aria-label="פתח את האתגר המלא באפליקציה"
                >
                  פתח אתגר מלא ←
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-10"
        >
          {[
            { value: "365", label: "אתגרים בשנה", color: "#f59e0b" },
            { value: "3", label: "קטגוריות", color: "#06b6d4" },
            { value: "100%", label: "חינמי לחלוטין", color: "#8b5cf6" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center"
              style={{ borderColor: `${stat.color}20` }}
            >
              <p className="text-2xl font-black" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
