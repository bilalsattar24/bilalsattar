"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Scalable marketplace with thousands of daily transactions",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "AWS", "PostgreSQL"],
    link: "#",
  },
  {
    title: "AI-Powered Analytics",
    description: "Real-time data processing and visualization platform",
    image: "/projects/analytics.jpg",
    tags: ["Python", "TensorFlow", "React"],
    link: "#",
  },
  {
    title: "FinTech Mobile App",
    description: "Cross-platform financial management application",
    image: "/projects/fintech.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
];

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Go", "GraphQL"],
  },
  {
    category: "Cloud",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
];

export default function Home() {
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}20, transparent 60%),
                        radial-gradient(circle at 70% 70%, ${theme.palette.secondary.main}20, transparent 60%)`,
            zIndex: 0,
          },
        }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3rem", md: "4.5rem" },
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  Bilal Sattar
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 500,
                    mb: 3,
                    color: "text.secondary",
                  }}>
                  Full-Stack Engineer & Cloud Architect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    mb: 4,
                    maxWidth: 600,
                    lineHeight: 1.8,
                  }}>
                  Crafting innovative digital solutions through elegant code and
                  scalable architecture. Specialized in building
                  high-performance applications that make a difference.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<FaArrowRight />}
                    sx={{
                      borderRadius: "50px",
                      px: 4,
                      py: 1.5,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}>
                    View Projects
                  </Button>
                  <IconButton
                    href="https://github.com/bilalsattar24"
                    target="_blank"
                    sx={{
                      color: "text.primary",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "translateY(-2px)" },
                    }}>
                    <FaGithub size={24} />
                  </IconButton>
                  <IconButton
                    href="https://linkedin.com/in/bilalsattar24"
                    target="_blank"
                    sx={{
                      color: "text.primary",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "translateY(-2px)" },
                    }}>
                    <FaLinkedin size={24} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: 400,
                    display: { xs: "none", md: "block" },
                  }}>
                  {/* Add a 3D illustration or custom animation here */}
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 15, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 8,
                textAlign: "center",
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Technical Expertise
            </Typography>
            <Grid container spacing={4}>
              {skills.map((skillGroup, index) => (
                <Grid item xs={12} sm={6} md={3} key={skillGroup.category}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        bgcolor: "background.default",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        height: "100%",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-8px)",
                        },
                      }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {skillGroup.category}
                      </Typography>
                      {skillGroup.technologies.map((tech) => (
                        <Box
                          key={tech}
                          sx={{
                            display: "inline-block",
                            m: 0.5,
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            bgcolor: `${theme.palette.primary.main}10`,
                            color: "primary.main",
                            fontSize: "0.875rem",
                          }}>
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box sx={{ py: 15 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 8,
                textAlign: "center",
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Featured Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={4} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}>
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 4,
                        overflow: "hidden",
                        cursor: "pointer",
                        "&:hover": {
                          "& .project-overlay": {
                            opacity: 1,
                          },
                          "& img": {
                            transform: "scale(1.05)",
                          },
                        },
                      }}>
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: "100%",
                          height: 300,
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                      />
                      <Box
                        className="project-overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: "rgba(0,0,0,0.7)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          p: 3,
                        }}>
                        <Typography
                          variant="h5"
                          sx={{ color: "white", mb: 2, fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", mb: 2 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                          {project.tags.map((tag) => (
                            <Box
                              key={tag}
                              sx={{
                                px: 2,
                                py: 0.5,
                                borderRadius: 2,
                                bgcolor: "primary.main",
                                color: "white",
                                fontSize: "0.875rem",
                              }}>
                              {tag}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
