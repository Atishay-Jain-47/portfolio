import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({children}){
  const [theme, setTheme] = useState("dark");

  function themeHandler() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
