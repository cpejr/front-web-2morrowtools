import { Container, Title, Description, Texts, Inputs, Break, Input, Button } from "./Styles";
import { usePostNewsletter, useGetNewsletter } from "../../services/ManagerService";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await useGetNewsletter();
      setNewsletters(result.Newsletters);
    }

    fetchData();
  }, []);

  const PostNewsletter = async () => {
    try {
      await usePostNewsletter({
        name: name,
        email: email,
        message: message,
      });
      toast.success("Email postado com sucesso");
    } catch (error) {
      toast.error("Erro ao postar email");
      toast.clearWaitingQueue();
    }
  };

  const handleSubmit = () => {
    PostNewsletter();
    setName("");
    setEmail("");
    SetMessage("");
  };

  return (
    <Container>
      <Texts>
        <Title>Descubra novas ferramentas de tecnologia toda semana! </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </Description>
      </Texts>
      <Inputs>
        <Break>
          <Input onChange={(e) => setName(e.target.value)} value={name} placeholder='Nome:'></Input>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email:'
          ></Input>
        </Break>
        <Input
          onChange={(e) => SetMessage(e.target.value)}
          value={message}
          placeholder='Mensagem:'
        ></Input>
        <Button onClick={handleSubmit} type='submit'>
          ENVIAR
        </Button>
        {/* <Button onClick={exportData} type='secondary'>
          EXPORTAR
        </Button> */}
      </Inputs>
    </Container>
  );
}
