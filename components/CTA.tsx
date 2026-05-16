"use client";

import Link from "next/link";
import { ArrowDownToLine, Sparkles, Copy } from "lucide-react";
import { useState } from "react";
import ComingSoonModal from "./ComingSoonModal";

export default function CTA() {
  const [contractOpen, setContractOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-seer-black px-4 py-28 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(110,75,255,0.35),transparent_38%)]" />
        <div className="absolute left-10 top-20 h-60 w-60 rounded-full bg-seer-pink/20 blur-3xl" />
        <div className="absolute bottom-16 right-10 h-72 w-72 rounded-full bg-seer-cyan/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-seer backdrop-blur-2xl md:p-14">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,75,255,0.14),transparent_35%,rgba(51,214,255,0.1))]" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-seer-violet/35 to-seer-cyan/20 text-seer-cyan ring-1 ring-white/10 shadow-cyan">
              <Sparkles size={30} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
              Join the future
            </p>

            <h2 className="mt-5 heading-font text-4xl font-black tracking-tight text-white md:text-6xl">
              Ready to see the game differently?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Join the future of real-time sports intelligence. Ask better
              questions. Get smarter answers. Engage instantly.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setContractOpen(true)}
                className="button-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-8 py-4 text-center text-sm font-bold text-white shadow-seer transition hover:scale-[1.03] hover:text-white"
              >
                <Copy size={17} />
                Contract Address
              </button>

              <Link
                href="/whitepapers/SEER-AI-Whitepaper.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-seer-cyan/35 bg-seer-cyan/10 px-8 py-4 text-center text-sm font-bold text-seer-cyan shadow-cyan backdrop-blur-xl transition hover:scale-[1.03] hover:border-seer-cyan hover:bg-seer-cyan/20 hover:text-white"
              >
                Download Whitepaper
                <ArrowDownToLine size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComingSoonModal
        open={contractOpen}
        onClose={() => setContractOpen(false)}
      />
    </>
  );
}