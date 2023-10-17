import { useTheme } from "../../context/ThemeContext";
import postgres from "../../assets/postgresql.png";
import reactjs from "../../assets/reactjs.png";
import nodejs from "../../assets/nodejs.png";
import { useEffect, useState } from "react";
import figma from "../../assets/figma.png";
import siwft from "../../assets/swift.png";
import TitleSkills from "../TitleSkills";
import {
  TextDescription,
  ImageContainer,
  DataContainer,
  Container,
  Image,
  Title,
} from "./styles";

const skillsData = [
  { src: reactjs, alt: "React Native", description: "React Native" },
  { src: nodejs, alt: "NodeJS", description: "NodeJS" },
  { src: siwft, alt: "Swift", description: "Swift" },
  { src: postgres, alt: "PostgreSQL", description: "PostgreSQL" },
  { src: reactjs, alt: "ReactJS", description: "ReactJS" },
  { src: figma, alt: "Figma", description: "Figma" },
];

export default function CardSkill() {
  const { darkMode } = useTheme(); // Obtenha o estado do tema do contexto
  const [localDarkMode, setLocalDarkMode] = useState(false);

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  return (
    <div style={{ marginTop: "30%" }}>
      <Title id="skills">Skills</Title>
      <Container>
        <DataContainer>
          {skillsData.map((skill, index) => (
            <ImageContainer darkMode={localDarkMode} key={index}>
              <Image src={skill.src} alt={skill.alt} />
              <TextDescription darkMode={localDarkMode}>
                {skill.description}
              </TextDescription>
            </ImageContainer>
          ))}
        </DataContainer>

        <TitleSkills />
      </Container>
    </div>
  );
}
