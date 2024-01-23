import React, { useEffect, useMemo, useState } from "react";
import {
  ActionButton,
  defaultTheme,
  Provider as RSProvider,
} from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";

export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-theme");
    const persistedPreference = localStorage.getItem("theme");
    const hasUsedToggle = typeof persistedPreference === "string";
    hasUsedToggle
      ? rawSetColorMode(persistedPreference)
      : rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue) {
      localStorage.setItem("theme", newValue);
      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Provider = ({ children, ...props }) => {
  return (
    <ThemeProvider>
      <RSThemeProvider {...props}>{children}</RSThemeProvider>
    </ThemeProvider>
  );
};

export const RSThemeProvider = ({
  colorScheme: colorSchemeProp = "light",
  scale = "medium",
  children,
  ...props
}) => {
  const { colorMode } = React.useContext(ThemeContext);
  return (
    <RSProvider
      theme={defaultTheme}
      colorScheme={colorMode || colorSchemeProp}
      scale={scale}
    >
      <div
        className={`spectrum spectrum--${colorMode} spectrum--${scale}`}
        dir="ltr"
        {...props}
      >
        {children}
      </div>
    </RSProvider>
  );
};

export const ThemeSwitcher = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  // prevents flickering moon/sun
  if (!colorMode) {
    return null;
  }

  const onPress = () => {
    const scheme = colorMode === "dark" ? "light" : "dark";
    setColorMode(scheme);
  };
  const label =
    colorMode === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <div title={label} role="presentation">
      <ActionButton aria-label={label} onPress={onPress}>
        {colorMode === "dark" ? <Light /> : <Moon />}
      </ActionButton>
    </div>
  );
};
