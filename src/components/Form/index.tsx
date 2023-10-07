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
  const EmailAddress = 'welliton.araujo@uol.com.br';
  const PhoneNumber = '5591985715267';

  return (
    <ContainerContact>
      <FormContainer id='contatos'>
        <form>
          <FormGroup>
            <Label htmlFor="nome">Nome:</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mensagem">Mensagem:</Label>
            <TextArea
              id="mensagem"
              name="mensagem"
              required
            />
          </FormGroup>
          <Button>Enviar</Button>

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
