"use client";

import Image from "next/image";
import Link from "next/link";
import { Copy } from "lucide-react";
import { useState } from "react";
import ComingSoonModal from "./ComingSoonModal";

const links = [
  { label: "Problem", href: "/#problem" },
  { label: "Solution", href: "/#solution" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Sports", href: "/#sports" },
  { label: "Roadmap", href: "/#roadmap" },
];

export default function Footer() {
  const [contractOpen, setContractOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-white/10 bg-seer-black px-4 py-12 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Image
                  src="/images/seer-logo.png"
                  alt="SEER AI logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="heading-font text-xl font-bold tracking-[0.18em] text-white">
                  SEER AI
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-seer-lavender/70">
                  See More. Know More. Win More.
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
              SEER AI is a real-time sports intelligence layer that turns social
              platforms into conversational sports ecosystems.
            </p>

            <p className="mt-5 max-w-xl text-xs leading-6 text-white/40">
              SEER AI provides sports intelligence and contextual insights.
              Predictions and analysis are informational and should not be
              treated as guaranteed outcomes.
            </p>
          </div>

          <div>
            <h4 className="heading-font text-lg font-bold text-white">
              Quick Links
            </h4>
            <div className="mt-5 grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/58 transition hover:text-seer-cyan"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="heading-font text-lg font-bold text-white">
              Resources
            </h4>
            <div className="mt-5 grid gap-3">
              <Link
                href="/whitepaper"
                className="text-sm text-white/58 hover:text-seer-cyan"
              >
                Whitepaper
              </Link>

              <button
                type="button"
                onClick={() => setContractOpen(true)}
                className="inline-flex items-center gap-2 text-left text-sm text-white/58 transition hover:text-seer-cyan"
              >
                <Copy size={15} />
                Contract Address
              </button>

              <Link href="#" className="text-sm text-white/58 hover:text-seer-cyan">
                X / Twitter
              </Link>

              <Link href="#" className="text-sm text-white/58 hover:text-seer-cyan">
                Telegram
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/38">
          © {new Date().getFullYear()} SEER AI. All rights reserved.
        </div>
      </footer>

      <ComingSoonModal
        open={contractOpen}
        onClose={() => setContractOpen(false)}
      />
    </>
  );
}