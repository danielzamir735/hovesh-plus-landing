import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-slate-800/50 py-12 px-4"
      role="contentinfo"
      aria-label="פוטר חובש פלוס"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-black text-xl text-white mb-3">חובש +</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              הכלי המתקדם ביותר לרפואת חירום בישראל.
              מחשבון כוויות, מחשבון צירים, פרוטוקולים רפואיים רשמיים ועוד.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="קישורים מהירים">
            <p className="font-bold text-slate-300 text-sm mb-3">קישורים מהירים</p>
            <ul className="space-y-2" role="list">
              {[
                { href: "#features", label: "תכונות" },
                { href: "#daily-challenge", label: "אתגרים יומיים" },
                { href: "#protocols", label: "פרוטוקולים רפואיים רשמיים" },
                { href: "#community", label: "קהילת וואטסאפ" },
                { href: "#developer", label: "אודות הצוות" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-500 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Keywords block – SEO */}
          <div>
            <p className="font-bold text-slate-300 text-sm mb-3">נושאים עיקריים</p>
            <div className="flex flex-wrap gap-2" aria-label="תגיות נושא">
              {[
                "מחשבון כוויות",
                "מחשבון צירים",
                "פרוטוקולים רפואיים רשמיים",
                "ניווט לבתי חולים",
                "אתגרים ברפואה",
                "חובש פלוס",
                "ALS BLS",
              ].map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-1 rounded-lg text-xs text-slate-500 bg-slate-800/50"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {year} חובש פלוס | צוות חובש פלוס. כל הזכויות שמורות.
          </p>
          <p className="text-slate-700 text-xs">
            המידע באתר הינו לצרכי עזר בלבד ואינו מחליף הכשרה רפואית מקצועית.
          </p>
        </div>
      </div>
    </footer>
  );
}
