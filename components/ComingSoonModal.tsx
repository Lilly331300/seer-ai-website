"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Copy, ShieldCheck } from "lucide-react";

type ComingSoonModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ComingSoonModal({ open, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close modal overlay"
            onClick={onClose}
            className="absolute inset-0 bg-seer-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-seer-black/90 p-7 text-center shadow-seer backdrop-blur-2xl"
          >
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-seer-violet/30 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-seer-cyan/25 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,75,255,0.14),transparent_35%,rgba(214,44,255,0.12))]" />

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-seer-cyan/40 hover:text-white"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-seer-violet/40 via-seer-pink/25 to-seer-cyan/25 text-seer-cyan ring-1 ring-white/10 shadow-cyan"
              >
                <Copy size={34} />
              </motion.div>

              <p className="mt-7 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
                <Sparkles size={14} />
                Contract Address
              </p>

              <h2 className="mt-4 heading-font text-4xl font-black text-white">
                Coming soon!
              </h2>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/62">
                The official SEER AI contract address is not live yet. Please
                only use the address announced through official SEER AI channels.
              </p>

              <div className="mt-6 rounded-2xl border border-seer-cyan/20 bg-seer-cyan/10 p-4">
                <div className="flex items-start gap-3 text-left">
                  <div className="mt-1 text-seer-cyan">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="text-xs leading-6 text-white/62">
                    Always verify before interacting with any token or contract.
                    Avoid fake addresses, fake airdrops, and unofficial links.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="button-glow mt-7 w-full rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}