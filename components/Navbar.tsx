"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ComingSoonModal from "./ComingSoonModal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Problem", href: "/#problem" },
  { label: "Solution", href: "/#solution" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Sports", href: "/#sports" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Whitepaper", href: "/whitepaper" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [contractOpen, setContractOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-seer-black/75 px-4 py-3 shadow-seer backdrop-blur-2xl md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Image
                src="/images/seer-logo.png"
                alt="SEER AI logo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="heading-font text-lg font-bold tracking-[0.18em] text-white">
                SEER AI
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.22em] text-seer-lavender/70 sm:block">
                Sports Intelligence
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="text-sm font-medium text-white/68 transition hover:text-seer-cyan"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setContractOpen(true)}
              className="button-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-5 py-2.5 text-sm font-bold text-white shadow-seer transition hover:scale-[1.03]"
            >
              <Copy size={16} />
              Contract Address
            </button>
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-seer-black/95 p-5 shadow-seer backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-3">
              {navItems.map((item) => (
                <Link
                  onClick={() => setOpen(false)}
                  href={item.href}
                  key={item.label}
                  className="rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setContractOpen(true);
                }}
                className="button-glow mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-4 py-3 text-center text-sm font-bold text-white"
              >
                <Copy size={16} />
                Contract Address
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>

      <ComingSoonModal
        open={contractOpen}
        onClose={() => setContractOpen(false)}
      />
    </>
  );
}