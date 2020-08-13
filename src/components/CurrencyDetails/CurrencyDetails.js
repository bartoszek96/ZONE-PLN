import React from 'react';
import { StyledCurrencyDetails } from './CurrencyDetails.styles';

const CurrencyDetails = ({ dataSet }) => {

  const getAverageValue = array => array.reduce((p, c) => p + c, 0) / array.length;
  const valuesArray = dataSet.map(data => data.mid);
  const lowestValue = Math.min(...valuesArray).toFixed(4);
  const highestValue = Math.max(...valuesArray).toFixed(4);
  const averageValue = getAverageValue(valuesArray).toFixed(4);

  return (
    <StyledCurrencyDetails>
      <div>Najniższy kurs: {lowestValue}</div>
      <div>Najwyższy kurs: {highestValue}</div>
      <div>Średni kurs: {averageValue}</div>
      <div>(Ostatnie 90 notowań)</div>
    </StyledCurrencyDetails>
  );
}

export default CurrencyDetails;
