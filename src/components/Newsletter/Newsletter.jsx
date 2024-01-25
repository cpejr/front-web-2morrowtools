import { Container, Title, Description, Texts, Inputs, Break, Input, Button } from "./Styles";
import { usePostNewsletter } from "../../services/ManagerService";
import { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");

  async function PostNewsletter() {
    await usePostNewsletter({
      name: name,
      email: email,
      message: message,
    });
  }
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
          <Input onChange={(e) => setName(e.target.value)} placeholder='Nome:'></Input>
          <Input onChange={(e) => setEmail(e.target.value)} placeholder='Email:'></Input>
        </Break>
        <Input onChange={(e) => SetMessage(e.target.value)} placeholder='Mensagem:'></Input>
        <Button onClick={PostNewsletter} type='primary'>
          ENVIAR
        </Button>
      </Inputs>
    </Container>
  );
}
