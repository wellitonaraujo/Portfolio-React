import { useLanguage } from "../../context/useLanguage";
import en from "../../translation/en/en";
import pt from "../../translation/pt/pt";
import { SubTitle } from "../CardSkill/styles";

const TitleSkills = () => {
  const { language } = useLanguage();

  const texts = language === "en" ? en : pt;

  return <SubTitle>{texts.technologies.description}</SubTitle>;
};

export default TitleSkills;
