import { createGlobalStyle } from 'styled-components';
import colors from './styles/colors';

// Definir variáveis globais
export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    background-color: ${colors.background};
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

  /* Polegar (thumb) do scrollbar */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, ${colors.primary.s400}, ${colors.primary.s300}); 
    border-radius: 10px;
  }
  }
`;