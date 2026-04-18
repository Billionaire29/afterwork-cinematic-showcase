import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-background/40 border-b border-lime/20"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="font-display text-base md:text-lg text-white" style={{ letterSpacing: "0.2em" }}>
            AFTERWORK
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono-ui t-nav text-white/70 hover:text-lime transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3 font-mono-ui t-label text-white/70">
            <span className="w-2 h-2 rounded-full bg-lime animate-blink" />
            Available for projects
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col overflow-hidden"
          >
            {/* blurred lime orb bottom-right */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 520, height: 520, borderRadius: "9999px",
                background: "#C6F135", opacity: 0.18, filter: "blur(120px)",
                bottom: "-180px", right: "-160px",
              }}
            />

            <div className="container flex items-center justify-between h-16 relative z-10">
              <span className="font-display text-base text-white" style={{ letterSpacing: "0.2em" }}>AFTERWORK</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white font-display text-2xl">
                <X size={28} />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-start justify-center gap-5 container relative z-10">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-white hover:text-lime hover:translate-x-2 transition-all duration-300 inline-block"
                    style={{ fontSize: "clamp(36px, 8vw, 64px)", letterSpacing: "-0.02em", lineHeight: 1 }}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container py-8 flex items-center gap-3 font-mono-ui t-label text-white/60 relative z-10">
              <span className="w-2 h-2 rounded-full bg-lime animate-blink" />
              Available for projects
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
