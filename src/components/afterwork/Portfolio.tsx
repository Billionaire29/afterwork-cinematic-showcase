import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  url: string;
  favicon: string;
  tags: string[];
  size: "wide" | "small";
};

const projects: Project[] = [
  { name: "Apives", url: "https://apives.com", favicon: "https://apives.com/favicon.ico", tags: ["Web Design", "Brand Identity"], size: "wide" },
  { name: "Startives", url: "https://startives.com", favicon: "https://startives.com/favicon.ico", tags: ["SaaS", "Landing Page"], size: "wide" },
  { name: "Scoutives", url: "https://scoutives.vercel.app", favicon: "https://scoutives.vercel.app/favicon.ico", tags: ["Web App", "UI/UX"], size: "small" },
  { name: "Janhit Seva Sansthan", url: "https://janhitsewasansthan.com", favicon: "https://janhitsewasansthan.com/favicon.ico", tags: ["NGO", "Social Impact"], size: "small" },
  { name: "Ladamark", url: "https://ladamark.vercel.app", favicon: "https://ladamark.vercel.app/favicon.ico", tags: ["E-commerce", "Brand"], size: "small" },
];

const Card = ({ p, i }: { p: Project; i: number }) => {
  const isWide = p.size === "wide";
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
      className={`group relative block glass rounded-[20px] overflow-hidden transition-all duration-500 hover:border-lime/60 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(198,241,53,0.25)] ${
        isWide ? "md:col-span-3" : "md:col-span-2"
      }`}
      style={{ aspectRatio: isWide ? "16/10" : "4/5" }}
    >
      <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center overflow-hidden">
        <img src={p.favicon} alt="" className="w-5 h-5" onError={(e) => ((e.currentTarget.style.display = "none"))} />
      </div>

      <div className="absolute inset-0 overflow-hidden bg-white/[0.02]">
        <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:-translate-y-[15%]">
          <iframe
            src={p.url}
            title={p.name}
            loading="lazy"
            className="border-0"
            style={{
              transform: "scale(0.5)",
              transformOrigin: "top left",
              width: "200%",
              height: "200%",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 z-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display t-card-title text-white leading-tight">{p.name}</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span key={t} className="font-mono-ui text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/15 text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 font-mono-ui text-[10px] uppercase tracking-widest text-lime border border-lime/40 rounded-full px-3 py-1.5 group-hover:bg-lime group-hover:text-background transition-colors">
            Visit <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export const Portfolio = () => {
  return (
    <section id="work" className="relative py-28 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono-ui t-label text-white/40 mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-lime" /> 02 — Selected portfolio
            </div>
            <h2 className="font-display h-section text-white">SELECTED WORKS</h2>
          </div>
          <p className="font-serif-italic t-sub text-white/60 max-w-md">
            Projects that actually shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Card key={p.url} p={p} i={i} />
          ))}
        </div>

        <p className="mt-10 font-mono-ui text-[11px] tracking-[0.18em] uppercase text-white/40 flex items-center gap-2">
          <span className="text-lime">✳</span> All projects are live — click to visit
        </p>
      </div>
    </section>
  );
};
