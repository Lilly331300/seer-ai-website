"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Copy,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ComingSoonModal from "./ComingSoonModal";

const miniPoints = ["Ask", "Analyze", "Answer"];

const floatingPoints = [
  {
    icon: Brain,
    label: "The Problem",
    title: "Sports fans do not need more noise.",
    text: "They need faster clarity.",
    href: "#problem",
  },
  {
    icon: MessageCircle,
    label: "Instant Intelligence",
    title: "Get instant intelligence.",
    text: "Like chatting with a sports analyst.",
    href: "#demo",
  },
  {
    icon: Zap,
    label: "The Vision",
    title: "Sports intelligence built for the next generation of fans.",
    text: "Live data. AI analysis. Fan-first insights.",
    href: "#whitepaper",
  },
];

const particles = [
  { top: "12%", left: "7%", delay: 0 },
  { top: "18%", left: "30%", delay: 0.2 },
  { top: "11%", left: "62%", delay: 0.4 },
  { top: "22%", left: "83%", delay: 0.6 },
  { top: "40%", left: "12%", delay: 0.3 },
  { top: "48%", left: "48%", delay: 0.8 },
  { top: "55%", left: "76%", delay: 0.5 },
  { top: "72%", left: "20%", delay: 0.7 },
  { top: "80%", left: "55%", delay: 0.1 },
  { top: "86%", left: "90%", delay: 0.9 },
];

export default function Hero() {
  const [contractOpen, setContractOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="hero-grid relative min-h-screen overflow-hidden bg-seer-black pt-28"
      >
        <Image
          src="/images/stadium-glow.png"
          alt="SEER AI stadium glow background"
          fill
          priority
          className="object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-seer-black/62" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(110,75,255,0.42),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(214,44,255,0.28),transparent_30%),radial-gradient(circle_at_55%_80%,rgba(51,214,255,0.2),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-seer-purple/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-seer-black to-transparent" />

        <div className="pointer-events-none absolute inset-0">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0.2, 1, 0.25], scale: [0.7, 1.4, 0.7] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
              className="absolute h-1.5 w-1.5 rounded-full bg-seer-cyan shadow-cyan"
              style={{
                top: particle.top,
                left: particle.left,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center px-4 pb-16 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] xl:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-seer-cyan/30 bg-white/7 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-seer-lavender backdrop-blur-xl"
              >
                <Sparkles size={15} className="text-seer-cyan" />
                AI Sports Intelligence
              </motion.div>

              <h1 className="heading-font mx-auto max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:mx-0 xl:text-8xl">
                Ask sports questions.
                <br />
                <span className="text-gradient">Get instant intelligence.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg md:text-xl md:leading-8 lg:mx-0">
                Fast, clear sports answers powered by live data and AI analysis.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {miniPoints.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.18 + index * 0.08,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/7 px-5 py-3 text-sm font-bold text-white/85 backdrop-blur-xl"
                    >
                      {item}
                    </motion.div>

                    {index < miniPoints.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="hidden text-seer-cyan/70 sm:block"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <button
                  type="button"
                  onClick={() => setContractOpen(true)}
                  className="button-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-7 py-4 text-sm font-bold text-white transition duration-300 hover:scale-[1.04]"
                >
                  <Copy size={17} />
                  Contract Address
                </button>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/7 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:border-seer-cyan/50 hover:bg-white/10"
                >
                  See How It Works
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 26 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.55, 0.85, 0.55],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-seer-violet/45 via-seer-pink/35 to-seer-cyan/35 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/5 p-3 shadow-seer backdrop-blur-xl">
                <div className="relative aspect-[1.05] overflow-hidden rounded-[1.7rem] bg-seer-purple">
                  <Image
                    src="/images/sports-dashboard.png"
                    alt="SEER AI sports intelligence dashboard"
                    fill
                    className="object-cover opacity-95"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-seer-black via-seer-black/20 to-transparent" />

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.55 }}
                    className="absolute left-4 right-4 top-4 rounded-3xl border border-seer-cyan/20 bg-seer-black/72 p-4 backdrop-blur-2xl sm:left-5 sm:right-5 sm:top-5 sm:p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-seer-cyan">
                      Fan asks
                    </p>

                    <h3 className="mt-2 heading-font text-lg font-bold text-white sm:text-xl md:text-2xl">
                      “Who has better form tonight?”
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.78 }}
                    className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-seer-black/78 p-4 backdrop-blur-2xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-seer-violet/25 text-seer-cyan sm:h-11 sm:w-11">
                        <Zap size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-seer-cyan">
                          SEER AI
                        </p>

                        <h3 className="mt-2 heading-font text-lg font-bold text-white sm:text-xl">
                          “Team A has stronger momentum.”
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/65">
                          Clear insight. Fast context.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {floatingPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <Link key={point.label} href={point.href} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.42 + index * 0.08 }}
                    className={`group h-full cursor-pointer rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-seer-cyan/40 hover:bg-white/[0.075] ${
                      index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="flex gap-4">
                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                          rotate: [0, 4, 0],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: index * 0.25,
                          ease: "easeInOut",
                        }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-seer-cyan/10 text-seer-cyan ring-1 ring-white/10"
                      >
                        <Icon size={22} />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-bold uppercase tracking-[0.22em] text-seer-cyan">
                            {point.label}
                          </p>

                          <ArrowRight
                            size={18}
                            className="shrink-0 text-seer-cyan/70 transition duration-300 group-hover:translate-x-1 group-hover:text-seer-cyan"
                          />
                        </div>

                        <h2 className="mt-3 heading-font text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                          {point.title}
                        </h2>

                        <p className="mt-3 text-lg font-bold leading-7 text-white/72">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
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