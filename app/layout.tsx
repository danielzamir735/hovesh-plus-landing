import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hovesh-plus-landing.vercel.app"),
  title: {
    default: "חובש + | הכלי המתקדם ביותר לרפואת חירום בישראל",
    template: "%s | חובש +",
  },
  description:
    "חובש פלוס – פלטפורמת רפואת חירום מתקדמת לחובשים בישראל. כולל מחשבון כוויות, מחשבון צירים, פרוטוקולים רפואיים רשמיים, ניווט לבתי חולים ואתגרים יומיים ברפואה. +15,000 חובשים כבר כאן.",
  keywords: [
    "חובש פלוס",
    "חובש +",
    "מחשבון צירים",
    "מחשבון כוויות",
    "פרוטוקולים רפואיים רשמיים",
    "ניווט לבתי חולים",
    "אתגרים ברפואה",
    "רפואת חירום ישראל",
    "ALS BLS",
    "פרוטוקולים 2026",
    "כלי חובש",
    "רפואה ניידת",
  ],
  authors: [{ name: "צוות חובש פלוס", url: "https://hovesh-plus.vercel.app" }],
  creator: "צוות חובש פלוס",
  publisher: "חובש פלוס",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://hovesh-plus-landing.vercel.app",
    siteName: "חובש +",
    title: "חובש + | הכלי המתקדם ביותר לרפואת חירום בישראל",
    description:
      "מחשבון כוויות, מחשבון צירים, פרוטוקולים רפואיים רשמיים ואתגרים יומיים ברפואה. +15,000 חובשים.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "חובש פלוס - כלי רפואת חירום מתקדם לחובשים בישראל",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "חובש + | הכלי המתקדם ביותר לרפואת חירום",
    description: "מחשבון כוויות, מחשבון צירים, פרוטוקולים רפואיים רשמיים",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://hovesh-plus-landing.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col gradient-bg">{children}</body>
    </html>
  );
}
