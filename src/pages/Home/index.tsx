import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ParticlesContainer from "../../components/ParticlesContainer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { AnimatedText } from "../../components/AnimatedText";
import CardProject from "../../components/CardProject";
import CardSkill from "../../components/CardSkill";
import { useTheme } from "../../context/useTheme";

import profile from "../../assets/eu.jpeg";

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
  Link,
} from "./styles";
import { useLanguage } from "../../context/useLanguage";
import en from "../../translation/en/en";
import pt from "../../translation/pt/pt";
import LanguageToggle from "../../components/LanguageToggle";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const texts = language === "en" ? en : pt;

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
          {/* <LanguageToggle /> */}
          <a href="https://github.com/wellitonaraujo" target="_blank">
            <StyledFontAwesomeIcon darkMode={isDarkMode} icon={faGithub} />
          </a>

          <a href="https://www.linkedin.com/in/wellitonaraujo/" target="_blank">
            <StyledFontAwesomeIcon darkMode={isDarkMode} icon={faLinkedin} />
          </a>

          <a
            href="https://youtube.com/@wellitonaraujo_dev?si=HxiOxEwAmJiJmGY2"
            target="_blank"
          >
            <StyledFontAwesomeIcon darkMode={isDarkMode} icon={faYoutube} />
          </a>
        </ContainerSolcial>

        <Description>
          <ContainerToggle>
            <Toggle />
          </ContainerToggle>
          <LanguageToggle />
          <TextDescription darkMode={isDarkMode} style={{ margin: 0 }}>
            {" "}
            {texts.welcome}
          </TextDescription>

          <Welliton darkMode={isDarkMode}>Welliton Araujo</Welliton>

          <AnimatedText>
            <Title>
              {texts.title}{" "}
              <StyledAmpersand darkMode={isDarkMode}>&</StyledAmpersand>{" "}
              Front-end{" "}
            </Title>
          </AnimatedText>

          <AnimatedText>
            <TextDescription darkMode={isDarkMode}>
              {texts.experienceDescription}
            </TextDescription>

            <TextDescription darkMode={isDarkMode}>
              {texts.mobileDevelopmentDescription}
            </TextDescription>

            <TextDescription darkMode={isDarkMode}>
              {texts.frontendDevelopmentDescription}
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
        <TitleContact>{texts.form.contact_title}</TitleContact>
        <Form />
      </AnimatedText>

      <FooterWrapper darkMode={isDarkMode}>
        Welliton Araújo - 2024
      </FooterWrapper>
    </>
  );
}
