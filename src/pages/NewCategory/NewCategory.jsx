import { useEffect } from "react";
import { CategoryButtons, CategoryList, CategoryListItem, Container, Form, Title } from "./Styles";
import { useState } from "react";

import * as managerService from "../../services/ManagerService";
import { buildNewCategoryErrorMessage, newCategoryValidationSchema } from "./utils";
import { FormInput, FormSelect, ModalDelete, SubmitButton } from "../../components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { StyledModal } from "../NewTool/Styles";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

export default function NewCategory() {
  // Set variables
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [deleteFunction, setDeleteFunction] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [name, setName] = useState("");
  const [selectedCategoryType, setSelectedCategoryType] = useState("");

  // On submit
  const onSubmit = async () => {
    if (!selectedCategoryType) {
      toast.error("Favor selecionar o tipo da categoria.");
      return;
    }
    try {
      switch (selectedCategoryType) {
        case "feature":
          await managerService.useCreateCategoriesFeature({ name });
          toast.success("Categoria de característica criada com sucesso!");
          break;
        case "price":
          await managerService.useCreateCategoriesPrices({ name });
          toast.success("Categoria de preço criada com sucesso!");
          break;
        case "profession":
          await managerService.useCreateCategoriesProfession({ name });
          toast.success("Categoria de profissão criada com sucesso!");
          break;
        default:
          break;
      }

      toast.clearWaitingQueue();
    } catch (error) {
      toast.error("Erro ao adiconar categoria. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao adiconar categoria", error);
    }
  };

  const handleCategoryTypeChange = (selectedValue) => {
    setSelectedCategoryType(selectedValue);
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
      } catch (error) {
        const errorMessage = buildNewCategoryErrorMessage(error);
        console.error(errorMessage);
      }
    };
    fetchData();
  }, []);

  // Modal Functions
  const handleOpenDeleteModal = (categoryId, deleteFunction) => {
    setSelectedCategoryId(categoryId);
    setDeleteFunction(() => deleteFunction);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedCategoryId(null);
    setDeleteFunction(null);
    setDeleteModalOpen(false);
  };

  // const handleOpenEditModal = (tool) => {
  //   setSelectedCategoryId(tool._id);
  //   setSelectedTool(tool);
  //   setEditModalOpen(true);
  // };

  // const handleCloseEditModal = async () => {
  //   setSelectedTool(null);
  //   setSelectedCategoryId(null);
  //   setEditModalOpen(false);
  // };

  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Title>ADICIONAR CATEGORIAS</Title>
      <FormSelect
        name='id_categoryfeature'
        control={control}
        data={[
          { label: "Característica", value: "feature" },
          { label: "Preço", value: "price" },
          { label: "Profissão", value: "profession" },
        ]}
        placeholder='Selecione a Categoria'
        onChange={(selectedValue) => handleCategoryTypeChange(selectedValue)}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='name'
          placeholder='Nome da Categoria:'
          errors={errors}
          register={register}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <SubmitButton type='submit'>
          <p>Criar</p>
        </SubmitButton>
      </Form>

      <Title>CATEGORIAS CRIADAS</Title>
      <CategoryList>
        <Title>CARACTERÍSTICA</Title>
        {categoriesFeature.map((category) => (
          <CategoryListItem key={category._id}>
            {category.name}
            <CategoryButtons>
              <FaTrash
                onClick={() =>
                  handleOpenDeleteModal(category._id, (result) =>
                    managerService.useDeleteCategoriesFeature(result)
                  )
                }
              />
              <FaEdit
              // onClick={() => handleOpenEditModal(category)}
              />
            </CategoryButtons>
          </CategoryListItem>
        ))}
      </CategoryList>
      <CategoryList>
        <Title>PREÇO</Title>
        {categoriesPrices.map((category) => (
          <CategoryListItem key={category._id}>
            {category.name}
            <CategoryButtons>
              <FaTrash
                onClick={() =>
                  handleOpenDeleteModal(category._id, (result) =>
                    managerService.useDeleteCategoriesPrice(result)
                  )
                }
              />
              <FaEdit
              // onClick={() => handleOpenEditModal(category)}
              />
            </CategoryButtons>
          </CategoryListItem>
        ))}
      </CategoryList>
      <CategoryList>
        <Title>PROFISSÃO</Title>
        {categoriesProfession.map((category) => (
          <CategoryListItem key={category._id}>
            {category.name}
            <CategoryButtons>
              <FaTrash
                onClick={() =>
                  handleOpenDeleteModal(category._id, (result) =>
                    managerService.useDeleteCategoriesProfession(result)
                  )
                }
              />
              <FaEdit
              // onClick={() => handleOpenEditModal(category)}
              />
            </CategoryButtons>
          </CategoryListItem>
        ))}
      </CategoryList>
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
            _id={selectedCategoryId}
            close={handleCloseDeleteModal}
            deleteFunction={deleteFunction}
          />
        </StyledModal>
      )}
    </Container>
  );
}
