import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Globe, Smartphone, Scale } from "lucide-react";

const services = [
  {
    Icon: Cpu,
    title: "IT Services",
    desc: "End-to-end IT support, cloud setup, automation and consulting for teams that need technology to just work.",
    points: ["Cloud & Infrastructure", "Automation", "IT Consulting"],
  },
  {
    Icon: Globe,
    title: "Web Development",
    desc: "Fast, responsive, search-ready websites — engineered to convert visitors into customers.",
    points: ["Performance-first", "SEO ready", "CMS & E-commerce"],
  },
  {
    Icon: Smartphone,
    title: "App Development",
    desc: "Scalable Android, iOS and cross-platform apps with interfaces people actually enjoy using.",
    points: ["Android & iOS", "Cross-platform", "Product design"],
  },
  {
    Icon: Scale,
    title: "Legal Services",
    desc: "Criminal, civil and family law — consultation, drafting, bail, quashing and High Court representation.",
    points: ["Consultation ₹200", "Drafting & Notices", "High Court matters"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono-ui t-label text-ink/40 mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" /> 01 — What we do
            </div>
            <h2 className="font-display h-section text-ink">OUR FOCUS</h2>
          </div>
          <p className="font-serif-italic t-sub text-ink/55 max-w-md">
            Technology and law, under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map(({ Icon, title, desc, points }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative glass rounded-[28px] p-7 md:p-9 flex flex-col"
            >
              <div className="relative z-10 flex items-start justify-between">
                <span className="w-14 h-14 rounded-[20px] glass-red flex items-center justify-center text-accent">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <span className="font-display text-ink/10 text-4xl leading-none">0{i + 1}</span>
              </div>

              <h3 className="relative z-10 font-display t-card-title text-ink mt-8">{title}</h3>
              <p className="relative z-10 text-ink/55 mt-3 max-w-md leading-relaxed t-card-body font-mono-ui">{desc}</p>

              <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                {points.map((p) => (
                  <span
                    key={p}
                    className="font-mono-ui text-[10.5px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border border-ink/10 text-ink/55"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-7 pt-5 border-t border-ink/8 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-accent font-mono-ui text-[10.5px] tracking-[0.16em] uppercase">
                  Read More <ArrowUpRight size={12} />
                </span>
                <span className="font-mono-ui text-[10px] tracking-[0.16em] uppercase text-ink/35">
                  Explore what's possible
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
