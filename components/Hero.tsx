"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Copy, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ComingSoonModal from "./ComingSoonModal";

const proofPoints = ["Ask", "Understand", "Verify", "Answer"];

const particles = [
  { top: "13%", left: "8%", opacity: 0.36 },
  { top: "18%", left: "27%", opacity: 0.48 },
  { top: "9%", left: "48%", opacity: 0.3 },
  { top: "17%", left: "72%", opacity: 0.55 },
  { top: "31%", left: "14%", opacity: 0.5 },
  { top: "35%", left: "36%", opacity: 0.26 },
  { top: "28%", left: "59%", opacity: 0.6 },
  { top: "42%", left: "82%", opacity: 0.38 },
  { top: "55%", left: "9%", opacity: 0.44 },
  { top: "62%", left: "31%", opacity: 0.32 },
  { top: "58%", left: "54%", opacity: 0.58 },
  { top: "66%", left: "77%", opacity: 0.41 },
  { top: "78%", left: "18%", opacity: 0.35 },
  { top: "84%", left: "45%", opacity: 0.62 },
  { top: "81%", left: "70%", opacity: 0.4 },
  { top: "89%", left: "91%", opacity: 0.48 },
];

export default function Hero() {
  const [contractOpen, setContractOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="hero-grid relative min-h-screen overflow-hidden bg-seer-black pt-32"
      >
        <Image
          src="/images/stadium-glow.png"
          alt="SEER AI stadium glow background"
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-seer-black/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,75,255,0.38),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(214,44,255,0.26),transparent_30%),radial-gradient(circle_at_55%_80%,rgba(51,214,255,0.18),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-seer-purple/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-seer-black to-transparent" />

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
              AI Sports Intelligence
            </div>

            <h1 className="heading-font max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
              Ask sports questions.{" "}
              <span className="text-gradient">Get instant intelligence.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              SEER AI turns live sports data into simple answers fans can use
              inside real conversations.
            </p>

            <p className="mt-5 heading-font text-xl font-bold tracking-[0.2em] text-seer-cyan">
              See More. Know More. Win More.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setContractOpen(true)}
                className="button-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-7 py-4 text-sm font-bold text-white transition hover:scale-[1.02]"
              >
                <Copy size={17} />
                Contract Address
              </button>

              <Link
                href="/whitepapers/SEER-AI-Whitepaper.pdf"
                className="rounded-full border border-white/15 bg-white/7 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur-xl transition hover:border-seer-cyan/50 hover:bg-white/10"
              >
                Download Whitepaper
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-bold text-seer-lavender transition hover:text-white"
              >
                See how it works
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 md:grid-cols-4">
              {proofPoints.map((item) => (
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
              <div className="relative aspect-[1.12] overflow-hidden rounded-[1.7rem] bg-seer-purple">
                <Image
                  src="/images/sports-dashboard.png"
                  alt="SEER AI sports intelligence dashboard"
                  fill
                  className="object-cover opacity-95"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-seer-black via-seer-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-seer-black/75 p-5 backdrop-blur-2xl">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-seer-violet/25 text-seer-cyan">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-seer-cyan">
                        Instant answer
                      </p>
                      <h3 className="mt-2 heading-font text-xl font-bold">
                        “Arsenal form?” → 4W · 1D
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        Fast context. Clear insight. No extra searching.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ComingSoonModal
        open={contractOpen}
        onClose={() => setContractOpen(false)}
      />
    </>
  );
}