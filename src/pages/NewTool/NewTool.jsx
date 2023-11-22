import { useState } from "react";
import {
  FormInput,
  SubmitButton,
  FormsTextArea,
  ModalDelete,
  ModalEdit,
  SocialMediaInput,
  NewLink,
} from "../../components";
import { useForm } from "react-hook-form";
import {
  Container,
  Title,
  Form,
  Section,
  ToolList,
  ToolListItem,
  ToolButtons,
  StyledModal,
} from "./Styles";
import { FaUpload, FaTrash, FaEdit } from "react-icons/fa";
//import { usePostAITools } from "../../services/ManagerService";
import * as managerService from "../../services/ManagerService";

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

  const data = [
    {
      id_categoryfeature: "655d198cef3ca4729b1e27e8",
      id_categoryprice: "655d199def3ca4729b1e27ea",
      id_categoryprofession: "655d19abef3ca4729b1e27ec",
      name: "Chat-GPT12",
      shortDescription: "CPE",
      longDescription: "Testando cabulosamente",
      imageURL: "CPE",
      link: "CPE",
      priceType: "OI",
      youtubeVideoLink: "https://www.youtube.com/embed/watch?v=5RahprejHPo",
      linkedIn: "RianVieira",
      discord: "RianVieira",
      twitterX: "RianVieira",
      instagram: "RianVieira",
      tiktok: "RianVieira",
      facebook: "RianVieira",
      reddit: "RianVieira",
      pinterest: "RianVieira",
      youtube: "RianVieira",
    },
  ];
  async function Teste() {
    await managerService.usePostAITools(data);
  }
  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>
      <SubmitButton
        onClick={() => {
          Teste();
        }}
      ></SubmitButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput name='title' placeholder='Título:' />
          <FormInput name='upload' placeholder='Upload de Imagem:' icon={FaUpload} />
          <FormInput name='shortDescription' placeholder='Descrição curta:' />
          <FormsTextArea name='message' rows={4} placeholder='Descrição longa:' />
          <FormInput name='link' placeholder='Link do site:' />
          <NewLink />
          <SocialMediaInput
            name='category'
            control={control}
            data={categories.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Rede social:'
          />
        </Section>
        <SubmitButton type='submit'>Enviar</SubmitButton>
      </Form>
      <Title>GERENCIAR ITENS</Title>
      {isDeleteModalOpen && (
        <StyledModal
          open={isDeleteModalOpen}
          onCancel={handleCloseDeleteModal}
          width={500}
          height={250}
          padding={0}
          footer={null}
          closeIcon={true}
          centered
          destroyOnClose
        >
          <ModalDelete _id={selectedToolId} close={handleCloseDeleteModal} />
        </StyledModal>
      )}
      {isEditModalOpen && selectedTool && (
        <StyledModal
          open={isEditModalOpen}
          onCancel={handleCloseEditModal}
          width={500}
          height={250}
          padding={0}
          footer={null}
          closeIcon={true}
          centered
          destroyOnClose
        >
          <ModalEdit tool={selectedTool} close={handleCloseEditModal} />
        </StyledModal>
      )}
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
    </Container>
  );
}
