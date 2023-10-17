import Particles from "react-tsparticles";
import styled from "styled-components";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const StyledParticles = styled(Particles)`
  max-width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(0);
  z-index: -100;

  ${mobileMediaQuery} {
    max-width: 100%;
  }
`;
