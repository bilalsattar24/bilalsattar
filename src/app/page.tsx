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
} from "@mui/material";

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
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "80vh", md: "100vh" },
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          paddingTop: { xs: "2rem", md: 0 },
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
                  A highly motivated software engineer, I bring over nine years
                  of expertise in crafting scalable web applications and
                  steering development teams towards success. My specialization
                  lies in full-stack development, where I excel with
                  technologies like React, TypeScript, and various cloud
                  platforms. At Trestle Collaborative, I&apos;m currently
                  channeling my passion into creating groundbreaking solutions
                  that address real-world challenges. My approach is rooted in
                  innovation, sustainability, and the relentless pursuit of
                  excellence in every line of code I write.
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
                    height: "100%",
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    gap: 3,
                  }}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      bgcolor: "background.paper",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      border: `1px solid ${theme.palette.primary.main}15`,
                      position: "relative",
                      overflow: "hidden",
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
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}>
                      Featured Project: Fantasy Basketball WZRD
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 2, color: "text.secondary" }}>
                      A successful Chrome extension serving over 10,000 active
                      users, helping fantasy basketball enthusiasts dominate
                      their leagues with advanced analytics and automation.
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                      {["Python", "Django", "Chrome Extension", "React"].map(
                        (tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 2,
                              py: 0.5,
                              borderRadius: 2,
                              bgcolor: `${theme.palette.primary.main}10`,
                              color: "primary.main",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}>
                            {tech}
                          </Box>
                        )
                      )}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography
                          variant="h6"
                          color="primary.main"
                          fontWeight="bold">
                          4.6★
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "24px",
                          width: "1px",
                          bgcolor: "divider",
                        }}
                      />
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography
                          variant="h6"
                          color="primary.main"
                          fontWeight="bold">
                          10K+
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Active Users
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
          <Box
            sx={{
              mt: 4,
              bgcolor: "background.default",
              p: 3,
              borderRadius: 2,
            }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Technology and sports are my twin passions, fueling my career in
              software development and leadership. I bring a unique perspective
              to tech solutions, inspired by the dynamics of athletic
              performance and team sports. My expertise in cloud architecture
              and web development allows me to innovate in ways that enhance
              sports analytics, fan engagement, and athlete performance
              tracking. Leading teams in collaborative, dynamic settings, I
              strive for excellence and continuous improvement, always looking
              to score with smart technology.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ py: 6, bgcolor: theme.palette.primary.main + "08" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: "9+", label: "Years Experience" },
              { number: "10k+", label: "Active Users" },
              { number: "500+", label: "UI Components" },
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
                  "I'm currently at the helm of developing a bespoke Customer Relationship Management (CRM) system using Next.js and React, designed to optimize the handling of election candidates and officeholder interactions. My commitment to design integrity has led me to curate over 100 reusable components with Chakra UI, directly translating our Figma designs into a consistent and visually coherent application. In partnership with our engineering manager, I've played a pivotal role in architecting our data models and engineering robust data pipelines that efficiently manage and consolidate essential information for around 2,500 users. Beyond coding, I've spearheaded the adoption of coding best practices and development standards, which have now become integral to our team's workflow, elevating our collective output and maintainability of our software.",
              },
              {
                company: "Fantasy Basketball Wzrd",
                role: "Founder and Lead Developer",
                period: "2017 - Present",
                description:
                  "I spearheaded the design and development of a highly successful Chrome extension tailored for Yahoo! and ESPN fantasy basketball, which quickly garnered over 10,000 weekly active users. My role involved architecting a robust Python Django backend, which adeptly fetches, processes, and delivers real-time basketball statistics, enhancing the user experience with a seamlessly integrated web interface for in-depth statistical analysis. As the lead of a three-person development team, I introduced innovative features like head-to-head matchup insights and competitor strength analyses, significantly enriching the fantasy basketball experience. Additionally, I cultivated an engaged community comprising thousands of users, leveraging their input to refine and enhance the extension, ensuring it meets the evolving needs of fantasy sports enthusiasts.",
              },
              {
                company: "Ylopo",
                role: "Full Stack Software Engineer",
                period: "2022 - 2023",
                description:
                  "I took the lead in developing a dynamic home search portal using React and Express, specifically tailored for real estate agents, which has markedly increased lead generation on a platform with more than 4 million monthly users. My contributions included the implementation of essential user-centric features like an area search auto-complete and streamlined user registration modals, designed to enhance usability and engagement.",
              },
              {
                company: "Pariveda Solutions",
                role: "Senior Software Engineer",
                period: "2018 - 2022",
                description:
                  "I engage with a variety of clients to confront and solve complex business challenges by implementing advanced technology solutions. One notable project I spearheaded was the development of a full-stack web application for wildlife tracking, which I engineered using Java Spring for backend processing and React for the frontend, thereby enhancing our data analysis capabilities. Beyond coding, my role encompasses mentoring junior team members, providing them with the guidance needed to grow professionally. I also manage project boards, ensuring that resources are allocated efficiently and tasks are completed on time, which collectively contributes to the successful delivery of projects within scope.",
              },
              {
                company: "Capital Insurance Group",
                role: "Associate Software Engineer",
                period: "2017 - 2018",
                description:
                  "Integrated multiple external web services into an existing Java codebase for insurance policy quoting, focusing on performance and maintainability. I represented the PolicyCenter team during company-wide releases and successfully built a new policy type, Commercial Umbrella, within a four-month timeframe.",
              },
            ].map((experience) => (
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
