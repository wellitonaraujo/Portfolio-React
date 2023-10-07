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
  ContainerSolcial
} from './styles'

import profile from '../../assets/profile.jpeg'
import arrow from '../../assets/arrow.png'
import CardSkill from '../../components/CardSkill';
import { useState } from 'react';
import Form from '../../components/Form';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
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
        <Image src={profile} alt="Eu" id='sobre' />

        <ContainerSolcial>
          <a href='https://github.com/wellitonaraujo' target="_blank">
            <StyledFontAwesomeIcon icon={faGithub} />
          </a>

          <a href='https://www.linkedin.com/in/wellitonaraujo/' target="_blank">
            <StyledFontAwesomeIcon icon={faLinkedin} />
          </a>

        </ContainerSolcial>

        <Description>
          <TextDescription children='Olá, sou o' style={{ margin: 0 }} />
          <Welliton>Welliton Araujo</Welliton>

          <Title>Desenvolvedor Mobile <StyledAmpersand>&</StyledAmpersand> Front-end </Title>

          <TextDescription><Line>Com anos de experiência</Line> do mercado de desenvolvimento de software e apaixonado por tecnologia, busco aperfeiçoamento profissional diariamente.</TextDescription>
          <TextDescription><Line>Sólida experiência</Line> em todo ciclo de desenvolvimento mobile, da prototipação, arquitetura, desenvolvimento, testes e deploy.</TextDescription>
          <TextDescription><Line>Vivência</Line> em desenvolvimento front-end, utilizando as principais tecnologias do mercado.</TextDescription>
        </Description>

        {showScrollButton && (
          <ScrollToTopButton onClick={scrollToTop}>
            <Arrow src={arrow} />
          </ScrollToTopButton>
        )}
      </ContainerDescription>
      <CardSkill />

      <Form />
    </>
  )
}