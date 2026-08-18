import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain flex flex-col">
      {/* New cinematic aurora background */}
      <div className="absolute inset-0 hero-aurora pointer-events-none" />
      <div className="absolute inset-0 hero-grid-fade pointer-events-none" />

      {/* Intensified orbs */}
      <div className="orb" style={{ width: 680, height: 680, background: "#D81E36", opacity: 0.16, top: "-12%", right: "-10%" }} />
      <div className="orb" style={{ width: 480, height: 480, background: "#0a0a0a", opacity: 0.05, bottom: "-8%", left: "-6%", animationDelay: "-7s" }} />
      <div className="orb soft-pulse" style={{ width: 360, height: 360, background: "#D81E36", opacity: 0.12, top: "38%", left: "42%", animationDelay: "-10s" }} />

      <div className="container flex-1 flex flex-col justify-center pt-28 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono-ui text-[9px] md:text-[11px] tracking-[0.15em] uppercase text-ink/50 mb-8 flex items-center gap-3"
        >
          IT · Web · App · Legal — EST. 2022
        </motion.div>

        <h1 className="font-display h-hero text-ink">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            WE BUILD
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="block text-shimmer"
          >
            RARE THINGS.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif-italic t-sub text-ink/80 mt-8 max-w-2xl"
        >
          Technology and law, under one roof — built rare, done right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex items-center gap-4 md:gap-6 flex-wrap"
        >
          <a
            href="#work"
            className="btn-sweep inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-accent text-accent  font-mono-ui text-[10px] md:text-[11px] tracking-[0.15em] uppercase"
          >
            See Our Work <ArrowUpRight size={12} />
          </a>
          <a href="#contact" className="font-mono-ui text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-ink/60  transition-colors">
            or — start a project ↘
          </a>
        </motion.div>
      </div>
    </section>
  );
};