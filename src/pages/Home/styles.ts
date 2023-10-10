import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mobileMediaQuery = `@media (max-width: 767px)`;

export const ContainerDescription = styled.div`
  display: flex;
  margin-top: 10%;
  align-items: center;
  flex-direction: row;

  ${mobileMediaQuery} {
    flex-direction: column; /* Altera a direção para empilhamento */
    text-align: center; /* Centraliza o texto */
  }
`;

export const ContainerToggle = styled.div`
  display: none;
  ${mobileMediaQuery} {
   display: block;

  }
`;

export const Description = styled.div`
   text-align: left;
   margin: 0;
   padding-left: 4rem;

   ${mobileMediaQuery} {
    padding: 0; /* Remove o espaçamento à esquerda */
    margin-top: 1rem;
  }
`;

export const TextDescription = styled.p<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? '#CECECE' : '#1c1c1c')};
  align-content: flex-end;
  line-height: 1.7;
  font-size: 1.1rem;

  ${mobileMediaQuery} {
    font-size: 0.9rem; /* Reduz o tamanho da fonte */
    margin-top: 1.3rem;
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
  color: ${(props) => (props.darkMode ? '#fff' : '#3b3a3a')};
  margin: 0 auto;
  font-weight: 800;

  ${mobileMediaQuery} {
    font-size: 1.5rem; /* Reduz o tamanho da fonte */
  }
`;

export const StyledAmpersand = styled.span<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? '#fff' : '#3b3a3a')};
  font-weight: bold;
  white-space: pre-line;
`;

export const Title = styled.p`
  font-size: 4rem;
  background: linear-gradient(to top,  ${colors.primary.s300}, ${colors.primary.s400});
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
  background: linear-gradient(to top,  ${colors.primary.s400}, ${colors.primary.s300});
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
  border: 8px solid ${(props) => (props.darkMode ? '#fff' : '#3b3a3a')};;
  animation: ${pulse} 3s infinite;

  ${mobileMediaQuery} {
    width: 40%; /* Reduz o tamanho da imagem */
    height: auto; /* Mantém a proporção da imagem */
    border: 4px solid ${(props) => (props.darkMode ? '#fff' : '#3b3a3a')};;
    animation: none
  }
`;

export const VerticalLine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  background: linear-gradient(to top, ${colors.primary.s400}, ${colors.primary.s300});
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

export const ContainerSolcial = styled.div`
  display: none;

  ${mobileMediaQuery} {
    font-size: 10px;
    color: ${props => props.color || colors.white};
    margin-top: 1px;
    display: block;
    flex-direction: row;
    width: 100%;
}
`;

export const AnimatedTextDescriptionWrapper = styled.div<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transform: translateY(${(props) => (props.isVisible ? '0' : '20px')});
  transition: opacity 4s ease, transform 1s ease;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  width: 3.5rem;
  height: 3.5rem;
  bottom: 40px;
  right: 40px;
  background: linear-gradient(to top, ${colors.primary.s400}, ${colors.primary.s300});;
  color: #fff;
  font-weight: 700;
  padding: 10px;
  border: none;
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  color: inherit;
  animation: ${pulseicon} 3s infinite;
  ${mobileMediaQuery} {
    display: none;
    width: 3.1rem;
    height: 3.1rem;
    bottom: 15px;
    right: 10px;
    padding: 8px;
    font-size: 14px;
    opacity: 0.4;
    color: inherit;
  }
`;

export const Arrow = styled.img`
  width: 20px;
  height: 20px;

  ${mobileMediaQuery} {
    width: 50%; /* Reduz o tamanho da imagem */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

export const FooterWrapper = styled.footer<{ darkMode: boolean }>`
  background-color: ${(props) => (props.darkMode ? '#242424' : '#CECECE')};
  color: ${(props) => (props.darkMode ? '#CECECE' : '#231F20')};
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 10rem;

  ${mobileMediaQuery} {
    width: 100%;
    font-size: 0.65rem;
    margin: 0;
    margin-top: 2rem;
  }
`;