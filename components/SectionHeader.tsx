"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
          {eyebrow}
        </p>
      )}

      <h2 className="heading-font text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}