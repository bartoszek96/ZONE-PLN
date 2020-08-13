import React, { useContext } from 'react';
import { StyledLink } from './CurrencyLink.styles';
import ThemeContext from '../../theme/Theme';
import { motion } from "framer-motion"

const CurrencyLink = ({ currency, currencyCode, midPrice, delay }) => {

  const theme = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      transition={{
        type: 'tween',
        delay: delay
      }}
    >
      <StyledLink to={`/${currencyCode}`} theme={theme}>
        <div>{currencyCode} - {currency}</div>
        <div>{midPrice.toFixed(4)} PLN</div>
      </StyledLink>
    </motion.div>
  );
}

export default CurrencyLink;
