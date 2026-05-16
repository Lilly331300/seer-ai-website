"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.45 }}
      className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:border-seer-cyan/40 hover:shadow-cyan"
    >
      <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-seer-violet/30 to-seer-cyan/15 text-seer-cyan ring-1 ring-white/10">
        <Icon size={24} />
      </div>

      <h3 className="heading-font text-xl font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
    </motion.div>
  );
}