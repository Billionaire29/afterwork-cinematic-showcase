import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Icon1 = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#C6F135" strokeWidth="1.5">
    <circle cx="24" cy="24" r="14" />
    <circle cx="24" cy="24" r="4" />
    <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" />
  </svg>
);
const Icon2 = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#C6F135" strokeWidth="1.5">
    <circle cx="18" cy="20" r="11" />
    <circle cx="30" cy="20" r="11" />
    <circle cx="24" cy="32" r="11" />
  </svg>
);
const Icon3 = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#C6F135" strokeWidth="1.5">
    <rect x="6" y="6" width="16" height="16" rx="2" />
    <rect x="26" y="6" width="16" height="16" rx="2" />
    <rect x="6" y="26" width="16" height="16" rx="2" />
    <rect x="26" y="26" width="16" height="16" rx="2" fill="#C6F135" />
  </svg>
);
const Icon4 = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#C6F135" strokeWidth="1.5">
    <ellipse cx="24" cy="10" rx="16" ry="5" />
    <path d="M8 10v12c0 2.8 7.2 5 16 5s16-2.2 16-5V10" />
    <path d="M8 22v12c0 2.8 7.2 5 16 5s16-2.2 16-5V22" />
  </svg>
);

const services = [
  { Icon: Icon1, title: "Web Development", desc: "Building responsive, fast, and user-friendly websites to grow your business." },
  { Icon: Icon2, title: "Digital Marketing", desc: "Boosting your brand online with targeted, creative digital marketing strategies." },
  { Icon: Icon3, title: "Graphic Design", desc: "Creating stunning visuals that communicate your brand's story with impact." },
  { Icon: Icon4, title: "App Development", desc: "Developing intuitive, scalable apps that enhance user experience and engagement." },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono-ui t-label text-white/40 mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-lime" /> 01 — What we do
            </div>
            <h2 className="font-display h-section text-white">OUR FOCUS</h2>
          </div>
          <p className="font-serif-italic t-sub text-white/60 max-w-md">
            Four pillars. Infinite possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-[20px] p-7 md:p-9 transition-all duration-500 hover:-translate-y-2 hover:border-lime/60 hover:shadow-[0_30px_80px_-20px_rgba(198,241,53,0.25)] cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <Icon />
                <span className="font-mono-ui text-[10px] uppercase tracking-widest text-white/30">0{i + 1}</span>
              </div>
              <h3 className="font-display t-card-title text-white mt-10">{title}</h3>
              <p className="text-white/55 mt-3 max-w-md leading-relaxed t-card-body font-mono-ui">{desc}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="inline-flex items-center gap-2 text-lime font-mono-ui t-label group-hover:gap-3 transition-all">
                  Read More <ArrowUpRight size={12} />
                </div>
                <span className="font-mono-ui text-[11px] tracking-[0.15em] uppercase text-lime/70 inline-flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                  → Explore what's possible
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
