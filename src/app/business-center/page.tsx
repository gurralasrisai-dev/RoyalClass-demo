import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmenitiesOrbit } from "@/components/AmenitiesOrbit";
import { LightHero } from "@/components/LightHero";
import { LocationSection } from "@/components/LocationSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounters } from "@/components/StatCounters";
import { BC_OFFERS, BC_REASONS, BC_STATS, IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Royal Class Business Center | Business Center in Dubai for Rent",
  description:
    "Royal Class Business Center provides innovative solutions for your business needs — serviced offices, meeting rooms, co-working spaces, virtual offices, private offices and flexi desks in Business Bay, Dubai.",
};

export default function BusinessCenterPage() {
  return (
    <>
      <LightHero
        eyebrow="Business Centre in Dubai"
        accent="bronze"
        title={
          <>
            <span className="bronze-text" style={{ fontSize: "1.35em" }}>
              Royal Class
            </span>
            <br />
            Business Center
          </>
        }
        description="Premium Office Spaces for Growing Businesses"
        image={IMAGES.aboutHero}
        imageAlt="Royal Class Business Center"
        ctas={[
          {
            href: "/contact#enquiry",
            label: "Make an Enquiry",
            arrow: true,
          },
          {
            href: "/business-center",
            label: "Explore Offices",
            variant: "outline",
          },
        ]}
      />

      <section className="bg-[#f4f1ea] pb-16 pt-28 md:py-20 md:pt-36">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="divider-bronze" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                One of the Best Business Center in Dubai
              </span>
              <span className="divider-bronze" />
            </div>
            <p className="text-lg leading-[1.9] text-[#5c564e] md:text-xl">
              At <span className="bronze-text font-medium">Royal Class</span>{" "}
              Business Center, we provide innovative solutions for your business
              needs. Whether you&apos;re an entrepreneur looking for a
              professional workspace, a growing company in need of flexible
              office options, or a remote team seeking a virtual office
              presence, we&apos;ve got you covered. Our state-of-the-art
              facilities, top-notch amenities, and a supportive community create
              the perfect environment for your business to thrive.
            </p>
            <p className="mt-6 text-lg leading-[1.9] text-[#5c564e] md:text-xl">
              Explore our website to discover our range of services, modern
              office spaces, and customizable plans.
            </p>
            <p className="mt-6 text-lg leading-[1.9] text-[#5c564e] md:text-xl">
              Join the Royal Class of business excellence with us and embark on
              a journey of productivity, growth, and success. Your future begins
              here at Royal Class Business Center!
            </p>
          </Reveal>
        </div>
      </section>

      <StatCounters stats={BC_STATS} />

      <section className="bg-[#f4f1ea] py-16 md:py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Offices"
            title="Find the Offer"
            highlight="That Suits You"
            light
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BC_OFFERS.map((offer, i) => (
              <Reveal key={offer.name} delay={i * 80} className="h-full">
              <article
                className="group card-light flex h-full flex-col overflow-hidden"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4 / 3", background: "#E8E2D6" }}
                >
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      filter: offer.comingSoon
                        ? "brightness(0.55) grayscale(0.4)"
                        : "brightness(0.95)",
                    }}
                  />
                  {offer.comingSoon ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9c7a3e]">
                        Coming Soon
                      </span>
                    </div>
                  ) : null}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(244,241,234,0.6) 100%)",
                    }}
                  />
                </div>
                <div className="flex flex-grow flex-col p-8">
                  <h3 className="font-cairo mb-3 text-xl font-semibold text-[#1a1815]">
                    {offer.name}
                  </h3>
                  <p className="flex-grow text-sm leading-[1.8] text-[#5c564e]">
                    {offer.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 border-b pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover:border-[#9C7A3E] group-hover:text-[#9C7A3E]"
                    style={{
                      color: "#9C7A3E",
                      borderColor: "rgba(156,122,62,0.3)",
                      width: "fit-content",
                    }}
                  >
                    Inquiry
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
                  </Link>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d6] py-16 md:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="divider-bronze" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                    What we offer
                  </span>
                </div>
                <h2 className="font-cairo mb-8 text-4xl font-normal leading-tight text-[#1a1815] md:text-5xl">
                  Premium Spaces,
                  <br />
                  <span className="bronze-text font-medium">Fully Serviced</span>
                </h2>
                <p className="mb-6 text-base leading-[1.9] text-[#5c564e] md:text-lg">
                  Office spaces with different range of size, styles and
                  furniture. Floor-to-ceiling windows with stunning views of the
                  surrounding Green Community.
                </p>
                <p className="text-base leading-[1.9] text-[#5c564e] md:text-lg">
                  The office in our Business Center will be fully furnished and
                  serviced, all bills are included with package that we offer.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <AmenitiesOrbit />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ea] py-16 md:py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why Choose Us?"
            title="Choose us as your"
            highlight="business center in Dubai"
            description="Choose us as your business center in Dubai for these compelling reasons:"
            light
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BC_REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80} className="h-full">
                <article className="card-light h-full p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    <span
                      className="font-cairo flex-shrink-0 text-3xl font-bold"
                      style={{ color: "rgba(156,122,62,0.35)" }}
                    >
                      {reason.icon}
                    </span>
                    <div>
                      <h3 className="font-cairo mb-3 text-lg font-semibold text-[#9c7a3e]">
                        {reason.title}
                      </h3>
                      <p className="text-sm leading-[1.8] text-[#5c564e]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p
              className="font-cairo mx-auto mt-10 max-w-3xl text-center text-xl md:text-2xl"
              style={{ color: "#1A1815", lineHeight: 1.6 }}
            >
              Elevate your business to new heights with the{" "}
              <span className="bronze-text font-medium">
                Royal Class Business Center
              </span>
              , where success and sophistication converge.
            </p>
          </Reveal>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
