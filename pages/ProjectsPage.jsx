import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation for hash navigation
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.png";
import project3 from "../src/assets/project3.png";
import project4 from "../src/assets/project4.png";
import project5 from "../src/assets/apartments.jpg";
import project6 from "../src/assets/hero3.jpeg";

// import { useLocation } from "react-router-dom";

const projects = [
  {
    id: "zameen-ace-mall",
    title: "Zameen ACE Mall",
    location: "Twin Cities",
    description: "Located in the heart of DHA Phase 2, Islamabad, Zameen Ace Mall is an architectural marvel and a hub of luxury living and commerce. ",
    image: project4,
  },
  {
    id: "luxury-farmhouses",
    title: "Luxury Farmhouses",
    location: "Gulberg Greens",
    description: "Our exclusive farmhouses in Gulberg Greens provide a perfect blend of nature and luxury, offering spacious, serene retreats away from the hustle and bustle of the city.",
    image: project2,
  },
  {
    id: "dha-villas",
    title: "Villas",
    location: "DHA-Islamabad",
    description: "Ace Group has meticulously crafted modern and elegant residential houses in DHA Phase 2, Islamabad, offering luxury, security, and comfort in one of the city's most sought-after locations.",
    image: project1,
  },
  // {
  //   id: "e11-villas",
  //   title: "E-11 Houses",
  //   location: "Sector E-11",
  //   description: "With prime residential developments in Sector E-11, Ace Group delivers contemporary homes that balance high-end living with accessibility and convenience.",
  //   image: project3,
  // },
  {
    id: "serviced-apartments",
    title: "Serviced Apartments",
    location: "Murree",
    description: "Nestled in the scenic hills of Murree, our serviced apartments provide a luxurious yet cozy stay for vacationers and long-term residents, offering breathtaking views and premium facilities.",
    image: project5,
  },
  {
    id: "riverwalk-luxury-apartments",
    title: "Riverwalk Luxury Apartments",
    location: "Twin Cities",
    description: "Nestled within one of our finest residential projects, Riverwalk Luxury Apartments, we have crafted a unique hospitality experience. These apartments are designed to offer a blend of comfort and elegance, ensuring that every guest enjoys a memorable stay.",
    image: project6,
  },
];

const colors = {
  primary: "#0D0D0D",
  accent: "#FFFFFF",
};

const ProjectShowcase = () => {
  const projectRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation(); // Get the current URL hash

  // Scroll to section when arriving on the page
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Remove '#' from hash
      setTimeout(() => {
        const section = projectRefs.current[sectionId];
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Delay to ensure the page loads before scrolling
    }
  }, [location]);

  // Observe sections to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    Object.values(projectRefs.current).forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ backgroundColor: "rgba(16,34,20,255)", color: colors.accent, minHeight: "100vh", pb: "50px" }}>
      <Container sx={{ py: 8 }}>
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", mb: 1, textTransform: "uppercase" }}>
            Our Projects
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center", color: "gray", mb: 4 }}>
            Explore our latest architectural masterpieces and luxury developments.
          </Typography>
        </motion.div>
      </Container>

      {projects.map((project) => (
        <Box
          ref={(el) => (projectRefs.current[project.id] = el)}
          key={project.id}
          id={project.id}
          sx={{
            height: "90vh",
            background: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${project.image}) center/cover no-repeat`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transition: "0.4s ease-in-out",
            scrollMarginTop: "80px",
            borderBottom: activeSection === project.id ? `5px solid white` : "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            style={{
              position: "relative",
              textAlign: "center",
              color: colors.accent,
              maxWidth: "800px",
              backdropFilter: "blur(12px)",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>{project.title}</Typography>
            <Typography variant="h5" sx={{ mt: 1, fontStyle: "italic", color: "gray" }}>{project.location}</Typography>
            <Typography variant="body1" sx={{ mt: 3, fontSize: "1.2rem" }}>{project.description}</Typography>
          </motion.div>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectShowcase;
