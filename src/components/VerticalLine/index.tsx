import { VerticalLine } from "./styles";
import { useTheme } from "../../context/useTheme";
import { useEffect, useState } from "react";

function Vertical() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return <VerticalLine darkMode={isDarkMode}></VerticalLine>;
}

export default Vertical;
