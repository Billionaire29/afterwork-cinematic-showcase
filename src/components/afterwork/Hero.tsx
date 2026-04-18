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
      {/* Cinematic orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "#C6F135", opacity: 0.06, top: "-10%", right: "-8%" }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#ffffff", opacity: 0.03, bottom: "-5%", left: "-5%", animationDelay: "-7s" }} />
      <div className="orb soft-pulse" style={{ width: 300, height: 300, background: "#C6F135", opacity: 0.04, top: "40%", left: "45%", animationDelay: "-10s" }} />

      <div className="container flex-1 flex flex-col justify-center pt-28 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono-ui t-label text-white/50 mb-8 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-lime" />
          Independent Digital Agency — EST. 2022
        </motion.div>

        <h1 className="font-display h-hero text-white">
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
          className="font-serif-italic t-sub text-white/80 mt-8 max-w-2xl"
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
            className="btn-sweep inline-flex items-center gap-2 px-6 py-3 rounded-full border border-lime text-lime hover:text-background font-mono-ui t-label"
          >
            See Our Work <ArrowUpRight size={14} />
          </a>
          <a href="#contact" className="font-mono-ui t-label text-white/60 hover:text-lime transition-colors">
            or — start a project ↘
          </a>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-white/10 bg-white/[0.03] py-3.5 overflow-hidden marquee-mask">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center">
              {tickerItems.map(({ Icon, label }) => (
                <span key={label + idx} className="font-mono-ui t-marquee uppercase tracking-[0.18em] text-white/70 px-7 flex items-center gap-3">
                  <Icon size={14} color="#C6F135" strokeWidth={1.8} />
                  {label}
                  <span className="text-lime/70 ml-3">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
