import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CONTACT_LOCATION_AMENITIES, IMAGES } from "@/lib/site";

export function LocationSection() {
  return (
    <section className="bg-[#e8e2d6] py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4 / 3", borderRadius: 4 }}
            >
              <Image
                src={IMAGES.contactLocation}
                alt="Dubai Investment Park location"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="divider-bronze" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#9c7a3e]">
                  Location
                </span>
              </div>
              <h2 className="font-cairo mb-6 text-4xl font-normal leading-tight text-[#1a1815] md:text-5xl">
                Our Premium
                <span className="bronze-text font-medium"> Location</span>
              </h2>
              <p className="mb-10 text-lg leading-[1.8] text-[#5c564e]">
                The ideal spot for your Business in the most dynamic area in
                Dubai Investment Park
              </p>
              <div className="space-y-5">
                {CONTACT_LOCATION_AMENITIES.map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm"
                      style={{
                        border: "1px solid rgba(156,122,62,0.25)",
                        background: "#FFFFFF",
                      }}
                    >
                      <LocationAmenityIcon name={item.icon} />
                    </div>
                    <p className="text-base text-[#1a1815]">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-3">
                <MapPinIcon />
                <p className="text-sm text-[#5c564e]">
                  Arjumand Offices and Retail, Dubai Investment Park First,
                  Green Community Village, Dubai
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
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

function LocationAmenityIcon({
  name,
}: {
  name: "bus" | "landmark" | "coffee";
}) {
  if (name === "bus") {
    return (
      <svg {...iconProps()}>
        <path d="M8 6v6" />
        <path d="M16 6v6" />
        <path d="M2 12h20" />
        <path d="M7 18h10" />
        <path d="M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="M6 18v2" />
        <path d="M18 18v2" />
      </svg>
    );
  }
  if (name === "landmark") {
    return (
      <svg {...iconProps()}>
        <path d="M10 18v-7" />
        <path d="M11.12 2.28A2 2 0 0 1 12.8 2c.5 0 1 .2 1.4.6L20 8.2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.2l5.8-5.6a2 2 0 0 1 1.32-.32Z" />
        <path d="M14 18v-7" />
        <path d="M2 20h20" />
      </svg>
    );
  }
  return (
    <svg {...iconProps()}>
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z" />
      <path d="M6 2v2" />
    </svg>
  );
}
