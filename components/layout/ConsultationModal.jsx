import { useState } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";

const ConsultationModalForm = ({ open, handleClose }) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { location, propertyType, adults, children, checkIn, checkOut });
    handleClose();
  };

  const incrementAdults = () => setAdults(prev => prev + 1);
  const decrementAdults = () => setAdults(prev => Math.max(1, prev - 1));
  const incrementChildren = () => setChildren(prev => prev + 1);
  const decrementChildren = () => setChildren(prev => Math.max(0, prev - 1));

  return (
    <Modal open={open} onClose={handleClose}>
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
            background: "rgba(255, 255, 255, 0.9)",
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
              color: "#333",
              textAlign: "center",
            }}
          >
            Check Availability
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Location Dropdown */}
            <TextField
              select
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
                background: "white",
                borderRadius: "5px",
                "& .MuiInputBase-input": { color: "#333" },
              }}
            >
              <MenuItem value="Skyhouse">Skyhouse</MenuItem>
              <MenuItem value="Viceroy House" disabled>Viceroy House</MenuItem>
              <MenuItem value="Elevens" disabled>Elevens</MenuItem>
            </TextField>

            {/* Property Type Dropdown */}
            <TextField
              select
              label="Property Type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
                background: "white",
                borderRadius: "5px",
                "& .MuiInputBase-input": { color: "#333" },
              }}
            >
              <MenuItem value="Single room">Single room</MenuItem>
              <MenuItem value="Penthouse">Penthouse</MenuItem>
            </TextField>

            {/* Guests Section - Adults and Children on same line */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1, color: "#666" }}>
                Guests
              </Typography>
              <Grid container spacing={2}>
                {/* Adults */}
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "white",
                      borderRadius: "5px",
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      p: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#333", flexGrow: 1 }}>
                      Adults
                    </Typography>
                    <IconButton onClick={decrementAdults} size="small">
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography variant="body1" sx={{ mx: 2, color: "#333", minWidth: "20px", textAlign: "center" }}>
                      {adults}
                    </Typography>
                    <IconButton onClick={incrementAdults} size="small">
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>

                {/* Children */}
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "white",
                      borderRadius: "5px",
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      p: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#333", flexGrow: 1 }}>
                      Children
                    </Typography>
                    <IconButton onClick={decrementChildren} size="small">
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography variant="body1" sx={{ mx: 2, color: "#333", minWidth: "20px", textAlign: "center" }}>
                      {children}
                    </Typography>
                    <IconButton onClick={incrementChildren} size="small">
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Check-in and Check-out Dates */}
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

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Button
                variant="outlined"
                onClick={handleClose}
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
                type="submit"
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
  );
};

ConsultationModalForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ConsultationModalForm;