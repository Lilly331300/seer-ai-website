import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, FileText, Sparkles } from "lucide-react";

export default function WhitepaperCard() {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-seer backdrop-blur-xl md:p-5">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-seer-violet/30 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-seer-cyan/20 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,75,255,0.12),transparent_35%,rgba(51,214,255,0.08))]" />

      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/images/whitepaper-preview.png"
            alt="SEER AI Whitepaper preview"
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-seer-black via-seer-black/15 to-transparent" />
        </div>
      </div>

      <div className="relative mt-5 p-2">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-seer-violet/35 to-seer-cyan/20 text-seer-cyan ring-1 ring-white/10 shadow-cyan">
            <FileText size={26} />
          </div>

          <div className="rounded-full border border-seer-cyan/25 bg-seer-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-seer-cyan">
            Version 1.0
          </div>
        </div>

        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-seer-cyan">
          <Sparkles size={14} />
          SEER AI Whitepaper
        </p>

        <h3 className="mt-4 heading-font text-3xl font-bold leading-tight text-white md:text-4xl">
          The Real-Time Sports Intelligence Layer
        </h3>

        <p className="mt-4 leading-7 text-white/65">
          Explore SEER AI’s vision, architecture, market opportunity, and
          intelligence model for transforming fragmented sports information into
          conversational insight.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["AI", "Sports", "Social Distribution"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href="/whitepapers/SEER-AI-Whitepaper.pdf"
          className="button-glow mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-6 py-3 text-sm font-bold text-white shadow-seer transition hover:scale-[1.03] hover:text-white"
        >
          Download Whitepaper
          <ArrowDownToLine size={17} />
        </Link>
      </div>
    </div>
  );
}