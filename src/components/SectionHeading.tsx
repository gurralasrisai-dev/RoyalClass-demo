import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  /** light = cream-page Fi variant (bronze divider + bronze highlight) */
  light?: boolean;
  delay?: number;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  light = true,
  delay = 0,
}: Props) {
  const isCenter = align === "center";
  const divider = light ? "divider-bronze" : "divider-gold";
  const highlightClass = light
    ? "bronze-text font-medium"
    : "gold-gradient font-medium";

  return (
    <Reveal
      delay={delay}
      className={`mb-10 ${isCenter ? "mx-auto text-center" : ""}`}
      style={{
        maxWidth: isCenter ? 680 : undefined,
      }}
    >
      {eyebrow ? (
        <div
          className={`mb-5 flex items-center gap-3 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className={divider} />
          <span className="text-xs uppercase tracking-widest text-[#9c7a3e]">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="font-cairo text-4xl font-normal leading-tight text-[#1a1815] md:text-5xl">
        {title}
        {highlight ? (
          <span className={highlightClass}> {highlight}</span>
        ) : null}
      </h2>
      {description ? (
        <p
          className="mt-5 text-base text-[#5c564e] md:text-lg"
          style={{ lineHeight: 1.7 }}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
