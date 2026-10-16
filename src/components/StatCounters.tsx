"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Stat = { target: number; label: string; suffix?: string };

export function StatCounters({ stats }: { stats: readonly Stat[] }) {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-16"
      style={{
        background: "#E8E2D6",
        borderTop: "1px solid rgba(26,24,21,0.08)",
        borderBottom: "1px solid rgba(26,24,21,0.08)",
      }}
    >
      <div className="container-wide">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {stats.map((stat) => (
              <Counter key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Counter({
  target,
  label,
  suffix = "+",
}: {
  target: number;
  label: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 2000;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.floor(eased * target));
          if (t < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-cairo bronze-text mb-3 font-bold leading-none"
        style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
      >
        {value}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.25em] text-[#5c564e]">
        {label}
      </div>
    </div>
  );
}
