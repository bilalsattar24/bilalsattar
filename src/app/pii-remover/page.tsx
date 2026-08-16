import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "./SiteChrome";
import {
  PII_REMOVER_CHROME_STORE_URL,
  PII_REMOVER_GITHUB_ISSUES,
  PII_REMOVER_PRIVACY_URL,
} from "./links";

const canonical = "https://bilalsattar.com/pii-remover";

export const metadata: Metadata = {
  title: "PII Remover — Redact before you paste",
  description:
    "Free Chrome extension that redacts emails, phones, names, and other PII from pasted text with on-device Chrome AI. No cloud API.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical,
  },
  openGraph: {
    title: "PII Remover — Redact before you paste",
    description:
      "Free Chrome extension that redacts emails, phones, names, and other PII from pasted text with on-device Chrome AI. No cloud API.",
    url: canonical,
    type: "website",
  },
};

const highlights = [
  {
    title: "On-device AI",
    body: "When Chrome’s Prompt API is available, redaction uses Gemini Nano (or the current on-device model bundled by Chrome). Prompts stay in the browser.",
  },
  {
    title: "Pattern fallback",
    body: "If the model is missing or still downloading, local regular expressions still catch common identifiers such as email, phone, Social Security numbers, payment-card numbers, and IPv4 addresses.",
  },
  {
    title: "No developer backend",
    body: "Pasted text is processed in memory on your device. There is no cloud API, account, or paid key.",
  },
];

const steps = [
  {
    step: "01",
    title: "Install on Chrome 138+",
    body: "Add the extension on desktop Chrome. Open the popup once so Chrome can download the on-device model in the background if needed.",
  },
  {
    step: "02",
    title: "Paste on the sites you choose",
    body: "Automatic paste interception defaults to common AI chat sites. Switch to all sites or a blocklist in Settings. Pause any site from the popup.",
  },
  {
    step: "03",
    title: "Sanitize in the popup when you want a preview",
    body: "Paste into the sanitizer, copy the redacted result, or right-click a field and choose “Paste without redacting” for a one-time original paste.",
  },
];

export default function PiiRemoverLanding() {
  return (
    <SiteChrome
      headerCta={{
        href: PII_REMOVER_CHROME_STORE_URL,
        label: "Install on Chrome",
        external: true,
      }}
      footerLinks={[
        { href: PII_REMOVER_PRIVACY_URL, label: "Privacy" },
        {
          href: PII_REMOVER_GITHUB_ISSUES,
          label: "GitHub",
          external: true,
        },
      ]}>
      <section className="reveal reveal-1 relative overflow-hidden rounded-[2rem] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,251,245,0.9),rgba(237,226,208,0.9))] px-6 py-10 shadow-[0_30px_120px_rgba(90,67,38,0.12)] lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-[rgba(124,98,71,0.12)] blur-3xl animate-float" />
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-stone-50/80 px-3 py-2">
              <Image
                src="/pii-remover/icon128.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              Chrome extension
            </span>
            <span className="rounded-full border border-stone-900/10 bg-stone-50/80 px-3 py-2">
              Free
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-stone-500">
              Redact before you paste
            </p>
            <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-stone-950">
              PII Remover
            </h1>
            <p className="max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
              Redact emails, phones, names, and other personal details from
              text before it lands in a chat box or form. On-device Chrome AI,
              with a pattern-matching fallback. Nothing is sent to a developer
              server.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PII_REMOVER_CHROME_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-stone-50 transition duration-500 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[0_16px_40px_rgba(31,26,23,0.2)]">
              Add to Chrome
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href={PII_REMOVER_PRIVACY_URL}
              className="inline-flex items-center gap-2 rounded-full border border-stone-900/15 px-6 py-3 text-sm font-medium text-stone-800 transition duration-500 hover:-translate-y-0.5 hover:border-stone-900/30 hover:bg-stone-50/70">
              Privacy policy
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-stone-900/10 bg-stone-950/5 shadow-[0_20px_60px_rgba(90,67,38,0.16)] lg:mt-0">
          <Image
            src="/pii-remover/screenshot-sanitize.jpg"
            alt="PII Remover popup sanitizing a phone number and name into placeholders"
            width={1280}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className={`reveal reveal-${index + 2} rounded-[1.5rem] border border-stone-900/10 bg-[rgba(250,246,239,0.88)] p-6`}>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-700">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="reveal reveal-3 mt-8 grid gap-8 rounded-[2rem] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,243,0.95),rgba(232,220,199,0.92))] px-6 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
            How it works
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em] text-stone-950">
            Paste with a safety net.
          </h2>
          <p className="max-w-md text-base leading-7 text-stone-700">
            By default, interception is limited to common AI chat sites. The
            toolbar icon shows a green check when this site is on and a red X
            when it is paused.
          </p>
        </div>
        <ol className="grid gap-5">
          {steps.map((item) => (
            <li
              key={item.step}
              className="grid grid-cols-[auto_1fr] gap-4 border-b border-stone-900/10 pb-5 last:border-b-0 last:pb-0">
              <span className="text-sm font-semibold tracking-[0.2em] text-stone-500">
                {item.step}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-[1.75rem] border border-stone-900/10 bg-[rgba(250,246,239,0.88)]">
          <Image
            src="/pii-remover/screenshot-sanitize.jpg"
            alt="Sanitize tab with input text and redacted output"
            width={1280}
            height={800}
            className="h-auto w-full"
          />
          <figcaption className="px-6 py-4 text-sm text-stone-600">
            Sanitize in the popup, then copy. Placeholders look like [redacted
            phone number]; you can change that wording in Settings.
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-[1.75rem] border border-stone-900/10 bg-[rgba(250,246,239,0.88)]">
          <Image
            src="/pii-remover/screenshot-settings.jpg"
            alt="Settings tab with site allowlist and replacement text"
            width={1280}
            height={800}
            className="h-auto w-full"
          />
          <figcaption className="px-6 py-4 text-sm text-stone-600">
            Allowlist, blocklist, or all sites. Optional clipboard prefetch is
            off by default.
          </figcaption>
        </figure>
      </section>

      <section className="reveal reveal-4 mt-8 grid gap-6 rounded-[2rem] border border-stone-900/10 bg-stone-950 px-6 py-10 text-stone-50 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
            Requirements
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold tracking-[-0.04em]">
            Chrome 138 or newer on desktop.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-stone-300">
            On-device AI needs substantial free disk and either a GPU with more
            than 4 GB of VRAM or a CPU with 16 GB RAM and 4+ cores.
            Pattern-only mode still works when the model cannot load.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            href={PII_REMOVER_CHROME_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-50 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-white">
            Add to Chrome
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={PII_REMOVER_GITHUB_ISSUES}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-stone-50/20 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-50/40">
            Report an issue
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}
