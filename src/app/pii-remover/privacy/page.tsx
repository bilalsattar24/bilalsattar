import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import portfolio from "../../data/portfolio-data.json";

const canonical = "https://bilalsattar.com/pii-remover/privacy";
const githubIssues = "https://github.com/bilalsattar24/pii-remover/issues";

export const metadata: Metadata = {
  title: "Privacy policy — PII Remover",
  description:
    "Privacy policy for the PII Remover Chrome extension. On-device redaction; no developer backend.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Privacy policy — PII Remover",
    description:
      "Privacy policy for the PII Remover Chrome extension. On-device redaction; no developer backend.",
    url: canonical,
    type: "website",
  },
};

const storageItems = [
  "Settings you choose (auto-sanitize on/off, site allowlist/blocklist, paused sites, onboarding flag, optional clipboard prefetch, replacement-text style)",
  "A local cache of whether Chrome’s on-device model is available or downloading",
];

const permissions = [
  {
    name: "storage",
    detail: "save settings",
  },
  {
    name: "tabs",
    detail:
      "read the current tab’s hostname for the toolbar icon and pause-site control",
  },
  {
    name: "offscreen",
    detail: "hidden extension page used only for optional clipboard reads",
  },
  {
    name: "contextMenus",
    detail: "“Paste without redacting” on text fields",
  },
  {
    name: "clipboardRead (optional)",
    detail:
      "only if you enable “Pre-clean system clipboard.” Then, when Chrome is focused, the extension may read the current clipboard text in memory to pre-redact it. This is off by default and can be revoked.",
  },
];

export default function PiiRemoverPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(218,165,32,0.18),_transparent_22%),radial-gradient(circle_at_80%_20%,_rgba(119,89,54,0.14),_transparent_20%),linear-gradient(180deg,_#f7f1e8_0%,_#efe5d5_42%,_#ded1bd_100%)] text-stone-950 selection:bg-stone-900 selection:text-stone-50">
      <div className="mx-auto max-w-[92rem] px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-50 mb-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-stone-900/10 bg-[rgba(250,246,239,0.82)] px-4 py-3 shadow-[0_20px_60px_rgba(90,67,38,0.10)] backdrop-blur md:px-6">
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold uppercase tracking-[0.25em] text-stone-50">
                BS
              </span>
              <span className="hidden text-sm font-medium tracking-[0.22em] text-stone-700 sm:block">
                Bilal Sattar
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
              <a href="/#work" className="transition hover:text-stone-950">
                Selected Work
              </a>
              <a
                href="/#capabilities"
                className="transition hover:text-stone-950">
                Capabilities
              </a>
              <a href="/#about" className="transition hover:text-stone-950">
                About
              </a>
              <a href="/#contact" className="transition hover:text-stone-950">
                Contact
              </a>
            </nav>

            <a
              href={`mailto:${portfolio.profile.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-stone-50 transition hover:bg-stone-800">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        <article className="mx-auto max-w-3xl rounded-[2rem] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,251,245,0.95),rgba(237,226,208,0.92))] px-6 py-10 shadow-[0_20px_80px_rgba(90,67,38,0.10)] sm:px-10">
          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-stone-950">
            Privacy policy — PII Remover
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
            Last updated: 16 August 2026
          </p>

          <div className="mt-8 space-y-8 text-base leading-7 text-stone-700">
            <p>
              PII Remover is a Chrome extension that redacts personally
              identifiable information from text you paste or sanitize in the
              popup.
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                What we collect
              </h2>
              <p>
                The developer does not operate a backend for this extension and
                does not receive the text you paste.
              </p>
              <p>
                The extension stores, in Chrome storage associated with your
                browser profile:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {storageItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Pasted and sanitized text is processed in memory on your device.
                It is not uploaded to the developer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                On-device AI
              </h2>
              <p>
                When Chrome’s Prompt API is available, redaction may use Gemini
                Nano (or the current on-device model bundled by Chrome). That
                model runs in the browser under Google Chrome’s terms. The
                extension author does not receive those prompts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                Pattern matching
              </h2>
              <p>
                If the on-device model is missing or still downloading, the
                extension applies local regular expressions for common
                identifiers (for example email, phone, Social Security numbers,
                payment-card numbers, and IPv4 addresses).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                Sharing and sale of data
              </h2>
              <p>
                We do not sell personal information. We do not share pasted
                content with third parties. Chrome may sync extension settings
                through your Google account if you have Chrome sync enabled;
                that is controlled by Google, not by a developer server.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                Permissions
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                {permissions.map((permission) => (
                  <li key={permission.name}>
                    <span className="font-medium text-stone-900">
                      {permission.name}:
                    </span>{" "}
                    {permission.detail}
                  </li>
                ))}
              </ul>
              <p>
                The extension injects a content script on http and https pages
                to intercept paste. Users can limit interception to an allowlist
                (default: common AI chat sites).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                Children
              </h2>
              <p>This extension is not directed at children.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                Changes
              </h2>
              <p>
                If this policy changes, the date above will be updated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
                Contact
              </h2>
              <p>
                Open an issue on the project’s GitHub repository:{" "}
                <a
                  href={githubIssues}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-stone-400 underline-offset-4 transition hover:text-stone-950 hover:decoration-stone-950">
                  {githubIssues}
                </a>
              </p>
            </section>
          </div>
        </article>

        <footer className="flex flex-col gap-4 px-1 py-10 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Bilal Sattar. Designed to feel
            deliberate.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${portfolio.profile.contact.email}`}
              className="transition hover:text-stone-950">
              {portfolio.profile.contact.email}
            </a>
            <a
              href={portfolio.profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
