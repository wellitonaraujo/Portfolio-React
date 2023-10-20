import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ParticlesContainer from "../../components/ParticlesContainer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { AnimatedText } from "../../components/AnimatedText";
import { useTheme } from "../../context/useTheme";
import CardSkill from "../../components/CardSkill";
import profile from "../../assets/profile.jpeg";
import Toggle from "../../components/Toggle";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import {
  StyledFontAwesomeIcon,
  ContainerDescription,
  ScrollToTopButton,
  ContainerSolcial,
  ContainerToggle,
  TextDescription,
  StyledAmpersand,
  FooterWrapper,
  TitleContact,
  Description,
  Welliton,
  Arrow,
  Image,
  Title,
  Line,
  Link,
} from "./styles";
import CardProject from "../../components/CardProject";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { darkMode } = useTheme();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  const handleScroll = () => {
    setShowScrollButton(true);
    showScrollButton;
  };

  const scrollToTop = () => {};

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <ContainerDescription>
        <Image
          darkMode={isDarkMode}
          src={profile}
          alt="Eu"
          id="sobre"
          loading="lazy"
        />

        <ParticlesContainer />

        <ContainerSolcial>
          <a href="https://github.com/wellitonaraujo" target="_blank">
            <StyledFontAwesomeIcon darkMode={isDarkMode} icon={faGithub} />
          </a>

          <a href="https://www.linkedin.com/in/wellitonaraujo/" target="_blank">
            <StyledFontAwesomeIcon darkMode={isDarkMode} icon={faLinkedin} />
          </a>
        </ContainerSolcial>

        <Description>
          <ContainerToggle>
            <Toggle />
          </ContainerToggle>
          <TextDescription
            darkMode={isDarkMode}
            children="Olá, sou o"
            style={{ margin: 0 }}
          />
          <Welliton darkMode={isDarkMode}>Welliton Araujo</Welliton>

          <AnimatedText>
            <Title>
              Desenvolvedor Mobile{" "}
              <StyledAmpersand darkMode={isDarkMode}>&</StyledAmpersand>{" "}
              Front-end{" "}
            </Title>
          </AnimatedText>

          <AnimatedText>
            <TextDescription darkMode={isDarkMode}>
              <Line>Com anos de experiência</Line> do mercado de desenvolvimento
              de software e apaixonado por tecnologia, busco aperfeiçoamento
              profissional diariamente.
            </TextDescription>
            <TextDescription darkMode={isDarkMode}>
              <Line>Sólida experiência</Line> em todo ciclo de desenvolvimento
              mobile, da prototipação, arquitetura, desenvolvimento, testes e
              deploy.
            </TextDescription>
            <TextDescription darkMode={isDarkMode}>
              <Line>Vivência</Line> em desenvolvimento front-end, utilizando as
              principais tecnologias do mercado.
            </TextDescription>
          </AnimatedText>
        </Description>

        <Link href={`https://wa.me/5591985715267`} target="_blank">
          <ScrollToTopButton onClick={scrollToTop}>
            <Arrow icon={faWhatsapp} />
          </ScrollToTopButton>
        </Link>
      </ContainerDescription>

      <AnimatedText>
        <CardSkill />
      </AnimatedText>

      <CardProject />

      <AnimatedText>
        <TitleContact>Contato</TitleContact>
        <Form />
      </AnimatedText>

      <FooterWrapper darkMode={isDarkMode}>
        Welliton Araújo - Todos os direitos reservados
      </FooterWrapper>
    </>
  );
}
