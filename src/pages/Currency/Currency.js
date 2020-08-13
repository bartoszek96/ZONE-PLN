import React, { useState, useEffect, useContext } from 'react';
import { StyledCurrency, Wrapper } from './Currency.styles'
import ReactLoading from "react-loading";
import ThemeContext from '../../theme/Theme';
import axios from 'axios';
import Chart from '../../components/Chart/Chart';
import CurrencyDescription from '../../components/CurrencyDescription/CurrencyDescription';

const Currency = ({ currencyInfo }) => {

  const theme = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [dataSet, setDataSet] = useState([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchCurrencyDataSet = () => {
      axios.get(`https://api.nbp.pl/api/exchangerates/rates/A/${currencyInfo.code}/last/90?format=json`)
        .then(response => {
          if (response.status !== 200) {
            throw Error(response.statusText);
          }
          if (isMounted) {
            setErrorText('');
            setLoading(false);
            setDataSet(response.data.rates);
          }
        })
        .catch(error => {
          if (isMounted) {
            setLoading(false);
            setErrorText(`${error}`);
          }
        });
    }

    if (isMounted) {
      setLoading(true);
      fetchCurrencyDataSet();
    }

    return () => { isMounted = false };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCurrency theme={theme}>
      {errorText !== '' ?
        <div>{errorText}</div> :
        null
      }
      {loading ?
        <ReactLoading type='spin' color={theme.color} /> :
        <Wrapper>
          <Chart dataSet={dataSet} />
          <CurrencyDescription dataSet={dataSet} currencyInfo={currencyInfo}/>
        </Wrapper>
      }
    </StyledCurrency>
  );
}

export default Currency;
