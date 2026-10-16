"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const play = () => {
      video.muted = true;
      video.playsInline = true;
      void video.play().catch(() => {});
    };

    if (video.readyState >= 2) play();
    else {
      video.addEventListener("loadeddata", play, { once: true });
      video.addEventListener("canplay", play, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
