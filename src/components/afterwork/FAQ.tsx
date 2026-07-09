import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Social Media Marketing?",
    a: "Social Media Marketing involves using platforms like Instagram, Facebook, LinkedIn, and Twitter to promote your brand, engage with audiences, and drive measurable growth through targeted content and ad strategies.",
  },
  {
    q: "How long does it take to develop a website?",
    a: "A basic website takes around 7–10 days, while custom or e-commerce websites may take 3–4 weeks depending on requirements.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, NGOs, e-commerce brands, SaaS companies, local businesses, and more. If you have a vision, we can build it.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes — we offer monthly maintenance packages covering updates, security, performance monitoring, and content changes.",
  },
  {
    q: "What makes Vynora different from other agencies?",
    a: "We obsess over craft. Every pixel, every animation, every line of code is intentional. We don't ship anything we wouldn't be proud to put our name on.",
  },
  {
    q: "How much does a typical project cost?",
    a: "Pricing depends on scope and complexity. Landing pages start around ₹15k, full websites from ₹40k, and custom apps are quoted per project. We send a transparent breakdown after a discovery call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We've delivered projects across India, the US, UK, and the Middle East. Async-first communication, clear timelines, and weekly demo videos keep everyone in sync regardless of timezone.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-36 border-t border-white/5">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="font-mono-ui t-label text-lime mb-5 flex items-center justify-center gap-2">
            <span>✳</span> FAQs
          </div>
          <h2 className="font-display h-section text-white">
            Answers to your common <span className="text-lime">questions</span>
          </h2>
          <p className="font-serif-italic t-sub text-white/60 mt-5 max-w-2xl mx-auto">
            Everything you need to know — simple answers to the most frequently asked questions about our services.
          </p>
        </div>

        {/* Trust badge */}
        <div className="glass rounded-2xl p-5 md:p-6 mb-10 flex items-center justify-between gap-6 transition-all duration-500 hover:border-lime/40 hover:shadow-[0_20px_60px_-20px_rgba(198,241,53,0.3)]">
          <div className="flex items-center gap-4">
            <div className="font-display text-white text-5xl md:text-6xl leading-none">4.9</div>
            <Star size={28} fill="#C6F135" stroke="#C6F135" />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-display text-white text-sm">Explore our trust score</div>
              <div className="font-mono-ui text-[11px] uppercase tracking-[0.15em] text-white/50 mt-0.5">Customer Reviews</div>
            </div>
            <span className="w-2 h-2 rounded-full bg-lime soft-pulse" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/8 transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-display text-white text-[15px] md:text-base">{f.q}</span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-lime text-background" : "border border-lime/40 text-lime"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-6 text-white/70 t-card-body font-mono-ui leading-relaxed max-w-3xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
