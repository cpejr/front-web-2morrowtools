import { useState } from "react";
import {
  FormInput,
  SubmitButton,
  FormsTextArea,
  ModalDelete,
  ModalEdit,
  SocialMediaInput,
  NewLink,
  FormSelect,
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
  //Set variables
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  //On submit
  const { control, handleSubmit } = useForm();

  const getCategoriesFeature = async () => {
    try {
      const res = await getCategoriesFeature;
      setSessoes(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (data) => {
    try {
      await managerService.usePostAITools(data);
      console.log("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário", error);
    }
  };

  const handleOpenDeleteModal = async (toolId) => {
    try {
      setSelectedToolId(toolId);
      await managerService.useDeleteAITools(toolId);
      console.log("Ferramenta deletada com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar ferramenta", error);
    }
  };

  const handleOpenEditModal = (tool) => {
    setSelectedTool(tool);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = async () => {
    try {
      await managerService.useEditAITools(selectedTool._id, selectedTool);
      console.log("Ferramenta atualizada com sucesso!");
      setEditModalOpen(false);
      setSelectedTool(null);
    } catch (error) {
      console.error("Erro ao atualizar ferramenta", error);
    }
  };

  const handleCloseDeleteModal = () => {
    setSelectedToolId(null);
    setDeleteModalOpen(false);
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
          <FormInput name='name' placeholder='Título:' />
          <FormInput name='imageURL' placeholder='Upload de Imagem:' icon={FaUpload} />
          <FormInput name='shortDescription' placeholder='Descrição curta:' />
          <FormsTextArea name='longDescription' rows={4} placeholder='Descrição longa:' />
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
        <div>
          <FormSelect
            name='id_categoryfeature'
            control={control}
            data={categories.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Rede social:'
          />
          <FormSelect
            name='id_categoryprice'
            control={control}
            data={categories.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Rede social:'
          />
          <FormSelect
            name='id_categoryprofession'
            control={control}
            data={categories.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Rede social:'
          />
        </div>
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
