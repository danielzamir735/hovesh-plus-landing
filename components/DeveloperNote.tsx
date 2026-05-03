"use client";

import { motion } from "framer-motion";

export default function DeveloperNote() {
  return (
    <section
      id="developer"
      className="relative py-24 px-4"
      aria-label="מכתב מצוות חובש פלוס"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div
            className="glass rounded-3xl p-10 relative z-10"
            style={{ borderColor: "rgba(139,92,246,0.2)" }}
          >
            {/* Quote mark */}
            <div
              className="text-7xl font-black leading-none mb-4 select-none"
              style={{ color: "rgba(139,92,246,0.3)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <blockquote className="text-slate-300 text-lg leading-relaxed mb-8">
              חובש פלוס נולד מתוך צורך אמיתי – בשטח, בלחץ, כשכל שנייה חשובה.
              בנינו אותה בשביל כל החובשים שרצו כלי אחד, אמין ומהיר, שיעזור להם לקבל
              החלטות נכונות. כל שעה שהושקעה בה הייתה שווה כשראינו חובשים משתמשים
              בה בפועל. המטרה הבאה – App Store ו-Google Play, כדי שכולם יוכלו להוריד
              את האפליקציה הישר לטלפון.
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                aria-hidden="true"
              >
                ח+
              </div>
              <div>
                <p className="font-bold text-white text-lg">צוות חובש פלוס</p>
                <p className="text-slate-500 text-sm">המפתחים של חובש + | רפואת חירום</p>
              </div>
            </div>

            {/* PayBox support */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
            >
              <p className="text-white font-bold mb-2">תמוך במעבר ל-App Store / Google Play</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                פיתוח ופרסום לחנויות דורשים תשתית. כל תרומה, גדולה או קטנה, מקרבת
                את חובש פלוס לטלפון של כל חובש בישראל.
              </p>
              <a
                href="https://payboxapp.page.link/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  boxShadow: "0 0 20px rgba(139,92,246,0.3)",
                }}
                aria-label="תמוך בפיתוח חובש פלוס דרך PayBox"
              >
                <span>❤️</span>
                תרום דרך PayBox
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
