"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { INVESTMENT_VERTICALS } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Vertical = (typeof INVESTMENT_VERTICALS)[number];

export function InvestmentVerticals() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const touchX = useRef<number | null>(null);
  const vertical = INVESTMENT_VERTICALS[index];

  const step = useCallback((direction: number) => {
    setDir(direction);
    setIndex(
      (i) =>
        (i + direction + INVESTMENT_VERTICALS.length) %
        INVESTMENT_VERTICALS.length,
    );
  }, []);

  const goTo = useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1);
      setIndex(next);
    },
    [index],
  );

  return (
    <section
      className="overflow-hidden bg-[#e8e2d6] py-16 md:py-24"
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="container-wide">
        <Reveal className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="divider-bronze" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
              Our Investment Verticals
            </span>
            <span className="divider-bronze" />
          </div>
          <h2
            className="font-cairo mx-auto max-w-2xl font-bold leading-[1.1] text-[#1a1815]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Where We Invest
          </h2>
        </Reveal>

        <Reveal delay={100} className="relative">
          <button
            type="button"
            aria-label="Previous vertical"
            onClick={() => step(-1)}
            className="absolute left-0 top-[20%] z-20 flex items-center justify-center transition-all duration-300 hover:scale-110 md:-left-6"
            style={navBtnStyle}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next vertical"
            onClick={() => step(1)}
            className="absolute right-0 top-[20%] z-20 flex items-center justify-center transition-all duration-300 hover:scale-110 md:-right-6"
            style={navBtnStyle}
          >
            <Chevron direction="right" />
          </button>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={vertical.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <VerticalSlide vertical={vertical} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-2">
            {INVESTMENT_VERTICALS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to ${item.title}`}
                onClick={() => goTo(i)}
                className="transition-all duration-300"
                style={{
                  width: i === index ? 32 : 8,
                  height: 3,
                  borderRadius: 2,
                  background:
                    i === index ? "#9C7A3E" : "rgba(26,24,21,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const navBtnStyle: CSSProperties = {
  width: 52,
  height: 52,
  borderRadius: "50%",
  background: "#FFFFFF",
  border: "1px solid rgba(156,122,62,0.3)",
  color: "#9C7A3E",
  cursor: "pointer",
};

function VerticalSlide({ vertical }: { vertical: Vertical }) {
  const image = (
    <div
      className="relative overflow-hidden"
      style={{ aspectRatio: "4 / 3" }}
    >
      <Image
        src={vertical.image}
        alt={vertical.imageAlt}
        fill
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 60%, rgba(244,241,234,0.4) 100%)",
        }}
      />
    </div>
  );

  const content = (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="divider-bronze" />
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
          {vertical.eyebrow}
        </span>
      </div>
      <h3
        className="font-cairo mb-8 font-bold leading-[1.1] text-[#1a1815]"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
      >
        {vertical.title}
      </h3>

      {"paragraphs" in vertical && vertical.paragraphs
        ? vertical.paragraphs.map((p, i) => (
            <p
              key={p}
              className={`text-base leading-[1.8] text-[#5c564e] md:text-lg ${
                i < vertical.paragraphs!.length - 1 ? "mb-6" : "mb-10"
              }`}
            >
              {p}
            </p>
          ))
        : null}

      {"intro" in vertical && vertical.intro ? (
        <p className="mb-10 text-base leading-[1.8] text-[#5c564e] md:text-lg">
          {vertical.intro}
        </p>
      ) : null}

      {"focusAreas" in vertical && vertical.focusAreas ? (
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {vertical.focusAreas.map((area) => (
            <div key={area.title} className="card-light h-full p-8">
              <div className="mb-5">
                <FocusIcon name={area.icon} />
              </div>
              <h4 className="font-cairo mb-3 text-base font-semibold text-[#1a1815]">
                {area.title}
              </h4>
              <p className="text-sm leading-[1.8] text-[#5c564e]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      <Link href={vertical.ctaPath} className="btn-outline-dark">
        {vertical.cta} <ArrowIcon />
      </Link>
    </div>
  );

  if (vertical.imageSide === "left") {
    return (
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {image}
        {content}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="order-2 lg:order-1">{content}</div>
      <div className="order-1 lg:order-2">{image}</div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
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

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FocusIcon({ name }: { name: "cpu" | "code" }) {
  const props = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true,
    stroke: "#9C7A3E",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "cpu") {
    return (
      <svg {...props}>
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}
