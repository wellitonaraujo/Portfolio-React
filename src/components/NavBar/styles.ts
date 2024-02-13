import styled from "styled-components";
import colors from "../../styles/colors";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const Navbar = styled.nav`
  display: flex;
  position: fixed;
  color: ${colors.white};
  width: 100%;
  z-index: 100;
  justify-content: end;

  ${mobileMediaQuery} {
    position: fixed;
    bottom: 0px;
    left: 0;
    background-color: #121214;
    width: 100%;
    text-align: center;
    justify-content: center;
    height: 3.7rem;
    flex-direction: row;
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-top: solid 1px #585858;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;

  ${mobileMediaQuery} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const NavItem = styled.li<{ darkMode: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  margin-right: 100px;
  border-bottom: 5px solid transparent;
  transition: transform 0.2s;

  &:hover {
    color: ${colors.primary.s300};
    cursor: pointer;
    border-bottom: 5px solid ${colors.primary.s300};
    transform: scale(1.1);
    border-radius: 0 0 0 5px;
  }

  &.active {
    background: linear-gradient(
      to bottom,
      ${colors.primary.s400},
      ${colors.primary.s300}
    );
    -webkit-background-clip: text;
    background-clip: text;
    border-bottom: 5px solid ${colors.primary.s300};

    border-radius: 0 0 0 5px;
  }

  span.icon {
    display: none; // Garante que o ícone seja exibido
  }

  ${mobileMediaQuery} {
    color: ${(props) => (props.darkMode ? "#fff" : "#fff")};
    font-size: 1.5rem; /* Ajuste o tamanho dos ícones para uma aparência melhor em dispositivos móveis */
    margin: 0.8rem;
    text-align: center;
    margin: 40%;

    &.active {
      background: linear-gradient(
        to bottom,
        ${colors.primary.s400},
        ${colors.primary.s300}
      );
      -webkit-background-clip: text;
      background-clip: text;
      border-bottom: 5px solid ${colors.primary.s300};
      transform: scale(1.05);
      border-radius: 0 0 0 5px;
    }

    span.label {
      display: none;
    }

    span.icon {
      display: inline;
    }
  }
`;

export const UlToggle = styled.ul`
  margin-right: 100px;

  ${mobileMediaQuery} {
    margin-right: 0;
    display: none;
  }
`;
