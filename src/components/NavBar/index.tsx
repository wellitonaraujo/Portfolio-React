import { NavItem, NavUl, Navbar, UlToggle } from "./styles";
import { useLanguage } from "../../context/useLanguage";
import { useTheme } from "../../context/useTheme";
import { BsBuildingCheck } from "react-icons/bs";
import { useEffect, useState } from "react";

import { IoPerson } from "react-icons/io5"; // Sobre
import { BsTools } from "react-icons/bs"; // Tecnologias
import { GrContact } from "react-icons/gr"; // Contato

import en from "../../translation/en/en";
import pt from "../../translation/pt/pt";

import Toggle from "../Toggle";

type NavItem = {
  id: string;
  label: string;
  icon: JSX.Element;
};

export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<string>("Sobre");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const { language } = useLanguage();

  const texts = language === "en" ? en : pt;

  const navItems: NavItem[] = [
    { id: "Sobre", label: texts.navbar.about, icon: <IoPerson /> },
    { id: "Tecnologias", label: texts.navbar.technologies, icon: <BsTools /> },
    { id: "Projetos", label: texts.navbar.projects, icon: <BsBuildingCheck /> },
    { id: "Contato", label: texts.navbar.contact, icon: <GrContact /> },
  ];

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  const handleNavItemClick = (sectionId: string) => {
    const scrollToOptions: ScrollToOptions = { behavior: "smooth" };

    sectionId === "Sobre"
      ? window.scrollTo({ top: 0, ...scrollToOptions })
      : document.getElementById(sectionId)?.scrollIntoView(scrollToOptions);

    setActiveNavItem(sectionId);
  };

  return (
    <>
      <Navbar>
        <NavUl>
          <UlToggle>
            <Toggle />
          </UlToggle>

          {navItems.map((item) => (
            <NavItem
              key={item.id}
              darkMode={isDarkMode}
              className={activeNavItem === item.id ? "active" : ""}
              onClick={() => handleNavItemClick(item.id)}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </NavItem>
          ))}
        </NavUl>
      </Navbar>
    </>
  );
}
