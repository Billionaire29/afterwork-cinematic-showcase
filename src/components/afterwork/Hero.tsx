import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Megaphone, Brush, Smartphone, Search, Zap, Target, MousePointer2 } from "lucide-react";

const tickerItems = [
  { Icon: Globe, label: "Web Development" },
  { Icon: Megaphone, label: "Digital Marketing" },
  { Icon: Brush, label: "Graphic Design" },
  { Icon: Smartphone, label: "App Development" },
  { Icon: Target, label: "Brand Strategy" },
  { Icon: MousePointer2, label: "UI / UX" },
  { Icon: Search, label: "SEO" },
  { Icon: Zap, label: "Performance" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain flex flex-col">
      {/* New cinematic aurora background */}
      <div className="absolute inset-0 hero-aurora pointer-events-none" />
      <div className="absolute inset-0 hero-grid-fade pointer-events-none" />

      {/* Intensified orbs */}
      <div className="orb" style={{ width: 680, height: 680, background: "#D81E36", opacity: 0.16, top: "-12%", right: "-10%" }} />
      <div className="orb" style={{ width: 480, height: 480, background: "#7dd3fc", opacity: 0.08, bottom: "-8%", left: "-6%", animationDelay: "-7s" }} />
      <div className="orb soft-pulse" style={{ width: 360, height: 360, background: "#D81E36", opacity: 0.12, top: "38%", left: "42%", animationDelay: "-10s" }} />

      <div className="container flex-1 flex flex-col justify-center pt-28 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono-ui text-[9px] md:text-[11px] tracking-[0.15em] uppercase text-ink/50 mb-8 flex items-center gap-3"
        >
          <span className="w-5 h-px bg-accent" />
          Independent Digital Agency — EST. 2022
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
            THE RARE COMPANY
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif-italic t-sub text-ink/80 mt-8 max-w-2xl"
        >
          Where brands stop blending in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex items-center gap-4 md:gap-6 flex-wrap"
        >
          <a
            href="#work"
            className="btn-sweep inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-accent text-accent hover:text-background font-mono-ui text-[10px] md:text-[11px] tracking-[0.15em] uppercase"
          >
            See Our Work <ArrowUpRight size={12} />
          </a>
          <a href="#contact" className="font-mono-ui text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-ink/60 hover:text-accent transition-colors">
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
