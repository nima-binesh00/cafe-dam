import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";

const testimonials = [
  { message: "قهوه‌اش واقعاً فوق‌العاده است! باریستاها حرفه‌ای‌اند و فضا هم برای کار و هم برای استراحت عالی است.", name: "سارا محمدی", profession: "طراح گرافیک" },
  { message: "عاشق آمدن به این کافه‌ام. شیرینی‌ها همیشه تازه‌اند و کارکنان بی‌نهایت خوش‌برخورد. پاتوق همیشگی من برای قرارهای کاری است.", name: "علی رضایی", profession: "نویسنده آزاد" },
  { message: "یک گنج پنهان! فضا دنج است و منو تنوع زیادی دارد. چای لاته‌اش را حتماً امتحان کنید!", name: "نگار احمدی", profession: "کارشناس بازاریابی" },
];

export default function Testimonials() {
  return (
    <section className="h-[60vh] xl:h-[70vh]">
      <div className="container flex h-full items-center">
        <Swiper dir="rtl" navigation modules={[Navigation, Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} className="h-[400px]">
          {testimonials.map((p) => (
            <SwiperSlide key={p.name} className="h-full w-full">
              <div className="flex h-full justify-center xl:pt-14">
                <div className="max-w-[60%] text-primary">
                  <IoMdQuote className="mx-auto mb-12 text-6xl text-primary" />
                  <p className="mb-8 text-center font-secondary text-2xl leading-loose">{p.message}</p>
                  <div className="text-center">
                    <p className="mb-1 text-xl font-bold">{p.name}</p>
                    <p className="text-secondary">{p.profession}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
