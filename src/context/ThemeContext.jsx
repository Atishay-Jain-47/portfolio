import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  
  const [theme, setTheme] = useState("dark");

  function themeHandler() {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, themeHandler, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

