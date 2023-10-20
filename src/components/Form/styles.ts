import styled from "styled-components";
import colors from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex; /* Adicionado para usar flexbox */
  flex-direction: column; /* Os elementos filhos serão empilhados verticalmente */
  ${mobileMediaQuery} {
    width: 100%;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 30px;
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //margin-top: 200px;

  ${mobileMediaQuery} {
    flex-direction: column; /* Altere para uma coluna em dispositivos móveis */
    padding: 1rem;
    align-items: cenfter;
    flex: 1;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: transparent;
  background: linear-gradient(
    to top,
    ${colors.primary.s400},
    ${colors.primary.s300}
  );
  -webkit-background-clip: text;
  background-clip: text;
  text-align: left;
  font-size: 1.5rem;

  ${mobileMediaQuery} {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input<{ darkMode: boolean }>`
  width: 100%;
  padding: 15px;
  border: 0.5px solid
    ${(props) => (props.darkMode ? colors.primary.s400 : "#3b3a3a")};
  background-color: ${(props) => (props.darkMode ? "#231F20" : "#F5F5F5")};
  color: ${(props) => (props.darkMode ? "#F5F5F5" : "#231F20")};
  font-size: 1.1rem;
  outline: none;

  ${mobileMediaQuery} {
    width: 90%;
    padding: 10px;
    border: 0.5px solid ${(props) => (props.darkMode ? "#F5F5F5" : "#231F20")};
    color: ${(props) => (props.darkMode ? "#F5F5F5" : "#231F20")};
  }
`;

export const TextArea = styled.textarea<{ darkMode: boolean }>`
  width: 100%;
  padding: 15px;
  border: 0.5px solid
    ${(props) => (props.darkMode ? colors.primary.s400 : "#3b3a3a")};
  background-color: ${(props) => (props.darkMode ? "#231F20" : "#F5F5F5")};
  color: ${(props) => (props.darkMode ? "#F5F5F5" : "#231F20")};
  font-size: 1.1rem;
  outline: none;

  ${mobileMediaQuery} {
    width: 90%;
    padding: 12px;
    border: 0.5px solid ${(props) => (props.darkMode ? "#F5F5F5" : "#231F20")};
    color: ${(props) => (props.darkMode ? "#F5F5F5" : "#231F20")};
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

export const Description = styled.div`
  text-align: left;
  margin: 0;
  padding-left: 15rem;

  ${mobileMediaQuery} {
    padding: 0; /* Remove o espaçamento à esquerda */
    margin-top: 3rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  background: linear-gradient(
    to top,
    ${colors.primary.s400},
    ${colors.primary.s300}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  font-weight: 800;

  ${mobileMediaQuery} {
    font-size: 0.7rem;
    padding-right: 25px;
  }
`;
interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.div<ButtonProps>`
  background: linear-gradient(
    to top,
    ${colors.primary.s400},
    ${colors.primary.s300}
  );
  width: 100%;
  font-size: 1.1rem;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 4px;
  //cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
  `}

  ${mobileMediaQuery} {
    width: 90%;
    padding-bottom: 12px;
    padding-top: 12px;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{
  darkMode: boolean;
}>`
  font-size: 45px;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.3s ease;
  padding: 2%;
  margin-right: 10px;
  color: ${(props) => (props.darkMode ? "#DDD9D9" : "#585858")};
  &:hover {
    transform: scale(1.1);
  }

  ${mobileMediaQuery} {
    width: 30px;
    height: 30px;
    align-items: center;
    border: none;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${mobileMediaQuery} {
    display: flex; /* Exibir os elementos em uma linha (row) */
    align-items: center; /* Alinhar verticalmente no centro */
    border-bottom: 0.1px solid ${colors.grey.s400};
    margin-bottom: 30px;
  }
`;
//Agendar até dia 24/10
