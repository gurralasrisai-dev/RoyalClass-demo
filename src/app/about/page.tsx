import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LightHero } from "@/components/LightHero";
import { Reveal } from "@/components/Reveal";
import { IMAGES, SITE, VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Royal Class Group | Diversified Business Group Dubai",
  description:
    "Royal Class Group is a diversified business group in Dubai operating across Properties and Strategic Investments, creating long-term value through meaningful partnerships and sustainable growth across the UAE.",
};

const imageFade =
  "linear-gradient(180deg, transparent 70%, rgba(244,241,234,0.4) 100%)";

export default function AboutPage() {
  return (
    <>
      <LightHero
        eyebrow="About Royal Class"
        accent="gold"
        title={
          <>
            Building Value.
            <br />
            Creating Opportunities.
          </>
        }
        description="Royal Class is a diversified business group operating across Properties and Strategic Investments. Through long-term thinking, responsible partnerships and a commitment to excellence, we create opportunities that support businesses, communities and sustainable growth."
        image={IMAGES.aboutHero}
        imageAlt="Royal Class Group — Premium Architecture"
        centered={false}
        ctas={[
          { href: "/properties", label: "Explore Our Businesses" },
          {
            href: "/contact#enquiry",
            label: "Contact Us",
            variant: "outline",
          },
        ]}
      />

      <section className="bg-[#f4f1ea] py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="divider-gold" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
                    Who We Are
                  </span>
                </div>
                <h2
                  className="font-cairo mb-8 font-bold leading-[1.1] text-[#1a1815]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  A Diversified Business Group Built on Long-Term Value
                </h2>
                <p className="mb-6 text-base leading-[1.8] text-[#5c564e] md:text-lg">
                  Royal Class is a diversified business group committed to
                  creating long-term value through premium properties and
                  strategic investments.
                </p>
                <p className="mb-6 text-base leading-[1.8] text-[#5c564e] md:text-lg">
                  Our approach is built on identifying opportunities, forming
                  meaningful partnerships and supporting sustainable growth
                  across every business we operate.
                </p>
                <p className="text-base leading-[1.8] text-[#5c564e] md:text-lg">
                  Whether developing exceptional spaces or investing in
                  innovative companies, we believe lasting success is built
                  through responsibility, collaboration and a long-term
                  perspective.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={IMAGES.aboutWho}
                  alt="Royal Class Group — Premium Corporate Interior"
                  fill
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: imageFade }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d6] py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="divider-gold" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
                    Purpose
                  </span>
                </div>
                <h2
                  className="font-cairo mb-8 font-bold leading-[1.1] text-[#1a1815]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  Building Long-Term Value Through Meaningful Partnerships.
                </h2>
                <p className="text-base leading-[1.8] text-[#5c564e] md:text-lg">
                  Royal Class exists to create sustainable value by developing
                  exceptional properties and investing in businesses with
                  long-term potential. Through strategic partnerships,
                  responsible growth and a commitment to excellence, we build
                  opportunities that benefit businesses, communities and future
                  generations.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={IMAGES.aboutArch}
                  alt="Royal Class Purpose"
                  fill
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: imageFade }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ea] py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={IMAGES.aboutVision}
                  alt="Royal Class Vision"
                  fill
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: imageFade }}
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="divider-gold" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
                    Vision
                  </span>
                </div>
                <h2
                  className="font-cairo mb-8 font-bold leading-[1.1] text-[#1a1815]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  To Be a Trusted Partner for Growth.
                </h2>
                <p className="text-base leading-[1.8] text-[#5c564e] md:text-lg">
                  Our vision is to become a recognised business group known for
                  creating lasting impact through premium real estate and
                  strategic investments. We aim to support ambitious businesses,
                  develop exceptional spaces and contribute to a future built on
                  innovation, collaboration and sustainable growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d6] py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="mb-14 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="divider-gold" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
                Values
              </span>
              <span className="divider-gold" />
            </div>
            <h2
              className="font-cairo mb-6 font-bold leading-[1.1] text-[#1a1815]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-[1.8] text-[#5c564e] md:text-lg">
              Our values shape every partnership, investment and property we
              develop. They guide how we work, how we grow and how we create
              lasting value.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 80} className="h-full">
                <div
                  className="flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1.5 lg:p-7"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 8,
                    borderTop: "1px solid #9C7A3E",
                    boxShadow: "0 8px 30px -12px rgba(26,24,21,0.1)",
                  }}
                >
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-sm"
                    style={{ border: "1px solid rgba(156,122,62,0.25)" }}
                  >
                    <ValueIcon name={value.icon} />
                  </div>
                  <h3 className="font-cairo mb-3 text-base font-semibold text-[#1a1815]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-[#5c564e]">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f1ea]">
        <Image
          src={SITE.logo}
          alt=""
          aria-hidden
          width={1200}
          height={300}
          className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[90vw] max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
          style={{ opacity: 0.06, filter: "invert(1)" }}
        />
        <div className="container-wide relative z-10 py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <span className="divider-gold" />
                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c6a15b]">
                  Partner With Us
                </span>
                <span className="divider-gold" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-cairo mb-6 font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1815]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Let&apos;s Build the Future Together.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="mb-12 text-base leading-[1.8] text-[#5c564e] md:text-lg"
                style={{ maxWidth: 680 }}
              >
                Whether you&apos;re looking for premium property solutions or
                seeking a strategic investment partner, Royal Class is ready to
                explore opportunities that create lasting value through
                meaningful partnerships.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/properties"
                className="group inline-flex items-center gap-3 transition-all"
              >
                <span
                  className="border-b pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover:border-[#D4B470] group-hover:text-[#D4B470]"
                  style={{
                    color: "#C6A15B",
                    borderColor: "rgba(198,161,91,0.4)",
                  }}
                >
                  Explore Our Businesses
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  stroke="#C6A15B"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueIcon({
  name,
}: {
  name: (typeof VALUES)[number]["icon"];
}) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true,
    stroke: "#9C7A3E",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...props}>
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      );
    case "award":
      return (
        <svg {...props}>
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...props}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
  }
}
