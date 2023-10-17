import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ParticlesContainer from "../../components/ParticlesContainer";
import { AnimatedText } from "../../components/AnimatedText";
import { useTheme } from "../../context/ThemeContext";
import CardSkill from "../../components/CardSkill";
import profile from "../../assets/profile.jpeg";
import Toggle from "../../components/Toggle";
import { useEffect, useState } from "react";
import arrow from "../../assets/arrow.png";
import Form from "../../components/Form";
import {
  StyledFontAwesomeIcon,
  ContainerDescription,
  ScrollToTopButton,
  ContainerSolcial,
  TextDescription,
  StyledAmpersand,
  ContainerToggle,
  FooterWrapper,
  TitleContact,
  Description,
  Welliton,
  Arrow,
  Image,
  Title,
  Line,
} from "./styles";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [localDarkMode, setLocalDarkMode] = useState(false);

  const { darkMode } = useTheme();

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <ContainerDescription>
        <Image darkMode={localDarkMode} src={profile} alt="Eu" id="sobre" />
        <ParticlesContainer />
        <ContainerSolcial>
          <a href="https://github.com/wellitonaraujo" target="_blank">
            <StyledFontAwesomeIcon darkMode={localDarkMode} icon={faGithub} />
          </a>

          <a href="https://www.linkedin.com/in/wellitonaraujo/" target="_blank">
            <StyledFontAwesomeIcon darkMode={localDarkMode} icon={faLinkedin} />
          </a>
        </ContainerSolcial>

        <Description>
          <ContainerToggle>
            <Toggle />
          </ContainerToggle>

          <TextDescription
            darkMode={localDarkMode}
            children="Olá, sou o"
            style={{ margin: 0, marginTop: "20px" }}
          />
          <Welliton darkMode={localDarkMode}>Welliton Araujo</Welliton>

          <AnimatedText>
            <Title>
              Desenvolvedor Mobile{" "}
              <StyledAmpersand darkMode={localDarkMode}>&</StyledAmpersand>{" "}
              Front-end{" "}
            </Title>
          </AnimatedText>

          <AnimatedText>
            <TextDescription darkMode={localDarkMode}>
              <Line>Com anos de experiência</Line> do mercado de desenvolvimento
              de software e apaixonado por tecnologia, busco aperfeiçoamento
              profissional diariamente.
            </TextDescription>
            <TextDescription darkMode={localDarkMode}>
              <Line>Sólida experiência</Line> em todo ciclo de desenvolvimento
              mobile, da prototipação, arquitetura, desenvolvimento, testes e
              deploy.
            </TextDescription>
            <TextDescription darkMode={localDarkMode}>
              <Line>Vivência</Line> em desenvolvimento front-end, utilizando as
              principais tecnologias do mercado.
            </TextDescription>
          </AnimatedText>
        </Description>

        {showScrollButton && (
          <ScrollToTopButton onClick={scrollToTop}>
            <Arrow src={arrow} />
          </ScrollToTopButton>
        )}
      </ContainerDescription>

      <AnimatedText>
        <CardSkill />
      </AnimatedText>

      <AnimatedText>
        <TitleContact>Contato</TitleContact>

        <Form />
      </AnimatedText>

      <FooterWrapper darkMode={localDarkMode}>
        Welliton Araújo - Todos os direitos reservados
      </FooterWrapper>
    </>
  );
}
