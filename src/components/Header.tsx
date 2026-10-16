"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SITE } from "@/lib/site";

const PROPERTY_LINKS = [
  { label: "Business Centre", path: "/business-center" },
  { label: "Commercial Properties", path: "/properties" },
  { label: "Residential Properties", path: "/properties" },
  { label: "Off-Plan Developments", path: "/properties" },
];

const INVESTMENT_LINKS = [
  { label: "Venture Capital", path: "/investments" },
  { label: "Artificial Intelligence", path: "/investments" },
  { label: "Technology", path: "/investments" },
  { label: "Real Estate Ventures", path: "/investments" },
];

const DESKTOP_MENU = [
  { label: "Contact Us", path: "/contact" },
  { label: "About", path: "/about" },
  { label: "Business Center", path: "/business-center" },
  { label: "Properties", path: "/properties" },
  { label: "Investments", path: "/investments" },
];

const MOBILE_SECONDARY = [
  { label: "Contact Us", path: "/contact" },
  { label: "Our Vision", path: "/about" },
  { label: "Investment Philosophy", path: "/investments" },
  { label: "Careers", path: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [accordion, setAccordion] = useState<"properties" | "investments" | null>(
    null,
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    setDesktopOpen(false);
    setMobileOpen(false);
    setAccordion(null);
    setHeaderHidden(false);
  }, [pathname]);

  useEffect(() => {
    const open = desktopOpen || mobileOpen;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [desktopOpen, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) setAccordion(null);
  }, [mobileOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (desktopOpen || mobileOpen) {
        setHeaderHidden(false);
        lastScrollY.current = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 24) {
        setHeaderHidden(false);
      } else if (delta > 6) {
        setHeaderHidden(true);
      } else if (delta < -6) {
        setHeaderHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [desktopOpen, mobileOpen]);

  const propertiesActive =
    pathname === "/properties" || pathname === "/business-center";
  const investmentsActive = pathname === "/investments";

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50"
        style={{
          background: "rgba(0, 0, 0, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(198,161,91,0.2)",
          transform: headerHidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        <div
          className="relative flex items-center justify-between px-5"
          style={{ height: 96 }}
        >
          <div className="hidden items-center gap-8 lg:flex">
            <MenuIconButton
              open={desktopOpen}
              onClick={() => setDesktopOpen((v) => !v)}
            />
            <Link
              href="/properties"
              className={`nav-link nav-link-dark ${propertiesActive ? "active" : ""}`}
            >
              Properties
            </Link>
          </div>

          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <Link href="/">
              <Image
                src={SITE.logo}
                alt={SITE.name}
                width={245}
                height={140}
                className="h-[140px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/investments"
              className={`nav-link nav-link-dark ${investmentsActive ? "active" : ""}`}
            >
              Investments
            </Link>
            <MenuIconButton
              open={desktopOpen}
              onClick={() => setDesktopOpen((v) => !v)}
            />
          </div>

          <div className="flex flex-1 items-center lg:hidden">
            <Link href="/">
              <Image
                src={SITE.logo}
                alt={SITE.name}
                width={185}
                height={112}
                className="h-[112px] w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <div className="flex justify-end lg:hidden">
            <MenuIconButton
              open={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            />
          </div>
        </div>
      </nav>

      {/* Desktop fullscreen menu */}
      {desktopOpen ? (
        <div
          className="fixed inset-0 z-[60] hidden flex-col lg:flex"
          style={{ background: "#0E0D0B" }}
        >
          <div
            className="container-wide flex items-center justify-end"
            style={{ height: 96 }}
          >
            <MenuIconButton open onClick={() => setDesktopOpen(false)} />
          </div>

          <div className="container-wide flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center gap-12 text-center">
              {DESKTOP_MENU.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setDesktopOpen(false)}
                  className="fullscreen-nav-link animate-fade-up"
                  style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="pb-14">
            <SocialRow className="container-wide justify-center gap-10" />
          </div>
        </div>
      ) : null}

      {/* Mobile accordion menu */}
      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto lg:hidden"
          style={{ background: "#0E0D0B" }}
        >
          <div
            className="container-wide flex items-center justify-end"
            style={{ height: 96 }}
          >
            <MenuIconButton open onClick={() => setMobileOpen(false)} />
          </div>

          <div className="container-wide flex flex-col py-6">
            <AccordionRow
              label="Properties"
              open={accordion === "properties"}
              onToggle={() =>
                setAccordion((v) => (v === "properties" ? null : "properties"))
              }
            />
            {accordion === "properties" ? (
              <div className="flex flex-col py-2 pl-4">
                {PROPERTY_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="mobile-accordion-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            <AccordionRow
              label="Investments"
              open={accordion === "investments"}
              onToggle={() =>
                setAccordion((v) =>
                  v === "investments" ? null : "investments",
                )
              }
            />
            {accordion === "investments" ? (
              <div className="flex flex-col py-2 pl-4">
                {INVESTMENT_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="mobile-accordion-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {MOBILE_SECONDARY.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className="nav-link nav-link-dark block py-4"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <SocialRow className="container-wide gap-8 pb-12" />
        </div>
      ) : null}
    </>
  );
}

function MenuIconButton({
  open = false,
  onClick,
}: {
  open?: boolean;
  onClick: () => void;
}) {
  const bar: CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    height: "1.5px",
    background: "currentColor",
    transition:
      "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
    transformOrigin: "center",
  };

  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
      className="inline-flex items-center justify-center p-0 text-[#B79850] transition-colors duration-300 hover:text-white"
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      <span
        aria-hidden
        className="relative inline-block"
        style={{ width: 20, height: 14, color: "currentColor" }}
      >
        <span
          style={{
            ...bar,
            top: 0,
            transform: open ? "translateY(6px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            ...bar,
            top: 6,
            opacity: open ? 0 : 1,
            transform: open ? "translateY(0)" : "none",
          }}
        />
        <span
          style={{
            ...bar,
            top: 12,
            transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
          }}
        />
      </span>
    </button>
  );
}

function AccordionRow({
  label,
  open,
  onToggle,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="nav-link nav-link-dark flex w-full items-center justify-between py-4"
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {label}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        style={{
          transition: "transform 0.3s ease",
          transform: open ? "rotate(180deg)" : "none",
        }}
      >
        <path
          d="m6 9 6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <a href="#" aria-label="LinkedIn" className="overlay-social-link">
        <SocialIcon kind="linkedin" />
      </a>
      <a href="#" aria-label="Instagram" className="overlay-social-link">
        <SocialIcon kind="instagram" />
      </a>
      <a
        href={`mailto:${SITE.emails.info}`}
        className="overlay-social-link"
      >
        <SocialIcon kind="mail" /> Email
      </a>
      <span className="overlay-social-link">
        <SocialIcon kind="pin" /> Dubai, UAE
      </span>
    </div>
  );
}

function SocialIcon({
  kind,
}: {
  kind: "linkedin" | "instagram" | "mail" | "pin";
}) {
  if (kind === "linkedin") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    );
  }
  if (kind === "instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "mail") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
