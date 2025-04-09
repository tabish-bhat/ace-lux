//import React from "react";
import { Box, Button, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.png";
import project3 from "../src/assets/project3.png";
import project4 from "../src/assets/project4.png";
import project5 from "../src/assets/apartments.jpg";
import project6 from "../src/assets/hero3.jpeg";
import service1 from "../src/assets/hero6.jpeg";
import service2 from "../src/assets/resandcom.jpeg";
import service3 from "../src/assets/remodling.jpeg";
import homebg from "../src/assets/hero7.jpg";
import ConsultationModalForm from "../components/layout/ConsultationModal";
import { useState } from "react";

const projects = [
  { id: "zameen-ace-mall", title: "Zameen ACE Mall", image: project4 },
  { id: "luxury-farmhouses", title: "Luxury Farmhouses", image: project2 },
  { id: "dha-villas", title: "DHA Islamabad Villas", image: project1 },
  { id: "e11-villas", title: "E-11 Villas", image: project3 },
  { id: "serviced-apartments", title: "Serviced Apartments", image: project5 },
  { id: "riverwalk-luxury-apartments", title: "Riverwalk Luxury Apartments", image: project6 },
];

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const LandingPage = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/projects#${id}`);
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Box sx={{ fontFamily: "Arial, sans-serif" }}>
      {/* 🔹 HERO SECTION */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${homebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 3,
        }}
      >
        <Container backgroundColor="black">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <Typography variant="h2" fontWeight="bold">
              Welcome to The Ace Luxe
            </Typography>
            <Typography variant="h4" sx={{ mt: 2 }}>
              Where luxury meets legacy
            </Typography>
            <Button
        variant="contained"
        onClick={openModal} // Add this onClick handler
        sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1.2rem", bgcolor: "#ff9800", "&:hover": { bgcolor: "#e68900" } }}
      >
        Schedule a consultation
      </Button>
      
      {/* The modal component, passing the open state and close handler */}
      <ConsultationModalForm open={isModalOpen} handleClose={closeModal} />
          </motion.div>
        </Container>
      </Box>

      {/* 🔹 PROJECTS CAROUSEL */}
      <Box sx={{ backgroundColor: "rgba(16,34,20,255)" }}>
      <Container sx={{ py: 8, width:"100%",textAlign: "center",backgroundColor:"rgba(16,34,20,255)" }}>
        <Typography variant="h3" fontWeight="bold" mb={4} style={{ color:"whitesmoke" }}>
          Featured Projects
        </Typography>
        <Carousel responsive={responsive} autoPlay autoPlaySpeed={3000} infinite showDots removeArrowOnDeviceType={["tablet", "mobile"]}>
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{ p: 2, cursor: "pointer", transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}
              onClick={() => handleProjectClick(project.id)}
            >
              <Box
                sx={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${project.image}) center/cover no-repeat`,
                  height: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
                  {project.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Container>
      </Box>

      {/* 🔹 SERVICES SECTION */}
      <Box sx={{ bgcolor: "#f5f5f5", py: 10 }}>
        <Container>
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={5}>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: "Hospitality Services", img: service1 },
              { title: "Residential & Commercial Projects", img: service2 },
              { title: "Renovations & Remodeling", img: service3 },
            ].map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card sx={{ boxShadow: 3 }}>
                    <CardMedia component="img" height="200" image={service.img} alt={service.title} />
                    <CardContent>
                      <Typography variant="h7" fontWeight="bold">
                        {service.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔹 FOOTER */}
      <Box sx={{ bgcolor: "rgba(16,34,20,255)", color: "white", py: 6, textAlign: "center" }}>
        <Container>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
            {[
              { icon: <Facebook />, link: "https://www.facebook.com/share/1AHkB6s8VP/" },
              { icon: <Twitter />, link: "https://twitter.com" },
              { icon: <Instagram />, link: "https://www.instagram.com/theaceluxe" },
              { icon: <LinkedIn />, link: "https://linkedin.com" },
            ].map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.link}
                target="_blank"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { bgcolor: "#ff9800" },
                  transition: "0.3s",
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
          <Typography sx={{ mt: 3, fontSize: "0.9rem" }}>© 2025 The ACE Luxe. All rights reserved.</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
