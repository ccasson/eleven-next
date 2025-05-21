/* pages/index.js */
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <a href="#" className="text-2xl font-bold text-primary">Elevan</a>
          <div className="hidden gap-6 md:flex">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#how">How&nbsp;It&nbsp;Works</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <a href="#apply" className="rounded-xl bg-primary px-4 py-2 font-semibold text-zinc-900 hover:bg-secondary">
            Apply&nbsp;Now
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-secondary" />
        <h1 className="text-4xl font-extrabold sm:text-5xl">Turn Your Fans into Fortunes</h1>
        <p className="mt-4 max-w-md text-lg">
          Expert management, viral marketing and 24/7 chat support that skyrocket your OnlyFans revenue.
        </p>
        <a href="#apply" className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-zinc-900 hover:bg-zinc-200">
          Apply&nbsp;Now
        </a>
      </section>

      {/* SERVICES */}
      <motion.section
        id="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="text-center text-3xl font-bold">What&nbsp;We&nbsp;Do</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["24/7 Chat & Monetization", "US/UK agents convert every DM into dollars."],
            ["Viral Content Coaching", "Trend sheets and on-call editors grow your socials."],
            ["Marketing & PR", "Cross-platform promos & press placements."],
            ["Elite Fan Engagement", "Personalized chat that keeps subs renewing."]
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-zinc-900 p-6 shadow-lg">
              <h3 className="font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* RESULTS */}
      <motion.section
        id="results"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 py-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold">Proven Results</h2>
          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:justify-center">
            {[ [5000, 50000], [12000, 130000], [20000, 200000] ].map(([before, after]) => (
              <div key={after} className="rounded-2xl bg-zinc-950 p-8 shadow-inner">
                <p className="text-sm text-zinc-400">Before</p>
                <p className="text-2xl font-bold">${before.toLocaleString()}/mo</p>
                <hr className="my-4 border-zinc-700" />
                <p className="text-sm text-zinc-400">After Elevan</p>
                <p className="text-3xl font-extrabold text-primary">
                  $<CountUp start={0} end={after} duration={3} separator="," />/mo
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-zinc-500">* Screenshots available on request.</p>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        id="how"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="text-center text-3xl font-bold">How It Works</h2>
        <ol className="mt-12 space-y-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0">
          {[
            ["Apply", "Three-minute form. No commitments."],
            ["Get Qualified", "We review stats & goals to ensure fit."],
            ["Get Paid", "We run the engine—your earnings scale."]
          ].map(([title, desc], i) => (
            <li key={title} className="rounded-2xl bg-zinc-900 p-8 shadow-lg">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-zinc-900">
                {i + 1}
              </span>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{desc}</p>
            </li>
          ))}
        </ol>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 py-20"
      >
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold">Creator Voices</h2>
          <div className="mt-12 space-y-12 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
            {[
              ["“My revenue doubled month-one. The Elevan chat team is insane.”", "Ava S., Top 0.3%"],
              ["“Finally an agency that sends real traffic and respects my brand.”", "Kara M., Top 0.1%"]
            ].map(([quote, name]) => (
              <blockquote key={name} className="rounded-2xl bg-zinc-950 p-8 shadow-inner">
                <p className="text-lg font-medium">{quote}</p>
                <footer className="mt-4 text-sm text-zinc-400">— {name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </motion.section>

      {/* APPLY */}
      <section id="apply" className="mx-auto max-w-2xl px-4 py-24">
        <h2 className="text-center text-3xl font-bold">Apply to Join Elevan</h2>
        <form
          action="https://formspree.io/f/your-endpoint"
          method="POST"
          className="mt-10 space-y-6"
        >
          {["Name", "Email", "OnlyFans Handle"].map((label) => (
            <div key={label}>
              <label className="block text-sm font-medium">{label}</label>
              <input
                name={label.toLowerCase().replace(/\s+/g, "-")}
                required
                type={label === "Email" ? "email" : "text"}
                className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 placeholder-zinc-500 focus:ring-2 focus:ring-secondary"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium">Monthly Revenue Goal (USD)</label>
            <input
              name="goal"
              type="number"
              min="0"
              className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 placeholder-zinc-500 focus:ring-2 focus:ring-secondary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 font-semibold text-zinc-900 hover:bg-secondary"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-500">© 2025 Elevan. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-primary">
              Services
            </a>
            <a href="#apply" className="hover:text-primary">
              Apply
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
