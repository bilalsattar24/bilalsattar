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

      {/* Statistics Section */}
      <Box sx={{ py: 6, bgcolor: theme.palette.primary.main + "08" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: "7+", label: "Years Experience" },
              { number: "10k+", label: "Active Users" },
              { number: "100+", label: "UI Components" },
              { number: "2.5k+", label: "Users Managed" },
            ].map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 4,
                    bgcolor: "background.paper",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: "background.paper",
          background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}05 100%)`,
        }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                textAlign: "center",
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Technical Expertise
            </Typography>
            <Grid container spacing={3}>
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
                        bgcolor: "background.paper",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        height: "100%",
                        transition: "transform 0.2s",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-8px)",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "4px",
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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

      {/* Experience Timeline Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: theme.palette.secondary.main + "08",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
          },
        }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              textAlign: "center",
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Professional Journey
          </Typography>
          <Box sx={{ position: "relative" }}>
            {[
              {
                company: "Trestle Collaborative",
                role: "Full Stack Software Engineer",
                period: "2023 - Present",
                description:
                  "Currently developing a custom CRM using Next.js and React to streamline the management of election candidates and officeholder relationships. I have established a library of over 100 reusable Chakra UI components based on Figma designs, ensuring design consistency across the application. Collaborating closely with the engineering manager, I am involved in data model design and constructing data pipelines to consolidate critical user data for approximately 2,500 users. Additionally, I have initiated best practices and development standards that are now adopted by the engineering team.",
              },
              {
                company: "Fantasy Basketball Wzrd",
                role: "Lead Software Engineer",
                period: "2017 - Present",
                description:
                  "Designed and developed a successful Chrome extension for Yahoo! and ESPN fantasy basketball, achieving over 10,000 weekly active users. I architected a Python Django backend that efficiently retrieves, transforms, and serves live basketball statistics data, complemented by a user-friendly web interface for statistical analysis. Leading a team of three developers, I implemented features for head-to-head matchups and competitor strength comparisons, while also fostering a community of thousands of users for feedback and support.",
              },
              {
                company: "Ylopo",
                role: "Full Stack Software Engineer",
                period: "2022 - 2023",
                description:
                  "Spearheaded the development of a React and Express home search portal for real estate agents, significantly enhancing lead generation for a platform serving over 4 million monthly users. I implemented critical user-facing features, including area search auto-complete and user registration modals. Collaborating with a cross-functional team, I played a key role in identifying and executing business initiatives while mentoring junior developers to ensure high-quality code delivery.",
              },
              {
                company: "Pariveda Solutions",
                role: "Senior Software Engineer",
                period: "2018 - 2022",
                description:
                  "Worked with multiple clients to address complex business challenges through advanced technology solutions. I engineered a full-stack web application for wildlife tracking using Java Spring and React, enhancing data analysis capabilities. My role included mentoring junior team members and managing project boards effectively, ensuring optimal resource allocation and task completion.",
              },
              {
                company: "Capital Insurance Group",
                role: "Associate Software Engineer",
                period: "2017 - 2018",
                description:
                  "Integrated multiple external web services into an existing Java codebase for insurance policy quoting, focusing on performance and maintainability. I represented the PolicyCenter team during company-wide releases and successfully built a new policy type, Commercial Umbrella, within a four-month timeframe.",
              },
            ].map((experience, index) => (
              <Box
                key={experience.company}
                sx={{
                  mb: 3,
                  p: 3,
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateX(10px)",
                  },
                }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Typography
                      variant="subtitle1"
                      color="primary.main"
                      fontWeight="bold">
                      {experience.period}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {experience.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="secondary.main"
                      gutterBottom>
                      {experience.company}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}>
                      {experience.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: "background.paper",
          background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}05 100%)`,
        }}></Box>
    </Box>
  );
}
