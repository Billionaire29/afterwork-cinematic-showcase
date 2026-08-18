import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, Search, Zap, Target, Scale, Gavel, FileText } from "lucide-react";

const floatingCards = [
  { label: "UI/UX Design", color: "bg-rose-100/80 text-rose-700" },
  { label: "Legal Tech", color: "bg-violet-100/80 text-violet-700" },
  { label: "Product Strategy", color: "bg-sky-100/80 text-sky-700" },
  { label: "Brand Systems", color: "bg-amber-100/80 text-amber-700" },
];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#FBF9F6]"
    >
      {/* Soft ambient gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top soft light */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FBF9F6] to-[#F8F4EF]" />

        {/* Bottom premium multi-color glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[#f0e6ff]/70 via-[#ffe4f1]/40 to-transparent" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[140%] h-[50%] rounded-[100%] bg-gradient-to-r from-violet-300/30 via-rose-300/25 to-amber-200/30 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center pt-32 pb-16">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-neutral-400" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-500">
            IT · Web · App · Legal — Est. 2022
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(2.8rem,7.5vw,6.2rem)] leading-[0.95] tracking-tight text-neutral-900"
          >
            We Build
            <br />
            <span className="relative inline-block">
              Rare Things
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-rose-400 via-violet-400 to-amber-300 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-neutral-600 leading-relaxed font-light"
          >
            Technology & law under one roof — crafted with precision, 
            designed to feel rare, and built to last.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-900 text-white text-[13px] font-medium tracking-wide overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              See Our Work
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-violet-500/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="#contact"
            className="text-[13px] font-medium tracking-wide text-neutral-500 hover:text-neutral-800 transition-colors flex items-center gap-1.5"
          >
            Start a project
            <span className="text-lg">↘</span>
          </a>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`px-5 py-2.5 rounded-full ${card.color} backdrop-blur-sm border border-white/60 shadow-sm text-[13px] font-medium tracking-wide`}
            >
              {card.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};