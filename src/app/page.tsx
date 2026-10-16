import Image from "next/image";
import Link from "next/link";
import { BusinessCarousel } from "@/components/BusinessCarousel";
import { DiscoverCue } from "@/components/DiscoverCue";
import { InvestmentsScroller } from "@/components/InvestmentsScroller";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f1ea]">
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.55, filter: "brightness(0.95)" }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(232, 220, 196, 0.18) 0%, rgba(198, 161, 91, 0.22) 100%)",
            }}
          />
        </div>

        <div className="container-wide relative z-10 py-32 md:py-24">
          <div className="flex flex-col items-center text-center">
            <h1
              className="animate-fade-up font-cairo mb-8 font-bold leading-[1.05] tracking-[-0.02em] text-[#1a1815]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Investing in Growth.
              <br />
              Building Better Spaces.
            </h1>
            <p
              className="animate-fade-up delay-100 max-w-[640px] text-base leading-[1.8] text-black md:text-lg"
            >
              Royal Class is a diversified business group focused on Properties
              and Strategic Investments. We manage exceptional spaces, support
              ambitious businesses, and pursue opportunities with the potential
              to create lasting value.
            </p>
          </div>
        </div>

        <DiscoverCue />
      </section>

      <div id="our-businesses">
        <BusinessCarousel />
      </div>
      <InvestmentsScroller />

      <section className="relative overflow-hidden bg-[#f4f1ea]">
        <Image
          src={SITE.logo}
          alt=""
          aria-hidden
          width={900}
          height={400}
          className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[90vw] max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
          style={{ opacity: 0.06, filter: "invert(1)" }}
        />
        <div className="container-wide relative z-10 py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <span className="divider-gold" />
                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
                  Royal Class Group
                </span>
                <span className="divider-gold" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-cairo mb-6 font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1815]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Building Value. Creating Opportunities.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mb-12 max-w-[680px] text-base leading-[1.8] text-[#5c564e] md:text-lg">
                A diversified business group driving growth through Properties
                and Strategic Investments. We create exceptional spaces, partner
                with ambitious businesses, and invest in opportunities that
                shape the future.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/contact#enquiry"
                className="group inline-flex items-center gap-3"
              >
                <span className="border-b border-[rgba(198,161,91,0.4)] pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a15b] transition group-hover:border-[#d4b470] group-hover:text-[#d4b470]">
                  Learn More About Royal Class
                </span>
                <span className="text-[#c6a15b] transition group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
