"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RADIUS = 38;

const ORBIT = [
  { label: "Security", icon: "lock" as const, angle: 0 },
  { label: "Open Pantry", icon: "utensils" as const, angle: 60 },
  { label: "Cleaning Services", icon: "sparkles" as const, angle: 120 },
  { label: "24/7 Access", icon: "key" as const, angle: 180 },
  { label: "Free Parking", icon: "car" as const, angle: 240 },
  { label: "Speed Internet", icon: "wifi" as const, angle: 300 },
] as const;

const CENTER = { label: "Meeting Room", icon: "users" as const };

const ALL = [CENTER, ...ORBIT];

export function AmenitiesOrbit() {
  const [active, setActive] = useState<string | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (!paused.current) {
        setActive(ALL[i % ALL.length].label);
        i += 1;
      }
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const current = active || CENTER.label;
  const currentItem = ALL.find((a) => a.label === current) || CENTER;

  function pos(angle: number) {
    return {
      left: `${50 + RADIUS * Math.sin((angle * Math.PI) / 180)}%`,
      top: `${50 - RADIUS * Math.cos((angle * Math.PI) / 180)}%`,
    };
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[440px]">
        <div
          className="absolute rounded-full"
          style={{
            top: `${50 - RADIUS}%`,
            left: `${50 - RADIUS}%`,
            width: `${RADIUS * 2}%`,
            height: `${RADIUS * 2}%`,
            border: "1px dashed rgba(156,122,62,0.3)",
          }}
        />

        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "44%",
            height: "44%",
            background: "#FFFFFF",
            border: "1px solid rgba(156,122,62,0.3)",
            boxShadow: "0 0 60px -10px rgba(156,122,62,0.15)",
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center justify-center rounded-full"
                style={{ width: 56, height: 56, background: "#9C7A3E" }}
              >
                <AmenitySvg name={currentItem.icon} size={26} color="#F4F1EA" />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.span
                key={`${current}-label`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="font-cairo text-center text-sm font-semibold tracking-wide text-[#1a1815]"
              >
                {current}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {ORBIT.map((item) => {
          const isActive = active === item.label;
          return (
            <div
              key={item.label}
              className="absolute"
              style={{
                ...pos(item.angle),
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => {
                paused.current = true;
                setActive(item.label);
              }}
              onMouseLeave={() => {
                paused.current = false;
              }}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  backgroundColor: isActive
                    ? "rgba(156,122,62,1)"
                    : "rgba(255,255,255,1)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex cursor-pointer items-center justify-center rounded-full"
                style={{
                  width: 72,
                  height: 72,
                  border: "1px solid rgba(156,122,62,0.3)",
                }}
              >
                <AmenitySvg
                  name={item.icon}
                  size={26}
                  color={isActive ? "#F4F1EA" : "#9C7A3E"}
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3 lg:hidden">
        {ORBIT.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(156,122,62,0.2)",
            }}
          >
            <AmenitySvg name={item.icon} size={14} color="#9C7A3E" />
            <span className="font-cairo text-xs text-[#5c564e]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AmenitySvg({
  name,
  size,
  color,
}: {
  name: "lock" | "utensils" | "sparkles" | "key" | "car" | "wifi" | "users";
  size: number;
  color: string;
}) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true,
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { transition: "color 0.3s ease" },
  };

  switch (name) {
    case "lock":
      return (
        <svg {...props}>
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "utensils":
      return (
        <svg {...props}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...props}>
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        </svg>
      );
    case "key":
      return (
        <svg {...props}>
          <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
          <path d="m21 2-9.6 9.6" />
          <circle cx="7.5" cy="15.5" r="5.5" />
        </svg>
      );
    case "car":
      return (
        <svg {...props}>
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...props}>
          <path d="M12 20h.01" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.859a10 10 0 0 1 14 0" />
          <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
  }
}
