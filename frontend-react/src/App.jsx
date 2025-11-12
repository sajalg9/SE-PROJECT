import React, { useState } from "react";
import {
  Camera,
  Shield,
  Zap,
  Eye,
  Sun,
  Moon,
  CheckCircle,
  Upload,
  AlertCircle,
  Info,
  Target,
  Layers,
  Activity,
  Brain,
  Scan,
  Clock,
  Cloud,
  ThermometerSun,
  Lock,
  Play,
  Image as ImageIcon,
} from "lucide-react";

import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Container,
  Divider,
} from "@mui/material";

// === COLOR PALETTE ===
const colors = {
  charcoal: "#264653",
  persianGreen: "#2a9d8f",
  saffron: "#e9c46a",
  sandyBrown: "#f4a261",
  burntSienna: "#e76f51",
};

export default function NIRDetectionPlatform() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState("how-it-works");
  const [showDemo, setShowDemo] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
    setIsDragging(false);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        alert(
          "Processing complete! (This would connect to your AI detection model.)"
        );
      }, 2000);
    }
  };

  const applications = [
    {
      icon: <Lock size={40} color="#fff" />,
      title: "Perimeter Security",
      description:
        "24/7 monitoring of restricted areas with automatic intrusion detection",
      color: colors.burntSienna,
    },
    {
      icon: <Activity size={40} color="#fff" />,
      title: "Traffic Monitoring",
      description:
        "Vehicle detection and counting in all weather and lighting conditions",
      color: colors.sandyBrown,
    },
    {
      icon: <Target size={40} color="#fff" />,
      title: "Wildlife Tracking",
      description:
        "Non-invasive animal monitoring and behavior analysis in natural habitats",
      color: colors.saffron,
    },
    {
      icon: <Brain size={40} color="#fff" />,
      title: "Industrial Automation",
      description:
        "Quality control and defect detection in manufacturing processes",
      color: colors.persianGreen,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
      {/* HEADER */}
      <Box
        sx={{
          bgcolor: colors.charcoal,
          color: "white",
          py: 2,
          boxShadow: 3,
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            <Camera size={36} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                NIR Object Detection
              </Typography>
              <Typography variant="caption" color={colors.saffron}>
                AI-Powered Vision System
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {["Features", "Technology", "Applications", "Upload"].map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: colors.saffron },
                  transition: "0.3s",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.charcoal}, ${colors.persianGreen})`,
          color: "white",
          textAlign: "center",
          py: 12,
          px: 2,
        }}
      >
        <Container maxWidth="md">
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
              onClick={() =>
                document
                  .getElementById("upload")
                  .scrollIntoView({ behavior: "smooth" })
              }
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
              onClick={() => setShowDemo(!showDemo)}
            >
              Watch Demo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* QUICK STATS */}
      <Box sx={{ py: 6, bgcolor: "white", borderBottom: `4px solid ${colors.saffron}` }}>
        <Container>
          <Grid container spacing={3} textAlign="center">
            {[
              { label: "All-Day Monitoring", value: "24/7", color: colors.charcoal },
              { label: "Detection Accuracy", value: "98%", color: colors.persianGreen },
              { label: "Processing Time", value: "<2s", color: colors.sandyBrown },
              { label: "Range in Dark", value: "∞", color: colors.burntSienna },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Typography variant="h4" fontWeight="bold" color={stat.color}>
                  {stat.value}
                </Typography>
                <Typography color="text.secondary">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* APPLICATIONS */}
      <Box id="applications" sx={{ py: 10, bgcolor: "white" }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            color={colors.charcoal}
            fontWeight="bold"
            mb={3}
          >
            Applications of NIR Detection
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            mb={6}
          >
            Explore how NIR vision empowers smart surveillance, safety, and automation.
          </Typography>

          <Grid container spacing={4}>
            {applications.map((app, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Card
                  elevation={4}
                  sx={{
                    borderTop: `5px solid ${app.color}`,
                    borderRadius: 3,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
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
                      {app.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      color={colors.charcoal}
                      fontWeight="bold"
                    >
                      {app.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {app.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* UPLOAD SECTION */}
      <Box
        id="upload"
        sx={{
          py: 10,
          textAlign: "center",
          background: `linear-gradient(145deg, ${colors.persianGreen}15, ${colors.charcoal}15)`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={2}
            color={colors.charcoal}
          >
            Try It Yourself
          </Typography>
          <Typography variant="h6" color="text.secondary" mb={6}>
            Upload a Near-Infrared image and watch the AI in action.
          </Typography>

          <Paper
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            elevation={isDragging ? 8 : 2}
            sx={{
              p: 6,
              border: `3px dashed ${colors.persianGreen}`,
              borderRadius: 3,
              cursor: "pointer",
              bgcolor: isDragging ? "#e0f2f1" : "white",
              transition: "0.3s",
            }}
          >
            <input
              type="file"
              accept="image/*"
              id="file-upload"
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <Upload size={48} color={colors.persianGreen} />
              <Typography variant="body1" color={colors.charcoal} fontWeight="medium">
                Drag & Drop or Click to Upload
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Supports JPG, PNG, BMP
              </Typography>
            </label>
          </Paper>

          {preview && (
            <Box mt={5}>
              <img
                src={preview}
                alt="Preview"
                style={{
                  maxWidth: "80%",
                  borderRadius: 12,
                  border: `4px solid ${colors.saffron}`,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
              />
              <Button
                variant="contained"
                startIcon={
                  isProcessing ? (
                    <Activity className="spin" />
                  ) : (
                    <Scan />
                  )
                }
                onClick={handleUpload}
                disabled={isProcessing}
                sx={{
                  mt: 3,
                  bgcolor: colors.persianGreen,
                  "&:hover": { bgcolor: colors.charcoal },
                }}
              >
                {isProcessing ? "Processing..." : "Analyze Image"}
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: colors.charcoal, color: "white", py: 4, textAlign: "center" }}>
        <Typography variant="body2" color="gray.400">
          © {new Date().getFullYear()} NIR Object Detection Platform. Built with React + MUI.
        </Typography>
      </Box>
    </Box>
  );
}
