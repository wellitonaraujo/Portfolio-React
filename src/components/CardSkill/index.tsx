import {
  Container,
  DataContainer,
  ImageContainer,
  Image,
  Title,
  TextDescription
} from './styles';

import reactjs from '../../assets/reactjs.png';
import figma from '../../assets/figma.png';
import nodejs from '../../assets/nodejs.png';
import postgres from '../../assets/postgresql.png';
import siwft from '../../assets/swift.png';
import TitleSkills from '../TitleSkills';

const skillsData = [
  { src: reactjs, alt: 'React Native', description: 'React Native' },
  { src: nodejs, alt: 'NodeJS', description: 'NodeJS' },
  { src: siwft, alt: 'Swift', description: 'Swift' },
  { src: postgres, alt: 'PostgreSQL', description: 'PostgreSQL' },
  { src: reactjs, alt: 'ReactJS', description: 'ReactJS' },
  { src: figma, alt: 'Figma', description: 'Figma' },
];

export default function CardSkill() {
  return (
    <div style={{ marginTop: '30%' }} >
      <Title id="skills">Skills</Title>
      <Container>

        <DataContainer>
          {skillsData.map((skill, index) => (
            <ImageContainer key={index}>
              <Image src={skill.src} alt={skill.alt} />
              <TextDescription>{skill.description}</TextDescription>
            </ImageContainer>
          ))}
        </DataContainer>

        <TitleSkills />
      </Container>
    </div>
  )
}