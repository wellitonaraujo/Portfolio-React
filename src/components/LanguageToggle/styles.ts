import styled from "styled-components";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const ContainerDescription = styled.div`
  ${mobileMediaQuery} {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  width: 60px;
  padding: 10px;
  padding-bottom: 15px;
  ${mobileMediaQuery} {
    flex-direction: column;
    text-align: center;
    padding-bottom: 35px;
  }
`;

export const FlagContainer = styled.div`
  ${mobileMediaQuery} {
    flex-direction: row;
  }
`;
