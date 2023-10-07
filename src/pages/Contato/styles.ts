import styled from "styled-components";
import colors from "../../styles/colors";

const mobileMediaQuery = `@media (max-width: 767px)`;


export const Description = styled.div`
   text-align: left;
   margin: 0;
   justify-content: center;

   ${mobileMediaQuery} {
    flex-direction: column; /* Altere para uma coluna em dispositivos móveis */
    padding: 0;
  }
`;

export const EmailLink = styled.a`
   font-size: 3.5rem;
  background: linear-gradient(to bottom,  ${colors.primary.s400}, ${colors.primary.s300});
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent;
  margin: 0;
  font-weight: 800;

  ${mobileMediaQuery} {
    flex-direction: column; /* Altere para uma coluna em dispositivos móveis */
    font-weight: 500;
    font-size: 1.2rem;
    text-align: left;
  }
`;

export const Title = styled.p`
  font-size: 3.5rem;
  background: linear-gradient(to bottom,  ${colors.primary.s400}, ${colors.primary.s300});
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent;
  margin: 0;
  font-weight: 800;

  ${mobileMediaQuery} {
    flex-direction: column; /* Altere para uma coluna em dispositivos móveis */
    font-weight: 500;
    font-size: 1.2rem;
    text-align: left;
  }
`;

