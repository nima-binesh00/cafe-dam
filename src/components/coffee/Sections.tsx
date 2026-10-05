import { useEffect, useRef } from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Badge, Logo, Separator, navLinks, scrollToSection } from "./Shared";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import cupImage from "@/assets/coffee-cup.png.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative h-[80vh] text-background xl:h-screen">
      <div className="absolute z-10 h-full w-full bg-primary/[0.93] bg-hero_overlay" />
      <video autoPlay loop muted playsInline className="absolute left-0 top-0 h-full w-full object-cover">
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      <div className="container relative z-30 flex h-full flex-col items-center xl:flex-row">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex h-full flex-1 flex-col items-center justify-center gap-10 text-center xl:pb-12"
        >
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-background">
              <span className="text-accent">قهوه</span> و شادی
            </h1>
          </div>
          <Separator />
          <p className="lead mb-4 max-w-[300px] font-light md:max-w-[430px] xl:max-w-[560px]">
            لذت یک قهوه بی‌نظیر را در فضایی دنج و گرم تجربه کنید؛ جایی که هر فنجان با عشق و دقت آماده می‌شود.
          </p>
          <button className="btn" onClick={(e) => scrollToSection(e, "menu")}>منوی ما</button>
        </div>
      </div>
    </section>
  );
}

const exploreItems = [
  { icon: "coffee-1.svg", title: "ترکیب‌های غنی اسپرسو", description: "طعم عمیق و قدرتمند ترکیب‌های اسپرسوی ما را که با مهارت برشته شده‌اند تجربه کنید؛ مناسب برای یک انرژی سریع یا عصری آرام." },
  { icon: "coffee-2.svg", title: "قهوه دمی کلاسیک", description: "از طعم دلنشین قهوه دمی کلاسیک ما لذت ببرید؛ انتخابی همیشگی برای کسانی که سادگی و اصالت را دوست دارند." },
  { icon: "coffee-3.svg", title: "کلدبروی لطیف", description: "با کلدبروهای خوش‌طعم و نشاط‌آور ما سرحال شوید؛ بهترین همراه روزهای گرم تابستان." },
  { icon: "coffee-4.svg", title: "انواع لاته خوش‌طعم", description: "طعم خامه‌ای و غنی لاته‌های متنوع ما را بچشید؛ از وانیل تا کارامل، برای هر سلیقه‌ای یک لاته داریم." },
];

function ExploreItem({ item, align }: { item: (typeof exploreItems)[number]; align: string }) {
  return (
    <div className="relative flex items-start">
      <div className={`xl:flex xl:max-w-[420px] xl:flex-col ${align}`}>
        <div className="mb-6 flex items-center justify-center">
          <img src={`/assets/explore/icons/${item.icon}`} width={56} height={56} alt="" />
        </div>
        <h3 className="mb-4 font-primary text-3xl font-bold xl:text-4xl">{item.title}</h3>
        <p className="max-w-[400px]">{item.description}</p>
      </div>
    </div>
  );
}

export function Explore() {
  const col = "flex-1 flex flex-col justify-around text-center xl:text-start gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0";
  return (
    <section id="explore" className="py-12 xl:h-[90vh] xl:w-screen xl:py-0">
      <div className="container flex xl:h-full xl:w-full xl:items-center xl:justify-center">
        <div className="flex w-full flex-col gap-12 lg:flex-row xl:gap-20">
          <div className={`${col} items-end`}>
            {exploreItems.slice(0, 2).map((i) => <ExploreItem key={i.title} item={i} align="xl:text-left xl:items-end" />)}
          </div>
          <div className="hidden justify-center xl:flex">
            <div className="relative h-[580px] w-[322px]">
              <img src={cupImage.url} alt="کافه دَم" data-scroll data-scroll-speed="0.1" className="absolute inset-0 h-full w-full object-contain" />
            </div>
          </div>
          <div className={col}>
            {exploreItems.slice(2).map((i) => <ExploreItem key={i.title} item={i} align="xl:text-right items-start" />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutData = [
  { imgSrc: "/assets/about/photo-1.jpg", title: "مسیر ما", description: "کافه دم کار خود را به‌عنوان کافه‌ای کوچک با رؤیای سرو قهوه‌ای بی‌نظیر آغاز کرد. امروز نامی آشنا برای دوستداران قهوه است که به کیفیت و پایداری شناخته می‌شود. با ما همراه شوید تا دنیای قهوه را فنجان به فنجان کشف کنیم." },
  { imgSrc: "/assets/about/photo-2.jpg", title: "تعهد ما", description: "در کافه دم، بهترین قهوه را با اثری مثبت وعده می‌دهیم. دانه‌ها را از مزارع پایدار تهیه می‌کنیم و برشته‌کاری دقیق ما تجربه‌ای غنی و رضایت‌بخش می‌سازد. ما به کیفیت، پایداری و جامعه خود متعهدیم." },
  { imgSrc: "/assets/about/photo-3.jpg", title: "تیم ما", description: "پشت هر فنجان خوب، تیمی دلسوز ایستاده است. باریستاها و برشته‌کاران ماهر ما با عشق و دقت کار می‌کنند تا هر تجربه قهوه خاص باشد. با آدم‌هایی آشنا شوید که خلاقیت و توجه را به هر فنجان می‌آورند." },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let kill: (() => void) | undefined;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const anim = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "200vw",
          ease: "none",
          duration: 1,
          scrollTrigger: { trigger: triggerRef.current, start: "top top", end: "1800vw top", scrub: 0.6, pin: true },
        },
      );
      kill = () => anim.kill();
    })();
    return () => kill?.();
  }, []);

  return (
    <section id="about" className="overflow-hidden bg-primary">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="relative flex h-screen w-[300vw]">
          {aboutData.map((item) => (
            <div key={item.title} className="relative flex h-screen w-screen flex-col items-center justify-center">
              <div className="container">
                <div className="relative flex gap-[30px]">
                  <div className="flex flex-1 flex-col items-center justify-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 mb-4 text-background">
                        <span className="me-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>
                      <div className="mb-8"><Separator /></div>
                      <p className="mb-16 px-8 leading-relaxed xl:px-0">{item.description}</p>
                      <button className="btn">بیشتر بدانید</button>
                    </div>
                  </div>
                  <div className="relative hidden h-[70vh] w-full flex-1 xl:flex">
                    <img src={item.imgSrc} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const menuItems = [
  ["coffee-1", "اسپرسو", "شاتی غلیظ و پرقدرت از قهوه", 95],
  ["coffee-2", "کاپوچینو", "اسپرسو با شیر بخارداده و فوم", 135],
  ["coffee-3", "لاته", "اسپرسو با شیر بخارداده", 130],
  ["coffee-4", "آمریکانو", "اسپرسو با آب داغ", 105],
  ["coffee-5", "موکا", "اسپرسو با شکلات و شیر بخارداده", 155],
  ["coffee-1", "ماکیاتو", "اسپرسو با کمی فوم شیر", 110],
  ["coffee-2", "فلت وایت", "اسپرسو با شیر میکروفوم", 135],
  ["coffee-3", "آیس کافی", "قهوه سرد روی یخ", 120],
  ["coffee-4", "آفوگاتو", "شات اسپرسو روی بستنی وانیلی", 160],
  ["coffee-5", "قهوه فرانسه", "قهوه با شیر داغ و طعمی ملایم", 125],
] as const;

export function Menu() {
  return (
    <section id="menu" className="pb-16 pt-12 xl:pb-36 xl:pt-16">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 xl:mb-24">
          <h2 className="h2 text-center">منوی ما</h2>
          <div className="mb-4"><Separator bg="accent" /></div>
          <p className="mx-auto max-w-[620px] text-center">
            از اسپرسوی کلاسیک تا نوشیدنی‌های خلاقانه، هر فنجان با دانه‌های تازه‌برشته و دقت باریستاهای ما آماده می‌شود. قیمت‌ها به هزار تومان است.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <div className="grid w-full grid-cols-1 place-content-center gap-x-16 gap-y-8 xl:grid-cols-2">
            {menuItems.map(([img, name, desc, price]) => (
              <div key={name} className="flex items-center gap-4">
                <div className="relative h-[60px] w-[60px] rounded-full xl:h-[72px] xl:w-[72px]">
                  <img src={`/assets/menu/${img}.png`} alt={name} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-primary text-[22px] font-bold leading-none text-primary">{name}</p>
                    <div className="flex-1 border-b border-dashed border-primary" />
                    <p className="font-primary text-[30px] font-semibold leading-none text-primary">{price.toLocaleString("fa-IR")}</p>
                  </div>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn">مشاهده منوی کامل</button>
        </div>
      </div>
    </section>
  );
}

export function OpeningHours() {
  return (
    <section className="flex h-[60vh] bg-primary xl:h-[80vh]">
      <div className="relative hidden flex-1 items-center justify-center xl:flex">
        <div className="absolute top-0 z-40 h-full w-full bg-primary/60" />
        <img src="/assets/opening-hours/img.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center bg-opening_hours bg-cover bg-no-repeat">
        <div className="absolute top-0 z-10 h-full w-full bg-primary/[0.85]" />
        <div className="z-20 flex flex-col items-center justify-center">
          <h2 className="h2 mb-4 text-background">ساعات کاری</h2>
          <Separator bg="accent" />
          <ul className="mt-12 flex w-[300px] flex-col gap-5 text-lg text-background xl:w-[470px] xl:text-2xl">
            {[["شنبه تا چهارشنبه", "۸:۰۰ تا ۲۳:۰۰"], ["پنجشنبه", "۸:۰۰ تا ۲۴:۰۰"], ["جمعه", "۱۰:۰۰ تا ۲۴:۰۰"]].map(([d, h]) => (
              <li key={d} className="flex items-baseline gap-4">
                <span className="font-bold text-accent">{d}</span>
                <span className="flex-1 border-b border-dashed border-background/40" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const icons = [[FaYoutube, "یوتیوب"], [FaFacebook, "فیسبوک"], [FaTwitter, "توییتر"], [FaInstagram, "اینستاگرام"]] as const;
  return (
    <footer id="contact" className="relative bg-footer bg-cover bg-no-repeat pt-16">
      <div className="absolute top-0 z-10 h-full w-full bg-primary/[0.9]" />
      <div className="container relative z-20">
        <div className="flex flex-col items-center justify-center gap-14">
          <a href="/" aria-label="کافه دم - صفحه اصلی" className="relative mx-auto flex h-[50px] items-center">
            <Logo className="text-4xl" />
          </a>
          <nav className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:gap-12">
            {navLinks.map(({ name: n, id }) => (
              <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)} className="text-lg text-background transition-all hover:text-accent">{n}</a>
            ))}
          </nav>
          <ul className="flex gap-4 text-xl text-background">
            {icons.map(([Icon, label], i) => (
              <a key={i} href="/" aria-label={label} className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-background/15 transition-all hover:text-accent">
                <Icon />
              </a>
            ))}
          </ul>
          <div className="flex w-full items-center justify-center border-t border-background/10 py-6 text-[15px] font-light text-background/70">
            <p>© {new Date().getFullYear().toLocaleString("fa-IR", { useGrouping: false })} کافه دم. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
