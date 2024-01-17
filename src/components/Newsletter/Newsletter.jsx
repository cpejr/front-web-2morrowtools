import { Container, Text1, Text2, Texts, Inputs, Break, SendButton, NameInput } from "./Styles";
import { Input, Button } from "antd";
export default function Newsletter() {
  return (
    <Container>
      <Texts>
        <Text1>Descubra novas ferramentas de tecnologia toda semana! </Text1>
        <Text2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </Text2>
      </Texts>
      <Inputs>
        <Break>
          <NameInput placeholder='Nome:'></NameInput>
          <NameInput placeholder='Email:'></NameInput>
        </Break>
        <NameInput placeholder='Mensagem:'></NameInput>
        <SendButton>ENVIAR</SendButton>
      </Inputs>
    </Container>
  );
}
