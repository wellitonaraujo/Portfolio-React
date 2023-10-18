import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const ContainerDescription = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  flex-direction: row;
  margin-top: 15%;
  ${mobileMediaQuery} {
    flex-direction: column; /* Altera a direção para empilhamento */
    text-align: center; /* Centraliza o texto */
    width: 90%;
  }
`;

export const ContainerToggle = styled.div`
  display: none;
  ${mobileMediaQuery} {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

export const Description = styled.div`
  text-align: left;
  margin: 0;
  padding-left: 4rem;

  ${mobileMediaQuery} {
    padding: 0;
    margin: 0 auto;
  }
`;

export const TextDescription = styled.p<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? "#CECECE" : "#1c1c1c")};
  align-content: flex-end;
  line-height: 2;
  font-size: 1.1rem;

  ${mobileMediaQuery} {
    font-size: 0.8rem; /* Reduz o tamanho da fonte */
  }
`;

export const Line = styled.span`
  border: none;
  border-bottom: 3px solid ${colors.primary.s300};
  margin: 10px auto;
  border-radius: 0 0 0 5px;
  ${mobileMediaQuery} {
    width: 50%; /* Reduz a largura da linha */
    border-bottom: 2px solid ${colors.primary.s300};
  }
`;

export const Welliton = styled.p<{ darkMode: boolean }>`
  font-size: 3rem;
  color: ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
  margin: 0 auto;
  font-weight: 800;

  ${mobileMediaQuery} {
    font-size: 1.5rem; /* Reduz o tamanho da fonte */
  }
`;

export const StyledAmpersand = styled.span<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
  font-weight: bold;
  white-space: pre-line;
`;

export const Title = styled.p`
  font-size: 4rem;
  background: linear-gradient(
    to top,
    ${colors.primary.s300},
    ${colors.primary.s400}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  font-weight: 800;

  ${mobileMediaQuery} {
    font-size: 1.4rem; /* Reduz o tamanho da fonte */
    margin-top: 1.3rem;
  }
`;

export const TitleContact = styled.p`
  margin-top: 200px;
  font-size: 2.6rem;
  background: linear-gradient(
    to top,
    ${colors.primary.s400},
    ${colors.primary.s300}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: left;
  font-weight: 800;

  ${mobileMediaQuery} {
    text-align: center;
    font-size: 1.6rem; /* Reduz o tamanho da fonte */
  }
`;

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.10),
                0 0 0 10px rgba(245, 132, 0, 0.05),
                0 0 0 20px rgba(245, 132, 0, 0.02),
                0 0 10px rgba(0, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(245, 132, 0, 0.20),
                0 0 0 20px rgba(245, 132, 0, 0.10),
                0 0 0 30px rgba(245, 132, 0, 0.05),
                0 0 15px rgba(0, 0, 0, 0.6);
  }
  100% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.10),
                0 0 0 15px rgba(245, 132, 0, 0.05),
                0 0 0 20px rgba(245, 132, 0, 0.02),
                0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img<{ darkMode: boolean }>`
  width: 30%;
  height: 30%;
  border-radius: 50%;
  border: 8px solid ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
  animation: ${pulse} 3s infinite;

  ${mobileMediaQuery} {
    margin-left: 10%;
    width: 40%; /* Reduz o tamanho da imagem */
    height: auto; /* Mantém a proporção da imagem */
    border: 4px solid ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
    animation: none;
  }
`;

export const VerticalLine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  background: linear-gradient(
    to top,
    ${colors.primary.s400},
    ${colors.primary.s300}
  );
  border-right: 5px solid ${colors.white};

  ${mobileMediaQuery} {
    width: 100%; /* Preenche a largura da tela */
    height: 5px; /* Define a altura da linha */
    top: auto; /* Remove a posição fixa para a parte superior */
    bottom: 0; /* Posiciona a linha na parte inferior */
    left: 0; /* Mantém a posição à esquerda */
    border-right: none; /* Remove a borda à direita */
  }
`;

export const pulseicon = keyframes`
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

export const pulseIcon = keyframes`
  0% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 5px rgba(245, 132, 0, 0.05),
                0 0 0 10px rgba(245, 132, 0, 0.02),
                0 0 5px rgba(0, 0, 0, 0.5);
  }

  10% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.20),
                0 0 0 1px rgba(245, 132, 0, 0.10),
                0 0 0 2px rgba(245, 132, 0, 0.05),
                0 0 1px rgba(0, 0, 0, 0.6);
  }

  30% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.20),
                0 0 0 1px rgba(245, 132, 0, 0.10),
                0 0 0 2px rgba(245, 132, 0, 0.05),
                0 0 1px rgba(0, 0, 0, 0.6);
  }

  50% {
    box-shadow: 0 0 0 5px rgba(245, 132, 0, 0.20),
                0 0 0 1px rgba(245, 132, 0, 0.10),
                0 0 0 2px rgba(245, 132, 0, 0.05),
                0 0 1px rgba(0, 0, 0, 0.6);
  }

  70% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 1px rgba(245, 132, 0, 0.05),
                0 0 0 1px rgba(245, 132, 0, 0.02),
                0 0 2px rgba(0, 0, 0, 0.5);
  }

  80% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 1px rgba(245, 132, 0, 0.05),
                0 0 0 1px rgba(245, 132, 0, 0.02),
                0 0 2px rgba(0, 0, 0, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(245, 132, 0, 0.10),
                0 0 0 1px rgba(245, 132, 0, 0.05),
                0 0 0 1px rgba(245, 132, 0, 0.02),
                0 0 2px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{
  darkMode: boolean;
}>`
  width: 2rem;
  height: 2rem;
  margin-top: 100%;
  cursor: pointer;
  border-radius: 50%;
  //  border: 1px solid ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
  transition: transform 0.3s ease;
  padding: 25%;
  color: ${colors.white};
  animation: ${pulseIcon} 5s infinite;
  color: ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
  &:hover {
    transform: scale(1.1);
  }

  ${mobileMediaQuery} {
    margin: 1rem 1rem;
    width: 30px;
    height: 30px;
    animation: none;
    border: none;
    color: ${(props) => (props.darkMode ? "#fff" : "#3b3a3a")};
  }
`;

export const ContainerSolcial = styled.div`
  flex-direction: column;
  margin-left: 50px;

  ${mobileMediaQuery} {
    color: ${(props) => props.color || colors.white};
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const AnimatedTextDescriptionWrapper = styled.div<{
  isVisible: boolean;
}>`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.isVisible ? "0" : "20px")});
  transition: opacity 4s ease, transform 1s ease;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  width: 4rem;
  height: 4rem;
  bottom: 70px;
  right: 70px;
  background: #03d361;
  padding: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: inherit;
  animation: ${pulseicon} 3s infinite;
  z-index: 100;

  ${mobileMediaQuery} {
    display: block;
    width: 3.1rem;
    height: 3.1rem;
    bottom: 80px;
    right: 20px;
    padding: 8px;
  }
`;

export const Arrow = styled(FontAwesomeIcon)`
  width: 2.7rem;
  height: 2.7rem;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${mobileMediaQuery} {
    width: 80%; /* Reduz o tamanho da imagem */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

export const FooterWrapper = styled.footer<{ darkMode: boolean }>`
  background-color: ${(props) => (props.darkMode ? "#242424" : "#CECECE")};
  color: ${(props) => (props.darkMode ? "#CECECE" : "#231F20")};
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 10rem;

  ${mobileMediaQuery} {
    width: 100%;
    font-size: 0.6rem;
    margin: 0;
    margin-bottom: 3rem;
  }
`;

export const Link = styled.a`
  font-size: 2rem;
  background: linear-gradient(
    to bottom,
    ${colors.primary.s400},
    ${colors.primary.s300}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  font-weight: 800;

  ${mobileMediaQuery} {
    flex-direction: column; /* Altere para uma coluna em dispositivos móveis */
    font-size: 1rem; /* Reduz o tamanho da fonte */
  }
`;
