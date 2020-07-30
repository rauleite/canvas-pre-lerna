import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Dev from '../Dev';
import { useCustomTheme, useThemeType } from './hooks';
import { THEMES } from './utils';
import ThemeContext from './context';

// eslint-disable-next-line react/prop-types
export default function CustomThemeProvider({ children }) {
  const [customTheme, setCustomTheme] = useCustomTheme();
  const [themeType, toggleThemeType] = useThemeType();

  const onChangeThemeA = () => {
    setCustomTheme(THEMES.a);
  };
  const onChangeThemeDefault = () => {
    setCustomTheme(THEMES.default);
  };

  return (
    <ThemeProvider theme={createMuiTheme({
      palette: { ...customTheme.palette, type: themeType },
    })}
    >
      <>
        <ThemeContext.Provider value={{ toggleThemeType, onChangeThemeA, onChangeThemeDefault }}>
          <Dev />
          {children}
        </ThemeContext.Provider>
      </>
    </ThemeProvider>
  );
}
