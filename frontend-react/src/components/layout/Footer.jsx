import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { Camera, Github, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../utils/constants";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <Box
      sx={{
        bgcolor: isDark ? "#0f1922" : colors.charcoal,
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
              <Camera size={32} />
              <Typography variant="h6" fontWeight="bold">
                IR Detection
              </Typography>
            </Box>
            <Typography variant="body2" color="gray.400" mb={2}>
              Advanced Near-Infrared object detection powered by AI. See beyond
              visible light for 24/7 monitoring and analysis.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            {[
              { name: "Home", path: "/" },
              { name: "Upload Image", path: "/upload" },
              { name: "Dashboard", path: "/dashboard" },
              { name: "About", path: "/about" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray.400",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: colors.saffron },
                    transition: "0.3s",
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Connect
            </Typography>
            <Box display="flex" gap={2} mb={2}>
              <Github
                size={24}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/sajalg9/SE-PROJECT", "_blank")
                }
              />
              <Mail size={24} style={{ cursor: "pointer" }} />
            </Box>
            <Typography variant="body2" color="gray.400">
              Email: support@irdetection.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="gray.400" display="flex" justifyContent="center" alignItems="center" gap={0.5}>
            © {new Date().getFullYear()} IR Object Detection Platform. Made with{" "}
            <Heart size={16} fill={colors.burntSienna} color={colors.burntSienna} /> by PEC Team
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
