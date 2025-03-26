import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import construction from "../src/assets/construction.png";
import Navbar from "../components/layout/Navbar";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <>
    
    <Box sx={{ width: "100%", overflowX: "hidden" }}> {/* Removed extra margins */}
      
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          backgroundImage: `url(${construction})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          filter: "grayscale(95%)", // Black and white effect
        }}
      >
        {/* Overlay */}
        <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />

        {/* Hero Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(90deg, #FFD700, #FFA500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 10px rgba(255, 215, 0, 0.6)",
            zIndex: 2,
          }}
        >
          The Ace Luxe
        </Typography>

        {/* Hero Subtitle */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            color: "white",
            fontSize: "1.2rem",
            mt: 2,
            zIndex: 2,
          }}
        >
          With a legacy of excellence, ACE Luxe has been a driving force in shaping the real estate
          landscape of the twin cities.
        </Typography>
      </Box>

      {/* About ACE Luxe Section */}
      <Box sx={{ width: "100%", py: 8, display: "flex", justifyContent: "center" }}>
        <Container maxWidth="md">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <Card
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                p: 4,
                "&:hover": { transform: "scale(1.05)" },
                transition: "transform 0.3s",
              }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  About Us -The ACE Luxe
                </Typography>
                <Typography variant="body1" color="text.secondary">
                The Ace Luxe is a distinguished hospitality brand under the umbrella of Ace Group, a name synonymous with quality, innovation, and luxury in real estate and development since the 1980s. With over four decades of expertise, Ace Group has shaped the skyline of twin cities with 1,000 residential and 30 commercial properties, setting new benchmarks in design and construction.
                <br></br>
                Building on our legacy of architectural brilliance, The Ace Luxe is our latest venture into the world of hospitality, offering an exquisite blend of comfort and sophistication. Our goal is to create luxury experiences that reflect the high standards of craftsmanship and service excellence that define Ace Group.
                </Typography> 
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Box>

      {/* ACE Luxe Section with Interactive Cards */}
      {/* ACE Luxe Section with Interactive Cards */}
<Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
  <Container maxWidth="md">
    <motion.div initial="hidden" whileInView="visible" variants={fadeInRight}>
      <Card
        sx={{
          bgcolor: "#333",
          color: "white",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
          p: 3,
          transition: "transform 0.3s, background-color 0.3s",
          "&:hover": { transform: "scale(1.05)", backgroundColor: "#444" },
          width: "100%", // Ensures it adapts to container
          maxWidth: "800px", // Matches the width of first and last cards
          margin: "auto", // Centers it properly
        }}
      >
        <CardContent>
          <Typography variant="body1" align="center">
          <h3>Our Vision: </h3>
          To redefine luxury hospitality by integrating world-class accommodations, exceptional dining, and premium business facilities within our iconic developments.
          <br /> <br /><h3>Our Mission: </h3>
          To deliver a seamless blend of elegance, convenience, and personalized experiences, ensuring every guest enjoys the highest level of comfort and hospitality.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  </Container>
</Box>


      {/* Final Commitment Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft}>
          <Card
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              p: 4,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Our Commitment to Excellence
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The Ace Luxe is built upon the foundation of trust, quality, and innovation. Whether it’s our penthouse suites, fine-dining restaurants, hotel apartments, or business centers, every aspect of our hospitality ventures is meticulously crafted to offer an unmatched experience.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>

    </Box>
    </>
  );
};

export default AboutUs;
