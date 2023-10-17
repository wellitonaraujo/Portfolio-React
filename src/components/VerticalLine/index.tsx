import { VerticalLine } from "./styles";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

function Vertical() {
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  return <VerticalLine darkMode={localDarkMode}></VerticalLine>;
}

export default Vertical;
