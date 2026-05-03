"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: "burn-calculator",
    icon: "🔥",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.3)",
    title: "מחשבון כוויות",
    subtitle: "ילדים ומבוגרים",
    description:
      "חישוב מדויק של אחוזי שטח גוף נפגע לפי כלל התשע עם תמיכה מלאה בפדיאטריה. מחשב נוזלים לפי נוסחת פארקלנד ומספק הנחיות טיפול מיידיות.",
    keywords: ["מחשבון כוויות לילדים חובש פלוס", "כלל התשע", "נוסחת פארקלנד"],
    badge: "ALS/BLS",
  },
  {
    id: "contraction-timer",
    icon: "⏱️",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.3)",
    title: "מחשבון צירים",
    subtitle: "פרוטוקול רפואי רשמי – 2 דקות",
    description:
      "מד צירים חכם עם התראה אוטומטית כשהמרווח יורד ל-2 דקות לפי הפרוטוקול הרפואי הרשמי. מעקב אחר עוצמה, משך וצמידות לקבלת החלטה מהירה.",
    keywords: ["מחשבון צירים", "פרוטוקול רשמי לידה", "הערכת לידה שדה"],
    badge: "OB",
  },
  {
    id: "protocols",
    icon: "📋",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
    title: "פרוטוקולים רפואיים רשמיים",
    subtitle: "עדכני ומלא – 2026",
    description:
      "גישה מיידית לכל הפרוטוקולים הרפואיים הרשמיים המעודכנים לשנת 2026 – ALS, BLS, טראומה, ילדים ועוד. חיפוש מהיר לפי מצב חירום.",
    keywords: ["פרוטוקולים רפואיים רשמיים 2026", "ALS BLS ישראל"],
    badge: "2026",
  },
  {
    id: "navigation",
    icon: "🏥",
    color: "#10b981",
    glow: "rgba(16,185,129,0.3)",
    title: "ניווט לבתי חולים",
    subtitle: "ניווט מהיר לחדר מיון",
    description:
      "ניווט GPS ישיר לחדר המיון הקרוב ביותר עם זמני נסיעה בזמן אמת. כולל מידע על מחלקות ייחודיות ויכולות הטיפול.",
    keywords: ["ניווט לבתי חולים", "חדר מיון קרוב"],
    badge: "GPS",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardVariants: any = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="features"
      className="relative py-24 px-4"
      aria-label="תכונות ויכולות חובש פלוס"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            כלי רפואה מקצועיים
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            הכלים שכל חובש צריך
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ממחשבון כוויות ועד פרוטוקולי מד&quot;א 2026 – הכל בנגישות מיידית,
            גם ללא אינטרנט.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative glass rounded-3xl p-8 overflow-hidden cursor-default"
              style={{ borderColor: `${feature.color}25` }}
              aria-label={`${feature.title} – ${feature.subtitle}`}
            >
              {/* Glow corner */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${feature.glow} 0%, transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${feature.color}20`, border: `1px solid ${feature.color}40` }}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${feature.color}20`,
                      color: feature.color,
                      border: `1px solid ${feature.color}40`,
                    }}
                  >
                    {feature.badge}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{feature.title}</h2>
                <p className="text-xs font-semibold mb-3" style={{ color: feature.color }}>
                  {feature.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Hidden SEO keywords */}
                <ul className="sr-only">
                  {feature.keywords.map((kw) => (
                    <li key={kw}>{kw}</li>
                  ))}
                </ul>

                {/* Divider + CTA */}
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex-1 h-px" style={{ backgroundColor: `${feature.color}20` }} />
                  <a
                    href="https://hovesh-plus.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex items-center gap-1 transition-opacity hover:opacity-70"
                    style={{ color: feature.color }}
                    aria-label={`פתח ${feature.title} באפליקציה`}
                  >
                    פתח כלי ←
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
