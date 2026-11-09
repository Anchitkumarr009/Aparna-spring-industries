import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";
import { heroSlides } from "../data/content";

const AUTOPLAY_MS = 6000;

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/** Full-width auto-advancing image slider with headline and two buttons. */
export function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 40 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setCurrent(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    const timer = setInterval(() => embla.scrollNext(), AUTOPLAY_MS);
    return () => {
      embla.off("select", onSelect);
      clearInterval(timer);
    };
  }, [embla]);

  return (
    <section
      id="home"
      className="relative w-full h-[600px] md:h-[800px] bg-slate-900 overflow-hidden"
    >
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex w-full h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <div className="absolute inset-0 bg-black/55 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
                <AnimatePresence mode="wait">
                  {current === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="max-w-3xl"
                    >
                      <h2 className="text-accent text-lg md:text-xl font-bold tracking-wider uppercase mb-4">
                        {slide.subtitle}
                      </h2>
                      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                        {slide.title}
                      </h1>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          size="lg"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 h-14"
                          onClick={() => scrollToId("products")}
                          data-testid="button-hero-explore"
                        >
                          Explore Products <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="bg-transparent border-white text-white hover:bg-white/10 text-base px-8 h-14"
                          onClick={() => scrollToId("contact")}
                          data-testid="button-hero-contact"
                        >
                          Contact Us
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-accent w-10" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => embla?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
