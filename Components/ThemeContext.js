import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#CDC3E2");
  function toggleBackgroundColor() {
    setBackgroundColor((prevColor) =>
      prevColor === "#CDC3E2" ? "#605f90" : "#CDC3E2"
    );
  }

  return (
    <ThemeContext.Provider value={{ backgroundColor, toggleBackgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
