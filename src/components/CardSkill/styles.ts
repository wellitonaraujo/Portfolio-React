import styled from "styled-components";
import colors from "../../styles/colors";

const mobileMediaQuery = `@media (max-width: 767px)`;

export const SkillsSection = styled.div`
  margin-top: 30%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobileMediaQuery} {
    flex-direction: column;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mobileMediaQuery} {
    column-count: 2;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
`;

export const ImageContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.darkMode ? "#121214" : "#F5F5F5")};
  border: 0.5px solid
    ${(props) => (props.darkMode ? colors.primary.s400 : "#3b3a3a")};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  width: 190px;
  height: 207px;
  flex-shrink: 0;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  margin: 20px 20px 20px 0;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  ${mobileMediaQuery} {
    width: 45%;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 0.5px solid ${(props) => (props.darkMode ? "#F58400" : "#3b3a3a")};
  }
`;

export const Title = styled.p`
  font-size: 2.6rem;
  background: linear-gradient(
    to top,
    ${colors.primary.s300},
    ${colors.primary.s400}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  text-align: start;
  padding-top: 5rem;

  ${mobileMediaQuery} {
    font-size: 2rem; /* Reduza o tamanho da fonte para dispositivos móveis */
    padding-top: 3rem; /* Reduza o espaço superior para dispositivos móveis */
    text-align: center; /* Centralize o texto em dispositivos móveis */
  }
`;

export const SubTitle = styled.p`
  font-size: 30px;
  background: linear-gradient(
    to top,
    ${colors.primary.s400},
    ${colors.primary.s300}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  text-align: start;
  max-width: 700px;

  ${mobileMediaQuery} {
    font-size: 1.3rem; /* Reduza o tamanho da fonte para dispositivos móveis */
    text-align: center; /* Centralize o texto em dispositivos móveis */
  }
`;

export const Image = styled.img`
  width: 35%;
  height: auto;
  margin: 5px auto;
  object-fit: cover;
  justify-content: center;
`;

export const TextDescription = styled.p<{ darkMode: boolean }>`
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  align-content: flex-end;
  line-height: 1.7;
  font-size: 1.1rem;

  ${mobileMediaQuery} {
    font-size: 0.7rem; /* Reduz o tamanho da fonte */
    //margin-top: 1.3rem;
  }
`;
