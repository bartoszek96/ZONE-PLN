import React from 'react';

export const themes = {
  light: {
    color: '#36454f',
    backgroundColor: '#eaeaea',
    secondaryColor: '#36454f',
    secondaryBackgroundColor: 'white',
    borderColor: '#ffd700',
    chartBackgroundColor: 'rgba(128, 128, 128, 0.5)'
  },
  dark: {
    color: 'white',
    backgroundColor: '#a0a0a0',
    secondaryColor: 'white',
    secondaryBackgroundColor: '#36454f',
    borderColor: '#ffd700',
    chartBackgroundColor: 'rgba(60, 60, 94, 0.493)'
  }
}

export const breakpoints = {
  extraSmall: '400px',
  small: '576px',
  medium: '768px'
}

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
