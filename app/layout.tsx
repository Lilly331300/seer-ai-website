import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "SEER AI | Real-Time AI Sports Intelligence",
  description:
    "SEER AI is an AI-powered sports intelligence engine that delivers real-time data, contextual insights, smart predictions, and conversational sports analysis across social platforms.",
  keywords: [
    "SEER AI",
    "sports intelligence",
    "AI sports analytics",
    "real-time sports data",
    "sports predictions",
    "football analytics",
    "sports AI",
  ],
  icons: {
    icon: "/images/seer-logo.png",
    shortcut: "/images/seer-logo.png",
    apple: "/images/seer-logo.png",
  },
  openGraph: {
    title: "SEER AI | Real-Time AI Sports Intelligence",
    description:
      "Ask sports questions in plain language and get instant, intelligent, contextual responses.",
    url: "http://localhost:3000",
    siteName: "SEER AI",
    images: [
      {
        url: "/images/seer-hero-banner.png",
        width: 1200,
        height: 630,
        alt: "SEER AI sports intelligence banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}