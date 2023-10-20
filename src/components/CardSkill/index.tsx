import { useTheme } from "../../context/useTheme";
import { useEffect, useState } from "react";
import TitleSkills from "../TitleSkills";
import { skillsData } from "./skillData";
import {
  TextDescription,
  ImageContainer,
  DataContainer,
  SkillsSection,
  Container,
  Image,
  Title,
} from "./styles";

export default function CardSkill() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <SkillsSection>
      <Title id="Tecnologias">Skills</Title>
      <Container>
        <DataContainer>
          {skillsData.map((skill, index) => (
            <ImageContainer darkMode={isDarkMode} key={index}>
              <Image src={skill.src} alt={skill.alt} />
              <TextDescription darkMode={isDarkMode}>
                {skill.description}
              </TextDescription>
            </ImageContainer>
          ))}
        </DataContainer>

        <TitleSkills />
      </Container>
    </SkillsSection>
  );
}
