import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  Upload,
  Play,
  Lock,
  Activity,
  Target,
  Brain,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { colors, darkColors, applications, stats } from "../utils/constants";

export default function Home() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const getIcon = (title) => {
    switch (title) {
      case "Perimeter Security":
        return <Lock size={40} color="#fff" />;
      case "Traffic Monitoring":
        return <Activity size={40} color="#fff" />;
      case "Wildlife Tracking":
        return <Target size={40} color="#fff" />;
      case "Industrial Automation":
        return <Brain size={40} color="#fff" />;
      default:
        return <Activity size={40} color="#fff" />;
    }
  };

  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: isDark
            ? `linear-gradient(135deg, ${darkColors.bgLight}, ${darkColors.accent})`
            : `linear-gradient(135deg, ${colors.charcoal}, ${colors.persianGreen})`,
          color: "white",
          textAlign: "center",
          py: 12,
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <motion.div {...fadeIn}>
            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 2 }}
            >
              See Beyond Visible Light
            </Typography>
            <Typography variant="h6" color="#e0e0e0" sx={{ mb: 5 }}>
              Harness the power of Near-Infrared imaging and AI for superior
              object detection — anytime, anywhere.
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                startIcon={<Upload />}
                sx={{
                  bgcolor: colors.burntSienna,
                  "&:hover": { bgcolor: colors.sandyBrown },
                }}
                onClick={() => navigate("/upload")}
              >
                Upload & Detect
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Play />}
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: colors.saffron,
                  },
                }}
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* QUICK STATS */}
      <Box
        sx={{
          py: 6,
          bgcolor: isDark ? darkColors.bgLight : "white",
          borderBottom: `4px solid ${colors.saffron}`,
        }}
      >
        <Container>
          <Grid container spacing={3} textAlign="center">
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Typography variant="h4" fontWeight="bold" color={stat.color}>
                    {stat.value}
                  </Typography>
                  <Typography
                    color={isDark ? darkColors.textSecondary : "text.secondary"}
                  >
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* APPLICATIONS */}
      <Box
        id="applications"
        sx={{
          py: 10,
          bgcolor: isDark ? darkColors.bg : "white",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            align="center"
            color={isDark ? darkColors.text : colors.charcoal}
            fontWeight="bold"
            mb={3}
          >
            Applications of IR Detection
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color={isDark ? darkColors.textSecondary : "text.secondary"}
            mb={6}
          >
            Explore how IR vision empowers smart surveillance, safety, and
            automation.
          </Typography>

          <Grid container spacing={4}>
            {applications.map((app, i) => (
              <Grid item xs={12} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    elevation={4}
                    sx={{
                      borderTop: `5px solid ${app.color}`,
                      borderRadius: 3,
                      bgcolor: isDark ? darkColors.bgLight : "white",
                      height: "100%",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          backgroundColor: app.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        {getIcon(app.title)}
                      </Box>
                      <Typography
                        variant="h6"
                        color={isDark ? darkColors.text : colors.charcoal}
                        fontWeight="bold"
                      >
                        {app.title}
                      </Typography>
                      <Typography
                        color={
                          isDark ? darkColors.textSecondary : "text.secondary"
                        }
                      >
                        {app.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA SECTION */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: isDark
            ? `linear-gradient(145deg, ${darkColors.accent}50, ${darkColors.bgLight})`
            : `linear-gradient(145deg, ${colors.persianGreen}15, ${colors.charcoal}15)`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={2}
            color={isDark ? darkColors.text : colors.charcoal}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="h6"
            color={isDark ? darkColors.textSecondary : "text.secondary"}
            mb={4}
          >
            Upload your Near-Infrared images and experience AI-powered detection
            in action.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Upload />}
            sx={{
              bgcolor: colors.persianGreen,
              "&:hover": { bgcolor: colors.charcoal },
              px: 4,
              py: 1.5,
            }}
            onClick={() => navigate("/upload")}
          >
            Start Detection
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
