import { ToggleInput, ToggleSlider, ToggleSwitch } from "./styles";
import { useTheme } from "../../context/ThemeContext";
import React from "react";

const Toggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <ToggleSwitch>
      <ToggleInput type="checkbox" onClick={toggleTheme} />
      <ToggleSlider />
    </ToggleSwitch>
  );
};

export default Toggle;
