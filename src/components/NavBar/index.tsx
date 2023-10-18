import { useTheme } from "../../context/ThemeContext";
import { NavItem, NavUl, Navbar, UlToggle } from "./styles";
import { useEffect, useState } from "react";
import Toggle from "../Toggle";

type NavItem = "sobre" | "skills" | "contatos";

export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<string>("sobre");
  const [localDarkMode, setLocalDarkMode] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const navItems: NavItem[] = ["sobre", "skills", "contatos"];

  useEffect(() => {
    setLocalDarkMode(darkMode);
  }, [darkMode]);

  const handleNavItemClick = (sectionId: NavItem) => {
    const scrollToOptions: ScrollToOptions = { behavior: "smooth" };

    sectionId === "sobre"
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
              darkMode={localDarkMode}
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
