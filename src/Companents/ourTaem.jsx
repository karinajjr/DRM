import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OurTeam() {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  useEffect(() => {
    const makeInfiniteSlider = (sliderRef, direction = "left") => {
      const slider = sliderRef.current;
      if (!slider) return;

      const slides = Array.from(slider.querySelectorAll("img"));
      const slideWidth = slides[0].offsetWidth + 16; 
      const totalWidth = slideWidth * slides.length;

      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
      });

   
      gsap.set(slider, {
        x: direction === "left" ? 0 : -totalWidth,
      });

      
      gsap.to(slider, {
        x: direction === "left" ? -totalWidth : 0,
        duration: 90,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
        
          gsap.set(slider, {
            x: direction === "left" ? 0 : -totalWidth,
          });
        },
      });
    };

    makeInfiniteSlider(topSliderRef, "left");
    makeInfiniteSlider(bottomSliderRef, "right");
  }, []);

  const slides = Array(8).fill("/image/JobX.png");

  return (
    <section id="OurTeam" className="space-y-5 ">

      <div className="relative overflow-hidden">
        <div ref={topSliderRef} className="flex gap-4 w-max">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[200px] h-[290px] rounded-lg object-cover"
              alt="team"
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div ref={bottomSliderRef} className="flex gap-4 w-max">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[200px] h-[290px] rounded-lg object-cover"
              alt="team"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
