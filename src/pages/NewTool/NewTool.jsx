import { useEffect, useState } from "react";
import {
  FormInput,
  SubmitButton,
  FormsTextArea,
  ModalDelete,
  ModalEdit,
  // SocialMediaInput,
  // NewLink,
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
  DivRow,
} from "./Styles";
import { FaUpload, FaTrash, FaEdit } from "react-icons/fa";
import * as managerService from "../../services/ManagerService";
import { newToolValidationSchema, buildNewToolErrorMessage } from "./utils";
// import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { BlueButton } from "../../components/Card/Styles";

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

  // Forms values
  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    shortDescription: "",
    longDescription: "",
    link: "",
    youtubeVideoLink: "",
  });

  // On submit
  const onSubmit = async (data) => {
    const combinedData = {
      ...formData,
      id_categoryfeature: data.id_categoryfeature,
      id_categoryprice: data.id_categoryprice,
      id_categoryprofession: data.id_categoryprofession,
    };
    try {
      await managerService.useCreateAITools(combinedData);
      toast.success("Ferramenta criada com sucesso!");
      toast.clearWaitingQueue();
    } catch (error) {
      toast.error("Erro ao criar ferramenta. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao criar a ferramenta", error);
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
  const handleOpenDeleteModal = (toolId) => {
    setSelectedToolId(toolId);
    setDeleteModalOpen(true);
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
    control,
    formState: { errors },
  } = useForm();
  //   {
  //   resolver: zodResolver(newToolValidationSchema),
  // }

  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput
            name='name'
            placeholder='Título:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <FormInput
            name='imageURL'
            placeholder='URL da imagem:'
            icon={FaUpload}
            errors={errors}
            onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}
          />
          <FormInput
            name='shortDescription'
            placeholder='Descrição curta:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
          />
          <FormsTextArea
            name='longDescription'
            rows={4}
            placeholder='Descrição longa:'
            onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
          />
          <FormInput
            name='link'
            placeholder='Link do site:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
          <FormInput
            name='youtubeVideoLink'
            placeholder='Link do vídeo no Youtube:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, youtubeVideoLink: e.target.value })}
          />
          {/* <SocialMediaInput
            placeholder='Rede social:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
          />
          <NewLink /> */}
          <DivRow>
            <FormSelect
              name='id_categoryfeature'
              control={control}
              data={categoriesFeature.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Característica'
            />
            <FormSelect
              name='id_categoryprice'
              control={control}
              data={categoriesPrices.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Preço'
            />

            <FormSelect
              name='id_categoryprofession'
              control={control}
              data={categoriesProfession.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Profissão'
            />
          </DivRow>
        </Section>
        <SubmitButton type='submit'>
          <p>Enviar</p>
        </SubmitButton>
        {/* <BlueButton type='submit'>ENVIAR</BlueButton> */}
      </Form>
      <div>
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
      </div>
    </Container>
  );
}
