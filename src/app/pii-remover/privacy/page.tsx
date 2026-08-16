import type { Metadata } from "next";
import { SiteChrome } from "../SiteChrome";
import {
  PII_REMOVER_CHROME_STORE_URL,
  PII_REMOVER_GITHUB_ISSUES,
} from "../links";

const canonical = "https://bilalsattar.com/pii-remover/privacy";
const githubIssues = PII_REMOVER_GITHUB_ISSUES;

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
    <SiteChrome
      headerCta={{
        href: PII_REMOVER_CHROME_STORE_URL,
        label: "Install on Chrome",
        external: true,
      }}
      footerLinks={[
        { href: "/pii-remover", label: "PII Remover" },
        {
          href: PII_REMOVER_GITHUB_ISSUES,
          label: "GitHub",
          external: true,
        },
      ]}>
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
    </SiteChrome>
  );
}
