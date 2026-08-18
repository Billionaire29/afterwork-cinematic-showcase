import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type T = { quote: string; name: string; role: string; theme: "ink" | "light" | "red" };

const items: T[] = [
  {
    quote:
      "They built our NGO website with soul — it actually represents what we stand for. The animations, the warmth, everything. Truly exceptional.",
    name: "Mr. Ram",
    role: "Jeevan Ki Nai Shuruaat NGO",
    theme: "ink",
  },
  {
    quote:
      "The Rare Company doesn't just build websites — they build experiences. Our conversion rate doubled after the redesign.",
    name: "Prince",
    role: "Founder, Startives",
    theme: "light",
  },
  {
    quote:
      "Working with the team was seamless. They understood our vision without us explaining twice. Delivered before deadline too.",
    name: "Sumit",
    role: "Co-founder, Apives",
    theme: "red",
  },
  {
    quote:
      "The attention to detail is unreal. Every hover, every animation — it feels premium. Our clients notice it immediately.",
    name: "Ankit",
    role: "CEO, Ladamark",
    theme: "light",
  },
];

const themeClass = (t: T["theme"]) =>
  t === "ink"
    ? "glass-ink text-white"
    : t === "red"
    ? "glass glass-red text-ink"
    : "glass text-ink";

export const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    if (card) el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    setActive(i);
    scrollTo(i);
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
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-28 md:py-36 border-t border-ink/5 overflow-hidden">
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="font-mono-ui t-label text-accent mb-5 flex items-center gap-2">
              <span>✳</span> Testimonials
            </div>
            <h2 className="font-display h-section text-ink">
              What <span className="text-accent">clients</span> are saying
            </h2>
            <p className="font-serif-italic t-sub text-ink/55 mt-5 max-w-lg">
              Real words from real people we've worked with.
            </p>
          </div>

          <div className="glass rounded-[22px] px-6 py-5 flex items-center gap-4">
            <div className="font-display text-ink text-4xl leading-none">4.9</div>
            <div className="relative z-10">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="#D01932" stroke="#D01932" />
                ))}
              </div>
              <div className="font-mono-ui text-[10px] tracking-[0.18em] uppercase text-ink/45 mt-1.5">
                Average client rating
              </div>
            </div>
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
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`snap-start shrink-0 w-[86%] md:w-[430px] relative rounded-[28px] p-8 flex flex-col ${themeClass(t.theme)}`}
              style={{ aspectRatio: "1 / 1" }}
            >
              <div className="relative z-10 flex items-start justify-between">
                <span
                  className={`w-11 h-11 rounded-[16px] flex items-center justify-center ${
                    t.theme === "ink" ? "bg-white/10 text-accent" : "bg-accent/10 text-accent"
                  }`}
                >
                  <Quote size={17} />
                </span>
                <span className="font-mono-ui text-[10px] tracking-[0.2em] uppercase opacity-40">
                  0{i + 1}
                </span>
              </div>

              <p
                className={`relative z-10 font-display-light leading-snug mt-8 flex-1 ${
                  t.theme === "ink" ? "text-white/90" : "text-ink/85"
                }`}
                style={{ fontSize: "clamp(17px, 2vw, 21px)" }}
              >
                "{t.quote}"
              </p>

              <div
                className={`relative z-10 mt-6 pt-5 border-t ${
                  t.theme === "ink" ? "border-white/12" : "border-ink/10"
                }`}
              >
                <div className={`font-display text-base ${t.theme === "ink" ? "text-white" : "text-ink"}`}>
                  {t.name}
                </div>
                <div className="font-mono-ui text-[11px] tracking-[0.14em] uppercase text-accent mt-1.5">
                  {t.role}
                </div>
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
                active === i ? "w-8 h-2.5 bg-accent" : "w-2.5 h-2.5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
