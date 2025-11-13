import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
  Chip,
  LinearProgress,
} from "@mui/material";
import {
  Upload as UploadIcon,
  Scan,
  CheckCircle,
  Image as ImageIcon,
  Download,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { colors, darkColors } from "../utils/constants";

export default function Upload() {
  const { isDark } = useTheme();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setResults(null);
      };
      reader.readAsDataURL(file);
      toast.success("Image loaded successfully!");
    } else {
      toast.error("Please select a valid image file");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setResults(null);
      };
      reader.readAsDataURL(file);
      toast.success("Image loaded successfully!");
    } else {
      toast.error("Please drop a valid image file");
    }
    setIsDragging(false);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsProcessing(true);
      toast.loading("Processing image...", { id: "processing" });

      // Simulate AI processing
      setTimeout(() => {
        setIsProcessing(false);
        toast.success("Detection complete!", { id: "processing" });
        
        // Mock results
        setResults({
          objectsDetected: Math.floor(Math.random() * 5) + 1,
          confidence: (Math.random() * 15 + 85).toFixed(1),
          processingTime: (Math.random() * 1.5 + 0.5).toFixed(2),
          detections: [
            { object: "Person", confidence: 94.2, x: 120, y: 80 },
            { object: "Vehicle", confidence: 89.7, x: 300, y: 150 },
            { object: "Animal", confidence: 87.3, x: 450, y: 200 },
          ].slice(0, Math.floor(Math.random() * 3) + 1),
        });
      }, 2500);
    } else {
      toast.error("Please select an image first");
    }
  };

  const handleDownload = () => {
    toast.success("Results downloaded!");
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
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={2}
            color={isDark ? darkColors.text : colors.charcoal}
            textAlign="center"
          >
            Upload & Detect
          </Typography>
          <Typography
            variant="h6"
            color={isDark ? darkColors.textSecondary : "text.secondary"}
            mb={6}
            textAlign="center"
          >
            Upload a Near-Infrared image and let AI identify objects
          </Typography>

          <Grid container spacing={4}>
            {/* Upload Section */}
            <Grid item xs={12} md={6}>
              <Paper
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                elevation={isDragging ? 8 : 2}
                sx={{
                  p: 6,
                  border: `3px dashed ${isDark ? colors.saffron : colors.persianGreen}`,
                  borderRadius: 3,
                  cursor: "pointer",
                  bgcolor: isDragging
                    ? isDark
                      ? darkColors.accent
                      : "#e0f2f1"
                    : isDark
                    ? darkColors.bgLight
                    : "white",
                  transition: "0.3s",
                  textAlign: "center",
                  minHeight: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="file-upload"
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
                />
                <label htmlFor="file-upload" style={{ cursor: "pointer", width: "100%" }}>
                  {preview ? (
                    <Box>
                      <img
                        src={preview}
                        alt="Preview"
                        style={{
                          maxWidth: "100%",
                          maxHeight: 250,
                          borderRadius: 12,
                          border: `4px solid ${colors.saffron}`,
                        }}
                      />
                      <Typography
                        variant="body2"
                        color={isDark ? darkColors.textSecondary : "text.secondary"}
                        mt={2}
                      >
                        Click to change image
                      </Typography>
                    </Box>
                  ) : (
                    <Box>
                      <UploadIcon
                        size={64}
                        color={isDark ? colors.saffron : colors.persianGreen}
                      />
                      <Typography
                        variant="h6"
                        color={isDark ? darkColors.text : colors.charcoal}
                        fontWeight="medium"
                        mt={2}
                      >
                        Drag & Drop or Click to Upload
                      </Typography>
                      <Typography
                        variant="caption"
                        color={isDark ? darkColors.textSecondary : "text.secondary"}
                      >
                        Supports JPG, PNG, BMP
                      </Typography>
                    </Box>
                  )}
                </label>
              </Paper>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={isProcessing ? <Scan /> : <Scan />}
                onClick={handleUpload}
                disabled={!selectedFile || isProcessing}
                sx={{
                  mt: 3,
                  bgcolor: colors.persianGreen,
                  "&:hover": { bgcolor: colors.charcoal },
                  py: 1.5,
                }}
              >
                {isProcessing ? "Analyzing..." : "Analyze Image"}
              </Button>

              {isProcessing && (
                <Box mt={2}>
                  <LinearProgress
                    sx={{
                      bgcolor: isDark ? darkColors.bgLight : "#e0e0e0",
                      "& .MuiLinearProgress-bar": {
                        bgcolor: colors.saffron,
                      },
                    }}
                  />
                </Box>
              )}
            </Grid>

            {/* Results Section */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: isDark ? darkColors.bgLight : "white",
                  minHeight: 300,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={3}
                  color={isDark ? darkColors.text : colors.charcoal}
                >
                  Detection Results
                </Typography>

                {results ? (
                  <Box>
                    {/* Summary Stats */}
                    <Grid container spacing={2} mb={3}>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" fontWeight="bold" color={colors.persianGreen}>
                            {results.objectsDetected}
                          </Typography>
                          <Typography
                            variant="caption"
                            color={isDark ? darkColors.textSecondary : "text.secondary"}
                          >
                            Objects
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" fontWeight="bold" color={colors.sandyBrown}>
                            {results.confidence}%
                          </Typography>
                          <Typography
                            variant="caption"
                            color={isDark ? darkColors.textSecondary : "text.secondary"}
                          >
                            Confidence
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" fontWeight="bold" color={colors.burntSienna}>
                            {results.processingTime}s
                          </Typography>
                          <Typography
                            variant="caption"
                            color={isDark ? darkColors.textSecondary : "text.secondary"}
                          >
                            Time
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* Detected Objects */}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      mb={2}
                      color={isDark ? darkColors.text : colors.charcoal}
                    >
                      Detected Objects
                    </Typography>
                    {results.detections.map((detection, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 2,
                          mb: 2,
                          borderRadius: 2,
                          bgcolor: isDark ? darkColors.accent : "#f5f5f5",
                        }}
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <CheckCircle size={20} color={colors.persianGreen} />
                          <Typography
                            fontWeight="medium"
                            color={isDark ? darkColors.text : colors.charcoal}
                          >
                            {detection.object}
                          </Typography>
                        </Box>
                        <Chip
                          label={`${detection.confidence}%`}
                          size="small"
                          sx={{
                            bgcolor: colors.saffron,
                            color: colors.charcoal,
                            fontWeight: "bold",
                          }}
                        />
                      </Box>
                    ))}

                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<Download />}
                      onClick={handleDownload}
                      sx={{
                        mt: 3,
                        borderColor: colors.persianGreen,
                        color: colors.persianGreen,
                        "&:hover": {
                          borderColor: colors.charcoal,
                          bgcolor: isDark ? darkColors.accent : "#f5f5f5",
                        },
                      }}
                    >
                      Download Results
                    </Button>
                  </Box>
                ) : (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    color={isDark ? darkColors.textSecondary : "text.secondary"}
                  >
                    <ImageIcon size={64} />
                    <Typography variant="body1" mt={2}>
                      Upload and analyze an image to see results
                    </Typography>
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
