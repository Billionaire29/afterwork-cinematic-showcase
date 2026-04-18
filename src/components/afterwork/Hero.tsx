import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain flex flex-col">
      {/* Orbs */}
      <div className="orb" style={{ width: 520, height: 520, background: "#C6F135", top: "10%", left: "-8%" }} />
      <div className="orb" style={{ width: 600, height: 600, background: "#ffffff22", bottom: "-10%", right: "-10%", animationDelay: "-6s" }} />
      <div className="orb" style={{ width: 380, height: 380, background: "#C6F13555", top: "40%", right: "20%", animationDelay: "-10s" }} />

      <div className="container flex-1 flex flex-col justify-center pt-28 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-white/50 mb-8 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-lime" />
          Independent Digital Agency — EST. 2022
        </motion.div>

        <h1 className="font-display leading-[0.85] text-white" style={{ fontSize: "clamp(64px, 12vw, 180px)" }}>
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
            AFTERWORK.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif-italic text-2xl md:text-4xl text-white/80 mt-8 max-w-2xl"
        >
          Where brands stop blending in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex items-center gap-6"
        >
          <a
            href="#work"
            className="btn-sweep inline-flex items-center gap-2 px-7 py-4 rounded-full border border-lime text-lime hover:text-background font-mono-ui uppercase text-xs tracking-widest"
          >
            See Our Work <ArrowUpRight size={16} />
          </a>
          <a href="#contact" className="font-mono-ui text-[11px] uppercase tracking-widest text-white/60 hover:text-lime transition-colors">
            or — start a project ↘
          </a>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-white/10 py-4 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center">
              {[
                "Web Development",
                "Digital Marketing",
                "Graphic Design",
                "App Development",
                "Brand Strategy",
                "UI / UX",
                "SEO",
                "Performance",
              ].map((t) => (
                <span key={t + idx} className="font-mono-ui text-xs uppercase tracking-[0.25em] text-lime/80 px-8 flex items-center gap-8">
                  {t}
                  <span className="text-white/30">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
