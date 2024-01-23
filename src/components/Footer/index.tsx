import { useEffect, useState } from "react";
import { FooterWrapper } from "./styles";
import { useTheme } from "styled-components";

const FooterD = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { darkMode } = useTheme();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <FooterWrapper darkMode={isDarkMode}>Welliton Araújo - 2024</FooterWrapper>
  );
};

export default FooterD;
