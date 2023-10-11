import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";

const mobileMediaQuery = `@media (max-width: 767px)`;


export const pulseIcon = keyframes`
  0% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 5px rgba(245, 132, 0, 0.05),
                0 0 0 10px rgba(245, 132, 0, 0.02),
                0 0 5px rgba(0, 0, 0, 0.5);
  }

  10% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.20),
                0 0 0 10px rgba(245, 132, 0, 0.10),
                0 0 0 20px rgba(245, 132, 0, 0.05),
                0 0 10px rgba(0, 0, 0, 0.6);
  }

  30% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.20),
                0 0 0 10px rgba(245, 132, 0, 0.10),
                0 0 0 20px rgba(245, 132, 0, 0.05),
                0 0 10px rgba(0, 0, 0, 0.6);
  }

  50% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.20),
                0 0 0 10px rgba(245, 132, 0, 0.10),
                0 0 0 20px rgba(245, 132, 0, 0.05),
                0 0 10px rgba(0, 0, 0, 0.6);
  }

  70% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 10px rgba(245, 132, 0, 0.05),
                0 0 0 15px rgba(245, 132, 0, 0.02),
                0 0 2px rgba(0, 0, 0, 0.5);
  }

  80% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 10px rgba(245, 132, 0, 0.05),
                0 0 0 15px rgba(245, 132, 0, 0.02),
                0 0 2px rgba(0, 0, 0, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 10px rgba(245, 132, 0, 0.05),
                0 0 0 15px rgba(245, 132, 0, 0.02),
                0 0 2px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon) <{ darkMode: boolean }>`
  width: 2rem;
  height: 2rem;
  margin-top: 50%;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid ${colors.white};
  transition: transform 0.3s ease;
  padding: 10%;
  color: ${colors.white};
  animation: ${pulseIcon} 5s infinite;

  &:hover {
    transform: scale(1.1);
  }

  ${mobileMediaQuery} {
    margin: 1rem 1rem;
    width: 35px;
    height: 35px;
    animation: none;
    border: none;
    color: ${(props) => (props.darkMode ? '#fff' : '#3b3a3a')};
  }
`;


export const VerticalLine = styled.div<{ darkMode: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  background: linear-gradient(to top, ${colors.primary.s300}, ${colors.primary.s400});
  
  border-right: 4px solid ${(props) => (props.darkMode ? '#CECECE' : '#3b3a3a')};

  ${mobileMediaQuery} {
    width: 100%; /* Preenche a largura da tela */
    height: 5px; /* Define a altura da linha */
    top: auto; /* Remove a posição fixa para a parte superior */
    bottom: 0; /* Posiciona a linha na parte inferior */
    left: 0; /* Mantém a posição à esquerda */
    border-right: none; /* Remove a borda à direita */
  }
`;
