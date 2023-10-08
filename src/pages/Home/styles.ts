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
    /* Estilos específicos para dispositivos móveis */
    flex-direction: column; /* Altera a direção para empilhamento */
    text-align: center; /* Centraliza o texto */
  }
`;

export const Description = styled.div`
   text-align: left;
   margin: 0;
   padding-left: 4rem;
   ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
    padding: 0; /* Remove o espaçamento à esquerda */
    margin-top: 3rem;
  }
`;

export const TextDescription = styled.p`
  color: ${colors.white};
  align-content: flex-end;
  line-height: 1.7;
  font-size: 1.1rem;
  ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
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
    /* Estilos específicos para dispositivos móveis */
    width: 50%; /* Reduz a largura da linha */
    border-bottom: 2px solid ${colors.primary.s300};
  }
`;

export const Welliton = styled.p`
  font-size: 3rem;
  color: ${colors.white};
  margin: 0 auto;
  font-weight: 800;
  ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
    font-size: 1.5rem; /* Reduz o tamanho da fonte */
  }
`;

export const StyledAmpersand = styled.span`
  color: white;
  font-weight: bold;
  white-space: pre-line;
`;

export const Title = styled.p`
  font-size: 4rem;
  background: linear-gradient(to top,  ${colors.primary.s400}, ${colors.primary.s300});
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent;
  margin: 0;
  font-weight: 800;
  ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
    font-size: 1.4rem; /* Reduz o tamanho da fonte */
    margin-top: 1.3rem;
    
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

export const Image = styled.img`
  width: 30%; 
  height: 30%;
  border-radius: 50%;
  border: 10px solid ${colors.white};
  animation: ${pulse} 3s infinite;
  ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
    width: 50%; /* Reduz o tamanho da imagem */
    height: auto; /* Mantém a proporção da imagem */
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
    /* Estilos específicos para dispositivos móveis */
    width: 100%; /* Preenche a largura da tela */
    height: 5px; /* Define a altura da linha */
    top: auto; /* Remove a posição fixa para a parte superior */
    bottom: 0; /* Posiciona a linha na parte inferior */
    left: 0; /* Mantém a posição à esquerda */
    border-right: none; /* Remove a borda à direita */
  }
`;


export const Arrow = styled.img`
  width: 30px;
  height: 30px;

  ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
    width: 50%; /* Reduz o tamanho da imagem */
    height: auto; /* Mantém a proporção da imagem */
  }
`;


export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 35px;
  width: 40px;
  height: 40px;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid ${colors.white};
  animation: ${pulse} 3s infinite;
  padding: 6%;
  color: ${colors.white};

  ${mobileMediaQuery} {
    margin: 1.5rem 1.5rem;
    width: 35px;
    height: 35px;
    animation: none;
    border: none;
  }
`;

export const ContainerSolcial = styled.div`
  display: none;

  ${mobileMediaQuery} {
    font-size: 10px;
    color: ${props => props.color || colors.white};
    margin-top: 10px;
    width: 50%;
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
  width: 4.5rem;
  height: 4.5rem;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(to top, ${colors.primary.s400}, ${colors.primary.s300});;
  color: #fff;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  border-radius: 50%;
  opacity: 0.6;
  cursor: pointer;
  color: inherit;

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