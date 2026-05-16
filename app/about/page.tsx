import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-seer-black text-white">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-24 pt-36 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(110,75,255,0.3),transparent_35%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-seer-cyan">
            About SEER AI
          </p>

          <h1 className="mt-5 heading-font text-5xl font-black tracking-tight md:text-7xl">
            Sports intelligence for the conversational era.
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-9 text-white/68">
            <p>
              SEER AI is an AI-powered sports intelligence engine built to
              transform how fans, analysts, communities, and creators interact
              with sports information.
            </p>

            <p>
              Instead of forcing fans to search across score apps, statistics
              websites, news feeds, and social platforms, SEER allows users to
              ask questions naturally and receive instant, contextual answers.
            </p>

            <p>
              SEER represents clarity, speed, intelligence, and foresight. Its
              long-term vision is to become the global sports intelligence layer
              across social platforms, web interfaces, mobile ecosystems, and
              future conversational environments.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}