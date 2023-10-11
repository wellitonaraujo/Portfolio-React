import { useTheme } from '../context/ThemeContext';
import { GlobalStyle } from '../GlobalStyle';
import { useEffect, useState } from 'react';

export default function Global() {
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  return (
    <GlobalStyle darkMode={localDarkMode} />
  )
}