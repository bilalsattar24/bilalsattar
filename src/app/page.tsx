"use client";

import { motion } from "framer-motion";
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
} from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaChartLine,
  FaUsers,
  FaTrophy,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiVercel,
  SiGraphql,
  SiRedis,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Mastery",
    icon: <FaReact />,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    technologies: [
      { name: "React/Next.js", level: 95, icon: <SiNextdotjs /> },
      { name: "TypeScript", level: 90, icon: <SiTypescript /> },
      { name: "Three.js", level: 85, icon: <SiThreedotjs /> },
      { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss /> },
      { name: "Framer Motion", level: 88, icon: <SiFramer /> },
    ],
  },
  {
    category: "Backend Excellence",
    icon: <FaNodeJs />,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    technologies: [
      { name: "Node.js", level: 93, icon: <FaNodeJs /> },
      { name: "Python/Django", level: 90, icon: <FaPython /> },
      { name: "GraphQL", level: 85, icon: <SiGraphql /> },
      { name: "PostgreSQL", level: 88, icon: <SiPostgresql /> },
      { name: "MongoDB", level: 87, icon: <SiMongodb /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaAws />,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    technologies: [
      { name: "AWS", level: 88, icon: <FaAws /> },
      { name: "Docker", level: 85, icon: <FaDocker /> },
      { name: "Kubernetes", level: 80, icon: <SiKubernetes /> },
      { name: "Redis", level: 82, icon: <SiRedis /> },
      { name: "Vercel", level: 90, icon: <SiVercel /> },
    ],
  },
  {
    category: "Leadership & Strategy",
    icon: <FaUsers />,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    technologies: [
      { name: "Team Leadership", level: 95, icon: <FaUsers /> },
      { name: "Project Management", level: 90, icon: <FaChartLine /> },
      { name: "Mentoring", level: 92, icon: <FaLightbulb /> },
      { name: "Architecture Design", level: 88, icon: <FaRocket /> },
      { name: "Client Relations", level: 85, icon: <FaTrophy /> },
    ],
  },
];

const projects = [
  {
    title: "Fantasy Basketball WZRD",
    description:
      "Chrome extension serving 10,000+ active users with advanced analytics and automation for fantasy basketball enthusiasts.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Python",
      "Django",
      "Chrome Extension",
      "React",
      "PostgreSQL",
    ],
    stats: { users: "10K+", rating: "4.6★", revenue: "$50K+" },
    links: { live: "#", github: "#" },
    featured: true,
  },
  {
    title: "Enterprise CRM Platform",
    description:
      "Bespoke CRM system for election management, handling 2,500+ users with advanced data pipelines and 100+ reusable components.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "React", "Chakra UI", "Node.js", "PostgreSQL"],
    stats: { users: "2.5K+", components: "100+", uptime: "99.9%" },
    links: { live: "#", case: "#" },
    featured: true,
  },
  {
    title: "Real Estate Lead Portal",
    description:
      "Dynamic home search platform serving 4M+ monthly users with advanced filtering and lead generation capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Express", "MongoDB", "AWS", "Redis"],
    stats: { users: "4M+", leads: "50K+", conversion: "12%" },
    links: { live: "#", github: "#" },
  },
  {
    title: "Wildlife Tracking System",
    description:
      "Full-stack application for wildlife conservation with real-time tracking, data visualization, and predictive analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["Java Spring", "React", "PostgreSQL", "D3.js", "AWS"],
    stats: { animals: "5K+", accuracy: "95%", conservation: "3 species" },
    links: { live: "#", case: "#" },
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    text: "Bilal delivered exceptional results on our enterprise platform. His technical expertise and leadership skills are outstanding. The project was completed ahead of schedule with zero critical bugs.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at StartupXYZ",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    text: "Working with Bilal was a game-changer for our startup. He not only built an incredible product but also mentored our junior developers. His code quality is impeccable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder at InnovateNow",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    text: "Bilal transformed our vision into reality with his full-stack expertise. The Fantasy Basketball WZRD extension he built has been a massive success with our users loving every feature.",
  },
];

// 3D Components
function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
        />
      </Sphere>
    </Float>
  );
}

export default function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2 });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-hidden">
      {/* Floating Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-5 right-5 z-50 flex gap-2">
        {["hero", "skills", "projects", "testimonials", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-white/20"
              title={section.charAt(0).toUpperCase() + section.slice(1)}>
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
            </button>
          )
        )}
      </motion.div>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-60">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        {/* Animated Background Elements */}
        <motion.div className="absolute top-1/4 right-1/12 w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-float" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-blue-400 font-semibold mb-4 uppercase tracking-widest text-sm">
                Full-Stack Developer
              </p>

              <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                Bilal Sattar
              </h1>

              <h2 className="text-2xl md:text-4xl font-light mb-6 text-gray-300">
                Crafting Digital Excellence
              </h2>

              <p className="text-xl mb-8 text-gray-400 max-w-lg leading-relaxed">
                Transforming ideas into powerful, scalable solutions.
                Specialized in modern web technologies with a track record of
                delivering exceptional results for 10,000+ users worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/60 transition-all flex items-center justify-center gap-2">
                  View My Work
                  <FaRocket />
                </button>

                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold text-lg hover:-translate-y-1 hover:border-blue-300 transition-all flex items-center justify-center gap-2">
                  <FaDownload />
                  Download CV
                </button>
              </div>

              <div className="flex gap-6">
                {[
                  {
                    icon: <FaGithub />,
                    href: "https://github.com/bilalsattar24",
                    label: "GitHub",
                  },
                  {
                    icon: <FaLinkedin />,
                    href: "https://linkedin.com/in/bilalsattar24",
                    label: "LinkedIn",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:-translate-y-1 hover:scale-110 hover:text-blue-400 transition-all shadow-lg border border-white/20"
                    title={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
                <div className="p-8 bg-gradient-to-br from-white/10 to-blue-500/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl shadow-2xl shadow-blue-500/20">
                  <div className="flex items-center mb-6">
                    <div className="w-15 h-15 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <FaCode size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Featured Project
                      </h3>
                      <p className="text-gray-400">Fantasy Basketball WZRD</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Chrome extension serving{" "}
                    <strong className="text-blue-400">
                      10,000+ active users
                    </strong>{" "}
                    with advanced analytics and automation for fantasy
                    basketball enthusiasts.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Python", "Django", "React", "Chrome API"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/15 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        4.6★
                      </div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        10K+
                      </div>
                      <div className="text-xs text-gray-400">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        $50K+
                      </div>
                      <div className="text-xs text-gray-400">Revenue</div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-20 bg-gradient-to-b from-slate-900 to-blue-900/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-center mb-16 text-gray-400 max-w-2xl mx-auto">
              Mastering cutting-edge technologies to deliver exceptional digital
              experiences
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <div
                      className={`p-6 h-full ${skillGroup.bgColor} ${skillGroup.borderColor} border-2 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-opacity-60`}>
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-12 h-12 ${skillGroup.color} bg-white/10 rounded-full flex items-center justify-center mr-4`}>
                          {skillGroup.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {skillGroup.category}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {skillGroup.technologies.map((tech, i) => (
                          <div key={i}>
                            <div className="flex items-center mb-2">
                              <div className={`mr-3 ${skillGroup.color}`}>
                                {tech.icon}
                              </div>
                              <span className="text-gray-300 font-medium flex-1">
                                {tech.name}
                              </span>
                              <span className="text-gray-400 text-sm">
                                {tech.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-700/50 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-1000 ${skillGroup.color.replace(
                                  "text-",
                                  "bg-"
                                )}`}
                                style={{ width: `${tech.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-center mb-16 text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions that drive real business impact
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <div
                      className={`h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-blue-500/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${
                        project.featured
                          ? "border-2 border-blue-500/30"
                          : "border border-white/10"
                      } relative`}>
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-bold">
                          FEATURED
                        </div>
                      )}

                      <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                        <FaRocket size={48} className="text-blue-400" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-500/15 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-xl font-bold text-blue-400">
                                {value}
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={project.links.live}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                            <FaExternalLinkAlt size={14} />
                            Live Demo
                          </a>
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              className="flex-1 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                              <FaGithub size={14} />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-xl text-center mb-16 text-gray-400 max-w-2xl mx-auto">
              Trusted by forward-thinking companies worldwide
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/10 to-blue-500/5 backdrop-blur-xl border border-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/15">
                    <div className="flex items-center mb-6">
                      <div className="w-15 h-15 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-blue-400 text-sm">Company Name</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}>
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 italic leading-relaxed">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 to-blue-900/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-center mb-16 text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let&apos;s discuss your
            next project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "bilal@example.com",
                  href: "mailto:bilalsattar24@gmail.com",
                },
                {
                  icon: <FaPhone />,
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: "San Francisco, CA",
                  href: "#",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="p-6 flex items-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:translate-x-2 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {contact.title}
                      </h3>
                      <p className="text-gray-400">{contact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}>
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Send a Message
                  </h3>
                  <div className="space-y-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                    <textarea
                      placeholder="Project Details"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                      Send Message
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
