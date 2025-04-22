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
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";

const ConsultationModalForm = ({ open, handleClose }) => {
  const [category, setCategory] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { category, checkIn, checkOut, location });
    handleClose();
  };

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