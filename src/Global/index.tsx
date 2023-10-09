import { useEffect, useState } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { useTheme } from '../context/ThemeContext';

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