import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useEffect, useState } from "react";
import { useTheme } from "../../context/useTheme";
import { StyledFontAwesomeIcon, SuccessMessage } from "./styles";
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
import axios from "axios";

type Errors = {
  nome: string | null;
  email: string | null;
  mensagem: string | null;
};

const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState<Errors>({
    nome: null,
    email: null,
    mensagem: null,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { darkMode } = useTheme();

  const { language } = useLanguage();

  const texts = language === "en" ? en : pt;

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    try {
      await axios.post(
        "https://sendemail-backend-tzwr.onrender.com/send-email",
        {
          name: nome,
          email: email,
          message: mensagem,
        }
      );
      setIsSuccess(true);

      setNome("");
      setEmail("");
      setMensagem("");
      setErrors({ nome: null, email: null, mensagem: null });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.errors) {
        setErrors({
          nome: error.response?.data?.errors?.nome || null,
          email: error.response?.data?.errors?.email || null,
          mensagem: error.response?.data?.errors?.mensagem || null,
        });
      } else {
        console.error("Erro ao enviar o email:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMensagemChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMensagem(event.target.value);
  };

  const EmailAddress = "wellitonaraujodev@gmail.com";

  return (
    <ContainerContact>
      <FormContainer id="Contato">
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">{texts.form.name}:</Label>
            <Input
              darkMode={isDarkMode}
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={handleNomeChange}
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
              onChange={handleEmailChange}
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
              onChange={handleMensagemChange}
            />
            {errors.mensagem && (
              <span className="error">{errors.mensagem}</span>
            )}
          </FormGroup>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : texts.form.btn_send}
          </Button>
          {isSuccess && (
            <SuccessMessage>Mensagem enviada com sucesso!</SuccessMessage>
          )}
        </form>
      </FormContainer>

      <Description id="contatos">
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
