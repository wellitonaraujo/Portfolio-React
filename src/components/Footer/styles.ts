import styled from "styled-components";
import colors from "../../styles/colors";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const FooterWrapper = styled.footer`
  background-color: #242424;
  color: ${colors.white};
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