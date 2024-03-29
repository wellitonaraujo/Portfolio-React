import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useEffect, useState } from "react";
import { useTheme } from "../../context/useTheme";
import { StyledFontAwesomeIcon } from "./styles";
import {
  ContainerContact,
  ContainerIcons,
  FormContainer,
  Description,
  FormGroup,
  TextArea,
  Button,
  Label,
  Input,
  Title,
  Link,
} from "./styles";
import { useLanguage } from "../../context/useLanguage";
import en from "../../translation/en/en";
import pt from "../../translation/pt/pt";

type Errors = {
  nome: string | null;
  email: string | null;
  mensagem: string | null;
};

const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors] = useState<Errors>({
    nome: null,
    email: null,
    mensagem: null,
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const { darkMode } = useTheme();

  const { language } = useLanguage();

  const texts = language === "en" ? en : pt;

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Atualize o estado com os valores dos campos de entrada
    if (name === "nome") {
      setNome(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "mensagem") {
      setMensagem(value);
    }
  };

  const enviarEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const EmailAddress = "wellitonaraujodev@gmail.com";

  return (
    <ContainerContact>
      <FormContainer id="Contato">
        <form onSubmit={enviarEmail}>
          <FormGroup>
            <Label htmlFor="email">{texts.form.name}:</Label>
            <Input
              darkMode={isDarkMode}
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={handleInputChange}
              required
            />
            {errors.nome && <span className="error">{errors.nome}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">{texts.form.email}:</Label>
            <Input
              darkMode={isDarkMode}
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mensagem">{texts.form.message}:</Label>
            <TextArea
              darkMode={isDarkMode}
              id="mensagem"
              name="mensagem"
              value={mensagem}
              onChange={handleInputChange}
              required
            />

            {errors.mensagem && (
              <span className="error">{errors.mensagem}</span>
            )}
          </FormGroup>
          <Button disabled>{texts.form.btn_send}</Button>
        </form>
      </FormContainer>

      <Description id="contatos">
        {/*<Title> Teresina, PI - Brasil </Title>*/}

        <ContainerIcons>
          <StyledFontAwesomeIcon darkMode={isDarkMode} icon={faEnvelope} />
          <Link href={`mailto:${EmailAddress}`}>
            <Title>{EmailAddress}</Title>
          </Link>
        </ContainerIcons>
      </Description>
    </ContainerContact>
  );
};

export default Form;
