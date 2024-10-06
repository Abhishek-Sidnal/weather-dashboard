import React, { useContext } from 'react';
import { UnitContext } from '../context/UnitContext';
import { FormControlLabel, Switch } from '@mui/material';

const ToggleUnitSwitch = () => {
  const { unit, toggleUnit } = useContext(UnitContext);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={unit === 'metric'}
          onChange={toggleUnit}
          color="primary"
        />
      }
      label={unit === 'metric' ? 'Celsius' : 'Fahrenheit'}
    />
  );
};

export default ToggleUnitSwitch;
