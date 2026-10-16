"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { HOME_PROPERTY_CARDS } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function BusinessCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const slide = HOME_PROPERTY_CARDS[index];

  const goTo = useCallback((next: number) => {
    setIndex((i) => {
      const target =
        ((next % HOME_PROPERTY_CARDS.length) + HOME_PROPERTY_CARDS.length) %
        HOME_PROPERTY_CARDS.length;
      setDir(target > i ? 1 : -1);
      return target;
    });
  }, []);

  const step = useCallback((direction: number) => {
    setDir(direction);
    setIndex(
      (i) =>
        (i + direction + HOME_PROPERTY_CARDS.length) %
        HOME_PROPERTY_CARDS.length,
    );
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f4f1ea]">
      <div className="container-wide relative z-10 py-16 md:py-24 lg:py-28">
        <Reveal className="mb-12 flex flex-col items-center text-center md:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="divider-gold" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
              Our Businesses
            </span>
            <span className="divider-gold" />
          </div>
          <h2
            className="font-cairo mb-8 font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1815]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
          >
            Spaces Designed for Business and Living.
          </h2>
          <p className="max-w-[680px] text-base leading-[1.8] text-[#5c564e] md:text-lg">
            Royal Class manages properties that support businesses, professionals,
            and communities. Our portfolio includes commercial properties,
            residential developments, business centres, and off-plan projects
            designed to create long-term value.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto max-w-5xl">
          <div className="relative">
            <div
              className="relative overflow-hidden border border-[rgba(198,161,91,0.12)] bg-black"
              style={{ aspectRatio: "16 / 10" }}
            >
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={slide.id}
                  className="absolute inset-0"
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.label}
                    fill
                    className={slide.contain ? "object-contain" : "object-cover"}
                    style={{ filter: "brightness(0.7)" }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(198,161,91,0.05) 0%, transparent 70%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0"
                style={{
                  height: "50%",
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)",
                }}
              />
            </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => step(-1)}
              className="absolute left-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center transition-all duration-300 hover:scale-110 md:-left-6"
              style={circleBtnStyle}
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => step(1)}
              className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center transition-all duration-300 hover:scale-110 md:-right-6"
              style={circleBtnStyle}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
              >
                <div className="max-w-2xl">
                  <h3
                    className="font-cairo mb-4 font-semibold"
                    style={{
                      color: "#1A1815",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {slide.label}
                  </h3>
                  <p
                    className="text-sm leading-[1.8] md:text-base"
                    style={{ color: "#5C564E" }}
                  >
                    {slide.description}
                  </p>
                </div>

                <Link
                  href={slide.href}
                  className="group inline-flex flex-shrink-0 items-center gap-3"
                >
                  <span
                    className="border-b pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover:border-[#D4B470] group-hover:text-[#D4B470]"
                    style={{
                      color: "#C6A15B",
                      borderColor: "rgba(198,161,91,0.4)",
                    }}
                  >
                    {slide.cta}
                  </span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                    style={{ color: "#C6A15B" }}
                  >
                    <ChevronIcon direction="right" size={16} />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-2">
              {HOME_PROPERTY_CARDS.map((card, i) => (
                <button
                  key={card.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === index ? 32 : 8,
                    height: 3,
                    borderRadius: 2,
                    background:
                      i === index ? "#C6A15B" : "rgba(26,24,21,0.2)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const circleBtnStyle: CSSProperties = {
  width: 52,
  height: 52,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.55)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(244,241,234,0.15)",
  color: "#F4F1EA",
  cursor: "pointer",
};

function ChevronIcon({
  direction,
  size = 20,
}: {
  direction: "left" | "right";
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}
