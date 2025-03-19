import { useState } from "react";
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
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import backgroundImage from "../src/assets/project4.png"; // Background image
import mallImage from "../src/assets/mall.png"; // Mall image

const ZameenAceMallPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [location, setLocation] = useState("");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: `url(${backgroundImage}) center/cover`,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
          }}
        />

        {/* Hero Content */}
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
              Zameen Ace Mall
            </Typography>
            <Typography variant="h5" sx={{ mt: 2, maxWidth: "600px" }}>
              The Ultimate Mixed-Use Destination for Luxury, Business & Living.
            </Typography>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                px: 5,
                py: 2,
                borderRadius: "50px",
                background: "#03A3E0",
                color: "white",
                fontWeight: "bold",
                "&:hover": { background: "#0282BE" },
              }}
              onClick={() => setIsFormOpen(true)}
            >
              Book a Consultation
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* About Section with Glass Effect */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  style={{
    width: "100%",
    height: "250px",
    borderRadius: "15px",
    padding: "20px",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent effect
    backgroundImage: `url(${mallImage})`, // Image
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  }}
/>

          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                About Zameen Ace Mall
              </Typography>
              <Typography variant="body1" sx={{ color: "gray" }}>
              Located in the heart of DHA Phase 2, Islamabad, Zameen Ace Mall is an architectural marvel and a hub of luxury living and commerce. Expanding our hospitality footprint, The Ace Luxe is set to introduce Hotel Apartments & a Business Center, offering an elite accommodation and corporate experience like no other.
              <br /> 
<b>•	Hotel Apartments</b> – A seamless fusion of residential comfort and hotel luxury, designed to cater to short-term and extended stays with world-class amenities.
<br /><b>•	Business Center</b> – A premium space for professionals and enterprises, equipped with modern workspaces, high-speed connectivity, and meeting rooms designed to enhance productivity and convenience.
<br /> <br />
Our hospitality ventures are built on a legacy of excellence, ensuring that every stay, every meal, and every business engagement is an experience to remember.
<br />
Join us as we embark on this journey to redefine hospitality in Pakistan, delivering <b>luxury</b>, <b>comfort</b>, and <b>prestige</b> under one name – <b>The Ace Luxe</b>.

              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Consultation Form Modal */}
      <Modal open={isFormOpen} onClose={() => setIsFormOpen(false)}>
  <Box
    sx={{
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
        background: "rgba(255, 255, 255, 0.9)", // Increased opacity for better contrast
        backdropFilter: "blur(15px)",
        borderRadius: "12px",
        padding: "30px",
        maxWidth: "500px",
        width: "100%",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        color: "black",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "#333", // Darker color for better readability
          textAlign: "center",
        }}
      >
        Property Consultation
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
            "& .MuiInputBase-input": { color: "#333" }, // Dark text for better visibility
          }}
        >
          {["1-Bed", "2-Bed", "3-Bed", "Penthouse"].map((option) => (
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
