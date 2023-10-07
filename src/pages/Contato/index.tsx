import { Description, Title, EmailLink } from './styles'

const EmailAddress = 'welliton.araujo@uol.com.br';
const PhoneNumber = '5591985715267';

function Contato() {
  return (
    <>
      <Description style={{ paddingTop: 500 }} id='contatos'>
        <Title style={{ marginBottom: 40 }}> Teresina, PI - Brasil </Title>

        <EmailLink style={{ marginTop: 40 }} href={`mailto:${EmailAddress}`}>{EmailAddress}</EmailLink>

        <EmailLink href={`https://wa.me/${PhoneNumber}`} target="_blank">
          <Title style={{ marginTop: 40 }} >(91) 98571-5267</Title>
        </EmailLink>

      </Description>
    </>
  )
}

export default Contato