import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, ArrowUpRight, Zap, Target, Handshake } from "lucide-react";

const socials = [
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
];

const chips = [
  { Icon: Zap, label: "Fast Delivery" },
  { Icon: Target, label: "Result Driven" },
  { Icon: Handshake, label: "Long-term Partner" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-white/5 overflow-hidden grain">
      <div className="orb" style={{ width: 500, height: 500, background: "#C6F13555", top: "20%", left: "60%" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="font-mono-ui t-label text-white/40 mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-lime" /> 04 — Let's talk
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {chips.map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass font-mono-ui text-[12px] tracking-[0.12em] uppercase text-white"
              >
                <Icon size={14} color="#C6F135" />
                {label}
              </span>
            ))}
          </div>

          <h2 className="font-display text-white h-section">
            LET'S BUILD <br />
            <span className="text-lime">SOMETHING.</span>
          </h2>

          <p className="font-serif-italic t-sub text-white/70 mt-6 max-w-2xl">
            We're accepting new projects. Are you ready?
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href="mailto:hello@afterwork.studio"
              className="btn-sweep btn-sweep-dark inline-flex items-center px-6 py-3 rounded-full bg-lime text-background font-mono-ui t-label hover:text-lime"
            >
              Start a Project →
            </a>
            <a
              href="#work"
              className="btn-sweep inline-flex items-center px-6 py-3 rounded-full border border-white/30 text-white hover:text-background font-mono-ui t-label"
            >
              View All Work
            </a>
          </div>

          <div className="mt-20 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 font-mono-ui text-[12px] uppercase tracking-[0.18em] text-white/60 hover:text-lime transition-all duration-300"
              >
                <Icon size={14} color="#C6F135" className="transition-transform group-hover:scale-110" />
                {label}
                <ArrowUpRight size={12} className="text-lime opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
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
