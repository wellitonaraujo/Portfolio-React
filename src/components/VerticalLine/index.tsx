import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { StyledFontAwesomeIcon, VerticalLine } from "./styles";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

function Vertical() {
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  return (
    <VerticalLine darkMode={localDarkMode}>
      <a href="https://github.com/wellitonaraujo" target="_blank">
        <StyledFontAwesomeIcon icon={faGithub} style={{ marginTop: 400 }} />
      </a>

      <a href="https://www.linkedin.com/in/wellitonaraujo/" target="_blank">
        <StyledFontAwesomeIcon icon={faLinkedin} />
      </a>
    </VerticalLine>
  );
}

export default Vertical;
