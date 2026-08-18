import { motion } from "framer-motion";
import {
  Scale, Gavel, ShieldCheck, FileText, Home, Users, Landmark, Globe,
  Phone, MessageCircle, Video, MapPin, Check, ArrowUpRight,
} from "lucide-react";

const modes = [
  { Icon: Phone, label: "Phone Call" },
  { Icon: MessageCircle, label: "WhatsApp" },
  { Icon: Video, label: "Video Call" },
  { Icon: MapPin, label: "In-person" },
];

type Group = { Icon: typeof Scale; title: string; items: string[] };

const groups: Group[] = [
  {
    Icon: Gavel,
    title: "Bail Matters",
    items: ["Anticipatory Bail", "Regular Bail", "Interim Bail", "Bail in High Court"],
  },
  {
    Icon: ShieldCheck,
    title: "FIR & Police Matters",
    items: ["FIR Quashing (S. 482 CrPC / BNSS)", "Complaint drafting", "Police representation", "Stay applications"],
  },
  {
    Icon: Scale,
    title: "Trial & Defence",
    items: ["Sessions trial defence", "Cross-examination strategy", "Applications & objections", "Case evaluation & strategy"],
  },
  {
    Icon: Users,
    title: "Special Laws",
    items: ["SC/ST Act cases", "POCSO Act cases", "Dowry matters", "Domestic violence matters"],
  },
  {
    Icon: Home,
    title: "Property & Civil Disputes",
    items: ["Property disputes & injunctions", "Title verification & legal opinion", "Partition suits", "Civil litigation"],
  },
  {
    Icon: Users,
    title: "Family Matters",
    items: ["Divorce & maintenance", "Child custody", "Domestic disputes", "Mediation & settlement"],
  },
  {
    Icon: FileText,
    title: "Documentation & Notices",
    items: ["Legal notice drafting", "Agreement drafting", "Affidavits & declarations", "Document review"],
  },
  {
    Icon: Landmark,
    title: "Writ Petitions (High Court)",
    items: ["Mandamus", "Certiorari", "Habeas Corpus", "Quashing petitions"],
  },
  {
    Icon: Globe,
    title: "Online Legal Services",
    items: ["Online consultation (₹200)", "Drafting & review via Email / WhatsApp", "Case status updates", "PAN-India assistance"],
  },
];

export const Legal = () => {
  return (
    <section id="legal" className="relative py-28 md:py-36 border-t border-ink/5 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono-ui t-label text-ink/40 mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" /> 03 — Legal practice
            </div>
            <h2 className="font-display h-section text-ink">LEGAL SERVICES</h2>
          </div>
          <p className="font-serif-italic t-sub text-ink/55 max-w-md">
            Criminal, civil and family law — advised clearly, argued sharply.
          </p>
        </div>

        {/* Consultation highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass glass-red rounded-[26px] p-7 md:p-10 mb-6 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <div className="font-mono-ui t-label text-accent mb-4">General Legal Consultation</div>
            <div className="flex items-end gap-3">
              <span className="font-display text-ink leading-none" style={{ fontSize: "clamp(44px, 6vw, 76px)" }}>₹200</span>
              <span className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-ink/50 pb-3">per session</span>
            </div>
            <p className="font-mono-ui text-[13px] leading-relaxed text-ink/60 mt-5 max-w-md">
              Criminal & civil legal advice, case evaluation & strategy, FIR / complaint review, and a clear legal opinion before you file.
            </p>
            <a
              href="https://wa.me/917880420247?text=Hi%2C%20I%27d%20like%20to%20book%20a%20legal%20consultation."
              target="_blank"
              rel="noreferrer"
              className="btn-sweep btn-sweep-dark mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-mono-ui t-label"
            >
              Book a Consultation <ArrowUpRight size={13} />
            </a>
          </div>

          <div>
            <div className="font-mono-ui t-label text-ink/45 mb-4">Mode of consultation</div>
            <div className="grid grid-cols-2 gap-3">
              {modes.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="glass rounded-[18px] px-4 py-4 flex items-center gap-3 transition-transform duration-300 "
                >
                  <Icon size={16} className="text-accent shrink-0" />
                  <span className="font-mono-ui text-[12px] text-ink/75">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Practice grid — square symmetric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {groups.map(({ Icon, title, items }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group glass rounded-[26px] p-6 md:p-7 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-[14px] border border-accent/30 flex items-center justify-center text-accent   transition-colors">
                  <Icon size={18} />
                </div>
                <span className="font-mono-ui text-[10px] tracking-[0.15em] text-ink/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-ink text-lg leading-snug">{title}</h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 font-mono-ui text-[12.5px] leading-relaxed text-ink/60">
                    <Check size={13} className="text-accent shrink-0 mt-[3px]" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
