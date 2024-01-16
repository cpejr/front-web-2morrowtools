import { useEffect, useState } from "react";
import {
  FormInputBorder,
  SubmitButton,
  FormsTextArea,
  ModalDelete,
  ModalEdit,
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
  AutoCompleteInput,
  ShortDescription,
  Collumn,
  IconWrapper,
  SVGDiv,
} from "./Styles";
import { FaUpload, FaTrash, FaEdit } from "react-icons/fa";
import * as managerService from "../../services/ManagerService";
import { buildNewToolErrorMessage, newToolValidationSchema } from "./utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDebounce from "../../services/useDebounce";
import { SearchOutlined } from "@ant-design/icons";
import Pagination from "../../components/features/Pagination/Pagination";
import { ButtonDiv } from "../Home/Styles";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const [names, setNames] = useState("");
  const [ainames, setAINames] = useState("");
  const [namesArray, setNamesArray] = useState([]);
  const debouncedName = useDebounce(names);

  async function handleCreateAITools(data) {
    try {
      await managerService.useCreateAITools(data);
      toast.success("Ferramente criado com sucesso!");
      toast.clearWaitingQueue();
    } catch (error) {
      toast.error("Erro ao criar ferramenta. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao criar a ferramenta", error);
    }
  }

  // Get functions

  async function GettingAIToolsDataByName() {
    const aiTools = await managerService.useGetAIToolsByName({ name: debouncedName });
    setAINames(aiTools);
  }
  useEffect(() => {
    GettingAIToolsDataByName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedName]);
  const search = () => {
    const filteredSuggestions = aiTools?.filter((name) =>
      name.toLowerCase().includes(names.toLowerCase())
    );
    setNamesArray(filteredSuggestions);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultFeature = await managerService.usegetCategoriesFeature();
        setCategoriesFeature(resultFeature.categoriesFeature);

        const resultPrices = await managerService.usegetCategoriesPrices();
        setCategoriesPrices(resultPrices.categoriesPrices);

        const resultAiTools = await managerService.useGetAIToolsNames();
        setAiTools(resultAiTools.aiTools);

        const resultNames = await managerService.useGetAIToolsByName({ name: debouncedName });
        setAINames(resultNames);

        const resultProfession = await managerService.usegetCategoriesProfession();
        setCategoriesProfession(resultProfession.categoriesprofession);
      } catch (error) {
        const errorMessage = buildNewToolErrorMessage(error);
        console.error(errorMessage);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Modal Functions
  const handleOpenDeleteModal = (toolId) => {
    setSelectedToolId(toolId);
    setDeleteModalOpen(true);
  };

  const handleOpenEditModal = (tool) => {
    setSelectedToolId(tool._id);
    setSelectedTool(tool);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = async () => {
    setSelectedTool(null);
    setSelectedToolId(null);
    setEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setSelectedToolId(null);
    setDeleteModalOpen(false);
  };

  // Forms Handlers

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(newToolValidationSchema) });

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(ainames?.aiTools?.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const onSubmit = (data) => {
    const combinedData = {
      ...data,
      id_categoryfeature: data.id_categoryfeature,
      id_categoryprice: data.id_categoryprice,
      id_categoryprofession: data.id_categoryprofession,
    };
    handleCreateAITools(combinedData);
  };

  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInputBorder name='name' placeholder='Título:' errors={errors} register={register} />
          <FormInputBorder
            name='imageURL'
            placeholder='URL da imagem:'
            icon={FaUpload}
            errors={errors}
            register={register}
          />
          <FormInputBorder
            name='shortDescription'
            placeholder='Descrição curta:'
            errors={errors}
            register={register}
          />
          <FormsTextArea
            name='longDescription'
            rows={4}
            errors={errors}
            register={register}
            placeholder='Descrição longa:'
          />
          <FormInputBorder
            name='link'
            placeholder='Link do site:'
            errors={errors}
            register={register}
          />
          <FormInputBorder
            name='youtubeVideoLink'
            placeholder='Link do vídeo no Youtube:'
            errors={errors}
            register={register}
          />
          <DivRow>
            <FormSelect
              name='id_categoryfeature'
              control={control}
              errors={errors}
              data={categoriesFeature.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Característica'
            />
            <FormSelect
              name='id_categoryprice'
              control={control}
              errors={errors}
              data={categoriesPrices.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Preço'
            />

            <FormSelect
              name='id_categoryprofession'
              control={control}
              errors={errors}
              data={categoriesProfession.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              placeholder='Profissão'
            />
          </DivRow>
        </Section>
        <SubmitButton>
          <p>Enviar</p>
        </SubmitButton>
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
            <ModalDelete
              _id={selectedToolId}
              close={handleCloseDeleteModal}
              deleteFunction={managerService.useDeleteAITools}
            />
          </StyledModal>
        )}
        {isEditModalOpen && (
          <StyledModal
            open={isEditModalOpen}
            onCancel={handleCloseEditModal}
            width={500}
            height={250}
            padding={0}
            footer={null}
            closeIcon={true}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "100px",
              marginBottom: "80%",
            }}
            centered
            destroyOnClose
          >
            <ModalEdit _id={selectedToolId} tool={selectedTool} close={handleCloseEditModal} />
          </StyledModal>
        )}
        <ToolList>
          <IconWrapper>
            <SVGDiv>
              <SearchOutlined />
            </SVGDiv>
            <AutoCompleteInput
              value={names}
              suggestions={namesArray}
              completeMethod={search}
              onChange={(e) => setNames(e.value)}
            ></AutoCompleteInput>
          </IconWrapper>

          {ainames?.aiTools?.slice(startIndex, endIndex).map((tool) => (
            <ToolListItem key={tool._id}>
              <Collumn>
                {tool?.name}
                <ShortDescription> {tool?.shortDescription}</ShortDescription>
              </Collumn>
              <ToolButtons>
                <FaTrash onClick={() => handleOpenDeleteModal(tool?._id)} />
                <FaEdit onClick={() => handleOpenEditModal(tool)} />
              </ToolButtons>
            </ToolListItem>
          ))}
          <ButtonDiv>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              setCurrentPage={setCurrentPage}
            />
          </ButtonDiv>
        </ToolList>
      </div>
    </Container>
  );
}
