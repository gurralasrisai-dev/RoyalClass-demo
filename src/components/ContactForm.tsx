"use client";

import { FormEvent, useState } from "react";
import { ENQUIRY_TOPICS } from "@/lib/site";

type Props = {
  variant?: "light" | "dark";
  title?: string;
  subtitle?: string;
  defaultService?: string;
};

export function ContactForm({
  variant = "light",
  title = "Make an Enquiry",
  subtitle = "Our team will respond within 24 hours.",
  defaultService = "",
}: Props) {
  const [sent, setSent] = useState(false);
  const isLight = variant === "light";
  const titleColor = isLight ? "#1A1815" : "#F4F1EA";
  const mutedColor = isLight ? "#5C564E" : "#B9B4A9";
  const accent = isLight ? "#9C7A3E" : "#C6A15B";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="py-16 text-center">
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ border: `1px solid ${accent}` }}
        >
          <CheckIcon color={accent} />
        </div>
        <h3
          className="font-display mb-3 text-3xl font-light"
          style={{ color: titleColor }}
        >
          Thank You
        </h3>
        <p style={{ color: mutedColor }}>
          Our team will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className={isLight ? "form-light" : ""}>
      {title ? (
        <h3
          className="font-display mb-2 text-2xl font-light md:text-3xl"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
      ) : null}
      {subtitle ? (
        <p className="mb-8 text-sm" style={{ color: mutedColor }}>
          {subtitle}
        </p>
      ) : null}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Name *" name="name" placeholder="Your name" required muted={mutedColor} />
          <Field label="Company" name="company" placeholder="Company name" muted={mutedColor} />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field
            label="Email *"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            muted={mutedColor}
          />
          <Field
            label="Phone"
            name="phone"
            placeholder="+971 XX XXX XXXX"
            muted={mutedColor}
          />
        </div>

        <label className="block">
          <span
            className="mb-2 block text-xs uppercase tracking-widest"
            style={{ color: mutedColor }}
          >
            I&apos;m enquiring about
          </span>
          <select
            name="service"
            defaultValue={defaultService}
            className="input-minimal"
          >
            <option value="">Select a topic</option>
            {ENQUIRY_TOPICS.map((topic) => (
              <option key={topic} value={topic.toLowerCase().replace(/\s+/g, "-")}>
                {topic}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span
            className="mb-2 block text-xs uppercase tracking-widest"
            style={{ color: mutedColor }}
          >
            Message
          </span>
          <textarea
            name="message"
            rows={3}
            placeholder="How can we help?"
            className="input-minimal"
            style={{ resize: "none" }}
          />
        </label>

        <button type="submit" className="btn-gold w-full">
          Submit Enquiry <ArrowRight />
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
  muted,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  muted: string;
}) {
  return (
    <label className="block">
      <span
        className="mb-2 block text-xs uppercase tracking-widest"
        style={{ color: muted }}
      >
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="input-minimal"
      />
    </label>
  );
}

function ArrowRight() {
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

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
