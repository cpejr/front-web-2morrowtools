import { Container, Title, Description, Texts, Inputs, Break, Input, Button } from "./Styles";
import { usePostNewsletter } from "../../services/ManagerService";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuthStore from "../../stores/auth";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");
  const { getUser } = useAuthStore();
  const userID = getUser()?._id;

  const PostNewsletter = async () => {
    try {
      await usePostNewsletter({
        name: name,
        email: email,
        message: message,
        userID: userID,
      });
      toast.success("Email postado com sucesso");
    } catch (error) {
      toast.error("Erro ao postar email");
      toast.clearWaitingQueue();
    }
  };

  const handleSubmit = () => {
    PostNewsletter();
    setTimeout(() => {
      setName("");
      setEmail("");
      SetMessage("");
    }, 1000);
  };

  return (
    <Container>
      <Texts>
        <Title>Descubra novas ferramentas de tecnologia toda semana! </Title>
        <Description>
          Fique por dentro das mais recentes ferramentas de inteligência artificial e descubra como
          elas podem transformar o seu negócio. Assine nossa newsletter e receba conteúdo exclusivo
          diretamente na sua caixa de entrada
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
      </Inputs>
    </Container>
  );
}
