import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Reviews() {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  const reviews = [
    {
      name: "Александр Романов",
      text: "Работать с этой командой — одно удовольствие! Разработали для нас сайт быстро, чётко и без лишней головной боли. Всё учли, всё объяснили, даже после сдачи проекта помогли с доработками. Если вам нужен реально качественный продукт — смело обращайтесь!",
    },
    {
      name: "Анна Коваль",
      text: "Очень довольна результатом! Всё сделали быстро и профессионально. Команда всегда на связи, учитывают все пожелания и предлагают отличные идеи. Рекомендую!",
    },
    {
      name: "Игорь Смирнов",
      text: "Отличная работа! Всё продумано до мелочей, сайт работает стабильно, а дизайн просто вау. Спасибо за качественный подход!",
    },
    {
      name: "Екатерина Петрова",
      text: "Настоящие профессионалы! Помогли разобраться со всеми техническими моментами. Работать с вами — одно удовольствие!",
    },
  ];

  useEffect(() => {
    const makeInfiniteSlider = (sliderRef, direction = "left") => {
      const slider = sliderRef.current;
      if (!slider) return;

      const cards = slider.querySelectorAll(".review-card");
      const cardWidth = cards[0].offsetWidth + 24; 
      const totalWidth = cardWidth * cards.length;


      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        slider.appendChild(clone);
      });


      gsap.to(slider, {
        x: direction === "left" ? -totalWidth : totalWidth,
        duration: 100,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const pos = parseFloat(x) % totalWidth;
            return direction === "left" ? pos : -pos;
          }),
        },
      });
    };

    makeInfiniteSlider(topSliderRef, "left");
    makeInfiniteSlider(bottomSliderRef, "right");
  }, []);

  return (
    <section className="py-4 text-white ">

      {/* Первый ряд (влево) */}
      <div className="overflow-hidden">
        <div ref={topSliderRef} className="flex gap-6 w-max">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`review-card flex-shrink-0 rounded-xl shadow-[inset_0_0_10px_0.1px_#ffffffcc] p-6 transition-all duration-500 ${
                i % 2 === 0 ? "w-[420px] h-[280px] " : "w-[420px] h-[250px]"
              }`}
            >
              <h3 className="font-semibold text-2xl mb-3">{r.name}</h3>
              <p className="text-sm leading-relaxed opacity-90">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Второй ряд (вправо) */}
      <div className="overflow-hidden">
        <div ref={bottomSliderRef} className="flex gap-6 w-max">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`review-card flex-shrink-0 rounded-xl shadow-[inset_0_0_10px_0.1px_#ffffffcc] p-3  transition-all duration-500 ${
                i % 2 === 0 ? "w-[420px] h-[250px]  mt-7" : "w-[420px] h-[280px]"
              }`}
            >
              <h3 className="font-semibold text-2xl mb-3">{r.name}</h3>
              <p className="text-sm leading-relaxed opacity-90">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
