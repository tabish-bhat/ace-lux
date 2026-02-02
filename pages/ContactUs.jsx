import { Container, TextField, Button, Typography, Box, Card, CardContent, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { LocationOn, Phone, Email, Language, Send } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const ContactUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Hide info section on small screens

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Left Side - Form Section (Dark Theme) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(16,34,20,255)",
          padding: "20px",
        }}
      >
        <Box sx={{ width: "90%", maxWidth: "450px", color: "#fff" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Send us a message
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{ input: { color: "#fff" }, mb: 2, bgcolor: "#333", borderRadius: "5px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{ input: { color: "#fff" }, mb: 2, bgcolor: "#333", borderRadius: "5px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Subject"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{ input: { color: "#fff" }, mb: 2, bgcolor: "#333", borderRadius: "5px" }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Message"
            multiline
            rows={4}
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{ input: { color: "#fff" }, mb: 3, bgcolor: "#333", borderRadius: "5px" }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": { backgroundColor: "#ddd" },
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            fullWidth
            startIcon={<Send />}
          >
            Send Message
          </Button>
        </Box>
      </motion.div>

      {/* Right Side - Contact Info Section (Light Theme) */}
      {!isSmallScreen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9f9f9",
            padding: "20px",
          }}
        >
          <Card sx={{ width: "80%", maxWidth: "450px", padding: "30px", borderRadius: "12px", boxShadow: 3, bgcolor: "#fff" }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" sx={{ color: "#121212", mb: 2 }}>
                Contact us
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: "#333" }}>
                We're open for any suggestion or just to have a chat.
              </Typography>

              {/* Contact Details */}
              <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                <LocationOn sx={{ color: "#121212", mr: 2 }} />
                <Typography variant="body1">
                  <strong>Address:</strong> Ace Luxe, Ground Floor, Riverwalk Luxury Apartment, River Garden, Islamabad Expressway, Islamabad
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                <Phone sx={{ color: "#121212", mr: 2 }} />
                <Typography variant="body1">
                  <strong>Phone:</strong> +92-334-1887804
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                <Email sx={{ color: "#121212", mr: 2 }} />
                <Typography variant="body1">
                  <strong>Email:</strong> sales@theaceluxe.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Language sx={{ color: "#121212", mr: 2 }} />
                <Typography variant="body1">
                  <strong>Website:</strong> theaceluxe.com
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </Box>
  );
};

export default ContactUs;
