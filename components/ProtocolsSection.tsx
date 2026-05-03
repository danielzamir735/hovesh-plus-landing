"use client";

import { motion } from "framer-motion";

const protocols = [
  { code: "P-101", title: "טיפול בחולה טראומה", category: "טראומה", color: "#ef4444" },
  { code: "P-202", title: "פרוטוקול קרדיאק ALS", category: "לב וכלי דם", color: "#3b82f6" },
  { code: "P-305", title: "ניהול דרכי אוויר", category: "אוויר", color: "#06b6d4" },
  { code: "P-410", title: "לידה בשטח", category: "OB", color: "#8b5cf6" },
  { code: "P-512", title: "הרעלות ומנת יתר", category: "פנימי", color: "#f59e0b" },
  { code: "P-615", title: "חולה ילדים – BLS", category: "ילדים", color: "#10b981" },
];

export default function ProtocolsSection() {
  return (
    <section
      id="protocols"
      className="relative py-24 px-4"
      aria-label="פרוטוקולים רפואיים רשמיים"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
              ניווט מהיר ופרוטוקולים
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              פרוטוקולים רפואיים רשמיים
              <br />
              <span className="text-cyan-400">בקצות אצבעותיך</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              כל הפרוטוקולים הרפואיים הרשמיים המעודכנים לשנת 2026 – ALS, BLS, טראומה, ילדים ולידה.
              חיפוש מיידי לפי מצב חירום, זמין גם ללא חיבור לאינטרנט.
            </p>

            <ul className="space-y-3 mb-8" aria-label="יתרונות פרוטוקולים">
              {[
                "עדכני לפרוטוקולים הרפואיים הרשמיים המלאים לשנת 2026",
                "גישה מהירה לפרוטוקול ALS/BLS בשניות",
                "מצב offline – עובד ללא אינטרנט",
                "חיפוש חכם לפי תסמינים ומצב חולה",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0 text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://hovesh-plus.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-white transition-all duration-300 neon-blue"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #6d28d9)" }}
              aria-label="פתח פרוטוקולים רפואיים רשמיים באפליקציה"
            >
              פתח פרוטוקולים ←
            </a>
          </motion.div>

          {/* Right – protocol cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
            aria-label="רשימת פרוטוקולים לדוגמה"
          >
            {protocols.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: -4 }}
                className="glass rounded-2xl px-6 py-4 flex items-center gap-4 cursor-default"
                style={{ borderColor: `${p.color}20` }}
              >
                <div
                  className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${p.color}20`, color: p.color }}
                >
                  {p.code}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{p.title}</p>
                  <p className="text-slate-500 text-xs">{p.category}</p>
                </div>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: p.color }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}

            <div className="glass rounded-2xl px-6 py-4 flex items-center justify-center text-slate-500 text-sm">
              + עשרות פרוטוקולים נוספים באפליקציה
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
