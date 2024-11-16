"use client";

import { FaCode, FaDatabase, FaMobile, FaCloud } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Icon,
} from "@mui/material";

const expertise = [
  {
    title: "Full-Stack Development",
    icon: FaCode,
    description:
      "Building complete web applications using React, Next.js, Node.js, and modern cloud infrastructure",
  },
  {
    title: "Database Architecture",
    icon: FaDatabase,
    description:
      "Designing and implementing efficient database solutions with PostgreSQL, MongoDB, and Redis",
  },
  {
    title: "Mobile Development",
    icon: FaMobile,
    description:
      "Creating cross-platform mobile experiences using React Native and native iOS development",
  },
  {
    title: "Cloud Architecture",
    icon: FaCloud,
    description:
      "Architecting scalable solutions using AWS, with expertise in serverless and containerization",
  },
];

const recentWork = [
  {
    name: "E-commerce Platform",
    description: "Built a scalable marketplace",
    year: 2023,
  },
  {
    name: "FinTech Application",
    description: "Developed secure payment systems",
    year: 2023,
  },
  {
    name: "Healthcare Portal",
    description: "Created patient management system",
    year: 2022,
  },
  {
    name: "Sports Analytics",
    description: "Real-time data processing platform",
    year: 2022,
  },
];

export default function Home() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Expertise Section */}
        <Typography variant="h3" component="h2" gutterBottom>
          What I Do
        </Typography>
        <Grid container spacing={4}>
          {expertise.map((skill) => (
            <Grid item xs={12} sm={6} md={3} key={skill.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mb: 2,
                    }}>
                    <Icon component={skill.icon} sx={{ fontSize: 40, mb: 2 }} />
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      align="center">
                      {skill.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center">
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Work Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Recent Work
          </Typography>
          <Grid container spacing={3}>
            {recentWork.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.name}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 1, display: "block" }}>
                      {project.year}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
