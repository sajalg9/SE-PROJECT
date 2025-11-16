import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import {
  Eye,
  Zap,
  Shield,
  Brain,
  Target,
  Clock,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { colors, darkColors } from "../utils/constants";

export default function About() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: <Eye size={40} />,
      title: "IR Vision",
      description: "See beyond visible spectrum with Near-Infrared imaging technology for 24/7 detection.",
      color: colors.persianGreen,
    },
    {
      icon: <Brain size={40} />,
      title: "AI-Powered",
      description: "Advanced deep learning models trained on thousands of IR images for accurate detection.",
      color: colors.sandyBrown,
    },
    {
      icon: <Zap size={40} />,
      title: "Real-Time Processing",
      description: "Fast detection with sub-2 second processing time for immediate results.",
      color: colors.burntSienna,
    },
    {
      icon: <Shield size={40} />,
      title: "Secure & Private",
      description: "Your images are processed securely and never stored without your permission.",
      color: colors.saffron,
    },
    {
      icon: <Target size={40} />,
      title: "High Accuracy",
      description: "High detection accuracy across various lighting conditions and environments.",
      color: colors.charcoal,
    },
    {
      icon: <Clock size={40} />,
      title: "24/7 Monitoring",
      description: "Works in complete darkness and harsh weather conditions.",
      color: colors.persianGreen,
    },
  ];

  const techStack = [
    "Deep Learning (CNN, YOLO)",
    "Python & TensorFlow",
    "React & Material-UI",
    "Cloud Processing",
    "Real-time Analytics",
  ];

  return (
    <Box
      sx={{
        py: 6,
        minHeight: "calc(100vh - 200px)",
        bgcolor: isDark ? darkColors.bg : "#fafafa",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              fontWeight="bold"
              mb={2}
              color={isDark ? darkColors.text : colors.charcoal}
            >
              About IR Object Detection Platform
            </Typography>
            <Typography
              variant="h6"
              color={isDark ? darkColors.textSecondary : "text.secondary"}
              maxWidth="800px"
              mx="auto"
            >
              A cutting-edge AI platform leveraging Infrared imaging for
              superior object detection in any lighting condition. Built for
              security, surveillance, and automation applications.
            </Typography>
          </Box>

          {/* Features Grid */}
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={4}
            color={isDark ? darkColors.text : colors.charcoal}
          >
            Key Features
          </Typography>
          <Grid container spacing={3} mb={8} justifyContent="center">
            {features.map((feature, i) => (
              <Grid item  key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: "100%",
                      minHeight: 200,
                      bgcolor: isDark ? darkColors.bgLight : "white",
                      borderTop: `4px solid ${feature.color}`,
                      transition: "0.3s",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          color: feature.color,
                          mb: 2,
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        mb={1}
                        color={isDark ? darkColors.text : colors.charcoal}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        color={isDark ? darkColors.textSecondary : "text.secondary"}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Technology Stack */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: isDark ? darkColors.bgLight : "white",
              mb: 6,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={3}
              color={isDark ? darkColors.text : colors.charcoal}
            >
              Technology Stack
            </Typography>
            <Grid container spacing={2}>
              {techStack.map((tech, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: isDark ? darkColors.accent : colors.persianGreen + "15",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontWeight="medium"
                        color={isDark ? darkColors.text : colors.charcoal}
                      >
                        {tech}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* How It Works */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: isDark
                ? `linear-gradient(135deg, ${darkColors.bgLight}, ${darkColors.accent})`
                : `linear-gradient(135deg, ${colors.persianGreen}15, ${colors.charcoal}10)`,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={3}
              color={isDark ? darkColors.text : colors.charcoal}
            >
              How It Works
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  step: "1",
                  title: "Capture/Upload",
                  desc: "Upload IR images from your camera or device",
                },
                {
                  step: "2",
                  title: "Analysis",
                  desc: "Our deep learning model processes the image",
                },
                {
                  step: "3",
                  title: "Object Detection",
                  desc: "Identifies and locates objects with confidence scores",
                },
                {
                  step: "4",
                  title: "Results",
                  desc: "View detailed results and download reports",
                },
                {
                  step: "5",
                  title: "  Save the Images",
                  desc: "Uploaded Images are stored to re-train the model ",
                },
              ].map((item, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <Box textAlign="center">
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: colors.persianGreen,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 24,
                          fontWeight: "bold",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        {item.step}
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        mb={1}
                        color={isDark ? darkColors.text : colors.charcoal}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={isDark ? darkColors.textSecondary : "text.secondary"}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
