import { motion } from "framer-motion";
import { Compass, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  { Icon: Compass, n: "01", title: "Discover", desc: "We dig into your brand, audience, and goals. No templates — just sharp questions." },
  { Icon: Pencil, n: "02", title: "Design", desc: "Wireframes, moodboards, prototypes. Every pixel debated before it's drawn." },
  { Icon: Code2, n: "03", title: "Develop", desc: "Hand-crafted code. Performant, accessible, and animated with intent." },
  { Icon: Rocket, n: "04", title: "Deliver", desc: "We ship, monitor, iterate. Your launch is our beginning, not our end." },
];

export const Process = () => {
  return (
    <section className="relative py-24 md:py-32 border-t border-ink/5 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="text-center mb-14">
          <div className="font-mono-ui t-label text-accent mb-4 flex items-center justify-center gap-2">
            <span>✳</span> Our Process
          </div>
          <h2 className="font-display h-section text-ink">
            How we <span className="text-accent">make it</span> happen
          </h2>
          <p className="font-serif-italic t-sub text-ink/60 mt-4 max-w-xl mx-auto">
            Four steps. Zero filler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          {steps.map(({ Icon, n, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-[20px] p-6   transition-all duration-500 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-full border border-accent/40 flex items-center justify-center text-accent   transition-colors">
                  <Icon size={18} />
                </div>
                <span className="font-display text-ink/10 text-3xl  transition-colors">{n}</span>
              </div>
              <h3 className="font-display text-ink text-lg mb-2">{title}</h3>
              <p className="font-mono-ui text-[12px] leading-relaxed text-ink/55">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
