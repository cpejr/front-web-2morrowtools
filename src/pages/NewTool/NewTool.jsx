import { useState } from "react";
import {
  FormInput,
  SubmitButton,
  FormsTextArea,
  FormSelect,
  ModalDelete,
  ModalEdit,
  SocialMediaInput,
} from "../../components";
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
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  const onSubmit = (data) => {
    console.log("Formulário enviado com sucesso!", data);
  };

  const handleOpenDeleteModal = (toolId) => {
    setSelectedToolId(toolId);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedToolId(null);
    setDeleteModalOpen(false);
  };

  // Funções para o ModalEdit
  const handleOpenEditModal = (tool) => {
    setSelectedTool(tool);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedTool(null);
    setEditModalOpen(false);
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
          <FormInput name='shortDescription' placeholder='Descrição curta:' />
          <FormsTextArea name='message' rows={11} placeholder='Descrição longa:' />
          <FormInput name='link' placeholder='Link do site:' />
          <Section2>
            <FormSelect
              name='category'
              control={control}
              data={categories.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Selecione a categoria'
            />
            <FormSelect
              name='category'
              control={control}
              data={categories.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Selecione a categoria'
            />
            <FormSelect
              name='category'
              control={control}
              data={categories.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Selecione a categoria'
            />
          </Section2>
          <SocialMediaInput
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
              <FaTrash onClick={() => handleOpenDeleteModal(tool._id)} />
              <FaEdit onClick={() => handleOpenEditModal(tool)} />
            </ToolButtons>
          </ToolListItem>
        ))}
      </ToolList>
      {isDeleteModalOpen && <ModalDelete _id={selectedToolId} close={handleCloseDeleteModal} />}
      {isEditModalOpen && selectedTool && (
        <ModalEdit tool={selectedTool} close={handleCloseEditModal} />
      )}
    </Container>
  );
}
