import { motion } from "framer-motion";

const socials = ["LinkedIn", "Instagram", "Twitter", "Dribbble"];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 md:py-48 border-t border-white/5 overflow-hidden grain">
      <div className="orb" style={{ width: 500, height: 500, background: "#C6F13555", top: "20%", left: "60%" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-white/40 mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-lime" /> 04 — Let's talk
          </div>

          <h2 className="font-display text-white leading-[0.88]" style={{ fontSize: "clamp(54px, 10vw, 150px)" }}>
            LET'S BUILD <br />
            <span className="text-lime">SOMETHING.</span>
          </h2>

          <p className="font-serif-italic text-2xl md:text-4xl text-white/70 mt-8 max-w-2xl">
            We're accepting new projects. Are you ready?
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="mailto:hello@afterwork.studio"
              className="btn-sweep btn-sweep-dark inline-flex items-center px-8 py-4 rounded-full bg-lime text-background font-mono-ui uppercase text-xs tracking-widest hover:text-lime"
            >
              Start a Project →
            </a>
            <a
              href="#work"
              className="btn-sweep inline-flex items-center px-8 py-4 rounded-full border border-white/30 text-white hover:text-background font-mono-ui uppercase text-xs tracking-widest"
            >
              View All Work
            </a>
          </div>

          <div className="mt-24 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-10">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="font-mono-ui text-xs uppercase tracking-[0.25em] text-white/50 hover:text-lime transition-colors"
              >
                {s} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-white/5 py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-white text-sm" style={{ letterSpacing: "0.2em" }}>AFTERWORK</span>
      <p className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-white/40">
        © 2025 Afterwork. All rights reserved.
      </p>
      <span className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-white/40 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-blink" /> Online
      </span>
    </div>
  </footer>
);
