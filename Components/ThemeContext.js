import React, { createContext, useState } from "react";
import colors from "./Color";

/**
 * ThemeContext - Provides a way to share the theme-related state (e.g., background color)
 * and functions (e.g., toggling theme) across different components in the application.
 */
export const ThemeContext = createContext();

/**
 * ThemeProvider component - This component provides the theme context to all child components,
 * allowing them to access and change the theme settings.
 *
 * Props:
 * - children: ReactNode - The components that will consume the theme context.
 */
export const ThemeProvider = ({ children }) => {
  // State to manage the background color, initialized with the light purple color
  const [backgroundColor, setBackgroundColor] = useState(colors.lightPurple);

  /**
   * toggleBackgroundColor - Toggles the background color between lightPurple and togglePurple.
   * This function is typically used to switch themes between light and dark modes.
   */
  function toggleBackgroundColor() {
    setBackgroundColor((prevColor) =>
      prevColor === colors.lightPurple
        ? colors.togglePurple
        : colors.lightPurple
    );
  }

  // Providing the backgroundColor and toggleBackgroundColor function to all child components
  return (
    <ThemeContext.Provider value={{ backgroundColor, toggleBackgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
