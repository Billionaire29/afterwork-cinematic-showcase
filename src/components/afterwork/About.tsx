import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
};

export const About = () => {
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(quoteRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && quoteRef.current) quoteRef.current.classList.add("in");
  }, [inView]);

  return (
    <section id="about" className="relative py-32 md:py-44 border-t border-white/5">
      <div className="container">
        <div className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-white/40 mb-12 flex items-center gap-3">
          <span className="w-6 h-px bg-lime" /> 03 — Philosophy
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <h2
            ref={quoteRef}
            className="font-display text-white text-6xl md:text-8xl leading-[0.9] underline-grow inline-block"
          >
            We don't do average.
          </h2>

          <div className="md:pt-6">
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-mono-ui">
              Afterwork is a full-service digital agency obsessed with{" "}
              <span className="text-serif-italic font-serif-italic text-lime">craft, performance,</span> and outcomes.
              We build things that move — brands, businesses, and people.
            </p>
            <p className="text-white/40 mt-6 leading-relaxed text-sm md:text-base font-mono-ui">
              No retainers padded with busywork. No template-shaped thinking. Every engagement starts with a clear question and ends with something measurable, beautiful, and shipped.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mt-24 md:mt-32 border-t border-white/10 pt-16">
          {[
            { n: 50, suffix: "+", label: "Projects Shipped" },
            { n: 100, suffix: "%", label: "Client Satisfaction" },
            { n: 3, suffix: "+", label: "Years of Excellence" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-display text-7xl md:text-8xl text-lime leading-none">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-white/50 mt-4">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
