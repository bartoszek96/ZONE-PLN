import React, { useContext } from 'react';
import { StyledNav, StyledSwitch, StyledSpan } from './Navigation.styles';
import ThemeContext, { themes } from '../../theme/Theme';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({ themeSwitchChecked, themeSwitchOnChange }) => {

  const theme = useContext(ThemeContext);
  const sunIcon = <FontAwesomeIcon icon={faSun} />
  const moonIcon = <FontAwesomeIcon icon={faMoon} />

  return (
    <StyledNav theme={theme}>
      <Link to='/'><StyledSpan theme={theme}>Z</StyledSpan>ONE P<StyledSpan theme={theme}>L</StyledSpan>N</Link>
      <FormControlLabel
        control={<StyledSwitch checked={themeSwitchChecked} onChange={themeSwitchOnChange} />}
        label={theme === themes.light ? sunIcon : moonIcon}
      />
    </StyledNav>
  );
}

export default Navigation;
