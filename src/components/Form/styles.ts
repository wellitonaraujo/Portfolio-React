import styled from 'styled-components';
import colors from '../../styles/colors';

const mobileMediaQuery = `@media (max-width: 767px)`;

export const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex; /* Adicionado para usar flexbox */
  flex-direction: column; /* Os elementos filhos serão empilhados verticalmente */
  ${mobileMediaQuery} {
    width: 100%;

  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 200px;

  ${mobileMediaQuery} {
    flex-direction: column; /* Altere para uma coluna em dispositivos móveis */
    padding: 1rem;
    align-items: center;

    flex: 1;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: transparent;
  background: linear-gradient(to top, ${colors.primary.s400}, ${colors.primary.s300});
  -webkit-background-clip: text;
  background-clip: text;
  text-align: left;
  font-size: 1.5rem;

  ${mobileMediaQuery} {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid transparent; 
  border-image: linear-gradient(to top, ${colors.primary.s400}, ${colors.primary.s300}) 1; 
  border-image-slice: 1;
  border-radius: 4px;
  background-color: ${colors.grey.s500};
  color: white;
  font-size: 1.1rem;
  outline: none;

  ${mobileMediaQuery} {
  width: 90%;
  padding: 12px;
  }
`;

export const EmailLink = styled.a`
   font-size: 2rem;
  background: linear-gradient(to bottom,  ${colors.primary.s400}, ${colors.primary.s300});
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent;
  margin: 0;
  font-weight: 800;

  ${mobileMediaQuery} {
    flex-direction: column; /* Altere para uma coluna em dispositivos móveis */
    font-size: 1rem; /* Reduz o tamanho da fonte */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid transparent; 
  border-image: linear-gradient(to top, ${colors.primary.s400}, ${colors.primary.s300}) 1;
  border-image-slice: 1;
  border-radius: 4px;
  background-color: ${colors.grey.s500};
  color: white;
  font-size: 1.1rem;
  ${mobileMediaQuery} {
    width: 90%;
  }
`;
export const Description = styled.div`
   text-align: left;
   margin: 0;
   padding-left: 4rem;
   ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
    padding: 0; /* Remove o espaçamento à esquerda */
    margin-top: 3rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  background: linear-gradient(to top,  ${colors.primary.s400}, ${colors.primary.s300});
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent;
  margin: 0;
  font-weight: 800;
  ${mobileMediaQuery} {
    /* Estilos específicos para dispositivos móveis */
    font-size: 1rem; /* Reduz o tamanho da fonte */
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    
  }
`;

export const Button = styled.div`
  background: linear-gradient(to top,  ${colors.primary.s400}, ${colors.primary.s300});
  width: 100%;
  font-size: 1.1rem;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${mobileMediaQuery} {
    width: 90%; 
    padding-bottom: 12px;
    padding-top: 12px;
  }

`;