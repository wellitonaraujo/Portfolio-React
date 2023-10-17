import { useTheme } from "../../context/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";
import React from "react";

const Toggle: React.FC = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <DarkModeToggle
      onChange={toggleTheme}
      checked={darkMode}
      size={80}
      speed={2}
    />
  );
};

export default Toggle;
