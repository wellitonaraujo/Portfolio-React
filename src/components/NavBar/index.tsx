import { useState } from 'react';
import { NavItem, NavUl, Navbar } from './styles';

type SectionId = 'sobre' | 'skills' | 'contatos';


export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<SectionId | null>('sobre');

  const handleNavItemClick = (sectionId: SectionId, index: number) => {
    sectionId === 'sobre'
      ? (window.scrollTo({ top: 0, behavior: 'smooth' }), setActiveNavItem(sectionId))
      : (document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }),
        setActiveNavItem(sectionId));
  };

  return (
    <>
      <Navbar>
        <NavUl>
          <NavItem
            className={activeNavItem === 'sobre' ? 'active' : ''}
            onClick={() => handleNavItemClick('sobre', 0)}>
            Sobre
          </NavItem>

          <NavItem
            className={activeNavItem === 'skills' ? 'active' : ''}
            onClick={() => handleNavItemClick('skills', 1)}>
            Skills
          </NavItem>

          <NavItem
            className={activeNavItem === 'contatos' ? 'active' : ''}
            onClick={() => handleNavItemClick('contatos', 2)}>
            Contato
          </NavItem>
        </NavUl>
      </Navbar>
    </>
  )
}
