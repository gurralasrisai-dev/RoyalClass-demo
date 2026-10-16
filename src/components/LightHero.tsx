import Image from "next/image";
import Link from "next/link";

type Cta = {
  href: string;
  label: string;
  variant?: "bronze" | "outline";
  arrow?: boolean;
};

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  imageAlt: string;
  ctas?: Cta[];
  centered?: boolean;
  accent?: "gold" | "bronze";
  fullHeight?: boolean;
};

export function LightHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctas = [],
  centered = true,
  accent = "bronze",
  fullHeight = false,
}: Props) {
  const isGold = accent === "gold";
  const dividerClass = isGold ? "divider-gold" : "divider-bronze";
  const eyebrowColor = isGold ? "#C6A15B" : "#9C7A3E";

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-[#f4f1ea] ${
        fullHeight ? "min-h-screen" : "min-h-[90vh]"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
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
      <div
        className={`container-wide relative z-10 py-32 md:py-40 ${
          centered ? "flex flex-col items-center text-center" : ""
        }`}
      >
        <div className={centered ? "max-w-3xl" : "max-w-4xl"}>
          <div
            className={`mb-8 flex items-center gap-3 ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className={dividerClass} />
            <span
              className={`font-medium uppercase tracking-[0.3em] ${
                centered ? "text-sm" : "text-[11px]"
              }`}
              style={{ color: eyebrowColor }}
            >
              {eyebrow}
            </span>
            {centered ? <span className={dividerClass} /> : null}
          </div>
          <h1
            className="animate-fade-up font-cairo mb-8 font-bold leading-[1.05] tracking-[-0.02em] text-[#1a1815]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`animate-fade-up delay-100 mb-12 text-base leading-[1.8] text-[#5c564e] md:text-lg ${
                centered ? "mx-auto max-w-2xl" : "max-w-[640px]"
              }`}
            >
              {description}
            </p>
          ) : null}
          {ctas.length ? (
            <div
              className={`animate-fade-up delay-200 flex flex-col gap-4 sm:flex-row ${
                centered ? "justify-center" : ""
              }`}
            >
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === "outline" ? "btn-outline-dark" : "btn-bronze"
                  }
                >
                  {cta.label}
                  {cta.arrow ? <CtaArrow /> : null}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function CtaArrow() {
  return (
    <svg
      width="16"
      height="16"
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
