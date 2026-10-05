import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo, navLinks, scrollToSection } from "./Shared";

const ease = [0.75, 0, 0.23, 1] as const;
const letterEase = [0.6, 0, 0.2, 1] as const;

const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: letterEase, delay: i[0] },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: letterEase, delay: i[1] },
  }),
};

function Nav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.nav
      initial={{ height: 0 }}
      animate={{ height: "85vh", transition: { duration: 1, ease } }}
      exit={{ height: 0, transition: { duration: 1, ease } }}
      className="absolute -top-full z-[50] w-full overflow-hidden bg-primary"
    >
      <div className="container flex h-full items-center justify-center">
        <ul className="flex flex-col items-center gap-8 font-primary text-4xl font-bold text-accent">
          {navLinks.map(({ name, id }, idx) => (
            <a key={id} href={`#${id}`} onClick={(e) => { scrollToSection(e, id); onNavigate(); }} className="flex overflow-hidden py-2 transition-all hover:text-background">
              <motion.span variants={letterAnim} initial="initial" animate="enter" exit="exit" custom={[0.3 + idx * 0.08, (navLinks.length - idx) * 0.05]}>
                {name}
              </motion.span>
            </a>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <header className="absolute left-0 right-0 top-[40px] z-[60]">
      <div className="container flex items-center justify-between">
        <a href="/" aria-label="کافه دم - صفحه اصلی" className="relative z-[60] flex h-[40px] items-center">
          <Logo className="text-2xl xl:text-3xl" />
        </a>
        <button
          onClick={() => setActive(!active)}
          className="relative z-[60] flex h-6 w-8 items-center justify-center text-accent outline-none"
          aria-label="باز و بسته کردن منو"
        >
          <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${active ? "top-1/2 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-opacity duration-300 ${active ? "opacity-0" : "top-1/2"}`} />
          <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${active ? "top-1/2 -rotate-45" : "bottom-0"}`} />
        </button>
      </div>
      <AnimatePresence mode="wait">{active && <Nav onNavigate={() => setActive(false)} />}</AnimatePresence>
    </header>
  );
}
