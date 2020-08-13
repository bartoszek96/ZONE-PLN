import React from 'react';
import { StyledCurrencyDescription, StyledText } from './CurrencyDescription.styles';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import CurrencyDetails from '../CurrencyDetails/CurrencyDetails';
import { motion } from "framer-motion"

const CurrencyTools = ({ dataSet, currencyInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'tween',
        duration: '2'
      }}
    >
      <StyledCurrencyDescription>
        <StyledText>{currencyInfo.code} - {currencyInfo.currency.toUpperCase()}</StyledText>
        <StyledText> KURS: {currencyInfo.mid.toFixed(4)} PLN</StyledText>
        <CurrencyDetails dataSet={dataSet} />
        <CurrencyConverter currencyInfo={currencyInfo} />
      </StyledCurrencyDescription>
    </motion.div>
  );
}

export default CurrencyTools;
