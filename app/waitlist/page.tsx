import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Sparkles } from "lucide-react";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-seer-black text-white">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-24 pt-36 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,44,255,0.28),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(51,214,255,0.16),transparent_32%)]" />

        <div className="relative mx-auto max-w-3xl rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-seer backdrop-blur-2xl md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-seer-violet/25 text-seer-cyan ring-1 ring-white/10">
            <Sparkles size={30} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
            Join Waitlist
          </p>

          <h1 className="mt-4 heading-font text-4xl font-black tracking-tight md:text-6xl">
            Be early to the future of sports intelligence.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/68">
            Get notified when SEER AI launches public access, demos, and early
            community features.
          </p>

          <form className="mx-auto mt-9 grid max-w-xl gap-4 sm:grid-cols-[1fr_auto]">
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-seer-black/60 px-12 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-seer-cyan/50"
              />
            </div>

            <button
              type="button"
              className="button-glow rounded-full bg-gradient-to-r from-seer-violet via-seer-electric to-seer-pink px-7 py-4 text-sm font-bold text-white"
            >
              Join Waitlist
            </button>
          </form>

          <p className="mt-5 text-xs text-white/40">
            Frontend placeholder only. Connect this form to your backend,
            Mailchimp, Airtable, Supabase, or Google Forms later.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}