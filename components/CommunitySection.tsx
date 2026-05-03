"use client";

import { motion } from "framer-motion";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative py-24 px-4"
      aria-label="קהילת חובש פלוס"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-12 relative overflow-hidden"
          style={{ borderColor: "rgba(37,211,102,0.2)" }}
        >
          {/* WhatsApp glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,211,102,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6"
              style={{ backgroundColor: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}
              aria-hidden="true"
            >
              💬
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              הצטרף לקהילה
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              הצטרף לערוץ העדכונים של חובש פלוס בוואטסאפ. קבל עדכונים על פרוטוקולים חדשים,
              תכונות חדשות ואתגרים מיוחדים.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/972000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #128c7e, #25d366)",
                  boxShadow: "0 0 30px rgba(37,211,102,0.3)",
                }}
                aria-label="הצטרף לערוץ וואטסאפ של חובש פלוס"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                הצטרף לערוץ העדכונים
              </a>

              <a
                href="https://hovesh-plus.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-slate-300 glass border border-slate-700/50 hover:border-green-500/40 transition-all duration-300"
                aria-label="פתח את האפליקציה"
              >
                פתח אפליקציה ←
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-slate-800">
              {[
                { v: "+15K", l: "חובשים רשומים" },
                { v: "4.9★", l: "דירוג משתמשים" },
                { v: "24/7", l: "זמינות" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-xl font-black text-green-400">{s.v}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
