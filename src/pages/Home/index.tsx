import {
  Description,
  Image,
  TextDescription,
  ContainerDescription,
  Welliton,
  Title,
  StyledAmpersand,
  Line,
  ScrollToTopButton,
  Arrow,
  StyledFontAwesomeIcon,
  ContainerSolcial,
  AnimatedTextDescriptionWrapper,
  TitleContact
} from './styles'

import profile from '../../assets/profile.jpeg'
import arrow from '../../assets/arrow.png'
import CardSkill from '../../components/CardSkill';
import { useEffect, useState } from 'react';
import Form from '../../components/Form';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import Footer from '../../components/Footer';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/isDarkMode';

const AnimatedTextDescription = ({ children }: React.PropsWithChildren) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação ocorra apenas uma vez quando o elemento entra no viewport.
  });

  return (
    <AnimatedTextDescriptionWrapper ref={ref} isVisible={inView}>
      {children}
    </AnimatedTextDescriptionWrapper>
  );
};

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
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <ContainerDescription>

        <Image darkMode={localDarkMode} src={profile} alt="Eu" id='sobre' />

        <ContainerSolcial>
          <Header />
          <a href='https://github.com/wellitonaraujo' target="_blank">
            <StyledFontAwesomeIcon icon={faGithub} />
          </a>

          <a href='https://www.linkedin.com/in/wellitonaraujo/' target="_blank">
            <StyledFontAwesomeIcon icon={faLinkedin} />
          </a>
        </ContainerSolcial>

        <Description>

          <TextDescription darkMode={localDarkMode} children='Olá, sou o' style={{ margin: 0 }} />
          <Welliton darkMode={localDarkMode}>Welliton Araujo</Welliton>

          <AnimatedTextDescription>
            <Title>Desenvolvedor Mobile <StyledAmpersand darkMode={localDarkMode}>&</StyledAmpersand> Front-end </Title>
          </AnimatedTextDescription>

          <AnimatedTextDescription>
            <TextDescription darkMode={localDarkMode}><Line>Com anos de experiência</Line> do mercado de desenvolvimento de software e apaixonado por tecnologia, busco aperfeiçoamento profissional diariamente.</TextDescription>
            <TextDescription darkMode={localDarkMode}><Line>Sólida experiência</Line> em todo ciclo de desenvolvimento mobile, da prototipação, arquitetura, desenvolvimento, testes e deploy.</TextDescription>
            <TextDescription darkMode={localDarkMode}><Line>Vivência</Line> em desenvolvimento front-end, utilizando as principais tecnologias do mercado.</TextDescription>
          </AnimatedTextDescription>
        </Description>

        {showScrollButton && (
          <ScrollToTopButton onClick={scrollToTop}>
            <Arrow src={arrow} />
          </ScrollToTopButton>
        )}
      </ContainerDescription>

      <AnimatedTextDescription>
        <CardSkill />
      </AnimatedTextDescription>
      <AnimatedTextDescription>

        <TitleContact>Contato</TitleContact>
        <Form />

      </AnimatedTextDescription>

      <Footer />
    </>
  )
}