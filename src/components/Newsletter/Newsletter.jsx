import { Container, Title, Description, Texts, Inputs, Break, Input, Button } from "./Styles";
import { usePostNewsletter, useGetNewsletter } from "../../services/ManagerService";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";

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
    await usePostNewsletter({
      name: name,
      email: email,
      message: message,
    });
  };

  const exportData = () => {
    const csvContent =
      "Nome,Email,Mensagem\n" +
      newsletters
        .map((newsletter) => [newsletter.name, newsletter.email, newsletter.message].join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "newsletter_data.csv");
  };

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
          <Input onChange={(e) => setName(e.target.value)} placeholder='Nome:'></Input>
          <Input onChange={(e) => setEmail(e.target.value)} placeholder='Email:'></Input>
        </Break>
        <Input onChange={(e) => SetMessage(e.target.value)} placeholder='Mensagem:'></Input>
        <Button onClick={PostNewsletter} type='primary'>
          ENVIAR
        </Button>
        <Button onClick={exportData} type='secondary'>
          EXPORTAR
        </Button>
      </Inputs>
    </Container>
  );
}
