import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InvestmentVerticals } from "@/components/InvestmentVerticals";
import { LightHero } from "@/components/LightHero";
import { Reveal } from "@/components/Reveal";
import {
  INVESTMENT_PROCESS,
  PARTNER_REASONS,
  IMAGES,
  SITE,
} from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Strategic Investments & Venture Capital in Dubai & UAE | Royal Class",
  description:
    "Royal Class is a business investment company in UAE providing venture capital in Dubai, strategic investments in AI, technology and real estate ventures.",
};

export default function InvestmentsPage() {
  return (
    <>
      <LightHero
        eyebrow="Investments"
        accent="bronze"
        fullHeight
        centered={false}
        title={
          <>
            Where Ambition Finds
            <br />
            Its Next Opportunity.
          </>
        }
        description="Royal Class partners with founders, entrepreneurs and growing businesses by providing strategic investment, industry expertise and long-term collaboration. We invest in businesses with strong leadership, innovative ideas and sustainable growth potential across multiple industries."
        image={IMAGES.investmentsHero}
        imageAlt="Royal Class Investments"
        ctas={[
          {
            href: "/contact#enquiry",
            label: "Speak With Our Investment Team",
          },
        ]}
      />

      <section className="bg-[#f4f1ea] py-16 md:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="divider-bronze" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                Strategic Investments
              </span>
            </div>
            <h2
              className="font-cairo mb-8 font-bold leading-[1.1] text-[#1a1815]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Investing Beyond Capital.
            </h2>
            <p className="mb-5 text-base leading-[1.8] text-[#5c564e] md:text-lg">
              At Royal Class, we believe successful businesses need more than
              funding. They need the right strategic partner.
            </p>
            <p className="mb-5 text-base leading-[1.8] text-[#5c564e] md:text-lg">
              Our investment approach combines capital, industry knowledge and
              long-term collaboration to help businesses scale sustainably. We
              work closely with founders and leadership teams, supporting
              innovative companies that demonstrate clear vision, strong
              execution and measurable growth potential.
            </p>
            <p className="text-base leading-[1.8] text-[#5c564e] md:text-lg">
              Whether supporting an early-stage venture or partnering with an
              established business, our objective remains the same—creating
              long-term value through meaningful partnerships.
            </p>
          </Reveal>
        </div>
      </section>

      <InvestmentVerticals />

      <section className="bg-[#f4f1ea] py-16 md:py-24">
        <div className="container-wide">
          <Reveal className="mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="divider-bronze" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                Why Partner With Us
              </span>
              <span className="divider-bronze" />
            </div>
            <h2
              className="font-cairo mx-auto max-w-2xl font-bold leading-[1.1] text-[#1a1815]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Why Partner With Royal Class
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PARTNER_REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80} className="h-full">
                <article className="card-light h-full p-8 md:p-10">
                  <div className="mb-5">
                    <PartnerIcon name={reason.icon} />
                  </div>
                  <h3 className="font-cairo mb-3 text-base font-semibold text-[#1a1815]">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-[#5c564e]">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e2d6] py-16 md:py-24">
        <div className="container-wide">
          <Reveal className="mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="divider-bronze" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                Our Approach
              </span>
              <span className="divider-bronze" />
            </div>
            <h2
              className="font-cairo mx-auto max-w-2xl font-bold leading-[1.1] text-[#1a1815]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Our Investment Process
            </h2>
          </Reveal>
          <div className="relative">
            <div
              className="absolute left-0 right-0 top-12 hidden lg:block"
              style={{ height: 1, background: "rgba(156,122,62,0.2)" }}
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {INVESTMENT_PROCESS.map((step, i) => (
                <Reveal
                  key={step.number}
                  delay={i * 100}
                  className="relative flex flex-col items-start"
                >
                  <div
                    className="relative z-10 mb-6 flex items-center justify-center"
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      background: "#F4F1EA",
                      border: "1px solid rgba(156,122,62,0.3)",
                    }}
                  >
                    <span
                      className="font-cairo bronze-text font-bold"
                      style={{ fontSize: "1.75rem" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-cairo mb-3 text-lg font-semibold text-[#1a1815]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-[#5c564e]">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
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
                  Let&apos;s Talk
                </span>
                <span className="divider-gold" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-cairo mb-6 font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1815]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Let&apos;s Build Something Meaningful Together.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="mb-12 text-base leading-[1.8] text-[#5c564e] md:text-lg"
                style={{ maxWidth: 680 }}
              >
                If you&apos;re building an innovative business, scaling an
                existing company or developing the next big idea, Royal Class is
                ready to explore opportunities that create long-term value.
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
                  Present Your Business
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

function PartnerIcon({
  name,
}: {
  name: (typeof PARTNER_REASONS)[number]["icon"];
}) {
  const props = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true,
    stroke: "#9C7A3E",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
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
    case "eye":
      return (
        <svg {...props}>
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
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
