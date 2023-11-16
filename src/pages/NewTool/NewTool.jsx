import { FormInput, SubmitButton, FormsTextArea, FormSelect } from "../../components";
import { useForm } from "react-hook-form";
import {
  Container,
  Title,
  Form,
  Section,
  Section2,
  ToolList,
  ToolListItem,
  ToolButtons,
} from "./Styles";
import { FaUpload, FaTrash, FaEdit } from "react-icons/fa";

export default function NewTool() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Formulário enviado com sucesso!", data);
  };
  const categories = [
    { _id: "1", name: "Categoria 1" },
    { _id: "2", name: "Categoria 2" },
    { _id: "3", name: "Categoria 3" },
  ];
  const tools = [
    { _id: "1", name: "Ferramenta 1" },
    { _id: "2", name: "Ferramenta 2" },
    { _id: "3", name: "Ferramenta 3" },
  ];

  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput name='title' placeholder='Título:' />
          <FormInput name='upload' placeholder='Upload de Imagem:' icon={FaUpload} />
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
          <FormSelect
            name='category'
            control={control}
            data={categories.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Selecione a categoria'
          />
        </Section>
        <SubmitButton type='submit'>Enviar</SubmitButton>
      </Form>
      <Title>GERENCIAR ITENS</Title>
      <ToolList>
        {tools.map((tool) => (
          <ToolListItem key={tool._id}>
            {tool.name}
            <ToolButtons>
              <FaTrash /> {/* Ícone de lixeira */}
              <FaEdit /> {/* Ícone de lápis */}
            </ToolButtons>
          </ToolListItem>
        ))}
      </ToolList>
    </Container>
  );
}
