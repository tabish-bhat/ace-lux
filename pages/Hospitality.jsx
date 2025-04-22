import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import backgroundImage from "../src/assets/project4.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import riverwalk from "../src/assets/hero3.jpeg";

const ZameenAceMallPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [location, setLocation] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  // Combined data for carousel items and their corresponding detailed content
  const projectData = [
    {
      image: backgroundImage,
      title: "Zameen Ace Mall",
      description: "The Ultimate Mixed-Use Destination for Luxury, Business & Living.",
      detailedDescription: "Located in the heart of DHA Phase 2, Islamabad, Zameen Ace Mall is an architectural marvel and a hub of luxury living and commerce. Expanding our hospitality footprint, The Ace Luxe is set to introduce Hotel Apartments & a Business Center, offering an elite accommodation and corporate experience like no other. Our hospitality ventures are built on a legacy of excellence, ensuring that every stay, every meal, and every business engagement is an experience to remember.",
      features: [
        "Hotel Apartments – A seamless fusion of residential comfort and hotel luxury",
        "Business Center – Premium space for professionals with modern workspaces",
        "Luxury Shopping – International and local brands under one roof",
        "Fine Dining – World-class restaurants and cafes"
      ]
    },
    {
      image: riverwalk,
      title: "Riverwalk",
      description: "A vibrant waterfront destination offering a unique blend of leisure, dining, and retail experiences.",
      detailedDescription: "Nestled along the serene banks of the river, Riverwalk is a premier destination that combines natural beauty with modern luxury. This waterfront development features expansive promenades, exclusive boutiques, and fine dining establishments with spectacular views. Whether you're looking for a peaceful retreat or an exciting day out, Riverwalk offers something for everyone.",
      features: [
        "Waterfront Dining – Restaurants with panoramic river views",
        "Luxury Retail – Exclusive shopping experience with premium brands",
        "Riverside Apartments – Contemporary living spaces with nature at your doorstep",
        "Recreation Areas – Parks, walking trails, and outdoor activity spaces"
      ]
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    let interval;
    if (!isFormOpen) {
      interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % projectData.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [projectData.length, isFormOpen]);

  // Carousel navigation
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % projectData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + projectData.length) % projectData.length);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Hero Carousel Section */}
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Carousel */}
        <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
          {projectData.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: activeSlide === index ? 1 : 0,
                transition: "opacity 3s ease-in-out",
                background: `url(${item.image}) center/cover`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.6)",
                }
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "white",
                  px: 3,
                }}
              >
                <motion.div
                  key={index}
                  initial={{ y: -50, opacity: 0 }}
                  animate={activeSlide === index ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 2, maxWidth: "600px", mx: "auto" }}>
                    {item.description}
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          ))}

          {/* Carousel Navigation */}
          <Box sx={{ position: "absolute", bottom: "50px", width: "100%", display: "flex", justifyContent: "center", gap: 2 }}>
            {projectData.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActiveSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: activeSlide === index ? "#03A3E0" : "rgba(255,255,255,0.5)",
                  cursor: "pointer"
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              background: "rgba(0,0,0,0.3)",
              "&:hover": { background: "rgba(0,0,0,0.5)" }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              background: "rgba(0,0,0,0.3)",
              "&:hover": { background: "rgba(0,0,0,0.5)" }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Call to Action Button - Removed from hero slider */}
          <Box sx={{ position: "absolute", bottom: "120px", width: "100%", display: "flex", justifyContent: "center" }}>
          </Box>
        </Box>
      </Box>

      {/* Dynamic Content Section based on active carousel item */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 6, textAlign: "center" }}>
          Discover {projectData[activeSlide].title}
        </Typography>

        {/* Project Content That Changes Based on Active Slide */}
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              key={`image-${activeSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card sx={{ 
                borderRadius: "15px", 
                overflow: "hidden", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)" 
              }}>
                <CardMedia
                  component="img"
                  height="500"
                  image={projectData[activeSlide].image}
                  alt={projectData[activeSlide].title}
                />
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              key={`content-${activeSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                {projectData[activeSlide].title}
              </Typography>
              <Typography variant="body1" sx={{ color: "gray", mb: 3 }}>
                {projectData[activeSlide].detailedDescription}
              </Typography>
              
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Key Features
              </Typography>
              
              {projectData[activeSlide].features.map((feature, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#03A3E0",
                      mr: 2
                    }}
                  />
                  <Typography variant="body1" sx={{ color: "gray" }}>
                    {feature}
                  </Typography>
                </Box>
              ))}
              
              <Box sx={{ mt: 4 }}>
                {projectData[activeSlide].title === "Riverwalk" && (
                  <Button
                    variant="contained"
                    sx={{
                      background: "#03A3E0",
                      borderRadius: "20px",
                      px: 4,
                      py: 1.5,
                      color: "white",
                      "&:hover": { background: "#0282BE" },
                    }}
                    onClick={() => setIsFormOpen(true)}
                  >
                    Check Availability
                  </Button>
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Consultation Form Modal */}
      <Modal 
        open={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            px: 2,
          }}
        >
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(15px)",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "500px",
              width: "100%",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              color: "black",
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
              }}
            >
              Check Availability - Riverwalk
            </Typography>

            <form>
              <TextField
                select
                label="Property Type"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
                sx={{
                  mb: 2,
                  background: "white",
                  borderRadius: "5px",
                  "& .MuiInputBase-input": { color: "#333" },
                }}
              >
                {["1-Bed", "2-Bed", "3-Bed", "4-Bed (Penthouse)"].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              {/* Check-in & Check-out Fields in One Row */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <DatePicker
                      label="Check-in Date"
                      value={checkIn}
                      onChange={(newValue) => setCheckIn(newValue)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          sx={{
                            background: "white",
                            borderRadius: "5px",
                            "& .MuiInputBase-input": { color: "#333" },
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatePicker
                      label="Check-out Date"
                      value={checkOut}
                      onChange={(newValue) => setCheckOut(newValue)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          sx={{
                            background: "white",
                            borderRadius: "5px",
                            "& .MuiInputBase-input": { color: "#333" },
                          }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </LocalizationProvider>

              <TextField
                label="Preferred Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
                sx={{
                  mt: 2,
                  background: "white",
                  borderRadius: "5px",
                  "& .MuiInputBase-input": { color: "#333" },
                }}
              />

              {/* Buttons Row */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Button
                  variant="outlined"
                  onClick={() => setIsFormOpen(false)}
                  sx={{
                    borderRadius: "20px",
                    px: 3,
                    borderColor: "#03A3E0",
                    color: "#03A3E0",
                    "&:hover": { backgroundColor: "#f0faff" },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#03A3E0",
                    borderRadius: "20px",
                    px: 4,
                    color: "white",
                    "&:hover": { background: "#0282BE" },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </motion.div>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
};

export default ZameenAceMallPage;