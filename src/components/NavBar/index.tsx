import { useTheme } from "../../context/useTheme";
import { NavItem, NavUl, Navbar, UlToggle } from "./styles";
import { useEffect, useState } from "react";
import Toggle from "../Toggle";

type NavItem = "Sobre" | "Tecnologias" | "Projetos" | "Contato";

export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<string>("Sobre");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const navItems: NavItem[] = ["Sobre", "Tecnologias", "Projetos", "Contato"];

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  const handleNavItemClick = (sectionId: NavItem) => {
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
              key={item}
              darkMode={isDarkMode}
              className={activeNavItem === item ? "active" : ""}
              onClick={() => handleNavItemClick(item)}
            >
              {item}
            </NavItem>
          ))}
        </NavUl>
      </Navbar>
    </>
  );
}
