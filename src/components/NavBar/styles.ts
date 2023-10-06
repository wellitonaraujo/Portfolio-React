import styled from "styled-components";
import colors from "../../styles/colors";
import textSizes from "../../styles/text-sizes";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const Navbar = styled.nav`
    display: flex;
    position: fixed;
    justify-content: flex-end;
    color: ${colors.white};
    left: 0;
    width: 100%;
    z-index: 100;

    ${mobileMediaQuery} {
    display: none
  }


`;

export const NavUl = styled.ul`
  display: flex;
  font-size: ${textSizes.title.t1.fontSize};
  list-style: none;
  padding: 0;
  margin: 0;
  

`;

export const NavItem = styled.li`
  font-size: 20px;
  color: ${colors.white};
  margin-right: 60px;
  border-bottom: 5px solid transparent;
  transition: transform 0.2s;
  &:hover {
    color: ${colors.primary.s300};
    cursor: pointer;
    border-bottom: 5px solid ${colors.primary.s300};
    transform: scale(1.05);
    border-radius: 0 0 0 5px;
  }

  &.active {
    background: linear-gradient(to bottom,  ${colors.primary.s400}, ${colors.primary.s300});
    -webkit-background-clip: text; /* Aplica o gradiente ao texto */
    background-clip: text; /* Aplica o gradiente ao texto */
    color: transparent; /* Torna o texto transparente */
    border-bottom: 5px solid ${colors.primary.s300};
    transform: scale(1.05);
    border-radius: 0 0 0 5px;
  }

`;
