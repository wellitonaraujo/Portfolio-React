import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const pulseIcon = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.1);
}
100% {
  transform: scale(1);
}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{
  darkMode: boolean;
}>`
  width: 2rem;
  height: 2rem;
  margin-top: 50%;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid white;
  transition: transform 0.3s ease;
  padding: 10%;
  color: white;

  &:hover {
    transform: scale(1.1);
  }

  ${mobileMediaQuery} {
    margin: 1rem 1rem;
    width: 35px;
    height: 35px;
    animation: none;
    border: none;
    color: ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
  }
`;

export const VerticalLine = styled.div<{ darkMode: boolean }>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 3%;
  height: 100%;
  background: linear-gradient(
    to top,
    ${colors.primary.s300},
    ${colors.primary.s400}
  );

  border-right: 4px solid ${(props) => (props.darkMode ? "#CECECE" : "#3b3a3a")};

  ${mobileMediaQuery} {
    width: 100%; /* Preenche a largura da tela */
    height: 5px; /* Define a altura da linha */
    top: auto; /* Remove a posição fixa para a parte superior */
    bottom: 0; /* Posiciona a linha na parte inferior */
    left: 0; /* Mantém a posição à esquerda */
    border-right: none; /* Remove a borda à direita */
  }
`;
