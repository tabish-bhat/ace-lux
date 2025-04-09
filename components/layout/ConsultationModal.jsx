//import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

// This is the extracted modal component that accepts an open state and close handler
const ConsultationModalForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation request submitted:', formData);
    // Process form data here
    handleClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ bgcolor: '#ff9800', color: 'white', fontWeight: 'bold' }}>
        Schedule a Consultation
      </DialogTitle>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Please fill out the form below to schedule your consultation. We&apos;ll get back to you as soon as possible.
          </DialogContentText>
          <Stack spacing={3}>
            <TextField
              autoFocus
              required
              name="name"
              label="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              required
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="phone"
              label="Phone Number"
              type="tel"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
            />
            <FormControl fullWidth required>
              <InputLabel id="service-label">Service</InputLabel>
              <Select
                labelId="service-label"
                name="service"
                value={formData.service}
                label="Service"
                onChange={handleChange}
              >
                <MenuItem value="strategy">Business Strategy</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="financial">Financial Planning</MenuItem>
                <MenuItem value="operations">Operations</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="preferredDate"
              label="Preferred Date"
              type="date"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.preferredDate}
              onChange={handleChange}
            />
            <TextField
              name="message"
              label="Tell us more about your needs"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button 
            onClick={handleClose} 
            variant="outlined" 
            sx={{ color: '#ff9800', borderColor: '#ff9800', '&:hover': { borderColor: '#e68900' } }}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ bgcolor: '#ff9800', '&:hover': { bgcolor: '#e68900' } }}
          >
            Schedule Now
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
ConsultationModalForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ConsultationModalForm;
