"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BarChart3,
  Brain,
  Globe2,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const floatingCards = [
  { icon: Activity, label: "Real-Time Analytics", position: "left-4 top-10" },
  { icon: Brain, label: "Smart Predictions", position: "right-3 top-16" },
  { icon: BarChart3, label: "Advanced Insights", position: "left-8 bottom-14" },
  { icon: Globe2, label: "Multi-Sport Coverage", position: "right-5 bottom-10" },
];

const particles = [
  { top: "12%", left: "8%", opacity: 0.36 },
  { top: "18%", left: "22%", opacity: 0.48 },
  { top: "9%", left: "44%", opacity: 0.3 },
  { top: "16%", left: "68%", opacity: 0.55 },
  { top: "11%", left: "88%", opacity: 0.42 },
  { top: "29%", left: "13%", opacity: 0.5 },
  { top: "34%", left: "32%", opacity: 0.26 },
  { top: "27%", left: "55%", opacity: 0.6 },
  { top: "35%", left: "79%", opacity: 0.38 },
  { top: "45%", left: "6%", opacity: 0.44 },
  { top: "52%", left: "24%", opacity: 0.32 },
  { top: "49%", left: "47%", opacity: 0.58 },
  { top: "54%", left: "70%", opacity: 0.41 },
  { top: "48%", left: "93%", opacity: 0.5 },
  { top: "67%", left: "11%", opacity: 0.35 },
  { top: "72%", left: "36%", opacity: 0.62 },
  { top: "69%", left: "59%", opacity: 0.4 },
  { top: "75%", left: "83%", opacity: 0.54 },
  { top: "86%", left: "18%", opacity: 0.3 },
  { top: "88%", left: "51%", opacity: 0.46 },
  { top: "84%", left: "76%", opacity: 0.34 },
  { top: "91%", left: "94%", opacity: 0.48 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative min-h-screen overflow-hidden bg-seer-black pt-32"
    >
      {/* Background image: make sure this exists at public/images/stadium-glow.png */}
      <Image
        src="/images/stadium-glow.png"
        alt="Futuristic SEER AI stadium glow background"
        fill
        priority
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-seer-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,75,255,0.35),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(214,44,255,0.28),transparent_28%),radial-gradient(circle_at_55%_80%,rgba(51,214,255,0.18),transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-seer-purple/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-seer-black to-transparent" />

      {/* Fixed particles: no Math.random, so no hydration error */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-seer-cyan/70 shadow-cyan"
            style={{
              top: particle.top,
              left: particle.left,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 md:px-6 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-seer-violet/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-seer-lavender backdrop-blur-xl">
            <Sparkles size={15} className="text-seer-cyan" />
            AI Powered Sports Intelligence
          </div>

          <h1 className="heading-font max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
            Real-Time Sports Intelligence,{" "}
            <span className="text-gradient">Powered by AI</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            SEER AI turns social platforms into intelligent sports ecosystems.
            Ask questions, get instant insights, understand the game faster, and
            join the future of sports interaction.
          </p>

          <p className="mt-5 heading-font text-xl font-bold tracking-[0.2em] text-seer-cyan">
            See More. Know More. Win More.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/waitlist"
              className="button-glow rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-7 py-4 text-center text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              Join Waitlist
            </Link>

            <Link
              href="/whitepapers/SEER-AI-Whitepaper.pdf"
              className="rounded-full border border-white/15 bg-white/7 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur-xl transition hover:border-seer-cyan/50 hover:bg-white/10"
            >
              Download Whitepaper
            </Link>

            <Link
              href="#how-it-works"
              className="rounded-full px-7 py-4 text-center text-sm font-bold text-seer-lavender transition hover:text-white"
            >
              Explore How It Works
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 md:grid-cols-4">
            {["Fast", "Contextual", "Social", "Multi-Sport"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/80 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-seer-violet/40 via-seer-pink/30 to-seer-cyan/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/5 p-3 shadow-seer backdrop-blur-xl">
            <div className="relative aspect-[1.15] overflow-hidden rounded-[1.7rem] bg-seer-purple">
              {/* Dashboard image: make sure this exists at public/images/sports-dashboard.png */}
              <Image
                src="/images/sports-dashboard.png"
                alt="SEER AI sports analytics dashboard"
                fill
                className="object-cover opacity-95"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-seer-black via-seer-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-seer-black/70 p-5 backdrop-blur-2xl">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-seer-violet/25 text-seer-cyan">
                    <Zap size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-seer-cyan">
                      AI Predicts What Matters
                    </p>

                    <h3 className="mt-2 heading-font text-xl font-bold">
                      Arsenal form: 4W · 1D
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Strong attacking rhythm, low concession rate, and rising
                      league momentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {floatingCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.12 }}
                className={`float-slow absolute ${card.position} hidden rounded-2xl border border-white/10 bg-seer-black/80 px-4 py-3 text-sm font-semibold text-white shadow-seer backdrop-blur-xl md:flex md:items-center md:gap-2`}
              >
                <Icon size={16} className="text-seer-cyan" />
                {card.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}