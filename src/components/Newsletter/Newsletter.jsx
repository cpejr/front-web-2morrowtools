import { Container, Title, Description, Texts, Inputs, Break, Input1, Button1 } from "./Styles";
export default function Newsletter() {
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
          <Input1 placeholder='Nome:'></Input1>
          <Input1 placeholder='Email:'></Input1>
        </Break>
        <Input1 placeholder='Mensagem:'></Input1>
        <Button1>ENVIAR</Button1>
      </Inputs>
    </Container>
  );
}
