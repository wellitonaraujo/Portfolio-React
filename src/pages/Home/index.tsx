import {
  Description,
  Image,
  TextDescription,
  ContainerDescription,
  Welliton,
  Title,
  StyledAmpersand,
  Line
} from './styles'

import profile from '../../assets/profile.jpeg'
import CardSkill from '../../components/CardSkill';
import Contato from '../Contato';

export default function Home() {
  return (
    <>
      <ContainerDescription>
        <Image src={profile} alt="Eu" id='sobre' />

        <Description>
          <TextDescription children='Olá, sou o' style={{ margin: 0 }} />
          <Welliton>Welliton Araujo</Welliton>
          <Title>Desenvolvedor Mobile  <br /> <StyledAmpersand>&</StyledAmpersand> Front-end </Title>

          <TextDescription><Line>Com anos de experiência</Line> do mercado de desenvolvimento de software e apaixonado por tecnologia, busco aperfeiçoamento profissional diariamente.</TextDescription>
          <TextDescription><Line>Sólida experiência</Line> em todo ciclo de desenvolvimento mobile, da prototipação, arquitetura, desenvolvimento, testes e deploy.</TextDescription>
          <TextDescription><Line>Vivência</Line> em desenvolvimento front-end, utilizando as principais tecnologias do mercado.</TextDescription>
        </Description>

      </ContainerDescription>
      <CardSkill />

      <Contato />
    </>
  )
}