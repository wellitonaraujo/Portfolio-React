import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useEffect, useState } from "react";
import { useTheme } from "../../context/useTheme";
import { StyledFontAwesomeIcon } from "./styles";
import emailjs from "@emailjs/browser";
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

  const [isDarkMode, setIsDarkMode] = useState(false);
  const { darkMode } = useTheme();

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

  const validarForm = () => {
    const novosErros: Errors = {
      nome: null,
      email: null,
      mensagem: null,
    };

    if (!nome.trim()) {
      novosErros.nome = "O campo Nome é obrigatório.";
    }

    if (!email.trim()) {
      novosErros.email = "O campo Email é obrigatório.";
    }

    if (!mensagem.trim()) {
      novosErros.mensagem = "O campo Mensagem é obrigatório.";
    }

    setErrors(novosErros);
    return Object.values(novosErros).every((error) => error === null);
  };

  const enviarEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validarForm()) {
      emailjs
        .sendForm(
          "seu_servico_emailjs",
          "seu_template_emailjs",
          e.currentTarget,
          "seu_usuario_emailjs"
        )
        .then((response) => {
          console.log("E-mail enviado com sucesso!", response);
          // Lógica para mostrar uma mensagem de sucesso ao usuário
        })
        .catch((error) => {
          console.error("Erro ao enviar e-mail:", error);
          // Lógica para mostrar uma mensagem de erro ao usuário
        });
    }
  };

  const EmailAddress = "welliton.araujo@uol.com.br";

  return (
    <ContainerContact>
      <FormContainer id="Contato">
        <form onSubmit={enviarEmail}>
          <FormGroup>
            <Label htmlFor="nome">Nome:</Label>
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
            <Label htmlFor="email">Email:</Label>
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
            <Label htmlFor="mensagem">Mensagem:</Label>
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
          <Button disabled>Enviar</Button>
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
