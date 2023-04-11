import React, { useState } from 'react';
import axios from 'axios';

const CalculatorContext = React.createContext();

export const CalculatorProvider = ({ children }) => {
  const [response, setResponse] = useState(null);

  const calculateDuty = async (request) => {
    try {
      const { data } = await axios.post('https://eservices.mra.mw/ws/info/dutycalculatorws.asmx', request);
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CalculatorContext.Provider value={{ response, calculateDuty }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
