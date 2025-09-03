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
  FaStar,
  FaQuoteLeft,
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
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Card,
  CardContent,
  Avatar,
  Chip,
  LinearProgress,
  TextField,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import { keyframes } from "@emotion/react";

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const skills = [
  {
    category: "Frontend Mastery",
    icon: <FaReact />,
    color: "#61DAFB",
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
    color: "#339933",
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
    color: "#FF9900",
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
    color: "#8B5CF6",
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
  const theme = useTheme();

  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2 });

  return (
    <div
      style={{
        backgroundColor: "var(--mui-palette-background-default)",
        minHeight: "100vh",
        overflow: "hidden",
      }}>
      {/* Floating Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          display: "flex",
          gap: "8px",
        }}>
        {["hero", "skills", "projects", "testimonials", "contact"].map(
          (section) => (
            <Tooltip
              key={section}
              title={section.charAt(0).toUpperCase() + section.slice(1)}>
              <IconButton
                onClick={() =>
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                sx={{
                  bgcolor: "background.paper",
                  color: "text.primary",
                  boxShadow: 3,
                  "&:hover": { transform: "scale(1.1)" },
                }}>
                <Box
                  // @ts-ignore
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "currentColor",
                  }}
                />
              </IconButton>
            </Tooltip>
          )
        )}
      </motion.div>

      {/* Hero Section */}
      <Box
        // @ts-ignore
        id="hero"
        // @ts-ignore
        ref={heroRef}
        // @ts-ignore
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.main}10 100%)`,
        }}>
        {/* 3D Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.6,
          }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </Box>

        {/* Animated Background Elements */}
        <motion.div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
            animation: `${float} 6s ease-in-out infinite`,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}>
                  Full-Stack Developer
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3rem", md: "5rem" },
                    fontWeight: 900,
                    mb: 2,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1.1,
                  }}>
                  Bilal Sattar
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                    fontWeight: 300,
                    mb: 4,
                    color: "text.secondary",
                  }}>
                  Crafting Digital Excellence
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.2rem",
                    mb: 4,
                    color: "text.secondary",
                    maxWidth: "500px",
                    lineHeight: 1.6,
                  }}>
                  Transforming ideas into powerful, scalable solutions.
                  Specialized in modern web technologies with a track record of
                  delivering exceptional results for 10,000+ users worldwide.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<FaRocket />}
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: `0 12px 40px ${theme.palette.primary.main}60`,
                      },
                    }}>
                    View My Work
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<FaDownload />}
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        transform: "translateY(-3px)",
                      },
                    }}>
                    Download CV
                  </Button>
                </Stack>

                <Stack direction="row" spacing={3}>
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
                    <Tooltip key={social.label} title={social.label}>
                      <IconButton
                        href={social.href}
                        target="_blank"
                        sx={{
                          bgcolor: "background.paper",
                          color: "text.primary",
                          boxShadow: 3,
                          "&:hover": {
                            transform: "translateY(-3px) scale(1.1)",
                            color: "primary.main",
                          },
                        }}>
                        {social.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}>
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
                  <Card
                    sx={{
                      p: 4,
                      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}05 100%)`,
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${theme.palette.primary.main}20`,
                      borderRadius: 4,
                      boxShadow: `0 20px 60px ${theme.palette.primary.main}20`,
                    }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          mr: 2,
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        }}>
                        <FaCode size={24} />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          Featured Project
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Fantasy Basketball WZRD
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                      Chrome extension serving{" "}
                      <strong>10,000+ active users</strong> with advanced
                      analytics and automation for fantasy basketball
                      enthusiasts.
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mb: 3, flexWrap: "wrap" }}>
                      {["Python", "Django", "React", "Chrome API"].map(
                        (tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: `${theme.palette.primary.main}15`,
                              color: "primary.main",
                              fontWeight: 500,
                            }}
                          />
                        )
                      )}
                    </Stack>

                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h6"
                            color="primary.main"
                            fontWeight="bold">
                            4.6★
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Rating
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h6"
                            color="primary.main"
                            fontWeight="bold">
                            10K+
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Users
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h6"
                            color="primary.main"
                            fontWeight="bold">
                            $50K+
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Revenue
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </Tilt>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        id="skills"
        ref={skillsRef}
        sx={{
          py: 10,
          background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.main}08 100%)`,
        }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Technical Expertise
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 8,
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
              }}>
              Mastering cutting-edge technologies to deliver exceptional digital
              experiences
            </Typography>

            <Grid container spacing={4}>
              {skills.map((skillGroup, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <Card
                        sx={{
                          p: 3,
                          height: "100%",
                          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${skillGroup.color}10 100%)`,
                          border: `2px solid ${skillGroup.color}20`,
                          borderRadius: 3,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-10px)",
                            boxShadow: `0 20px 40px ${skillGroup.color}30`,
                            border: `2px solid ${skillGroup.color}40`,
                          },
                        }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                          <Avatar
                            sx={{
                              bgcolor: skillGroup.color,
                              color: "white",
                              mr: 2,
                              width: 50,
                              height: 50,
                            }}>
                            {skillGroup.icon}
                          </Avatar>
                          <Typography variant="h6" fontWeight="bold">
                            {skillGroup.category}
                          </Typography>
                        </Box>

                        <Stack spacing={2}>
                          {skillGroup.technologies.map((tech, i) => (
                            <Box key={i}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mb: 1,
                                }}>
                                <Box sx={{ mr: 1, color: skillGroup.color }}>
                                  {tech.icon}
                                </Box>
                                <Typography
                                  variant="body2"
                                  fontWeight="500"
                                  sx={{ flexGrow: 1 }}>
                                  {tech.name}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary">
                                  {tech.level}%
                                </Typography>
                              </Box>
                              <LinearProgress
                                variant="determinate"
                                value={tech.level}
                                sx={{
                                  height: 6,
                                  borderRadius: 3,
                                  bgcolor: `${skillGroup.color}20`,
                                  "& .MuiLinearProgress-bar": {
                                    bgcolor: skillGroup.color,
                                    borderRadius: 3,
                                  },
                                }}
                              />
                            </Box>
                          ))}
                        </Stack>
                      </Card>
                    </Tilt>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        ref={projectsRef}
        sx={{
          py: 10,
          bgcolor: "background.paper",
        }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Featured Projects
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 8,
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
              }}>
              Showcasing innovative solutions that drive real business impact
            </Typography>

            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 4,
                          overflow: "hidden",
                          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}05 100%)`,
                          border: project.featured
                            ? `2px solid ${theme.palette.primary.main}30`
                            : "1px solid rgba(0,0,0,0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-10px)",
                            boxShadow: `0 25px 50px ${theme.palette.primary.main}20`,
                          },
                        }}>
                        {project.featured && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              zIndex: 1,
                              bgcolor: "primary.main",
                              color: "white",
                              px: 2,
                              py: 0.5,
                              borderRadius: 2,
                              fontSize: "0.75rem",
                              fontWeight: "bold",
                            }}>
                            FEATURED
                          </Box>
                        )}

                        <Box
                          sx={{
                            height: 200,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                          }}>
                          <FaRocket
                            size={48}
                            color={theme.palette.primary.main}
                          />
                        </Box>

                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom>
                            {project.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 3, lineHeight: 1.6 }}>
                            {project.description}
                          </Typography>

                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{ mb: 3, flexWrap: "wrap" }}>
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  bgcolor: `${theme.palette.primary.main}15`,
                                  color: "primary.main",
                                  fontWeight: 500,
                                }}
                              />
                            ))}
                          </Stack>

                          <Grid container spacing={2} sx={{ mb: 3 }}>
                            {Object.entries(project.stats).map(
                              ([key, value]) => (
                                <Grid item xs={4} key={key}>
                                  <Box sx={{ textAlign: "center" }}>
                                    <Typography
                                      variant="h6"
                                      color="primary.main"
                                      fontWeight="bold">
                                      {value}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      color="text.secondary">
                                      {key.charAt(0).toUpperCase() +
                                        key.slice(1)}
                                    </Typography>
                                  </Box>
                                </Grid>
                              )
                            )}
                          </Grid>

                          <Stack direction="row" spacing={2}>
                            <Button
                              variant="contained"
                              size="small"
                              startIcon={<FaExternalLinkAlt />}
                              href={project.links.live}
                              sx={{ borderRadius: 2 }}>
                              Live Demo
                            </Button>
                            {project.links.github && (
                              <Button
                                variant="outlined"
                                size="small"
                                startIcon={<FaGithub />}
                                href={project.links.github}
                                sx={{ borderRadius: 2 }}>
                                Code
                              </Button>
                            )}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Tilt>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        id="testimonials"
        ref={testimonialsRef}
        sx={{
          py: 10,
          background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.secondary.main}08 100%)`,
        }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Client Testimonials
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 8,
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
              }}>
              What industry leaders say about working with me
            </Typography>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}>
                    <Card
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: 4,
                        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}05 100%)`,
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
                        },
                      }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                        <FaQuoteLeft
                          size={24}
                          color={theme.palette.primary.main}
                        />
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{ mb: 3, lineHeight: 1.6, fontStyle: "italic" }}>
                        &ldquo;{testimonial.text}&rdquo;
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Avatar
                          sx={{
                            width: 50,
                            height: 50,
                            mr: 2,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          }}>
                          {testimonial.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar
                            key={i}
                            size={16}
                            color={theme.palette.primary.main}
                          />
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: 10,
          bgcolor: "background.paper",
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}10 100%)`,
        }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Let&apos;s Build Something Amazing
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}>
            Ready to transform your ideas into reality? Let&apos;s discuss your
            next project.
          </Typography>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                {[
                  {
                    icon: <FaEnvelope />,
                    title: "Email",
                    value: "bilal@example.com",
                    href: "mailto:bilal@example.com",
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
                    <Paper
                      sx={{
                        p: 3,
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateX(10px)",
                          boxShadow: 3,
                        },
                      }}>
                      <Avatar
                        sx={{
                          bgcolor: "primary.main",
                          mr: 3,
                          width: 50,
                          height: 50,
                        }}>
                        {contact.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          {contact.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {contact.value}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}>
                <Paper sx={{ p: 4, borderRadius: 4 }}>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                    Send a Message
                  </Typography>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                    <TextField
                      fullWidth
                      label="Project Details"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<FaArrowRight />}
                      sx={{
                        borderRadius: 2,
                        py: 2,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        "&:hover": {
                          transform: "translateY(-2px)",
                        },
                      }}>
                      Send Message
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
