import React from "react";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

export default function Layout({ children }) {
  const { isDark } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: isDark ? "#1a1a2e" : "#fafafa",
        color: isDark ? "#eee" : "#333",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <Navbar />
      <Toaster position="top-right" />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
