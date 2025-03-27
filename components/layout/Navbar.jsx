import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import logo from "../../src/assets/logo1.jpeg";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Hospitality", path: "/hospitality" },
  { name: "Projects", path: "/projects" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolling ? "rgba(16,34,20,255)" : "transparent",
        boxShadow: scrolling ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Mobile: Hamburger Left, Logo Center */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", flexGrow: 1 }}>
            <IconButton size="large" onClick={handleOpenNavMenu} sx={{ color: scrolling ? "white" : "white" }}>
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              <img src={logo} alt="Logo" style={{ height: "50px", cursor: "pointer" }} onClick={() => navigate("/")} />
            </Box>
          </Box>

          {/* Desktop: Logo Left, Items Right */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <img src={logo} alt="Logo" style={{ height: "60px", cursor: "pointer" }} onClick={() => navigate("/")} />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto", gap: 2 }}>
            {pages.map((page) => (
              <motion.div key={page.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => handleNavigate(page.path)}
                  sx={{
                    color: scrolling ? "white" : "white",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    textTransform: "none",
                    fontFamily: "'Poppins', sans-serif",
                    transition: "color 0.3s",
                    "&:hover": { color: "#007BFF" },
                  }}
                >
                  {page.name}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Profile Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  color: "white",
                  backdropFilter: "blur(12px)",
                  borderRadius: "10px",
                },
              }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ fontWeight: "bold", color: "white" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Dropdown Menu */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
                marginTop: "10px",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>
                <Typography textAlign="center" sx={{ fontWeight: "bold", color: "white" }}>
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
