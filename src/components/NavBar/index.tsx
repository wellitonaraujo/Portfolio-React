import { useState } from 'react';
import { NavItem, NavUl, Navbar } from './styles';
import Header from '../isDarkMode';

type SectionId = 'sobre' | 'skills' | 'contatos';

export default function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState<SectionId | null>('sobre');

  const handleNavItemClick = (sectionId: SectionId) => {
    sectionId === 'sobre'
      ? (window.scrollTo({ top: 0, behavior: 'smooth' }), setActiveNavItem(sectionId))
      : (document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }),
        setActiveNavItem(sectionId));
  };

  return (
    <>
      <Navbar>
        <NavUl>
          <div style={{ marginRight: '70px' }}>
            <Header />
          </div>
          <NavItem
            className={activeNavItem === 'sobre' ? 'active' : ''}
            onClick={() => handleNavItemClick('sobre')}>
            Sobre
          </NavItem>

          <NavItem
            className={activeNavItem === 'skills' ? 'active' : ''}
            onClick={() => handleNavItemClick('skills')}>
            Skills
          </NavItem>

          <NavItem
            className={activeNavItem === 'contatos' ? 'active' : ''}
            onClick={() => handleNavItemClick('contatos')}>
            Contato
          </NavItem>
        </NavUl>

      </Navbar>
    </>
  )
}
