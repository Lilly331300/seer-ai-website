"use client";

import SectionHeader from "./SectionHeader";
import {
  Trophy,
  CircleDot,
  Timer,
  Gamepad2,
  Goal,
  ShieldPlus,
  Waves,
  Sparkles,
  ArrowUpRight,
  RadioTower,
} from "lucide-react";
import { motion } from "framer-motion";

const sports = [
  {
    name: "Football",
    icon: Goal,
    emoji: "⚽",
    status: "Global Leagues",
    gradient: "from-seer-violet/35 via-seer-pink/20 to-seer-cyan/15",
  },
  {
    name: "Basketball",
    icon: CircleDot,
    emoji: "🏀",
    status: "Live Courtside Data",
    gradient: "from-orange-500/25 via-seer-pink/20 to-seer-violet/20",
  },
  {
    name: "Tennis",
    icon: CircleDot,
    emoji: "🎾",
    status: "Tournament Intelligence",
    gradient: "from-lime-400/20 via-seer-cyan/20 to-seer-violet/20",
  },
  {
    name: "Cricket",
    icon: Trophy,
    emoji: "🏏",
    status: "Match & Player Trends",
    gradient: "from-seer-cyan/25 via-seer-violet/20 to-seer-pink/15",
  },
  {
    name: "Formula 1",
    icon: Timer,
    emoji: "🏎️",
    status: "Race Momentum",
    gradient: "from-red-500/25 via-seer-pink/20 to-seer-violet/20",
  },
  {
    name: "American Football",
    icon: ShieldPlus,
    emoji: "🏈",
    status: "Drive & Game Context",
    gradient: "from-amber-500/20 via-seer-violet/20 to-seer-cyan/15",
  },
  {
    name: "Esports",
    icon: Gamepad2,
    emoji: "🎮",
    status: "Competitive Gaming",
    gradient: "from-seer-violet/30 via-seer-cyan/20 to-seer-pink/20",
  },
  {
    name: "More Coming Soon",
    icon: Waves,
    emoji: "✨",
    status: "Expanding Coverage",
    gradient: "from-seer-pink/25 via-seer-violet/20 to-seer-cyan/20",
  },
];

const orbitItems = [
  "Scores",
  "Fixtures",
  "Standings",
  "Form",
  "Predictions",
  "Player Stats",
  "Live Context",
  "Social Replies",
];

export default function SportsCoverage() {
  return (
    <section
      id="sports"
      className="relative overflow-hidden bg-seer-purple/35 px-4 py-28 md:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,44,255,0.2),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(51,214,255,0.18),transparent_34%),radial-gradient(circle_at_50%_50%,rgba(110,75,255,0.12),transparent_45%)]" />

      <div className="absolute left-0 top-0 h-full w-full opacity-[0.08]">
        <div className="hero-grid h-full w-full" />
      </div>

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-24 h-48 w-48 rounded-full bg-seer-cyan/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-seer-pink/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Sports Coverage"
          title="Built to expand across the global sports ecosystem."
          description="SEER AI is designed to move beyond one sport and become a universal intelligence layer for live games, fan questions, social conversations, predictions, and performance context."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center"
          >
            <div className="absolute inset-4 rounded-full border border-seer-cyan/15" />
            <div className="absolute inset-14 rounded-full border border-seer-violet/20" />
            <div className="absolute inset-24 rounded-full border border-seer-pink/15" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-dashed border-seer-cyan/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 rounded-full border border-dashed border-seer-pink/20"
            />

            {orbitItems.map((item, index) => {
              const angle = (index / orbitItems.length) * Math.PI * 2;
              const radius = 210;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="absolute hidden rounded-full border border-white/10 bg-seer-black/75 px-4 py-2 text-xs font-bold text-white/70 shadow-seer backdrop-blur-xl sm:block"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {item}
                </motion.div>
              );
            })}

            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 40px rgba(110, 75, 255, 0.28)",
                  "0 0 80px rgba(51, 214, 255, 0.32)",
                  "0 0 40px rgba(110, 75, 255, 0.28)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/15 bg-seer-black/75 p-8 text-center shadow-seer backdrop-blur-2xl"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-seer-violet/35 to-seer-cyan/20 text-seer-cyan ring-1 ring-white/10">
                <RadioTower size={30} />
              </div>

              <p className="heading-font text-3xl font-black text-white">
                SEER
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-seer-cyan">
                Multi-Sport AI
              </p>

              <p className="mt-3 text-xs leading-5 text-white/50">
                One intelligence layer for every live sports conversation.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {sports.map((sport, index) => {
              const Icon = sport.icon;

              return (
                <motion.div
                  key={sport.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ delay: index * 0.06, duration: 0.55 }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-seer-black/50 p-5 backdrop-blur-xl transition hover:border-seer-cyan/45 hover:shadow-cyan"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sport.gradient} opacity-70 transition group-hover:opacity-100`}
                  />

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl transition group-hover:bg-seer-cyan/20" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                          transition={{ duration: 0.45 }}
                          className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-seer-black/45 text-3xl shadow-seer backdrop-blur-xl"
                        >
                          <span aria-hidden="true">{sport.emoji}</span>
                        </motion.div>

                        <div>
                          <h3 className="heading-font text-xl font-bold text-white">
                            {sport.name}
                          </h3>

                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-seer-cyan/80">
                            {sport.status}
                          </p>
                        </div>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 transition group-hover:border-seer-cyan/40 group-hover:text-seer-cyan">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {["Live", "Form", "AI"].map((tag) => (
                        <div
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/62"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <Sparkles size={14} className="text-seer-cyan" />
                        Intelligence ready
                      </div>

                      <Icon
                        size={20}
                        className="text-white/35 transition group-hover:text-seer-cyan"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
        >
          <div className="marquee flex w-[200%] gap-4">
            {[
              "Football Intelligence",
              "Basketball Trends",
              "Tennis Match Context",
              "Cricket Player Form",
              "Formula 1 Momentum",
              "American Football Drives",
              "Esports Performance",
              "More Sports Coming Soon",
              "Football Intelligence",
              "Basketball Trends",
              "Tennis Match Context",
              "Cricket Player Form",
              "Formula 1 Momentum",
              "American Football Drives",
              "Esports Performance",
              "More Sports Coming Soon",
            ].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex min-w-fit items-center gap-3 rounded-full border border-white/10 bg-seer-black/55 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/68"
              >
                <span className="h-2 w-2 rounded-full bg-seer-cyan shadow-cyan" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}