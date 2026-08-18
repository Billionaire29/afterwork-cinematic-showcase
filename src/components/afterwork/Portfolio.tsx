import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  url: string;
  host: string;
  blurb: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Apives",
    url: "https://apives.com",
    host: "apives.com",
    blurb: "A confident corporate identity and website built to make a young company look established from day one.",
    tags: ["Web Design", "Brand Identity"],
  },
  {
    name: "Startives",
    url: "https://startives.com",
    host: "startives.com",
    blurb: "A conversion-first SaaS landing experience — sharp messaging, fast load, and a funnel that actually closes.",
    tags: ["SaaS", "Landing Page"],
  },
  {
    name: "Janhit Seva Sansthan",
    url: "https://janhitsewasansthan.org",
    host: "janhitsewasansthan.org",
    blurb: "A digital home for an NGO doing real work on the ground — built for trust, donations, and storytelling.",
    tags: ["NGO", "Social Impact"],
  },
  {
    name: "Scoutives",
    url: "https://scoutives.vercel.app",
    host: "scoutives.vercel.app",
    blurb: "A talent-scouting web app with a clean dashboard, smart filtering, and an interface that stays out of the way.",
    tags: ["Web App", "UI / UX"],
  },
  {
    name: "Ghost Drop",
    url: "https://ghost-drop-phi.vercel.app/",
    host: "ghost-drop-phi.vercel.app",
    blurb: "Anonymous, friction-free file dropping. Minimal product, maximum polish — built around one perfect interaction.",
    tags: ["Product", "Web App"],
  },
  {
    name: "Ladamark",
    url: "https://ladamark.vercel.app",
    host: "ladamark.vercel.app",
    blurb: "An e-commerce storefront with a premium retail feel — product-first layout and a checkout that never stalls.",
    tags: ["E-commerce", "Brand"],
  },
];

const Card = ({ p, i }: { p: Project; i: number }) => (
  <motion.a
    href={p.url}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
    className="group relative flex flex-col glass rounded-[26px] overflow-hidden transition-all duration-500"
  >
    {/* Preview — square symmetric window */}
    <div className="relative m-3 rounded-[18px] overflow-hidden bg-ink/[0.03] border border-ink/10" style={{ aspectRatio: "1 / 1" }}>
      <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out ">
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

      <div className="absolute inset-x-0 top-0 h-9 flex items-center gap-1.5 px-3 bg-background/70 backdrop-blur-xl border-b border-ink/10">
        <span className="w-2 h-2 rounded-full bg-accent/70" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="ml-2 font-mono-ui text-[9px] tracking-[0.12em] text-ink/45 truncate">{p.host}</span>
      </div>

      <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-accent-foreground opacity-0 translate-y-2   transition-all duration-400">
        <ArrowUpRight size={16} />
      </span>
    </div>

    <div className="px-6 pb-6 pt-2 flex-1 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display t-card-title text-ink leading-tight">{p.name}</h3>
        <span className="font-mono-ui text-[10px] tracking-[0.15em] text-ink/30 pt-1">0{i + 1}</span>
      </div>
      <p className="font-mono-ui text-[12.5px] leading-relaxed text-ink/55 mt-3">{p.blurb}</p>
      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-ink/10">
        {p.tags.map((t) => (
          <span key={t} className="font-mono-ui text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-ink/15 text-ink/60   transition-colors">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

export const Portfolio = () => {
  return (
    <section id="work" className="relative py-28 md:py-36 border-t border-ink/5 overflow-hidden">
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono-ui t-label text-ink/40 mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" /> 02 — Selected portfolio
            </div>
            <h2 className="font-display h-section text-ink">SELECTED WORKS</h2>
          </div>
          <p className="font-serif-italic t-sub text-ink/55 max-w-md">
            Six live products. Every one of them shipped, used, and still running.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Card key={p.url} p={p} i={i} />
          ))}
        </div>

        <p className="mt-10 font-mono-ui text-[11px] tracking-[0.18em] uppercase text-ink/40 flex items-center gap-2">
          <span className="text-accent">✳</span> All projects are live — click any card to visit
        </p>
      </div>
    </section>
  );
};
