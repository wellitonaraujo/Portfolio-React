import React from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

import { useTheme } from '../../context/ThemeContext';

const Toggle: React.FC = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <DarkModeToggle
      onChange={toggleTheme}
      checked={darkMode}
      size={80}
      speed={3}
    />
  );
};

export default Toggle;
