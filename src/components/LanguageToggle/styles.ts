import styled from "styled-components";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const Image = styled.img`
  cursor: pointer;
  width: 50px;
  margin-right: 30px;
  margin-bottom: 10px;
  ${mobileMediaQuery} {
    flex-direction: column;
    margin-bottom: 35px;
  }
`;

export const FlagContainer = styled.div`
  ${mobileMediaQuery} {
    flex-direction: row;
  }
`;
