import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../context/useTheme";
import { useEffect, useState } from "react";

//import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importe os estilos do carrossel

import {
  ImageContainer,
  DataContainer,
  SkillsSection,
  Container,
  Title,
  Image,
  ProjectName,
  TextDescription,
  StyledFontAwesomeIcon,
} from "./styles";
import { projectsData } from "./projectsData";

export default function CardProject() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <SkillsSection>
      <Title id="Projetos">Projetos</Title>

      <Container>
        <DataContainer>
          {projectsData.map((skill, index) => (
            <ImageContainer darkMode={isDarkMode} key={index}>
              <ProjectName darkMode={isDarkMode}>
                {skill.description}
              </ProjectName>

              <Image src={skill.src} alt={skill.alt} />

              <TextDescription darkMode={isDarkMode}>
                {skill.skill}
                <a href={skill.link} target="_blank">
                  <StyledFontAwesomeIcon
                    darkMode={isDarkMode}
                    icon={faGithub}
                  />
                </a>
              </TextDescription>
            </ImageContainer>
          ))}
        </DataContainer>
      </Container>
    </SkillsSection>
  );
}
