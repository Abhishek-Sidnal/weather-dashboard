import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import { Grid, Button, Box, Typography, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ToggleUnitButton from './ToggleUnitButton';
import AddLocationModal from './AddLocationModal';
import axios from 'axios';

const WeatherDashboard = () => {
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem('locations')) || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultLocation, setDefaultLocation] = useState(null);

  useEffect(() => {
    // Attempt to get the user's current location
    if (!defaultLocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Use the coordinates to fetch the current city
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            const city = response.data.name;
            setDefaultLocation(city);
            setLocations([city, ...locations]);
          } catch (error) {
            console.error('Error fetching location:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback to a default location if geolocation fails
          setDefaultLocation('New York');
          setLocations(['New York', ...locations]);
        }
      );
    } else {
      setLocations([defaultLocation, ...locations]);
    }
  }, [defaultLocation]);

  useEffect(() => {
    localStorage.setItem('locations', JSON.stringify(locations));
  }, [locations]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLocation = (newLocation) => {
    setLocations([...locations, newLocation]);
  };

  const removeLocation = (city) => {
    setLocations(locations.filter((location) => location !== city));
  };

  return (
    <Box sx={{ padding: { xs: '10px', sm: '20px' }, marginBottom: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' } }}>
        Weather Dashboard
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Tooltip title="Add Location" arrow>
          <IconButton
            onClick={handleOpenModal}
            sx={{
              backgroundColor: 'primary.main', 
              color: 'white', 
              padding: '6px', 
              '&:hover': {
                backgroundColor: 'primary.dark', 
                transform: 'scale(1.01)', 
                transition: 'transform 0.2s', 
              },
            }}
            aria-label="Add item"
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <ToggleUnitButton />
      </Box>

      <Grid container spacing={3}>
        {locations.map((city) => (
          <Grid item xs={12} sm={6} md={4} key={city}>
            <Box
              sx={{
                position: 'relative',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <WeatherCard city={city} />
              <IconButton
                onClick={() => removeLocation(city)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                  },
                  color: '#ff3d00', 
                  padding: '8px',
                  borderRadius: '50%',
                  transition: 'background-color 0.3s ease-in-out',
                }}
              >
                <DeleteIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

      <AddLocationModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        handleAddLocation={handleAddLocation}
      />
    </Box>
  );
};

export default WeatherDashboard;
