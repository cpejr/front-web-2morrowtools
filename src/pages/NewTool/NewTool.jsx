import { useEffect, useState } from "react";
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
import * as managerService from "../../services/ManagerService";
import { newToolValidationSchema, buildNewToolErrorMessage } from "./utils";

export default function NewTool() {
  // Set variables
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [aiTools, setAiTools] = useState([]);

  // On submit
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await managerService.useCreateAITools(data);
      console.log("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário", error);
    }
  };

  // Get functions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultFeature = await managerService.usegetCategoriesFeature();
        setCategoriesFeature(resultFeature.categoriesFeature);

        const resultPrices = await managerService.usegetCategoriesPrices();
        setCategoriesPrices(resultPrices.categoriesPrices);

        const resultProfession = await managerService.usegetCategoriesProfession();
        setCategoriesProfession(resultProfession.categoriesprofession);

        const resultAiTools = await managerService.useGetAITools();
        setAiTools(resultAiTools.aiTools);
      } catch (error) {
        const errorMessage = buildNewToolErrorMessage(error);
        console.error(errorMessage);
      }
    };
    fetchData();
  }, []);

  // Modal Functions
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

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({ newToolValidationSchema });

  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput name='name' placeholder='Título:' register={register} errors={errors} />
          <FormInput
            name='imageURL'
            placeholder='Upload de Imagem:'
            icon={FaUpload}
            register={register}
          />
          <FormInput
            name='shortDescription'
            placeholder='Descrição curta:'
            register={register}
            errors={errors}
          />
          <FormsTextArea
            name='longDescription'
            rows={4}
            placeholder='Descrição longa:'
            register={register}
          />
          <FormInput name='link' placeholder='Link do site:' register={register} errors={errors} />
          <NewLink />
          <SocialMediaInput placeholder='Rede social:' register={register} errors={errors} />
        </Section>
        <div>
          <FormSelect
            name='id_categoryfeature'
            control={control}
            data={categoriesFeature.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Categoria de Característica'
          />
          <FormSelect
            name='id_categoryprice'
            control={control}
            data={categoriesPrices.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Categoria de Preço'
          />

          <FormSelect
            name='id_categoryprofession'
            control={control}
            data={categoriesProfession.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Categoria de Profissão'
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
        {aiTools.map((tool) => (
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
