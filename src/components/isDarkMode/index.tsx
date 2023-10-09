import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';


const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleSlider} {
    background-color: #d7a500;
  }

  &:checked + ${ToggleSlider}:before {
    transform: translateX(26px);
  }
`;


const Header: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <ToggleSwitch>
      <ToggleInput type="checkbox" onClick={toggleTheme} />
      <ToggleSlider />
    </ToggleSwitch>
  );
};

export default Header;
