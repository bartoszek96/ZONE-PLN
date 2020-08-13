import React, { useState } from 'react';
import ThemeContext, { themes } from './theme/Theme';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import Navigation from './components/Navigation/Navigation';
import Routes from './routes/Routes';

function App() {

  const [theme, setTheme] = useState(themes.light);
  const [themeSwitchChecked, setThemeSwitchChecked] = useState(false);

  const themeChangeHandler = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    setThemeSwitchChecked(!themeSwitchChecked);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle />
      <HashRouter basename='/'>
        <Navigation themeSwitchChecked={themeSwitchChecked} themeSwitchOnChange={themeChangeHandler} />
        <Routes />
      </HashRouter>
    </ThemeContext.Provider>
  );
}
export default App;
