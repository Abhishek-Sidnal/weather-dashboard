import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { UnitContext } from '../context/UnitContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { unit } = useContext(UnitContext);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      )
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, [city, unit]);

  if (!weatherData) {
    return <Typography>Loading...</Typography>;
  }

  const getWeatherIcon = () => {
    const mainWeather = weatherData.weather[0].main.toLowerCase();
    if (mainWeather.includes('clear')) return <WbSunnyIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: '#ffeb3b' }} />;
    if (mainWeather.includes('cloud')) return <CloudIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: '#90a4ae' }} />;
    if (mainWeather.includes('snow')) return <AcUnitIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: '#2196f3' }} />;
    return <WbSunnyIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: '#ffeb3b' }} />;
  };

  return (
    <Card
      sx={{
        width: '100%',
        background: 'linear-gradient(135deg, #e0f7fa 30%, #80deea 100%)',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
        borderRadius: '16px',

      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: { xs: '16px', sm: '24px' },
        }}
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#00695c',
            fontSize: { xs: '1.2rem', sm: '1.4rem' },
          }}
        >
          {city}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={2}
          sx={{
            gap: '10px',
          }}
        >
          {getWeatherIcon()}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              fontWeight: '500',
              color: '#37474f',
            }}
          >
            {weatherData.weather[0].description}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#004d40',
            fontSize: { xs: '2.2rem', sm: '2.8rem' },
          }}
        >
          {Math.round(weatherData.main.temp)}° {unit === 'metric' ? 'C' : 'F'}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: '#455a64',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          Humidity: {weatherData.main.humidity}%
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#455a64',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          Wind: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
