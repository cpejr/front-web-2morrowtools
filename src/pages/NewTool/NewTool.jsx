import { FormInput, SubmitButton, FormsTextArea } from "../../components";
import { Container, Title, Form, Section, Section2 } from "./Styles";

export default function NewTool() {
  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>
      <Form>
        <Section>
          <FormInput name='title' placeholder='Título:' />
          <FormInput name='upload' placeholder='Upload de Imagem:' />
          <Section2>
            <FormInput name='link1' placeholder='Link Linkedin:' />
            <FormInput name='link2' placeholder='Link Discord:' />
            <FormInput name='link3' placeholder='Link  Twitter / X:' />
          </Section2>
          <Section2>
            <FormInput name='link4' placeholder='Link Instagram:' />
            <FormInput name='link5' placeholder='Link TikTok:' />
            <FormInput name='link6' placeholder='Link Facebook:' />
          </Section2>
          <Section2>
            <FormInput name='link7' placeholder='Link Reddit:' />
            <FormInput name='link8' placeholder='Link Pinterest:' />
            <FormInput name='link9' placeholder='Link Youtube:' />
          </Section2>
          <FormInput name='shortDescription' placeholder='Descrição curta:' />
          <FormsTextArea name='message' rows={11} placeholder='Descrição longa:' />
          <FormInput name='longDescription' placeholder='Descrição longa:' />
          <FormInput name='link' placeholder='Link do site:' />
        </Section>
        <SubmitButton>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}
