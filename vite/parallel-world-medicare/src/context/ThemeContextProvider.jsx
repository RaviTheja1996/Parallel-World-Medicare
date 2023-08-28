import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [themeDetails, setThemeDetails] = useState("light");

  function toggleTheme() {
    setThemeDetails(themeDetails === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ themeDetails, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
