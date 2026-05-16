"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import HowItWorks from "@/components/HowItWorks";
import SportsCoverage from "@/components/SportsCoverage";
import Roadmap from "@/components/Roadmap";
import WhitepaperCard from "@/components/WhitepaperCard";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import {
  Activity,
  BarChart3,
  Bot,
  Brain,
  CalendarDays,
  Eye,
  LineChart,
  MessageCircle,
  Network,
  RadioTower,
  Search,
  Share2,
  Sparkles,
  Trophy,
  Zap,
  ArrowRight,
  ShieldCheck,
  Orbit,
} from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  "Real-Time Data",
  "Conversational AI",
  "Social Platform Native",
  "Contextual Insights",
  "Multi-Sport Coverage",
  "Fast Responses",
];

const problemCards = [
  {
    icon: Search,
    title: "Too many platforms",
    text: "Fans jump between score apps, news feeds, stats websites, prediction tools, and social discussions.",
  },
  {
    icon: BarChart3,
    title: "Raw data overload",
    text: "Tables and numbers are everywhere, but simple interpretation and context are often missing.",
  },
  {
    icon: MessageCircle,
    title: "Unstructured conversations",
    text: "Sports discussions happen publicly in real time, but reliable intelligence does not live inside those conversations.",
  },
];

const features = [
  {
    icon: RadioTower,
    title: "Real-Time Sports Data",
    description:
      "Retrieve live scores, fixtures, standings, team stats, player stats, and historical records from verified data streams.",
  },
  {
    icon: Brain,
    title: "AI-Powered Intent Understanding",
    description:
      "SEER AI understands plain-language questions and identifies the team, league, player, match, or request type.",
  },
  {
    icon: Eye,
    title: "Contextual Match Insights",
    description:
      "Transform sports information into simplified explanations, trends, and useful interpretation.",
  },
  {
    icon: Activity,
    title: "Team Form Analysis",
    description:
      "Summarize recent performance, consistency, momentum, scoring rhythm, and defensive strength.",
  },
  {
    icon: CalendarDays,
    title: "Fixtures and Standings",
    description:
      "Help fans instantly check upcoming matches, league tables, and current competitive positions.",
  },
  {
    icon: BarChart3,
    title: "Player and Team Statistics",
    description:
      "Deliver structured performance data without forcing users to browse through multiple dashboards.",
  },
  {
    icon: LineChart,
    title: "Smart Predictions",
    description:
      "Support future predictive analysis, forecasting, trend intelligence, and momentum indicators.",
  },
  {
    icon: Trophy,
    title: "Multi-Sport Intelligence",
    description:
      "Built to expand beyond football into basketball, tennis, cricket, Formula 1, esports, and more.",
  },
  {
    icon: Share2,
    title: "Social Platform Distribution",
    description:
      "Every public reply becomes discoverable, shareable, and part of the live sports conversation.",
  },
  {
    icon: Zap,
    title: "Fast Conversational Search",
    description:
      "Fans do not need menus, filters, or multiple tabs. They ask, SEER AI understands, and answers arrive fast.",
  },
  {
    icon: Network,
    title: "Advanced Analytics Layer",
    description:
      "SEER AI turns data into clarity by identifying patterns, comparisons, and meaningful signals.",
  },
  {
    icon: Bot,
    title: "Public Shareable Responses",
    description:
      "Answers appear directly inside social conversations, increasing engagement and organic discovery.",
  },
];

const visualBadges = [
  "Live scores",
  "Standings",
  "Predictions",
  "Fan conversations",
  "Player stats",
  "Context",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-seer-black text-white">
      <Navbar />
      <Hero />

      <section className="overflow-hidden border-y border-white/10 bg-seer-purple/35 py-5">
        <div className="marquee flex w-[200%] gap-4">
          {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map(
            (item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex min-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/72"
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
        className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6"
      >
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-seer-pink/15 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-seer-violet/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                align="left"
                eyebrow="The Problem"
                title="Sports information is fragmented."
                description="Fans are not short of data. They are short of context, speed, and clarity. Today, the average fan jumps between different apps just to understand what is happening."
              />

              <div className="mt-10 grid gap-5">
                {problemCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: -28 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: index * 0.08, duration: 0.6 }}
                      className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-seer-cyan/40 hover:shadow-cyan"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-seer-violet/20 text-seer-cyan ring-1 ring-white/10">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="heading-font text-xl font-bold text-white">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-white/62">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-seer-violet/25 via-seer-pink/20 to-seer-cyan/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-3 shadow-seer backdrop-blur-2xl">
                <div className="relative aspect-video overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/images/problem-fragmented-apps.png"
                    alt="Fragmented sports information visual"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-seer-black/70 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-seer-black/70 p-5 backdrop-blur-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-seer-cyan">
                    The old experience
                  </p>
                  <h3 className="mt-2 heading-font text-2xl font-bold text-white">
                    Too many tabs. Too little clarity.
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {visualBadges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/65"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="solution"
        className="relative overflow-hidden bg-seer-purple/35 px-4 py-28 md:px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(51,214,255,0.18),transparent_32%)]" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-seer-pink/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              align="left"
              eyebrow="The Solution"
              title="SEER AI turns sports questions into instant intelligence."
              description="Instead of searching across apps, fans ask SEER AI directly on social platforms and receive instant, intelligent, contextual responses powered by real-time sports data."
            />

            <div className="mt-8 grid gap-4">
              {[
                "Ask naturally in plain language",
                "SEER AI understands the intent",
                "Verified sports data powers the answer",
                "Contextual insight is delivered publicly",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-seer-cyan/10 text-seer-cyan">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="text-sm font-semibold text-white/72">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="rounded-3xl border border-red-300/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/45">
                Before
              </p>
              <h3 className="mt-3 heading-font text-2xl font-bold">
                Multiple apps. Delayed updates. Raw stats.
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Fans move between tabs, apps, websites, and timelines to find
                scores, tables, context, and analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative overflow-hidden rounded-3xl border border-seer-cyan/30 bg-gradient-to-br from-seer-violet/20 to-seer-cyan/10 p-6 shadow-cyan"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-seer-cyan/20 blur-3xl" />

              <p className="relative text-sm font-bold uppercase tracking-[0.24em] text-seer-cyan">
                After
              </p>
              <h3 className="relative mt-3 heading-font text-2xl font-bold">
                Ask SEER AI → AI understands → Data verifies → Insight responds.
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-white/70">
                The answer arrives where the conversation is already happening,
                turning public sports discussion into public sports intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(110,75,255,0.22),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Intelligence Pipeline"
            title="From fan question to public sports insight in seconds."
            description="SEER AI connects plain-language queries, intent detection, live data, and an AI intelligence layer into one fast conversational system."
          />

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.85 }}
            className="relative mt-14"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-seer-violet/20 via-seer-cyan/20 to-seer-pink/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.055] p-3 shadow-seer backdrop-blur-2xl">
              <div className="relative aspect-video overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/seer-intelligence-pipeline.png"
                  alt="SEER AI intelligence pipeline"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <HowItWorks />

      <section
        id="features"
        className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6"
      >
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-seer-violet/20 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-seer-cyan/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Features"
            title="Everything fans need to understand the game faster."
            description="SEER AI combines live data, conversational AI, contextual analysis, and social distribution into one intelligent sports layer."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-seer-purple/35 px-4 py-28 md:px-6">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-seer-pink/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Live Demo Mockup"
            title="Sports answers that feel like conversation."
            description="This is a frontend mockup for now. Later, you can connect it to a real backend, sports data APIs, and social platform integrations."
          />

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-7 rounded-[3rem] bg-gradient-to-r from-seer-violet/25 via-seer-cyan/20 to-seer-pink/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-3 shadow-seer backdrop-blur-2xl">
                <div className="relative aspect-video overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/images/ai-query-mockup.png"
                    alt="SEER AI social sports conversation mockup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.75 }}
              className="rounded-[2rem] border border-white/10 bg-seer-black/70 p-5 shadow-seer backdrop-blur-2xl md:p-8"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-white/45">User</p>
                <p className="mt-2 text-lg text-white">
                  @SeerAI Arsenal last 5 games?
                </p>
              </div>

              <div className="mt-5 rounded-3xl border border-seer-cyan/25 bg-gradient-to-br from-seer-violet/20 to-seer-cyan/10 p-5">
                <p className="text-sm font-semibold text-seer-cyan">SEER AI</p>
                <p className="mt-2 leading-8 text-white/80">
                  Arsenal’s recent form shows 4 wins and 1 draw. They have
                  scored consistently, conceded few goals, and remain one of the
                  strongest teams in current league momentum.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "League table request",
                  "Next fixture request",
                  "Top scorers request",
                  "Form comparison request",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm text-white/68 transition hover:border-seer-cyan/35 hover:text-white"
                  >
                    {item}
                    <ArrowRight
                      size={16}
                      className="text-seer-cyan transition group-hover:translate-x-1"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SportsCoverage />

      <section className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(51,214,255,0.14),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.75 }}
          >
            <SectionHeader
              align="left"
              eyebrow="Strategic Advantage"
              title="Built where sports conversations already happen."
              description="SEER AI is distribution-first. Every public interaction increases discovery, creates shareable moments, and strengthens network effects."
            />

            <div className="mt-8 grid gap-5">
              {["Engagement", "Visibility", "Growth"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-seer-violet/25 text-seer-cyan">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="heading-font text-xl font-bold">{item}</h3>
                    <p className="mt-1 text-sm text-white/55">
                      Public answers create more reach, more conversations, and
                      more discovery.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 38, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.85 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-seer-cyan/20 via-seer-violet/25 to-seer-pink/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.055] p-3 shadow-seer backdrop-blur-2xl">
              <div className="relative aspect-video overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/social-growth-loop.png"
                  alt="SEER AI social growth loop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-seer-purple/35 px-4 py-28 md:px-6">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-seer-violet/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why SEER AI Matters"
            title="The future of sports interaction is not searching. It is asking."
            description="SEER AI changes how fans move from information to understanding."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "From Searching to Asking",
                text: "Users do not need to navigate many apps. They simply ask naturally.",
              },
              {
                title: "From Raw Data to Intelligent Insight",
                text: "SEER AI transforms numbers into context, clarity, and understanding.",
              },
              {
                title: "From Apps to Real-Time Conversation",
                text: "Sports intelligence becomes part of social spaces where fans already engage.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-3xl p-7 transition hover:border-seer-cyan/35 hover:shadow-cyan"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-seer-cyan/10 text-seer-cyan">
                  <Orbit size={23} />
                </div>
                <h3 className="heading-font text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-white/62">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6">
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-seer-cyan/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <SectionHeader
            eyebrow="Vision"
            title="The Global Sports Intelligence Layer"
            description="SEER AI is designed to evolve beyond a simple scores tool into universal sports intelligence infrastructure for fans, creators, analysts, communities, and future conversational platforms."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Multi-sport coverage",
              "Predictive analysis",
              "Performance forecasting",
              "Trend intelligence",
              "Web interface",
              "Mobile ecosystem",
              "Messaging platforms",
              "Creator tools",
              "Sports intelligence APIs",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white/68 backdrop-blur-xl"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <Roadmap />

      <section
        id="whitepaper"
        className="relative overflow-hidden bg-seer-purple/35 px-4 py-28 md:px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(214,44,255,0.15),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(51,214,255,0.14),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.75 }}
          >
            <SectionHeader
              align="left"
              eyebrow="Whitepaper"
              title="Read the SEER AI Whitepaper"
              description="Explore the full vision, architecture, market opportunity, and intelligence model behind SEER AI."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.8 }}
          >
            <WhitepaperCard />
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}