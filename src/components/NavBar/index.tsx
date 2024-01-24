import { useTheme } from "../../context/useTheme";
import { NavItem, NavUl, Navbar, UlToggle } from "./styles";
import { useEffect, useState } from "react";
import Toggle from "../Toggle";
import { IoPerson } from "react-icons/io5"; // Sobre
import { BsTools } from "react-icons/bs"; // Tecnologias
import { BsBuildingCheck } from "react-icons/bs";
import { GrContact } from "react-icons/gr"; // Contato

type NavItem = {
  id: string;
  label: string;
  icon: JSX.Element;
};

export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<string>("Sobre");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const navItems: NavItem[] = [
    { id: "Sobre", label: "Sobre", icon: <IoPerson /> },
    { id: "Tecnologias", label: "Tecnologias", icon: <BsTools /> },
    { id: "Projetos", label: "Projetos", icon: <BsBuildingCheck /> },
    { id: "Contato", label: "Contato", icon: <GrContact /> },
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
