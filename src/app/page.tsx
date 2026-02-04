import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF4] text-[#171717] font-sans selection:bg-[#3b82f6] selection:text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#171717] rounded-full flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <span className="font-bold text-xl tracking-tight">Bilal Sattar</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="#" className="hover:text-black transition-colors">
            Home
          </a>
          <a
            href="#skills"
            className="hover:text-black transition-colors flex items-center gap-1">
            Skills
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#projects" className="hover:text-black transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-black transition-colors">
            About me
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile menu button could go here */}
          <span className="font-bold text-sm">EN</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 z-10 relative">
          {/* Decorative geometric shapes */}
          <div className="absolute -top-12 -left-8 md:-left-16 w-24 h-24 opacity-20">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L50 50L0 100" stroke="#d97706" strokeWidth="2" />
              <path d="M30 0L80 50L30 100" stroke="#d97706" strokeWidth="2" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Your web applications perform better{" "}
            <br className="hidden md:block" />
            <span className="relative">
              with me behind
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE4A1] -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none">
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
            <br className="hidden md:block" />
            the wheel.
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            I'll get the most out of your digital products or teach you the
            intricacies so you can do it yourself! Full-stack developer and Tech
            Operations Lead building products that serve millions.
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#2D2D39] text-white font-semibold py-4 px-8 rounded hover:bg-black transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            I want to build my product
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
            {/* Semi-circle background */}
            <div className="absolute bottom-0 right-0 w-full h-3/4 bg-[#E3D5B6] rounded-t-full opacity-60 translate-x-4 translate-y-4"></div>

            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/bilal_park.png"
                alt="Bilal Sattar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#2D2D39]">
            I work with the best companies
          </h2>
          <div className="w-24 h-2 mx-auto mb-8">
            <svg
              viewBox="0 0 100 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 5 Q 12.5 0 25 5 T 50 5 T 75 5 T 100 5"
                stroke="#E3D5B6"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="text-gray-500 mb-12">May I add you to the list?</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              "Fantasy Basketball WZRD",
              "SportsWZRD",
              "Hit Factory LA",
              "Sports Health Tech",
              "Chrome Extensions",
            ].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-12 bg-gray-50 rounded border border-gray-100 p-2 text-sm font-bold text-gray-400">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D2D39]">
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mastering cutting-edge technologies to deliver exceptional digital
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Frontend Mastery",
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              technologies: [
                "React/Next.js",
                "TypeScript",
                "Three.js",
                "Tailwind CSS",
                "Framer Motion",
              ],
            },
            {
              name: "Backend Excellence",
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              ),
              technologies: [
                "Node.js",
                "Python/Django",
                "GraphQL",
                "PostgreSQL",
                "MongoDB",
              ],
            },
            {
              name: "Cloud & DevOps",
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              ),
              technologies: ["AWS", "Docker", "Kubernetes", "Redis", "Vercel"],
            },
            {
              name: "AI & Machine Learning",
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
              technologies: [
                "LLM Integration",
                "AI-Assisted Development",
                "Prompt Engineering",
                "Vector Databases",
                "OpenAI API",
              ],
            },
            {
              name: "Browser Extension Dev",
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              ),
              technologies: [
                "Chrome Extension API",
                "Content Scripts",
                "Background Workers",
                "Extension Monetization",
                "Manifest V3",
              ],
            },
            {
              name: "Leadership & Strategy",
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
              technologies: [
                "Team Leadership",
                "Project Management",
                "Mentoring",
                "Architecture Design",
                "Client Relations",
              ],
            },
          ].map((category, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FFFBF4] rounded-lg flex items-center justify-center text-[#d97706] mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2D2D39]">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-12 max-w-7xl bg-[#E8EFE9] my-12 rounded-3xl mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* About Image */}
          <div className="md:w-5/12 relative">
            <div className="absolute -top-6 -left-6 text-[#9CA3AF] opacity-50">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-current rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto bg-white p-4 shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gray-200 overflow-hidden relative">
                <Image
                  src="/images/bilal_park.png"
                  alt="Bilal Sattar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-8 text-[#9CA3AF] opacity-50">
              <div className="flex gap-4 text-xs font-mono">
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D2D39]">
              Hi, I'm Bilal Sattar.
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                As a{" "}
                <span className="font-bold text-gray-900">
                  Full-Stack Developer
                </span>
                , I help{" "}
                <span className="font-bold text-gray-900">
                  ambitious companies
                </span>{" "}
                get the most out of their technology investments. I work for a
                select number of clients and am responsible for building
                products that serve millions of users.
              </p>

              <p>
                Over the years, I have had the opportunity to work on scalable
                platforms and innovative tools. Often challenging projects from
                great concepts, including{" "}
                <span className="font-bold text-gray-900">SportsWZRD</span>,{" "}
                <span className="font-bold text-gray-900">Hit Factory LA</span>,
                and complex{" "}
                <span className="font-bold text-gray-900">
                  Chrome Extensions
                </span>{" "}
                with 10K+ active users.
              </p>

              <p>
                I also provide{" "}
                <span className="font-bold text-gray-900">
                  Technical Leadership
                </span>{" "}
                and{" "}
                <span className="font-bold text-gray-900">Tech Operations</span>{" "}
                management. In these roles, I share my knowledge with teams to
                build products that scale. This way, they learn the intricacies
                of the business and technology.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-300/50 flex flex-wrap gap-4">
              {/* Skill pills */}
              {[
                "React/Next.js",
                "Python/Django",
                "AWS",
                "Chrome Extensions",
                "AI/LLM Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/60 text-sm font-medium text-gray-700 rounded-full border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (Footer-like) */}
      <section id="contact" className="bg-[#111111] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to scale your product?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need a full-stack overhaul, a chrome extension, or
            technical leadership, I'm here to help you achieve your goals.
          </p>
          <a
            href="mailto:bilalsattar24@gmail.com"
            className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-colors">
            Get in touch
          </a>

          <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Bilal Sattar. All rights
              reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://linkedin.com/in/bilalsattar24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a
                href="https://github.com/bilalsattar24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
