import { createGlobalStyle } from 'styled-components';
import colors from './styles/colors';

import { useTheme } from './context/ThemeContext';

// Definir variáveis globais
export const GlobalStyle = createGlobalStyle`
  :root {
    
    line-height: 1.5;
    background: linear-gradient(to top, ${colors.grey.s500}, ${colors.black});
    margin: 0 auto;
    text-align: center;
    scroll-behavior: smooth;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    /* CSS para personalizar a cor do scrollbar */
  ::-webkit-scrollbar {
    width: 5px; 
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to top, ${colors.primary.s400}, ${colors.primary.s300}); 
    border-radius: 10px;
  }
  }
`;