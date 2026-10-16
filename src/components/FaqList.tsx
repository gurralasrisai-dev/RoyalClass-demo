"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqList({
  items,
  variant = "light",
}: {
  items: readonly Item[];
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(null);
  const isLight = variant === "light";
  const titleColor = isLight ? "#1A1815" : "#F4F1EA";
  const bodyColor = isLight ? "#5C564E" : "#B9B4A9";
  const borderColor = isLight ? "rgba(26,24,21,0.1)" : "rgba(198,161,91,0.1)";

  return (
    <div className="divide-y" style={{ borderColor }}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} style={{ borderColor }}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-6 text-left"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span
                className="font-cairo pr-8 text-lg md:text-xl"
                style={{ color: titleColor }}
              >
                {item.q}
              </span>
              {isOpen ? <MinusIcon /> : <PlusIcon />}
            </button>
            {isOpen ? (
              <p className="pb-6" style={{ color: bodyColor, lineHeight: 1.7 }}>
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="#9C7A3E"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="#9C7A3E"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <path d="M5 12h14" />
    </svg>
  );
}
