import { useTheme } from "../context/useTheme";
import { GlobalStyle } from "../GlobalStyle";
import { useEffect, useState } from "react";

export default function Global() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return <GlobalStyle darkMode={isDarkMode} />;
}
