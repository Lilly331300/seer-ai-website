"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Social Sports Intelligence Bot",
    points: [
      "X-based query responses",
      "Football data coverage",
      "Fixtures, standings, form, and basic insights",
    ],
  },
  {
    phase: "Phase 2",
    title: "Intelligence Expansion",
    points: [
      "More leagues",
      "More sports",
      "Smarter contextual analysis",
      "Player and team comparisons",
    ],
  },
  {
    phase: "Phase 3",
    title: "Predictive Layer",
    points: [
      "Forecasting",
      "Trend intelligence",
      "Match prediction support",
      "Performance momentum indicators",
    ],
  },
  {
    phase: "Phase 4",
    title: "Cross-Platform Ecosystem",
    points: [
      "Web dashboard",
      "Mobile interface",
      "Messaging integrations",
      "Community intelligence tools",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-seer-pink/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Roadmap"
          title="From social bot to global sports intelligence infrastructure."
          description="SEER is designed to grow from real-time conversational sports answers into a broader intelligence layer across sports, platforms, and communities."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card rounded-3xl p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-seer-cyan">
                {item.phase}
              </p>
              <h3 className="mt-4 heading-font text-2xl font-bold text-white">
                {item.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-white/65">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-seer-cyan shadow-cyan" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}