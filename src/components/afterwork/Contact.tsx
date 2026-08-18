import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
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
    <section id="contact" className="relative py-28 md:py-40 border-t border-ink/5 overflow-hidden grain">
      <div className="orb" style={{ width: 500, height: 500, background: "#D81E3655", top: "20%", left: "60%" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="font-mono-ui t-label text-ink/40 mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-accent" /> 04 — Let's talk
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {chips.map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass font-mono-ui text-[12px] tracking-[0.12em] uppercase text-ink"
              >
                <Icon size={14} color="#D81E36" />
                {label}
              </span>
            ))}
          </div>

          <h2 className="font-display text-ink h-section">
            LET'S BUILD <br />
            <span className="text-accent">SOMETHING.</span>
          </h2>

          <p className="font-serif-italic t-sub text-ink/70 mt-6 max-w-2xl">
            We're accepting new projects. Are you ready?
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href="mailto:hello@therarecompany.in"
              className="btn-sweep btn-sweep-dark inline-flex items-center px-6 py-3 rounded-full bg-accent text-background font-mono-ui t-label "
            >
              Start a Project →
            </a>
            <a
              href="#work"
              className="btn-sweep inline-flex items-center px-6 py-3 rounded-full border border-ink/30 text-ink  font-mono-ui t-label"
            >
              View All Work
            </a>
          </div>

          <div className="mt-20 flex flex-wrap gap-x-8 gap-y-4 border-t border-ink/10 pt-8">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 font-mono-ui text-[12px] uppercase tracking-[0.18em] text-ink/60  transition-all duration-300"
              >
                <Icon size={14} color="#D81E36" className="transition-transform " />
                {label}
                <ArrowUpRight size={12} className="text-accent opacity-70 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-ink/5 py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
      <img src={logo} alt="The Rare Company logo" className="h-7 w-auto object-contain" />
      <p className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-ink/40">
        © 2026 The Rare Company. All rights reserved.
      </p>
      <span className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-ink/40 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" /> Online
      </span>
    </div>
  </footer>
);
