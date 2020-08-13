import React, { useState, useContext } from 'react';
import {
  StyledCurrencyConverter,
  StyledSwitch,
  StyledCodes,
  StyledResult,
  StyledForm,
  StyledButton
} from './CurrencyConverter.styles';
import { Link } from 'react-router-dom';
import ThemeContext from '../../theme/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CurrencyConverter = ({ currencyInfo }) => {

  const theme = useContext(ThemeContext);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState('Wpisz dane');

  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />

  const handleSwitchClick = () => {
    setSwitchChecked(!switchChecked);
  }

  const submitHandler = event => {
    event.preventDefault();
    if (inputValue >= 0) {
      if (switchChecked) {
        setResult(`${inputValue.toFixed(4)} PLN = ${(inputValue.toFixed(4) / currencyInfo.mid).toFixed(4)} ${currencyInfo.code}`);
      } else {
        setResult(`${inputValue.toFixed(4)} ${currencyInfo.code} = ${(inputValue.toFixed(4) * currencyInfo.mid).toFixed(4)} PLN`);
      }
    } else {
      setResult('Wartość musi być dodatnia.');
    }
  }

  return (
    <StyledCurrencyConverter>
      {switchChecked ?
        <StyledCodes>PLN {arrowIcon} {currencyInfo.code}</StyledCodes> :
        <StyledCodes>{currencyInfo.code} {arrowIcon} PLN</StyledCodes>
      }
      <StyledSwitch checked={switchChecked} onChange={handleSwitchClick} />
      <StyledForm onSubmit={submitHandler} theme={theme}>
        <input
          onChange={e => setInputValue(Number(e.target.value))}
          type='number'
          step='0.0001'
          min='0'
          placeholder={`Wpisz ilość ${switchChecked ? 'PLN' : currencyInfo.code}`}
        />
        <StyledButton theme={theme}>OBLICZ</StyledButton>
      </StyledForm>
      <Link to='/'>
        <StyledButton theme={theme}>POWRÓT</StyledButton>
      </Link>
      <StyledResult>{result}</StyledResult>
    </StyledCurrencyConverter>
  );
}

export default CurrencyConverter;
