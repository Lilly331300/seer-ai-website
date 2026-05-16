"use client";

import SectionHeader from "./SectionHeader";
import { Bot, DatabaseZap, MessageCircle, Network, Zap } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    title: "User Query",
    text: "A fan tags SEER and asks naturally: “Arsenal last 5 games”, “EPL table”, or “Barcelona next match”.",
  },
  {
    icon: Bot,
    title: "Intent Understanding",
    text: "SEER identifies the team, league, player, match, and exact request type behind the question.",
  },
  {
    icon: DatabaseZap,
    title: "Real-Time Data Aggregation",
    text: "The engine connects to verified sports data streams for live scores, fixtures, standings, stats, and history.",
  },
  {
    icon: Network,
    title: "Intelligence Layer",
    text: "Raw data becomes clear insight: form, patterns, comparisons, momentum, and simplified interpretation.",
  },
  {
    icon: Zap,
    title: "Instant Public Response",
    text: "SEER replies within seconds directly on social platforms, creating visibility and shareable engagement.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-seer-violet/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How SEER Works"
          title="A real-time intelligence pipeline for sports conversations."
          description="SEER is optimized for speed, clarity, and conversational interaction. It understands what fans ask, retrieves verified data, and turns it into useful public insight."
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-seer-violet via-seer-cyan to-seer-pink lg:block" />

          <div className="grid gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid items-center gap-7 lg:grid-cols-2 ${
                    isRight ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <div className={isRight ? "lg:col-start-2" : ""}>
                    <div className="glass-card rounded-3xl p-7 transition hover:border-seer-cyan/40">
                      <div
                        className={`mb-5 flex ${
                          isRight ? "lg:justify-start" : "lg:justify-end"
                        }`}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-seer-violet/25 text-seer-cyan ring-1 ring-white/10">
                          <Icon size={26} />
                        </div>
                      </div>

                      <p className="text-sm font-bold uppercase tracking-[0.25em] text-seer-cyan">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-3 heading-font text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-seer-cyan shadow-cyan lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}