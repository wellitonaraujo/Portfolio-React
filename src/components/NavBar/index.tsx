import { useTheme } from "../../context/ThemeContext";
import { NavItem, NavUl, Navbar } from "./styles";
import { useEffect, useState } from "react";
import Toggle from "../Toggle";

type SectionId = "sobre" | "skills" | "contatos";

export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<SectionId | null>("sobre");
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  const handleNavItemClick = (sectionId: SectionId) => {
    sectionId === "sobre"
      ? (window.scrollTo({ top: 0, behavior: "smooth" }),
        setActiveNavItem(sectionId))
      : (document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" }),
        setActiveNavItem(sectionId));
  };

  return (
    <>
      <Navbar>
        <NavUl>
          <li style={{ paddingRight: 100 }}>
            <Toggle />
          </li>

          <NavItem
            darkMode={localDarkMode}
            className={activeNavItem === "sobre" ? "active" : ""}
            onClick={() => handleNavItemClick("sobre")}
          >
            Sobre
          </NavItem>

          <NavItem
            darkMode={localDarkMode}
            className={activeNavItem === "skills" ? "active" : ""}
            onClick={() => handleNavItemClick("skills")}
          >
            Skills
          </NavItem>

          <NavItem
            darkMode={localDarkMode}
            className={activeNavItem === "contatos" ? "active" : ""}
            onClick={() => handleNavItemClick("contatos")}
          >
            Contato
          </NavItem>
        </NavUl>
      </Navbar>
    </>
  );
}
