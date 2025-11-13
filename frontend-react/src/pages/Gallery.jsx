import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import { CheckCircle, Eye } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { colors, darkColors } from "../utils/constants";

export default function Gallery() {
  const { isDark } = useTheme();

  const sampleImages = [
    {
      title: "Night Security Patrol",
      objects: 2,
      confidence: 96.4,
      category: "Security",
      image: "/nir.png",
    },
    {
      title: "Traffic Monitoring",
      objects: 5,
      confidence: 93.7,
      category: "Traffic",
      image: "/visible.png",
    },
    {
      title: "Wildlife Detection",
      objects: 3,
      confidence: 91.2,
      category: "Wildlife",
      image: "/nir.png",
    },
    {
      title: "Industrial Quality Check",
      objects: 1,
      confidence: 98.1,
      category: "Industrial",
      image: "/visible.png",
    },
    {
      title: "Perimeter Surveillance",
      objects: 4,
      confidence: 94.8,
      category: "Security",
      image: "/nir.png",
    },
    {
      title: "Campus Monitoring",
      objects: 6,
      confidence: 89.5,
      category: "Traffic",
      image: "/visible.png",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Security":
        return colors.burntSienna;
      case "Traffic":
        return colors.sandyBrown;
      case "Wildlife":
        return colors.saffron;
      case "Industrial":
        return colors.persianGreen;
      default:
        return colors.charcoal;
    }
  };

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
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              fontWeight="bold"
              mb={2}
              color={isDark ? darkColors.text : colors.charcoal}
            >
              Detection Gallery
            </Typography>
            <Typography
              variant="h6"
              color={isDark ? darkColors.textSecondary : "text.secondary"}
            >
              Explore sample IR detections across various applications
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {sampleImages.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      bgcolor: isDark ? darkColors.bgLight : "white",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        objectFit: "cover",
                        borderBottom: `4px solid ${getCategoryColor(item.category)}`,
                      }}
                    />
                    <CardContent>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={1}
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={isDark ? darkColors.text : colors.charcoal}
                        >
                          {item.title}
                        </Typography>
                        <Chip
                          label={item.category}
                          size="small"
                          sx={{
                            bgcolor: getCategoryColor(item.category),
                            color: "white",
                            fontWeight: "bold",
                          }}
                        />
                      </Box>

                      <Box display="flex" alignItems="center" gap={1} mb={1}>
                        <Eye size={16} color={colors.persianGreen} />
                        <Typography
                          variant="body2"
                          color={isDark ? darkColors.textSecondary : "text.secondary"}
                        >
                          {item.objects} objects detected
                        </Typography>
                      </Box>

                      <Box display="flex" alignItems="center" gap={1}>
                        <CheckCircle size={16} color={colors.sandyBrown} />
                        <Typography
                          variant="body2"
                          color={isDark ? darkColors.textSecondary : "text.secondary"}
                        >
                          {item.confidence}% confidence
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
