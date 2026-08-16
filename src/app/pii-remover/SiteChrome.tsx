import { ArrowRight } from "lucide-react";
import portfolio from "../data/portfolio-data.json";

type LinkItem = {
  href: string;
  label: string;
  external?: boolean;
};

export function SiteChrome({
  children,
  headerCta,
  footerLinks,
}: {
  children: React.ReactNode;
  headerCta?: LinkItem;
  footerLinks?: LinkItem[];
}) {
  const cta = headerCta ?? {
    href: `mailto:${portfolio.profile.contact.email}`,
    label: "Start a project",
  };

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
              href={cta.href}
              {...(cta.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-stone-50 transition hover:bg-stone-800">
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        {children}

        <footer className="flex flex-col gap-4 px-1 py-10 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Bilal Sattar. Designed to feel
            deliberate.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {footerLinks?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="transition hover:text-stone-950">
                {link.label}
              </a>
            ))}
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
