import Image from "next/image";
import {
  ArrowRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import portfolio from "./data/portfolio-data.json";

const spotlightMetrics = [
  { value: "10K+", label: "active users across products" },
  { value: "$50K+", label: "revenue generated from owned software" },
  { value: "Millions", label: "of downloads supported operationally" },
];

const engagementModels = [
  "Founder-led product builds",
  "High-performance SaaS and dashboards",
  "Chrome extensions and monetization systems",
  "Technical leadership for scaling teams",
];

const process = [
  {
    step: "01",
    title: "Clarify the advantage",
    description:
      "I identify the core business edge, the bottlenecks hurting momentum, and the product bets actually worth making.",
  },
  {
    step: "02",
    title: "Design for traction",
    description:
      "I shape the architecture, interface, and delivery plan around adoption, speed, and maintainability rather than trend-chasing.",
  },
  {
    step: "03",
    title: "Ship with leverage",
    description:
      "I build systems teams can extend, operators can trust, and customers can feel immediately through performance and polish.",
  },
];

const featuredProjects = portfolio.projects.items.slice(0, 3);
const coreCapabilities = portfolio.skills.categories.slice(0, 4);

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(218,165,32,0.18),_transparent_22%),radial-gradient(circle_at_80%_20%,_rgba(119,89,54,0.14),_transparent_20%),linear-gradient(180deg,_#f7f1e8_0%,_#efe5d5_42%,_#ded1bd_100%)] text-stone-950 selection:bg-stone-900 selection:text-stone-50">
      <div className="mx-auto max-w-[92rem] px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-50 mb-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-stone-900/10 bg-[rgba(250,246,239,0.82)] px-4 py-3 shadow-[0_20px_60px_rgba(90,67,38,0.10)] backdrop-blur md:px-6">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold uppercase tracking-[0.25em] text-stone-50">
                BS
              </span>
              <span className="hidden text-sm font-medium tracking-[0.22em] text-stone-700 sm:block">
                Bilal Sattar
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
              <a href="#work" className="transition hover:text-stone-950">
                Selected Work
              </a>
              <a
                href="#capabilities"
                className="transition hover:text-stone-950">
                Capabilities
              </a>
              <a href="#about" className="transition hover:text-stone-950">
                About
              </a>
              <a href="#contact" className="transition hover:text-stone-950">
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

        <section
          id="top"
          className="reveal reveal-1 relative grid gap-10 overflow-hidden rounded-[2rem] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,251,245,0.9),rgba(237,226,208,0.9))] px-6 py-8 shadow-[0_30px_120px_rgba(90,67,38,0.12)] lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-[rgba(124,98,71,0.12)] blur-3xl animate-float" />
          <div className="pointer-events-none absolute bottom-8 left-1/3 h-24 w-24 rounded-full bg-[rgba(218,165,32,0.14)] blur-2xl [animation-delay:1.2s] animate-float" />
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-8">
              <div className="reveal reveal-2 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">
                <span className="rounded-full border border-stone-900/10 bg-stone-50/80 px-3 py-2">
                  {portfolio.profile.location}
                </span>
                <span className="rounded-full border border-stone-900/10 bg-stone-50/80 px-3 py-2">
                  {portfolio.profile.title}
                </span>
              </div>

              <div className="reveal reveal-3 max-w-4xl space-y-6">
                <p className="max-w-xl text-sm font-medium uppercase tracking-[0.32em] text-stone-500">
                  Boutique engineering for ambitious digital products
                </p>
                <h1 className="max-w-5xl text-[clamp(3.4rem,9vw,7.5rem)] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-stone-950">
                  Build the product people remember.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
                  {portfolio.profile.bio}
                </p>
              </div>

              <div className="reveal reveal-4 grid gap-4 sm:grid-cols-[auto_auto] sm:items-center">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-stone-50 transition duration-500 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[0_16px_40px_rgba(31,26,23,0.2)]">
                    Book a strategy call
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-900/15 px-6 py-3 text-sm font-medium text-stone-800 transition duration-500 hover:-translate-y-0.5 hover:border-stone-900/30 hover:bg-stone-50/70">
                    Explore selected work
                  </a>
                </div>

                <div className="flex items-center gap-4 text-stone-600">
                  <a
                    href={portfolio.profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-stone-900/10 p-3 transition hover:bg-stone-50">
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={portfolio.profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-stone-900/10 p-3 transition hover:bg-stone-50">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal reveal-5 grid gap-4 lg:grid-cols-3">
              {spotlightMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-t border-stone-900/10 pt-4 transition duration-500 hover:-translate-y-1">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-stone-950">
                    {metric.value}
                  </div>
                  <p className="mt-2 max-w-[16rem] text-sm leading-6 text-stone-600">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-4 grid gap-5 lg:grid-rows-[auto_1fr]">
            <div className="rounded-[1.75rem] border border-stone-900/10 bg-stone-950 p-6 text-stone-50 shadow-[0_20px_60px_rgba(34,24,13,0.25)] transition duration-700 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(34,24,13,0.28)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">
                Current spotlight
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                    {portfolio.hero.featuredProject.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-stone-300">
                    {portfolio.hero.featuredProject.description}
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-stone-200">
                  {Object.entries(portfolio.hero.featuredProject.stats).map(
                    ([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between border-b border-stone-700 pb-2">
                        <span className="capitalize text-stone-400">
                          {label}
                        </span>
                        <span className="font-medium text-stone-100">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-[22rem] flex-col justify-between rounded-[1.75rem] border border-stone-900/10 bg-[rgba(250,246,239,0.88)] p-6 transition duration-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(90,67,38,0.14)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                    Engagements
                  </p>
                  <ul className="mt-6 space-y-4 text-lg leading-7 text-stone-800">
                    {engagementModels.map((item) => (
                      <li
                        key={item}
                        className="border-b border-stone-900/10 pb-4 last:border-b-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="max-w-xs text-sm leading-6 text-stone-600">
                  Best fit for founders and teams who need sharp execution,
                  stronger product taste, and systems that can scale without
                  drama.
                </p>
              </div>

              <div className="group relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-stone-900/10 bg-[#d7c3a4] transition duration-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(90,67,38,0.16)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,248,237,0.65),_transparent_28%),linear-gradient(180deg,rgba(117,84,46,0.02),rgba(39,28,17,0.18))]" />
                <Image
                  src="/images/bilal_park.png"
                  alt="Bilal Sattar"
                  fill
                  priority
                  className="object-cover object-center mix-blend-multiply transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="max-w-sm rounded-[1.5rem] border border-white/35 bg-[rgba(250,246,239,0.75)] p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Positioning
                    </p>
                    <p className="mt-3 text-base leading-7 text-stone-800">
                      Product-minded engineer. Technical operator. Builder of
                      businesses, not just interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal reveal-2 grid gap-10 px-1 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
              Why teams bring me in
            </p>
            <h2 className="mt-4 max-w-xl text-[clamp(2.5rem,5vw,4.6rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em] text-stone-950">
              Technology should create leverage, not overhead.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-stone-700">
            I combine product instinct, engineering depth, and operational
            fluency. That means the work is not only visually strong and
            technically sound, but aligned with adoption, revenue, and real
            business momentum.
          </p>
        </section>

        <section id="work" className="reveal reveal-2 space-y-8 py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
                Selected work
              </p>
              <h2 className="mt-3 text-[clamp(2.3rem,4vw,4rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em] text-stone-950">
                Distinct products with measurable business impact.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-700">
              A mix of owned products, client platforms, and specialized systems
              built to grow audiences, unlock monetization, and support
              ambitious operators.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={`reveal flex h-full flex-col justify-between rounded-[1.8rem] border border-stone-900/10 p-6 shadow-[0_18px_60px_rgba(90,67,38,0.08)] transition duration-700 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(90,67,38,0.14)] ${
                  index === 0
                    ? "bg-stone-950 text-stone-50 lg:col-span-2"
                    : "bg-[rgba(250,246,239,0.82)] text-stone-900"
                }`}
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}>
                <div>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.28em] ${index === 0 ? "text-stone-400" : "text-stone-500"}`}>
                        {project.featured ? "Featured platform" : "Project"}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                        {project.title}
                      </h3>
                    </div>
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-500 hover:rotate-6 ${index === 0 ? "border-stone-700 text-stone-100 hover:bg-stone-800" : "border-stone-900/10 text-stone-700 hover:bg-stone-100"}`}>
                        <Globe className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>

                  <p
                    className={`mt-5 max-w-2xl text-sm leading-7 ${index === 0 ? "text-stone-300" : "text-stone-700"}`}>
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${index === 0 ? "bg-stone-800 text-stone-200" : "bg-stone-100 text-stone-700"}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`grid gap-3 sm:grid-cols-3 ${index === 0 ? "text-stone-100" : "text-stone-800"}`}>
                    {Object.entries(project.stats).map(([label, value]) => (
                      <div
                        key={label}
                        className="border-t border-current/15 pt-3">
                        <div className="text-lg font-semibold tracking-[-0.03em]">
                          {value}
                        </div>
                        <div
                          className={`mt-1 text-xs uppercase tracking-[0.24em] ${index === 0 ? "text-stone-400" : "text-stone-500"}`}>
                          {label.replace("_", " ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="capabilities"
          className="reveal reveal-2 grid gap-10 py-24 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
              Core capabilities
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em] text-stone-950">
              Built for complex products, demanding operators, and ambitious
              timelines.
            </h2>
            <p className="max-w-md text-base leading-7 text-stone-700">
              My edge is the combination of technical execution and strategic
              judgment. I can go deep in the stack while keeping the product
              story and business model in view.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {coreCapabilities.map((category) => (
              <div
                key={category.name}
                className="reveal rounded-[1.6rem] border border-stone-900/10 bg-[rgba(250,246,239,0.72)] p-6 transition duration-700 hover:-translate-y-1 hover:bg-[rgba(255,249,241,0.9)] hover:shadow-[0_20px_50px_rgba(90,67,38,0.12)]"
                style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-stone-900">
                  {category.name}
                </h3>
                <div className="mt-6 space-y-4">
                  {category.technologies.slice(0, 4).map((tech) => (
                    <div key={tech.name}>
                      <div className="mb-2 flex items-center justify-between text-sm text-stone-700">
                        <span>{tech.name}</span>
                        <span>{tech.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-stone-900/10">
                        <div
                          className="h-full rounded-full bg-stone-900 transition-all duration-1000 ease-out"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal reveal-2 grid gap-10 rounded-[2rem] border border-stone-900/10 bg-stone-950 px-6 py-10 text-stone-50 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-400">
              Working model
            </p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em]">
              Strategy, systems, and execution in one lane.
            </h2>
          </div>

          <div className="grid gap-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="reveal grid gap-4 border-t border-stone-800 pt-5 transition duration-500 hover:translate-x-1 sm:grid-cols-[auto_1fr]"
                style={{ animationDelay: `0.${item.step}s` }}>
                <div className="text-sm font-semibold tracking-[0.24em] text-stone-400">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-stone-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="reveal reveal-2 grid gap-8 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="group relative min-h-[28rem] overflow-hidden rounded-[1.9rem] border border-stone-900/10 bg-[#c9b18c] transition duration-700 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(90,67,38,0.16)]">
            <Image
              src="/images/bilal_park.png"
              alt="Bilal Sattar portrait"
              fill
              className="object-cover object-center grayscale-[12%] transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,19,12,0.02),rgba(26,19,12,0.38))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="grid gap-3 rounded-[1.4rem] border border-white/20 bg-[rgba(24,18,12,0.58)] p-5 text-stone-100 backdrop-blur">
                <div className="flex items-center gap-2 text-sm text-stone-300">
                  <MapPin className="h-4 w-4" />
                  {portfolio.profile.location}
                </div>
                <div className="text-xl font-medium tracking-[-0.03em]">
                  {portfolio.profile.tagline}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
              About
            </p>
            <h2 className="text-[clamp(2.4rem,4.8vw,4rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em] text-stone-950">
              I like products that feel inevitable once they exist.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-stone-700">
              I work across product engineering, growth-minded feature design,
              and technical operations. That perspective lets me make decisions
              that respect both the user experience and the machinery required
              to support it.
            </p>
            <p className="max-w-2xl text-base leading-7 text-stone-700">
              From owned platforms like SportsWZRD to client systems in sports,
              media, and web software, my focus stays the same: build something
              sharp, stable, and commercially useful.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {portfolio.skills.categories.slice(0, 6).map((category) => (
                <div
                  key={category.name}
                  className="rounded-[1.2rem] border border-stone-900/10 bg-[rgba(250,246,239,0.8)] px-4 py-4 text-sm text-stone-700">
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="reveal reveal-2 grid gap-8 rounded-[2rem] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,243,0.95),rgba(232,220,199,0.92))] px-6 py-10 shadow-[0_20px_80px_rgba(90,67,38,0.10)] lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
              Contact
            </p>
            <h2 className="text-[clamp(2.4rem,4.8vw,4rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em] text-stone-950">
              Ready to make the site, product, or system feel world-class?
            </h2>
            <p className="max-w-xl text-base leading-7 text-stone-700">
              If you need a strong technical partner who can build, advise, and
              raise the bar on execution, let’s talk through the opportunity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${portfolio.profile.contact.email}`}
              className="reveal rounded-[1.4rem] border border-stone-900/10 bg-stone-950 p-6 text-stone-50 transition duration-700 hover:-translate-y-1 hover:bg-stone-800 hover:shadow-[0_18px_50px_rgba(31,26,23,0.18)]">
              <Mail className="h-5 w-5" />
              <div className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
                Email
              </div>
              <div className="mt-2 text-lg font-medium tracking-[-0.03em]">
                {portfolio.profile.contact.email}
              </div>
            </a>

            <a
              href={`tel:${portfolio.profile.contact.phone.replace(/[^\d+]/g, "")}`}
              className="rounded-[1.4rem] border border-stone-900/10 bg-[rgba(250,246,239,0.85)] p-6 text-stone-900 transition hover:bg-stone-50">
              <Phone className="h-5 w-5" />
              <div className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Phone
              </div>
              <div className="mt-2 text-lg font-medium tracking-[-0.03em]">
                {portfolio.profile.contact.phone}
              </div>
            </a>

            <a
              href={portfolio.profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="reveal rounded-[1.4rem] border border-stone-900/10 bg-[rgba(250,246,239,0.85)] p-6 text-stone-900 transition duration-700 hover:-translate-y-1 hover:bg-stone-50 hover:shadow-[0_18px_50px_rgba(90,67,38,0.12)]">
              <Linkedin className="h-5 w-5" />
              <div className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                LinkedIn
              </div>
              <div className="mt-2 text-lg font-medium tracking-[-0.03em]">
                bilalsattar24
              </div>
            </a>

            <a
              href={portfolio.profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="reveal rounded-[1.4rem] border border-stone-900/10 bg-[rgba(250,246,239,0.85)] p-6 text-stone-900 transition duration-700 hover:-translate-y-1 hover:bg-stone-50 hover:shadow-[0_18px_50px_rgba(90,67,38,0.12)]">
              <Github className="h-5 w-5" />
              <div className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                GitHub
              </div>
              <div className="mt-2 text-lg font-medium tracking-[-0.03em]">
                bilalsattar24
              </div>
            </a>
          </div>
        </section>

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
