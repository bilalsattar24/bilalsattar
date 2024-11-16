"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
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
  Chip,
  Fade,
} from "@mui/material";

const projects = [
  {
    title: "Trestle CRM Platform",
    description:
      "Building a comprehensive custom CRM using Next.js and React to manage election candidate relationships. Established a library of 100+ reusable Chakra UI components and implemented data pipelines for 2,500+ users.",
    image: "/projects/trestle.jpg",
    tags: ["Next.js", "React", "Chakra UI", "TypeScript"],
    link: "https://github.com/bilalsattar24/trestle-crm",
    year: "2023-Present",
  },
  {
    title: "Fantasy Basketball Wzrd",
    description:
      "Developed a profitable Chrome extension with 10k+ weekly active users. Built a Python Django backend for live basketball statistics and led a team of developers. Created a thriving community with thousands of users.",
    image: "/projects/basketball.jpg",
    tags: ["Python", "Django", "Chrome Extension", "JavaScript"],
    link: "https://github.com/bilalsattar24/fantasy-basketball-wzrd",
    year: "2017-Present",
  },
  {
    title: "Real Estate Lead Generation Platform",
    description:
      "Spearheaded development of a React and Express home search portal at Ylopo, significantly boosting lead generation. Implemented critical features including area search auto-complete and user registration.",
    image: "/projects/realestate.jpg",
    tags: ["React", "Express", "JavaScript", "Analytics"],
    link: "https://github.com/bilalsattar24/real-estate-platform",
    year: "2022-2023",
  },
];

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Vue", "Angular", "HTML/CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Java", "C#", "Django"],
  },
  {
    category: "Cloud & Tools",
    technologies: ["AWS", "Azure", "MongoDB", "REST APIs", "Git"],
  },
  {
    category: "Other",
    technologies: ["Agile", "Team Leadership", "Mentoring", "CI/CD"],
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
                  Motivated software engineer with over 7 years of experience
                  building scalable web applications and leading development
                  teams. Specialized in full-stack development with React,
                  TypeScript, and cloud technologies. Currently building
                  innovative solutions at Trestle Collaborative.
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
      <Box sx={{ py: 15, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              mb: 6,
              textAlign: "center",
              fontWeight: "bold",
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={project.title}>
                <Fade
                  in={true}
                  timeout={1000}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: theme.shadows[10],
                      },
                    }}>
                    <Box
                      sx={{
                        width: { xs: "100%", md: "40%" },
                        minHeight: { xs: 200, md: 300 },
                        position: "relative",
                        overflow: "hidden",
                      }}>
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    </Box>

                    <CardContent sx={{ flex: 1, p: 4 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          fontWeight="bold">
                          {project.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {project.year}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{ mb: 3, color: "text.secondary" }}>
                        {project.description}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 3,
                        }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            sx={{
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.primary.light}20)`,
                              border: "1px solid",
                              borderColor: "primary.main",
                              color: "primary.main",
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>

                      <Button
                        href={project.link}
                        target="_blank"
                        variant="outlined"
                        color="primary"
                        endIcon={<FaGithub />}
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          "&:hover": {
                            transform: "translateY(-2px)",
                          },
                        }}>
                        View Code
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
