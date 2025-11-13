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
  TrendingUp,
  Clock,
  CheckCircle,
  Activity,
  Image as ImageIcon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { colors, darkColors } from "../utils/constants";

export default function Dashboard() {
  const { isDark } = useTheme();

  const stats = [
    { label: "Total Uploads", value: "142", icon: <ImageIcon size={32} />, color: colors.persianGreen },
    { label: "Successful Detections", value: "138", icon: <CheckCircle size={32} />, color: colors.sandyBrown },
    { label: "Avg Processing Time", value: "1.4s", icon: <Clock size={32} />, color: colors.burntSienna },
    { label: "Detection Rate", value: "97.2%", icon: <TrendingUp size={32} />, color: colors.saffron },
  ];

  const recentActivity = [
    { name: "traffic_cam_01.jpg", objects: 3, time: "2 mins ago", status: "success" },
    { name: "security_night.jpg", objects: 2, time: "15 mins ago", status: "success" },
    { name: "wildlife_scan.jpg", objects: 5, time: "1 hour ago", status: "success" },
    { name: "industrial_qc.jpg", objects: 1, time: "2 hours ago", status: "success" },
    { name: "perimeter_check.jpg", objects: 4, time: "3 hours ago", status: "success" },
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
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={2}
            color={isDark ? darkColors.text : colors.charcoal}
          >
            Dashboard
          </Typography>
          <Typography
            variant="h6"
            color={isDark ? darkColors.textSecondary : "text.secondary"}
            mb={6}
          >
            Monitor your detection activity and performance metrics
          </Typography>

          {/* Stats Grid */}
          <Grid container spacing={3} mb={6}>
            {stats.map((stat, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      bgcolor: isDark ? darkColors.bgLight : "white",
                      borderLeft: `4px solid ${stat.color}`,
                    }}
                  >
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            color={stat.color}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            color={isDark ? darkColors.textSecondary : "text.secondary"}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                        <Box sx={{ color: stat.color }}>{stat.icon}</Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Recent Activity */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: isDark ? darkColors.bgLight : "white",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
              color={isDark ? darkColors.text : colors.charcoal}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Activity size={24} />
              Recent Activity
            </Typography>

            {recentActivity.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    bgcolor: isDark ? darkColors.accent : "#f5f5f5",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateX(5px)",
                      boxShadow: 2,
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <ImageIcon
                      size={24}
                      color={isDark ? darkColors.text : colors.charcoal}
                    />
                    <Box>
                      <Typography
                        fontWeight="medium"
                        color={isDark ? darkColors.text : colors.charcoal}
                      >
                        {activity.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        color={isDark ? darkColors.textSecondary : "text.secondary"}
                      >
                        {activity.objects} objects detected • {activity.time}
                      </Typography>
                    </Box>
                  </Box>
                  <CheckCircle size={20} color={colors.persianGreen} />
                </Box>
              </motion.div>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
