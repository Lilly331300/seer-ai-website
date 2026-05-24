"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Bot,
  Brain,
  Calendar,
  DatabaseZap,
  MessageCircle,
  Search,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

const buzzWords = [
  "Ask sports questions",
  "Get instant intelligence",
  "Faster clarity",
  "Live data",
  "AI analysis",
  "Fan-first answers",
];

const painPoints = [
  {
    icon: Search,
    title: "Too much noise",
    text: "Fans jump between scores, fixtures, tables, stats, news, and opinions.",
  },
  {
    icon: Brain,
    title: "Too many raw numbers",
    text: "Data is useful only when it becomes a simple answer.",
  },
  {
    icon: MessageCircle,
    title: "Fans need speed",
    text: "Sports conversations move fast. SEER AI keeps up.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Ask",
    text: "Type a sports question in plain language.",
  },
  {
    icon: Bot,
    title: "Understand",
    text: "SEER AI detects the team, match, player, and intent.",
  },
  {
    icon: DatabaseZap,
    title: "Analyze",
    text: "Live data and AI turn the question into context.",
  },
  {
    icon: Zap,
    title: "Answer",
    text: "You get a simple, useful sports insight.",
  },
];

const useCases = [
  "Live scores",
  "Fixtures",
  "Team form",
  "Match analysis",
  "Predictions",
  "Fan insights",
];

const roadmap = [
  {
    phase: "Phase 1",
    status: "Live",
    title: "Football Core",
    date: "Q2 2026",
    text: "Live scores, fixtures, team form, AI analysis, match analysis, and predictions.",
  },
  {
    phase: "Phase 2",
    status: "Near Term",
    title: "Advanced Insights",
    date: "Q3 2026",
    text: "Player stats, head-to-head insights, and smarter team comparisons.",
  },
  {
    phase: "Phase 3",
    status: "Expansion",
    title: "Multi-Sport Coverage",
    date: "Q4 2026",
    text: "Basketball, tennis, more football leagues, and global coverage.",
  },
  {
    phase: "Phase 4",
    status: "Ecosystem",
    title: "Platform Layer",
    date: "Q1 2027",
    text: "Personalized feeds, alerts, multi-platform access, API layer, and creator tools.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-seer-black text-white">
      <Navbar />
      <Hero />

      <section className="overflow-hidden border-y border-white/10 bg-seer-purple/35 py-5">
        <div className="marquee-fast flex w-[200%] gap-4">
          {[...buzzWords, ...buzzWords, ...buzzWords, ...buzzWords].map(
            (item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex min-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/70"
              >
                <Sparkles size={15} className="text-seer-cyan" />
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section
        id="problem"
        className="relative overflow-hidden bg-seer-black px-4 py-24 md:px-6"
      >
        <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-seer-pink/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-seer-cyan/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
              The Problem
            </p>

            <h2 className="mt-5 heading-font text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Sports fans do not need more noise. They need faster clarity.
            </h2>

            <div className="mt-9 grid gap-4">
              {painPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: -22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.45 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-seer-cyan/40"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-seer-violet/20 text-seer-cyan ring-1 ring-white/10">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="heading-font text-xl font-bold">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/60">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 34 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-seer-violet/25 via-seer-pink/20 to-seer-cyan/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.055] p-3 shadow-seer backdrop-blur-2xl">
              <div className="relative aspect-video overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/problem-fragmented-apps.png"
                  alt="Fragmented sports apps"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-seer-black via-seer-black/15 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-seer-black/75 p-5 backdrop-blur-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-seer-cyan">
                    Old way
                  </p>
                  <h3 className="mt-2 heading-font text-2xl font-bold">
                    Too many tabs. Too little clarity.
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative overflow-hidden bg-seer-purple/35 px-4 py-24 md:px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(51,214,255,0.16),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
            How It Works
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl heading-font text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Ask. Analyze. Answer.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ delay: index * 0.07, duration: 0.45 }}
                  className="group relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-seer-cyan/35"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-seer-cyan/10 text-seer-cyan ring-1 ring-white/10">
                    <Icon size={25} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/38">
                    Step 0{index + 1}
                  </p>

                  <h3 className="mt-3 heading-font text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="demo"
        className="relative overflow-hidden bg-seer-black px-4 py-24 md:px-6"
      >
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-seer-pink/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-seer-violet/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -34, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.58 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.82, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-seer-violet/20 via-seer-cyan/20 to-seer-pink/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.055] p-3 shadow-seer backdrop-blur-2xl">
              <div className="relative aspect-video overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/ai-query-mockup.png"
                  alt="SEER AI query mockup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
              Product Feel
            </p>

            <h2 className="mt-5 heading-font text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Like chatting with a sports analyst.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/64">
              Simple answers. Fast context. Built for real fan conversations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {useCases.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 rounded-3xl border border-seer-cyan/25 bg-gradient-to-br from-seer-violet/20 to-seer-cyan/10 p-5 shadow-cyan">
              <p className="text-sm font-semibold text-white/45">Fan asks</p>

              <p className="mt-2 text-xl font-bold text-white">
                “Who has better form going into this match?”
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-seer-black/55 p-4">
                <p className="text-sm font-semibold text-seer-cyan">SEER AI</p>

                <p className="mt-2 leading-7 text-white/75">
                  “Team A has stronger recent momentum, but Team B has a better
                  defensive record.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="roadmap"
        className="relative overflow-hidden bg-seer-purple/35 px-4 py-24 md:px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(110,75,255,0.2),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
              Roadmap
            </p>

            <h2 className="mt-5 heading-font text-4xl font-black leading-tight tracking-tight md:text-6xl">
              From football core to full sports intelligence.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-seer-cyan/35"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-seer-cyan/10 blur-2xl" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-seer-cyan/10 text-seer-cyan ring-1 ring-white/10">
                    <Calendar size={23} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-seer-cyan">
                    {item.phase} · {item.status}
                  </p>

                  <h3 className="mt-4 heading-font text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-seer-lavender">
                    {item.date}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="whitepaper"
        className="relative overflow-hidden bg-seer-black px-4 py-24 md:px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(110,75,255,0.24),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
              SEER AI Whitepaper
            </p>

            <h2 className="mt-5 heading-font text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Sports intelligence built for the next generation of fans.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/64">
              Explore the full SEER AI ecosystem, roadmap, AI layer, and future
              platform growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/whitepapers/SEER-AI-Whitepaper.pdf"
                className="button-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-8 py-4 text-sm font-bold text-white transition duration-300 hover:scale-[1.04]"
              >
                Download Whitepaper
                <ArrowDownToLine size={17} />
              </Link>

              <Link
                href="/whitepaper"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/7 px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:border-seer-cyan/50"
              >
                View Whitepaper Page
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-seer-cyan/20 via-seer-violet/25 to-seer-pink/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.055] p-3 shadow-seer backdrop-blur-2xl">
              <div className="relative aspect-video overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/whitepaper-preview.png"
                  alt="SEER AI whitepaper preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-seer-black px-4 py-24 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,44,255,0.22),transparent_36%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-seer backdrop-blur-2xl md:p-14"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,75,255,0.16),transparent_36%,rgba(51,214,255,0.1))]" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-seer-cyan/10 text-seer-cyan ring-1 ring-white/10">
              <Trophy size={30} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
              SEER AI
            </p>

            <h2 className="mt-5 heading-font text-4xl font-black tracking-tight md:text-6xl">
              See more. Know more. Win more.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/66">
              Simple sports intelligence for fans, communities, and AI-powered
              sports conversations.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}