export const Badge = ({ containerStyles }: { containerStyles: string }) => (
  <div className={`relative ${containerStyles}`}>
    <svg viewBox="0 0 180 140" className="absolute inset-0 h-full w-full" role="img" aria-label="کافه دم، قهوه ممتاز">
      <polygon points="50,2 130,2 178,70 130,138 50,138 2,70" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-background" />
      <polygon points="54,10 126,10 168,70 126,130 54,130 12,70" fill="none" stroke="currentColor" strokeWidth="1" className="text-background" />
      <text x="90" y="42" textAnchor="middle" fill="currentColor" className="text-background" fontSize="12">از سال ۱۳۷۸</text>
      <text x="90" y="82" textAnchor="middle" fill="currentColor" className="text-background" fontSize="34" fontWeight="900">کافه دَم</text>
      <text x="90" y="108" textAnchor="middle" fill="currentColor" className="text-background" fontSize="13">• قهوه ممتاز •</text>
    </svg>
  </div>
);

export const Separator = ({ bg = "white" }: { bg?: "accent" | "white" }) => (
  <div className="relative mx-auto h-[26px] w-[168px]">
    <img
      src={bg === "accent" ? "/assets/separator-accent.svg" : "/assets/separator-white.svg"}
      alt=""
      className="absolute inset-0 h-full w-full"
    />
  </div>
);

export const Logo = ({ className = "" }: { className?: string }) => (
  <span className={`font-primary font-black leading-none text-accent ${className}`}>کافه دَم</span>
);

export const navLinks = [
  { name: "خانه", id: "home" },
  { name: "کاوش", id: "explore" },
  { name: "درباره ما", id: "about" },
  { name: "منو", id: "menu" },
  { name: "تماس", id: "contact" },
] as const;

export const scrollToSection = (e: { preventDefault: () => void }, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
};
