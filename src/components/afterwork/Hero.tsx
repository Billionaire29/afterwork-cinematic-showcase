import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, Search, Zap, Target, Scale, Gavel, FileText } from "lucide-react";

const tickerItems = [
  { Icon: Globe, label: "Web Development" },
  { Icon: Smartphone, label: "App Development" },
  { Icon: Zap, label: "IT Services" },
  { Icon: Scale, label: "Legal Consultation" },
  { Icon: Gavel, label: "Bail & FIR Matters" },
  { Icon: FileText, label: "Legal Drafting" },
  { Icon: Search, label: "SEO" },
  { Icon: Target, label: "Brand Strategy" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Background GIF - full cover, no extra effects */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://res.cloudinary.com/dp7avkarg/image/upload/v1787069802/67c1299f033e0730776633ca5935f067_biwik0.gif"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Optional soft dark overlay for better text readability (remove if not needed) */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container flex-1 flex flex-col justify-center pt-28 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono-ui text-[9px] md:text-[11px] tracking-[0.15em] uppercase text-ink/50 mb-8 flex items-center gap-3"
        >
          <span className="w-5 h-px bg-accent" />
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
            className="btn-sweep inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-accent text-accent font-mono-ui text-[10px] md:text-[11px] tracking-[0.15em] uppercase"
          >
            See Our Work <ArrowUpRight size={12} />
          </a>
          <a href="#contact" className="font-mono-ui text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-ink/60 transition-colors">
            or — start a project ↘
          </a>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-ink/10 bg-ink/[0.03] py-3.5 overflow-hidden marquee-mask">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center">
              {tickerItems.map(({ Icon, label }) => (
                <span key={label + idx} className="font-mono-ui t-marquee uppercase tracking-[0.18em] text-ink/70 px-7 flex items-center gap-3">
                  <Icon size={14} color="#D81E36" strokeWidth={1.8} />
                  {label}
                  <span className="text-accent/70 ml-3">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};