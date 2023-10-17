import styled from "styled-components";
import colors from "../../styles/colors";

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    ${colors.primary.s400},
    ${colors.primary.s200}
  );
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleSlider} {
    background: #3b3a3a;
  }

  &:checked + ${ToggleSlider}:before {
    transform: translateX(26px);
  }
`;
