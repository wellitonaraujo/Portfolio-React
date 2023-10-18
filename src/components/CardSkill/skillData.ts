import postgres from "../../assets/postgresql.png";
import reactjs from "../../assets/reactjs.png";
import nodejs from "../../assets/nodejs.png";
import figma from "../../assets/figma.png";
import siwft from "../../assets/swift.png";

interface Skill {
  src: string;
  alt: string;
  description: string;
}

export const skillsData: Skill[] = [
  { src: reactjs, alt: "React Native", description: "React Native" },
  { src: nodejs, alt: "NodeJS", description: "NodeJS" },
  { src: siwft, alt: "Swift", description: "Swift" },
  { src: postgres, alt: "PostgreSQL", description: "PostgreSQL" },
  { src: reactjs, alt: "ReactJS", description: "ReactJS" },
  { src: figma, alt: "Figma", description: "Figma" },
];
