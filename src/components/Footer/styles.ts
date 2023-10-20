import styled from "styled-components";
const mobileMediaQuery = `@media (max-width: 767px)`;

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
    height: 2.7rem;
    bottom: 0;
  }
`;
