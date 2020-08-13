import React, { useContext } from 'react';
import { StyledErrorPage } from './ErrorPage.styles';
import ThemeContext from '../../theme/Theme';

const ErrorPage = () => {

  const theme = useContext(ThemeContext);

  return (
    <StyledErrorPage theme={theme}>Nie ma takiej strony :(</StyledErrorPage>
  );
}
 
export default ErrorPage;
