import useEmblaCarousel from "embla-carousel-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS_DATA } from "../data/mockData";

const STAR_SLOTS = [0, 1, 2, 3, 4];

export const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#fbf1f2] rounded-3xl max-w-7xl mx-auto my-12 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f1a1b] mb-3">
          What Our Community Says
        </h2>
        <p className="text-base md:text-lg text-[#584145] max-w-2xl mx-auto">
          Join thousands of professionals who have transformed their bookkeeping
          journey with our resources.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative z-10" ref={emblaRef}>
        <div className="flex gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-[#dfbfc3]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between shrink-0 w-full md:w-[calc(33.333%-16px)] min-w-0"
            >
              <div>
                <div className="flex gap-1 mb-4 text-[#875200]">
                  {STAR_SLOTS.map((s) => (
                    <span
                      key={s}
                      className={`material-symbols-outlined text-sm font-fill ${
                        s < item.rating ? "" : "text-[#dfbfc3]"
                      }`}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-[#1f1a1b] italic mb-6 leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#a61d4c]/10 flex items-center justify-center text-[#830036] font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1f1a1b]">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#830036] font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-10 relative z-10">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-10 h-10 rounded-full border border-[#dfbfc3] flex items-center justify-center text-[#584145] hover:bg-white hover:text-[#830036] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous Testimonial"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-10 h-10 rounded-full border border-[#dfbfc3] flex items-center justify-center text-[#584145] hover:bg-white hover:text-[#830036] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next Testimonial"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Decorative ambient blurred shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#a61d4c]/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffb55b]/10 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
};
