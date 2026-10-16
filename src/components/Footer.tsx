import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: "#F4F1EA",
        borderTop: "1px solid rgba(198,161,91,0.2)",
      }}
    >
      <div className="container-wide py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={160}
              height={40}
              className="mb-6 h-10 w-auto object-contain"
            />
            <p className="max-w-[300px] text-sm leading-[1.7] text-[#5c564e]">
              A Dubai-based holding company operating business centres,
              commercial real estate and long-term business partnerships.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#c6a15b]">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="footer-link text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/business-center" className="footer-link text-sm">
                  Business Centres
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#c6a15b]">
              Businesses
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/business-center" className="footer-link text-sm">
                  Business Centres
                </Link>
              </li>
              <li>
                <Link href="/properties" className="footer-link text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/investments" className="footer-link text-sm">
                  Investments
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#c6a15b]">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="footer-link inline-flex"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="footer-link inline-flex"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center justify-between gap-4 pt-5 md:flex-row"
          style={{ borderTop: "1px solid rgba(198,161,91,0.15)" }}
        >
          <p className="text-xs text-[#8a857c]">
            © {new Date().getFullYear()} Royal Class Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
