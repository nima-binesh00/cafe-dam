import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Header from "@/components/coffee/Header";
import Testimonials from "@/components/coffee/Testimonials";
import { About, Explore, Footer, Hero, Menu, OpeningHours } from "@/components/coffee/Sections";

const title = "قهوه و شادی | کافه دَم، تجربه‌ای ممتاز از قهوه";
const description =
  "لذت قهوه‌ای بی‌نظیر را در کافه دم تجربه کنید؛ اسپرسوهای غنی، قهوه دمی کلاسیک، کلدبروی خنک و انواع لاته‌های خوش‌طعم.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    let instance: { destroy: () => void } | undefined;
    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      instance = new LocomotiveScroll();
    });
    return () => instance?.destroy();
  }, []);

  return (
    <>
      <Header />
      <div className="h-full overflow-x-hidden">
        <Hero />
        <Explore />
        <About />
        <Menu />
        <OpeningHours />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
