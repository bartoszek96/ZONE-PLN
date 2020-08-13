import React, { useContext } from 'react';
import { StyledHome, StyledHeader, StyledDiv } from './Home.styles';
import ReactLoading from "react-loading";
import ThemeContext from '../../theme/Theme';
import CurrencyLink from '../../components/CurrencyLink/CurrencyLink';

const Home = ({ data, loading, errorText }) => {

  const theme = useContext(ThemeContext);

  return (
    <StyledHome theme={theme}>
      <StyledDiv>
        Aplikacja umożliwia przeliczenie kursów 35 różnych walut względem złotego oraz przedstawia kurs tych walut w postaci wykresu na podstawie ostatnich 90 notowań NBP. Aby uzyskać szczegóły wybierz walutę, która Cię interesuje.
      </StyledDiv>
      <StyledHeader>Wybierz walutę:</StyledHeader>
      {errorText !== '' ?
        <div>{errorText}</div> :
        null
      }
      {loading ?
        <ReactLoading type='spin' color={theme.color} /> :
        data.map(({ code, currency, mid }, index) => (
          <CurrencyLink key={code} currency={currency} currencyCode={code} midPrice={mid} delay={index / 20} />
        ))
      }
    </StyledHome>
  );
}

export default Home;
