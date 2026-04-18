import { motion } from "framer-motion";

const stack = [
  "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP",
  "Three.js", "Node.js", "Supabase", "PostgreSQL", "Figma", "Webflow",
  "Vercel", "Stripe", "Sanity", "Resend",
];

export const TechStack = () => {
  return (
    <section className="relative py-24 md:py-28 border-t border-white/5 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono-ui t-label text-lime mb-4 flex items-center gap-2">
              <span>✳</span> Our Toolkit
            </div>
            <h2 className="font-display h-section text-white">
              Tools we <span className="text-lime">love</span>.
            </h2>
          </div>
          <p className="font-serif-italic t-sub text-white/60 max-w-md">
            Modern stack. Battle-tested. No bloat.
          </p>
        </div>
      </div>

      <div className="relative marquee-mask py-4">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center">
              {stack.map((s) => (
                <motion.span
                  key={s + idx}
                  whileHover={{ scale: 1.05 }}
                  className="font-display text-white/30 hover:text-lime transition-colors px-6 md:px-10 text-3xl md:text-5xl tracking-tight"
                >
                  {s}
                  <span className="text-lime/60 ml-6 md:ml-10 text-xl md:text-3xl">✳</span>
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative marquee-mask py-4 mt-2">
        <div className="marquee-track-rev whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center">
              {[...stack].reverse().map((s) => (
                <span
                  key={s + "r" + idx}
                  className="font-display-light italic text-lime/40 px-6 md:px-10 text-2xl md:text-4xl"
                >
                  {s}
                  <span className="text-white/20 ml-6 md:ml-10">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
