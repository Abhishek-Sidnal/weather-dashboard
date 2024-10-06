import React from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import { Container, Typography } from '@mui/material';
import { UnitProvider } from './context/UnitContext'; 

function App() {
  return (
    <UnitProvider>
      <Container sx={{padding:0}}>
        <WeatherDashboard />
      </Container>
    </UnitProvider>
  );
}

export default App;
