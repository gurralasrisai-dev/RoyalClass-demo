import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { LightHero } from "@/components/LightHero";
import { LocationSection } from "@/components/LocationSection";
import { Reveal } from "@/components/Reveal";
import { CONTACT_FAQS, IMAGES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Royal Class Group | Real Estate & Business Investment Dubai",
  description:
    "Contact Royal Class Group in Dubai for commercial properties, residential properties, business centre solutions, and strategic investments.",
};

export default function ContactPage() {
  return (
    <>
      <LightHero
        eyebrow="Contact"
        title="Let's Start the Conversation."
        description="Whether you're exploring property opportunities, looking for premium business spaces or seeking a strategic investment partner, our team is ready to help. Reach out and let's discuss how Royal Class can support your next opportunity."
        image={IMAGES.contactHero}
        imageAlt="Royal Class Contact"
        centered={false}
        ctas={[
          { href: "#enquiry", label: "Send an Enquiry" },
          {
            href: `tel:${SITE.phone}`,
            label: "Call Us",
            variant: "outline",
          },
        ]}
      />

      <section id="enquiry" className="bg-[#f4f1ea] py-20 md:py-28">
        <div className="container-wide">
          <Reveal className="mb-16 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="divider-bronze" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                Send an Enquiry
              </span>
            </div>
            <h2
              className="font-cairo mb-6 font-bold leading-[1.1] text-[#1a1815]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Send Us a Message
            </h2>
            <p className="text-base leading-[1.8] text-[#5c564e] md:text-lg">
              Complete the form below and our team will get back to you as soon
              as possible.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              {[
                {
                  icon: <MapPinIcon />,
                  label: "Office Address",
                  body: (
                    <p className="text-sm leading-relaxed text-[#1a1815]">
                      {SITE.address}
                    </p>
                  ),
                },
                {
                  icon: <PhoneIcon />,
                  label: "Phone",
                  body: (
                    <>
                      <a
                        href={`tel:${SITE.phone}`}
                        className="footer-link mb-1 block text-sm"
                      >
                        {SITE.phoneDisplay}
                      </a>
                      <p className="text-xs leading-relaxed text-[#8a857c]">
                        {SITE.hours}
                      </p>
                    </>
                  ),
                },
                {
                  icon: <MailIcon />,
                  label: "Email",
                  body: (
                    <>
                      <a
                        href={`mailto:${SITE.emails.info}`}
                        className="footer-link mb-1 block text-sm"
                      >
                        {SITE.emails.info}
                      </a>
                      <a
                        href={`mailto:${SITE.emails.bc}`}
                        className="footer-link mb-1 block text-sm"
                      >
                        {SITE.emails.bc}
                      </a>
                      <a
                        href={`mailto:${SITE.emails.invest}`}
                        className="footer-link block text-sm"
                      >
                        {SITE.emails.invest}
                      </a>
                    </>
                  ),
                },
                {
                  icon: <ClockIcon />,
                  label: "Response Time",
                  body: (
                    <p className="text-sm leading-relaxed text-[#1a1815]">
                      Our team typically responds within 24 hours.
                    </p>
                  ),
                },
              ].map((row, i) => (
                <Reveal key={row.label} delay={i * 80}>
                  <ContactInfoRow icon={row.icon} label={row.label}>
                    {row.body}
                  </ContactInfoRow>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div
                className="rounded p-8 md:p-10"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(26,24,21,0.08)",
                  borderRadius: 4,
                }}
              >
                <ContactForm variant="light" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LocationSection />

      <section className="bg-[#f4f1ea] py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="mb-6 flex items-center gap-3">
                  <span className="divider-bronze" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                    FAQ
                  </span>
                </div>
                <h2
                  className="font-cairo mb-6 font-bold leading-[1.1] text-[#1a1815]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-base leading-[1.8] text-[#5c564e]">
                  Find answers to common questions about properties, business
                  centres and strategic investments at Royal Class.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <FaqList items={CONTACT_FAQS} variant="light" />
            </Reveal>
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
        <div className="container-wide relative z-10 py-16 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <span className="divider-bronze" />
                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                  Partner With Us
                </span>
                <span className="divider-bronze" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-cairo mb-8 font-bold leading-[1.1] text-[#1a1815]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Building Relationships That Last.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mb-12 max-w-2xl text-base leading-[1.8] text-[#5c564e] md:text-lg">
                Every successful partnership starts with a conversation. Whether
                you&apos;re looking for premium property solutions or strategic
                business investment, Royal Class is ready to help you take the
                next step.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/properties" className="btn-bronze">
                  Explore Our Businesses
                </Link>
                <Link href="/investments" className="btn-outline-dark">
                  View Investments
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <Link
                href="/business-center"
                className="group mt-10 inline-flex items-center gap-3 transition-all"
              >
                <span
                  className="border-b pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover:border-[#9C7A3E] group-hover:text-[#9C7A3E]"
                  style={{
                    color: "#9C7A3E",
                    borderColor: "rgba(156,122,62,0.4)",
                  }}
                >
                  Discover Our Business Centres
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  stroke="#9C7A3E"
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

function ContactInfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm"
        style={{
          border: "1px solid rgba(156,122,62,0.25)",
          background: "#FFFFFF",
        }}
      >
        {icon}
      </div>
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#8a857c]">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function iconProps(size = 18) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true,
    stroke: "#9C7A3E",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function MapPinIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps()}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
