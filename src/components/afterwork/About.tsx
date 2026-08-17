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
    <section id="about" className="relative py-20 md:py-32 border-t border-ink/5 overflow-hidden">
      <div className="scanline" />
      <div className="container">
        <div className="font-mono-ui t-label text-ink/40 mb-6 md:mb-8 flex items-center gap-3">
          <span className="w-6 h-px bg-accent" /> 03 — Philosophy
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <h2
            ref={quoteRef}
            className="font-display h-section text-ink underline-grow inline-block"
          >
            We don't do average.
          </h2>

          <div className="md:pt-4">
            <p className="text-ink/70 t-body leading-relaxed font-mono-ui">
              The Rare Company is a full-service digital agency obsessed with{" "}
              <span className="font-serif-italic text-accent">craft, performance,</span> and outcomes.
              We build things that move — brands, businesses, and people.
            </p>
            <p className="text-ink/40 mt-5 leading-relaxed t-card-body font-mono-ui">
              No retainers padded with busywork. No template-shaped thinking. Every engagement starts with a clear question and ends with something measurable, beautiful, and shipped.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-20 md:mt-24 border-t border-ink/10 pt-12">
          {[
            { n: 10, suffix: "+", label: "Projects Shipped" },
            { n: 100, suffix: "%", label: "Client Satisfaction" },
            { n: 3, suffix: "+", label: "Years in the Craft" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-display text-accent leading-none" style={{ fontSize: "clamp(56px, 7vw, 96px)" }}>
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-accent mt-3">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
