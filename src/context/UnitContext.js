import React, { createContext, useState } from 'react';

export const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState('metric');

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
};
