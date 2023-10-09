import { useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  Description,
  Title,
  Link,
  ContainerContact,
  ContainerIcons
} from './styles';

import { StyledFontAwesomeIcon } from './styles';


const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Atualize o estado com os valores dos campos de entrada
    if (name === 'nome') {
      setNome(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'mensagem') {
      setMensagem(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Realize a validação aqui
    const newErrors = {
      nome: '',
      email: '',
      mensagem: '',
    };

    if (nome.trim() === '') {
      newErrors.nome = 'O campo Nome é obrigatório.';
    }

    if (email.trim() === '') {
      newErrors.email = 'O campo Email é obrigatório.';
    }

    if (mensagem.trim() === '') {
      newErrors.mensagem = 'O campo Mensagem é obrigatório.';
    }

    // Atualize o estado com os erros encontrados
    setErrors(newErrors);

    // Se não houver erros, você pode prosseguir com o envio do formulário
    if (Object.values(newErrors).every((error) => error === '')) {
      // Coloque aqui a lógica para enviar o formulário
      console.log('Formulário válido. Enviando...');
    }
  };

  const EmailAddress = 'welliton.araujo@uol.com.br';
  const PhoneNumber = '5591985715267';

  return (
    <ContainerContact>


      <FormContainer id='contatos'>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">Nome:</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={handleInputChange}
              required
            />
            {errors.nome && <span className="error" style={{ display: 'block', margin: 0, padding: 0, color: '#ff0000' }}>{errors.nome}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error" style={{ display: 'block', color: '#ff0000' }}>{errors.email}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mensagem">Mensagem:</Label>
            <TextArea
              id="mensagem"
              name="mensagem"
              value={mensagem}
              onChange={handleInputChange}
              required
            />

            {errors.mensagem && <span className="error" style={{ display: 'block', color: '#ff0000' }}>{errors.mensagem}</span>}
          </FormGroup>
          <Button>Enviar</Button>

        </form>
      </FormContainer>

      <Description id='contatos'>
        {/*<Title> Teresina, PI - Brasil </Title>*/}

        <ContainerIcons >

          <StyledFontAwesomeIcon icon={faEnvelope} />
          <Link href={`mailto:${EmailAddress}`}>
            <Title>{EmailAddress}</Title>
          </Link>
        </ContainerIcons>

        <Link href={`https://wa.me/${PhoneNumber}`} target="_blank">
          <ContainerIcons>
            <StyledFontAwesomeIcon icon={faWhatsapp} />
            <Title>(91) 98571-5267</Title>
          </ContainerIcons>
        </Link>

      </Description>
    </ContainerContact>
  );
};

export default Form;
