import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Currency from '../pages/Currency/Currency';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import axios from 'axios';

const Routes = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorText, setErrorText] = useState('');
  const url = 'https://api.nbp.pl/api/exchangerates/tables/A?format=json';

  useEffect(() => {
    setLoading(true);
    fetchCurrenciesData();
  }, []);

  const fetchCurrenciesData = () => {
    axios.get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        setErrorText('');
        setData(response.data[0].rates);
        setLoading(false);
      })
      .catch(error => {
        setErrorText(`${error}`);
        setLoading(false);
      });
  }

  return (
      <Switch>
        <Route path='/' exact component={() => <Home data={data} loading={loading} errorText={errorText} />} />
        {data.map(currency =>
          (<Route
            key={currency.code}
            path={`/${currency.code}`}
            component={() => <Currency currencyInfo={currency} />}
          />))}
        <Route component={ErrorPage} />
      </Switch>
  );
}

export default Routes;
