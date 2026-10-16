"use client";

export function DiscoverCue() {
  return (
    <a
      href="#our-businesses"
      className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 no-underline"
      aria-label="Discover more"
    >
      <div className="flex flex-col items-center leading-none">
        <span
          className="font-cairo text-[11px] uppercase tracking-[0.35em]"
          style={{ color: "#1A1815", fontWeight: 600 }}
        >
          Royal Class
        </span>
        <span
          className="font-cairo mt-1 text-[11px] uppercase tracking-[0.35em]"
          style={{ color: "rgba(26,24,21,0.5)", fontWeight: 500 }}
        >
          Discover
        </span>
      </div>
      <span className="discover-chevron inline-flex text-[#1A1815]" aria-hidden>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </a>
  );
}
