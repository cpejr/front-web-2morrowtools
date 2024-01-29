import { Container, Title, Description, Texts, Inputs, Break, Input, Button } from "./Styles";
export default function Newsletter() {
  return (
    <Container style={{ display: "none" }}>
      <Texts>
        <Title>Descubra novas ferramentas de tecnologia toda semana! </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </Description>
      </Texts>
      <Inputs>
        <Break>
          <Input placeholder='Nome:'></Input>
          <Input placeholder='Email:'></Input>
        </Break>
        <Input placeholder='Mensagem:'></Input>
        <Button>ENVIAR</Button>
      </Inputs>
    </Container>
  );
}
