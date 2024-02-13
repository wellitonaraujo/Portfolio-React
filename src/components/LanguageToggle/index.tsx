// LanguageToggle.tsx
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import english from "../../assets/english.png";
import ptBR from "../../assets/portuguese.jpg";
import { Image, FlagContainer } from "./styles";

const LanguageToggle = () => {
  const context = useContext(LanguageContext) || {
    toggleLanguage: () => {},
    language: "",
    texts: {},
  };
  const { toggleLanguage } = context;
  return (
    <FlagContainer>
      <Image
        src={ptBR}
        alt="Brazilian Flag"
        onClick={(e) => {
          e.preventDefault();
          toggleLanguage("pt");
        }}
      />
      <Image
        src={english}
        alt="American Flag"
        onClick={(e) => {
          e.preventDefault();
          toggleLanguage("en");
        }}
      />
    </FlagContainer>
  );
};

export default LanguageToggle;
