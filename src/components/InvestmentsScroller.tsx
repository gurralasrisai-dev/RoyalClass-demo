"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { HOME_INVESTMENT_CARDS } from "@/lib/site";

export function InvestmentsScroller() {
  const ref = useRef<HTMLDivElement>(null);

  function scroll(dir: number) {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const width = card?.offsetWidth ?? 400;
    el.scrollBy({ left: dir * (width + 24), behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-[#f4f1ea]">
      <div className="container-wide py-16 md:py-24 lg:py-28">
        <Reveal className="mb-12 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="divider-gold" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
                Investments
              </span>
            </div>
            <h2
              className="font-cairo mb-8 font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1815]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
            >
              Investing in Businesses.
              <br />
              Building Long-Term Partnerships.
            </h2>
            <p className="text-base leading-[1.8] text-[#5c564e] md:text-lg">
              Royal Class partners with ambitious founders, entrepreneurs, and
              growing businesses by providing strategic investment, industry
              expertise, and long-term partnership. We invest across venture
              capital, artificial intelligence, technology, and real estate
              ventures that demonstrate innovation, scalability, and sustainable
              growth.
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scroll(-1)}
              className="flex h-12 w-12 items-center justify-center border border-[rgba(198,161,91,0.2)] text-[rgba(26,24,21,0.5)] transition hover:border-[#c6a15b] hover:text-[#c6a15b]"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scroll(1)}
              className="flex h-12 w-12 items-center justify-center border border-[rgba(198,161,91,0.2)] text-[rgba(26,24,21,0.5)] transition hover:border-[#c6a15b] hover:text-[#c6a15b]"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={100}>
        <div
          ref={ref}
          className="hide-scrollbar flex gap-6 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {HOME_INVESTMENT_CARDS.map((card) => (
            <article
              key={card.number}
              data-card
              className="group w-[min(440px,85vw)] flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                className="relative mb-6 overflow-hidden border border-[rgba(198,161,91,0.08)] bg-black"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.6)" }}
                />
                <span
                  className="absolute left-6 top-6 z-10 font-cairo"
                  style={{
                    color: "rgba(198,161,91,0.9)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                  }}
                >
                  {card.number}
                </span>
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(198,161,91,0.06) 0%, transparent 70%)",
                  }}
                />
              </div>
              <h3
                className="font-cairo mb-4 font-semibold"
                style={{ color: "#1A1815", fontSize: "1.5rem", lineHeight: 1.2 }}
              >
                {card.title}
              </h3>
              <p
                className="mb-8 text-sm leading-[1.7] md:text-base"
                style={{ color: "#5C564E" }}
              >
                {card.description}
              </p>
              <Link
                href="/investments"
                className="group/cta inline-flex items-center gap-3 transition-all"
              >
                <span
                  className="border-b pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover/cta:border-[#D4B470] group-hover/cta:text-[#D4B470]"
                  style={{
                    color: "#C6A15B",
                    borderColor: "rgba(198,161,91,0.4)",
                  }}
                >
                  {card.cta}
                </span>
                <ArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
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

function ArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
      style={{ color: "#C6A15B" }}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
