import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhitepaperCard from "@/components/WhitepaperCard";
import Link from "next/link";

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-seer-black text-white">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-24 pt-36 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(110,75,255,0.35),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
            SEER AI Whitepaper
          </p>

          <h1 className="mt-5 heading-font text-5xl font-black tracking-tight md:text-7xl">
            The Real-Time Sports Intelligence Layer
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Read the full SEER AI whitepaper and explore the vision for turning
            fragmented sports information into instant conversational
            intelligence.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="/whitepapers/SEER-AI-Whitepaper.pdf"
              className="button-glow rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-7 py-4 text-sm font-bold text-white"
            >
              Download Whitepaper PDF
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <WhitepaperCard />
        </div>
      </section>

      <Footer />
    </main>
  );
}