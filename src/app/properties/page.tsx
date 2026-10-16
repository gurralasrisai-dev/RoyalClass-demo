import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropertyIcon } from "@/components/PropertyIcon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  IMAGES,
  PROPERTY_COMMERCIAL,
  PROPERTY_OFFPLAN,
  PROPERTY_RESIDENTIAL,
  SITE,
  WHY_DUBAI,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate Company in Dubai | Royal Class Properties",
  description:
    "Royal Class Properties is a leading real estate company in Dubai, offering off-plan properties, exclusive residences and prime commercial spaces across the UAE.",
};

const imageFade =
  "linear-gradient(180deg, transparent 70%, rgba(244,241,234,0.4) 100%)";

export default function PropertiesPage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#f4f1ea]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.aboutHero}
            alt="Royal Class Properties Dubai"
            fill
            priority
            className="object-cover"
            style={{ filter: "brightness(0.95)", opacity: 0.22 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(244,241,234,0.5) 0%, rgba(244,241,234,0.65) 50%, rgba(244,241,234,0.95) 100%)",
            }}
          />
        </div>
        <div className="container-wide relative z-10 flex flex-col items-center py-32 text-center md:py-40">
          <div className="max-w-3xl">
            <div className="animate-fade-up mb-8 flex items-center justify-center gap-3">
              <span className="divider-bronze" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                Real Estate Company in Dubai
              </span>
              <span className="divider-bronze" />
            </div>
            <h1
              className="animate-fade-up delay-100 font-cairo mb-6 font-bold leading-[1.05] text-[#1a1815]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Your Path to Exclusive Residences and Prime Commercial Spaces in
              the UAE.
            </h1>
            <p
              className="animate-fade-up delay-200 font-cairo mx-auto mb-10 max-w-2xl text-lg md:text-xl"
              style={{ color: "#5C564E", lineHeight: 1.7 }}
            >
              Royal Class Properties is a leading real estate company in Dubai,
              offering off-plan properties, exclusive residences and prime
              commercial spaces across the UAE.
            </p>
            <div className="animate-fade-up delay-300 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact#enquiry" className="btn-outline-dark">
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="commercial" className="bg-[#f4f1ea] py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Commercial Properties"
            title="Prime Spaces for"
            highlight="Business Growth"
            description="Explore our prime commercial properties that cater to diverse business needs — whether you're seeking an office space with a prestigious address, a retail space in a bustling locale, or a strategic investment opportunity."
            light
          />
          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={IMAGES.commercial}
                  alt="Commercial Properties Dubai"
                  fill
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: imageFade }}
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h3 className="font-cairo mb-6 text-2xl font-semibold text-[#1a1815] md:text-3xl">
                  Leasing, Buying and Selling Commercial Real Estate in Dubai
                </h3>
                <p className="mb-8 text-base leading-[1.8] text-[#5c564e]">
                  Royal Class Properties offers a curated selection of prime
                  commercial spaces across Dubai — from prestigious office
                  buildings to high-footfall retail units and strategic
                  warehouses, supported by deep market knowledge at every stage.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {PROPERTY_COMMERCIAL.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center"
                        style={{
                          background: "rgba(156,122,62,0.08)",
                          borderRadius: 2,
                        }}
                      >
                        <PropertyIcon name={item.icon} />
                      </div>
                      <div>
                        <h4 className="font-cairo mb-1 text-sm font-semibold text-[#1a1815]">
                          {item.label}
                        </h4>
                        <p className="text-xs leading-[1.7] text-[#5c564e]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact#enquiry" className="btn-outline-dark mt-10">
                  Explore Commercial Properties <CtaArrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d6] py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Residential Properties"
            title="Exclusive Homes for"
            highlight="Modern Living"
            description="Discover a curated portfolio of exclusive residences across Dubai's most sought-after communities — from stylish apartments to opulent villas and modern townhouses."
            light
          />
          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1" delay={100}>
              <div>
                <h3 className="font-cairo mb-6 text-2xl font-semibold text-[#1a1815] md:text-3xl">
                  Buy, Sell or Rent Your Dream Home in Dubai
                </h3>
                <p className="mb-8 text-base leading-[1.8] text-[#5c564e]">
                  Discover a curated portfolio of exclusive residences across
                  Dubai&apos;s most sought-after communities — from stylish
                  apartments to opulent villas and modern townhouses.
                </p>
                <div className="mb-10 space-y-6">
                  {PROPERTY_RESIDENTIAL.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center"
                        style={{
                          background: "rgba(156,122,62,0.08)",
                          borderRadius: 2,
                        }}
                      >
                        <PropertyIcon name={item.icon} />
                      </div>
                      <div>
                        <h4 className="font-cairo mb-1 text-sm font-semibold text-[#1a1815]">
                          {item.label}
                        </h4>
                        <p className="text-xs leading-[1.7] text-[#5c564e]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact#enquiry" className="btn-outline-dark mt-10">
                  Explore Residential Properties <CtaArrow />
                </Link>
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={IMAGES.homes}
                  alt="Residential Properties Dubai"
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
          <SectionHeading
            eyebrow="Off-Plan Properties in Dubai"
            title="Discover Carefully Selected"
            highlight="Off-Plan Projects"
            description="Royal Class Properties is your trusted partner for off-plan properties in Dubai — offering future growth opportunities and premium locations across the UAE."
            light
          />
          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={IMAGES.offplanWide}
                  alt="Off-Plan Developments Dubai"
                  fill
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: imageFade }}
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h3 className="font-cairo mb-6 text-2xl font-semibold text-[#1a1815] md:text-3xl">
                  Invest in Dubai&apos;s Most Promising Future Communities
                </h3>
                <p className="mb-8 text-base leading-[1.8] text-[#5c564e]">
                  From new launches in Downtown Dubai to waterfront residences
                  and family communities, our off-plan portfolio gives you early
                  access to Dubai&apos;s most exciting developments — with
                  flexible payment plans and strong investment potential.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {PROPERTY_OFFPLAN.map((item, i) => (
                    <Reveal key={item.label} delay={i * 60}>
                      <div className="card-light p-6">
                        <div className="mb-3">
                          <PropertyIcon name={item.icon} size={22} />
                        </div>
                        <h4 className="font-cairo mb-2 text-sm font-semibold text-[#1a1815]">
                          {item.label}
                        </h4>
                        <p className="text-xs leading-[1.7] text-[#5c564e]">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Link href="/contact#enquiry" className="btn-outline-dark mt-10">
                  Explore Off-Plan Projects <CtaArrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d6] py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why Buy a Home in Dubai"
            title="Why Should You Buy a"
            highlight="Home in Dubai"
            description="Dubai offers a unique combination of safety, lifestyle and investment potential — making it one of the world's most attractive destinations for property ownership."
            light
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_DUBAI.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="h-full">
                <article className="card-light h-full p-8 md:p-10">
                  <div className="mb-5">
                    <PropertyIcon name={item.icon} size={28} />
                  </div>
                  <h3 className="font-cairo mb-3 text-lg font-semibold text-[#1a1815]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-[#5c564e]">
                    {item.description}
                  </p>
                </article>
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
                  Make an Enquiry
                </span>
                <span className="divider-gold" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-cairo mb-6 font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1815]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Make an Enquiry
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="mb-12 text-base leading-[1.8] text-[#5c564e] md:text-lg"
                style={{ maxWidth: 680 }}
              >
                Send us an enquiry and our property specialists will help you
                find the right opportunity — whether you&apos;re buying,
                selling, leasing or investing.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/contact#enquiry"
                className="group inline-flex items-center gap-3 transition-all"
              >
                <span
                  className="border-b pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover:border-[#D4B470] group-hover:text-[#D4B470]"
                  style={{
                    color: "#C6A15B",
                    borderColor: "rgba(198,161,91,0.4)",
                  }}
                >
                  Submit an Enquiry
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

function CtaArrow() {
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
