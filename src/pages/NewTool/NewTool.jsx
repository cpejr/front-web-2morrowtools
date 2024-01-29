import React, { useEffect, useState } from "react";
import {
  FormInputBorder,
  SubmitButton,
  FormsTextArea,
  ModalDelete,
  ModalEdit,
  FormSelect,
  FormImageInput,
  FormSwitch,
  SocialMediaInput,
} from "../../components";

import { useForm } from "react-hook-form";
import {
  Container,
  Title,
  Form,
  Section,
  ToolList,
  ToolButtons,
  StyledModal,
  Selects,
  AutoCompleteInput,
  IconWrapper,
  SVGDiv,
  ContainerFilter,
  DivSelect,
  MultipleSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
  ShowTags,
  Tags,
  Table,
  TableColumn,
} from "./Styles";
import PropTypes from "prop-types";
import { FaTrash, FaEdit } from "react-icons/fa";
import * as managerService from "../../services/ManagerService";
import { buildNewToolErrorMessage, newToolValidationSchema } from "./utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDebounce from "../../services/useDebounce";
import { SearchOutlined } from "@ant-design/icons";
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
  const [ainames, setAINames] = useState([]);
  const [namesArray, setNamesArray] = useState([]);
  const [switchValue, setSwitchValue] = useState(false);
  const debouncedName = useDebounce(names);
  const [filter, setFilter] = useState([]);
  const [categoryIDsArrays, setCategoryIDsArrays] = useState([]);
  const [features, setFeatures] = useState([]);
  const [prices, setPrices] = useState([]);
  const [profession, setProfession] = useState([]);
  let selectedItems = [...features, ...prices, ...profession];
  const [showFilters, setShowFilters] = useState([]);

  const Finder = () => {
    const filteredNames = [];
    [categoriesFeature, categoriesPrices, categoriesProfession].forEach((categoryArray) => {
      categoryArray.forEach((category) => {
        if (selectedItems.includes(category._id)) {
          filteredNames.push(category.name);
        }
      });
    });
    setShowFilters(filteredNames);
  };

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

  const convertArrayToString = (array) => {
    return array.join(",");
  };
  async function FilteringAIsByCategoriesIds() {
    const idsString = convertArrayToString(categoryIDsArrays);

    const filteredCategory = await managerService.useGetAIToolsByCategoryId({
      id: idsString,
      name: debouncedName,
      type: filter,
    });
    const formattedAIs = filteredCategory?.aiTools?.map((tools) => ({
      name: tools.name,
      shortDescription: tools.shortDescription,
      manage: (
        <ToolButtons>
          <FaTrash onClick={() => handleOpenDeleteModal(tools?._id)} />
          <FaEdit onClick={() => handleOpenEditModal(tools)} />
        </ToolButtons>
      ),
    }));
    setAINames(formattedAIs);
  }

  useEffect(() => {
    FilteringAIsByCategoriesIds();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedName]);
  const search = () => {
    const filteredSuggestions = aiTools?.filter((name) =>
      name.toLowerCase().includes(names.toLowerCase())
    );
    setNamesArray(filteredSuggestions);
  };
  const filters = [
    { label: "Data", value: "date" },
    { label: "Nome", value: "name" },
    { label: "Avaliação", value: "avaliation" },
  ];
  const handleFilterChange = () => {
    const newArray = [...features, ...prices, ...profession];
    setCategoryIDsArrays(newArray);
  };
  useEffect(() => {
    handleFilterChange();
    Finder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features, prices, profession]);

  async function handleFilterReset() {
    setAINames([]);
    const filteredCategory = await managerService.useGetAIToolsByCategoryId({});
    setAINames(filteredCategory?.aiTools);
  }
  const handleClearFilters = () => {
    setFeatures([]);
    setPrices([]);
    setProfession([]);
    setCategoryIDsArrays([]);
    setFilter([]);
    setShowFilters([]);
    handleFilterReset();
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

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
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
  const SelectedTags = ({ selectedItems }) => (
    <ShowTags>
      {selectedItems.map((item) => (
        <Tags key={item.value}>{item}</Tags>
      ))}
    </ShowTags>
  );
  SelectedTags.propTypes = {
    selectedItems: PropTypes.array.isRequired,
  };

  const columns = [
    { field: "name", header: "Nome" },
    { field: "shortDescription", header: "Descrição" },
    { field: "manage", header: "Manage" },
  ];

  return (
    <Container>
      <Title>SUBMETER NOVO ITEM</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInputBorder name='name' placeholder='Título:' errors={errors} register={register} />
          <FormImageInput
            name='imageURL'
            placeholder='   URL da imagem:'
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
            name='youtubeVideoLink'
            placeholder='Link do vídeo no Youtube:'
            errors={errors}
            register={register}
          />
          <Selects>
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
          </Selects>
          <FormSwitch switchValue={switchValue} setSwitchValue={setSwitchValue} />
          {switchValue && (
            <React.Fragment>
              <FormInputBorder
                name='link'
                placeholder='Link do site:'
                errors={errors}
                register={register}
              />
              <SocialMediaInput errors={errors} register={register} />
            </React.Fragment>
          )}
        </Section>
        <SubmitButton>Enviar</SubmitButton>
      </Form>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title>FILTROS</Title>
        <ContainerFilter>
          <DivSelect>
            <MultipleSelect
              value={features}
              onChange={(e) => {
                setFeatures(e.value);
              }}
              options={transformArrayItems(categoriesFeature)}
              optionLabel='label'
              placeholder='Escolha as características'
              className='w-full md:w-20rem'
              filter
            />
            <MultipleSelect
              value={prices}
              onChange={(e) => {
                setPrices(e.value);
              }}
              options={transformArrayItems(categoriesPrices)}
              optionLabel='label'
              placeholder='Escolha os preços'
              className='w-full md:w-20rem'
              filter
            />
            <MultipleSelect
              value={profession}
              onChange={(e) => {
                setProfession(e.value);
              }}
              options={transformArrayItems(categoriesProfession)}
              optionLabel='label'
              placeholder='Escolha as profissões'
              className='w-full md:w-20rem'
              filter
            />
            <UniSelect
              value={filter}
              onChange={(e) => setFilter(e.value)}
              options={filters}
              optionLabel='label'
              showClear
              placeholder='Ordenar Por'
              className='w-full md:w-14rem'
              x
            ></UniSelect>
          </DivSelect>
          <SelectedTags selectedItems={showFilters} />
          <ButtonsDiv>
            <Buttons onClick={() => FilteringAIsByCategoriesIds()}>Filtrar</Buttons>
            <Buttons onClick={handleClearFilters}>Limpar Filtros</Buttons>
          </ButtonsDiv>
        </ContainerFilter>
        <Title>GERENCIAR ITENS</Title>{" "}
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
        </ToolList>
        <Table value={ainames} paginator rows={10} removableSort>
          {columns.map((data) => (
            <TableColumn sortable key={data.field} field={data.field} header={data.header} />
          ))}
        </Table>
      </div>
    </Container>
  );
}
