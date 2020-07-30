import React, { useState } from 'react';
import { THEMES, systemColorScheme, THEME_TYPE } from './utils';

export const useCustomTheme = () => {
  const [theme, setTheme] = useState(() =>/* Persisted theme || */ THEMES.a);

  const customSetTheme = (newTheme) => {
    const themeChanged = theme !== newTheme ? newTheme : undefined;
    if (themeChanged) {
      setTheme(themeChanged);
    }
  };
  return [theme, customSetTheme];
};

export const useThemeType = () => {
  const [themeType, setTheme] = useState(
    /* Persisted theme || */ systemColorScheme() || THEME_TYPE.light,
  );
  const toggleThemeType = () => {
    setTheme(
      themeType === THEME_TYPE.light ? THEME_TYPE.dark : THEME_TYPE.light,
    );
  };
  return [themeType, toggleThemeType];
};
