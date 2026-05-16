"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Bell,
  Brain,
  CalendarDays,
  Code2,
  Globe2,
  Layers,
  LineChart,
  MessageCircle,
  RadioTower,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    status: "Live",
    title: "Football Core",
    subtitle: "Building the foundation",
    timeline: "Q2 2026 · Now",
    icon: Trophy,
    accent: "from-seer-violet/35 via-seer-pink/20 to-seer-cyan/15",
    points: [
      { text: "Live Score", icon: RadioTower },
      { text: "Fixtures", icon: CalendarDays },
      { text: "Team Form", icon: Activity },
      { text: "Basic AI Analysis", icon: Brain },
      { text: "AI Match Analysis", icon: BarChart3 },
      { text: "Predictions", icon: LineChart },
    ],
  },
  {
    phase: "Phase 2",
    status: "Next · Near Term",
    title: "Advanced Insights",
    subtitle: "Go deeper with smarter intelligence",
    timeline: "Q3 2026",
    icon: Brain,
    accent: "from-seer-cyan/25 via-seer-violet/20 to-seer-pink/15",
    points: [
      { text: "Player Stats", icon: BarChart3 },
      { text: "Head-to-Head Insights", icon: Layers },
      { text: "Smarter Comparisons", icon: Sparkles },
    ],
  },
  {
    phase: "Phase 3",
    status: "Expansion",
    title: "Multi-Sport Expansion",
    subtitle: "Beyond football, global coverage",
    timeline: "Q4 2026",
    icon: Globe2,
    accent: "from-seer-pink/25 via-seer-violet/20 to-seer-cyan/20",
    points: [
      { text: "Basketball", icon: Trophy },
      { text: "Tennis", icon: Activity },
      { text: "Additional Football Leagues", icon: Globe2 },
      { text: "Global Coverage", icon: RadioTower },
      { text: "More Sports Coming Soon", icon: Sparkles },
    ],
  },
  {
    phase: "Phase 4",
    status: "Ecosystem",
    title: "Platform Ecosystem",
    subtitle: "Your personalized sports companion",
    timeline: "Q1 2027",
    icon: Zap,
    accent: "from-seer-violet/30 via-seer-cyan/20 to-seer-pink/20",
    points: [
      { text: "Personalized Feed", icon: MessageCircle },
      { text: "Alerts & Notifications", icon: Bell },
      { text: "Multi-Platform: X, Telegram, Web", icon: Globe2 },
      { text: "API Access / Developer Layer", icon: Code2 },
      { text: "Community & Creator Tools", icon: Users },
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6"
    >
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-seer-pink/15 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-seer-cyan/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(110,75,255,0.18),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="SEER AI Roadmap"
          title="From football core to a global sports intelligence ecosystem."
          description="SEER AI starts with live football intelligence, then expands into deeper insights, multi-sport coverage, and a full platform ecosystem for fans, creators, communities, and developers."
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-seer-violet via-seer-cyan to-seer-pink lg:block" />

          <div className="grid gap-8">
            {roadmap.map((item, index) => {
              const MainIcon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: isRight ? 42 : -42 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className={`relative grid items-center gap-7 lg:grid-cols-2 ${
                    isRight ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <div className={isRight ? "lg:col-start-2" : ""}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-seer backdrop-blur-2xl transition hover:border-seer-cyan/40 hover:shadow-cyan md:p-7"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70 transition group-hover:opacity-100`}
                      />
                      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

                      <div className="relative z-10">
                        <div
                          className={`mb-6 flex ${
                            isRight ? "lg:justify-start" : "lg:justify-end"
                          }`}
                        >
                          <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-seer-black/45 text-seer-cyan shadow-cyan backdrop-blur-xl">
                            <MainIcon size={30} />
                          </div>
                        </div>

                        <div
                          className={`flex flex-wrap gap-3 ${
                            isRight ? "lg:justify-start" : "lg:justify-end"
                          }`}
                        >
                          <span className="rounded-full border border-seer-cyan/25 bg-seer-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-seer-cyan">
                            {item.phase}
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                            {item.status}
                          </span>
                        </div>

                        <h3 className="mt-5 heading-font text-3xl font-black leading-tight text-white md:text-4xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-base font-semibold text-seer-lavender/80">
                          {item.subtitle}
                        </p>

                        <p className="mt-4 inline-flex rounded-full border border-seer-pink/25 bg-seer-pink/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-seer-pink">
                          {item.timeline}
                        </p>

                        <div className="mt-7 grid gap-3">
                          {item.points.map((point) => {
                            const PointIcon = point.icon;

                            return (
                              <div
                                key={point.text}
                                className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-seer-black/35 p-3 text-sm font-semibold text-white/72 backdrop-blur-xl ${
                                  isRight ? "" : "lg:flex-row-reverse"
                                }`}
                              >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-seer-cyan/10 text-seer-cyan">
                                  <PointIcon size={17} />
                                </div>

                                <span>{point.text}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-seer-cyan/40 bg-seer-black shadow-cyan lg:block">
                    <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-seer-cyan" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}