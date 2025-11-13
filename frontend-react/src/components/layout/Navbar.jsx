import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Camera, Sun, Moon, Menu, X } from "lucide-react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../utils/constants";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Upload", path: "/upload" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      sx={{
        bgcolor: isDark ? "#16213e" : colors.charcoal,
        color: "white",
        py: 2,
        boxShadow: 3,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "background-color 0.3s",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Camera size={36} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                IR Object Detection
              </Typography>
              <Typography variant="caption" color={colors.saffron}>
                AI-Powered Vision System
              </Typography>
            </Box>
          </Box>
        </Link>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: isActive(link.path) ? colors.saffron : "white",
                  cursor: "pointer",
                  fontWeight: isActive(link.path) ? "bold" : "normal",
                  "&:hover": { color: colors.saffron },
                  transition: "0.3s",
                }}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
          
          {/* Dark Mode Toggle */}
          <IconButton onClick={toggleTheme} sx={{ color: "white" }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
          <IconButton onClick={toggleTheme} sx={{ color: "white" }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ color: "white" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            bgcolor: isDark ? "#0f1922" : colors.charcoal,
            mt: 2,
            py: 2,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ textDecoration: "none" }}
              onClick={() => setMobileOpen(false)}
            >
              <Typography
                variant="body1"
                sx={{
                  color: isActive(link.path) ? colors.saffron : "white",
                  py: 1.5,
                  px: 3,
                  fontWeight: isActive(link.path) ? "bold" : "normal",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  transition: "0.3s",
                }}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}
