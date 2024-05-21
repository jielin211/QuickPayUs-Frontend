import React, { createContext, useState, useContext } from "react";
import { theme } from "antd";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
          const [themeType, setThemeType] = useState("light");

          const toggleTheme = () => {
                    setThemeType((prevThemeType) => (prevThemeType === "light" ? "dark" : "light"));
          };

          const themeConfig = {
                    algorithm: themeType === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
          };

          return (
                    <ThemeContext.Provider value={{ themeType, toggleTheme }}>
                              <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
                    </ThemeContext.Provider>
          );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme, ThemeContext };
