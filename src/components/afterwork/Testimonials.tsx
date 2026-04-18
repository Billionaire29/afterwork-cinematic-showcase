import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type T = { quote: string; name: string; role: string };

const items: T[] = [
  {
    quote: "They built our NGO website with soul — it actually represents what we stand for. The animations, the warmth, everything. Truly exceptional.",
    name: "Mr. Ram",
    role: "Jeevan Ki Nai Shuruaat NGO",
  },
  {
    quote: "Afterwork doesn't just build websites — they build experiences. Our conversion rate doubled after the redesign.",
    name: "Prince",
    role: "Founder, Startives",
  },
  {
    quote: "Working with the team was seamless. They understood our vision without us explaining twice. Delivered before deadline too.",
    name: "Sumit",
    role: "Co-founder, Apives",
  },
  {
    quote: "The attention to detail is unreal. Every hover, every animation — it feels premium. Our clients notice it immediately.",
    name: "Ankit",
    role: "CEO, Ladamark",
  },
];

export const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    setActive(i);
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    if (card) el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % items.length;
        const el = trackRef.current;
        if (el) {
          const card = el.children[next] as HTMLElement;
          if (card) el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-28 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="font-mono-ui t-label text-lime mb-5 flex items-center gap-2">
              <span>✳</span> Testimonials
            </div>
            <h2 className="font-display h-section text-white">
              What <span className="text-lime">clients</span> are saying
            </h2>
            <p className="font-serif-italic t-sub text-white/60 mt-5 max-w-lg">
              Real words from real people we've worked with.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 text-white font-mono-ui t-label hover:border-lime hover:text-lime transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-lime text-background hover:scale-110 transition-transform"
              aria-label="Contact"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="snap-start shrink-0 w-[88%] md:w-[440px] relative rounded-[20px] p-7 border border-white/10"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <span className="absolute top-5 right-5 w-2 h-2 rounded-full bg-lime soft-pulse" />
              <p className="font-display-light italic text-white/85 leading-relaxed" style={{ fontSize: 15 }}>
                "{t.quote}"
              </p>
              <div className="mt-7 pt-5 border-t border-white/10">
                <div className="font-display text-white text-base">{t.name}</div>
                <div className="font-mono-ui text-[11px] tracking-[0.12em] uppercase text-lime mt-1.5">{t.role}</div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                active === i
                  ? "w-3 h-3 bg-lime"
                  : "w-2.5 h-2.5 border border-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
