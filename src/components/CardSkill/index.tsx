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
import { useLanguage } from "../../context/useLanguage";
import en from "../../translation/en/en";
import pt from "../../translation/pt/pt";

export default function CardSkill() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const { language } = useLanguage();

  const texts = language === "en" ? en : pt;

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <SkillsSection>
      <Title id="Tecnologias">{texts.technologies.title}</Title>
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
