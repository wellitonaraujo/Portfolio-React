import { useState } from 'react';

import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  Description,
  Title,
  EmailLink,
  ContainerContact
} from './styles';


const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e: unknown) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: unknown) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor ou fazer qualquer outra ação desejada.
    console.log(formData);
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
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mensagem">Mensagem:</Label>
            <TextArea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Enviar</Button>

        </form>
      </FormContainer>

      <Description id='contatos'>
        <Title> Teresina, PI - Brasil </Title>

        <EmailLink href={`mailto:${EmailAddress}`}>{EmailAddress}</EmailLink>

        <EmailLink href={`https://wa.me/${PhoneNumber}`} target="_blank">
          <Title>(91) 98571-5267</Title>
        </EmailLink>

      </Description>
    </ContainerContact>
  );
};

export default Form;
