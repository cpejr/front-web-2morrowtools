import { useState, useEffect } from "react";
import { 
  Container, 
  Title, 
  Section, 
  Section2, 
  Form, 
  DivRow,
  StyledModal, 
  TextList, 
  TextButtons, 
  TextListItem, 
  IconWrapper,
  AutoCompleteInput,
  SVGDiv 
} from "./Styles";
import { 
  FormInputBorder, 
  ModalDelete, 
  ModalEdit,
  FormSelect,
  SubmitButton, 
  FormsTextArea 
} from "../../components";
import { zodResolver } from "@hookform/resolvers/zod";
import { newTextValidationSchema, buildNewToolErrorMessage } from "./utils";
import { FaUpload, FaTrash, FaEdit } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import * as managerService from "../../services/ManagerService";
import { useForm } from "react-hook-form";

export default function Blog() {

  // Set variables
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(null);
  const [namesArray, setNamesArray] = useState([]);
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [resultPost, setPost] = useState([]);
  const [names, setNames] = useState("");


  async function handleCreateBlog(data) {
    try {
      await managerService.useCreateBlog(data);
      toast.success("Post criado com sucesso!");
      toast.clearWaitingQueue();
    } catch (error) {
      toast.error("Erro ao criar post. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao criar a post", error);
    }
  }
  

  // Modal Functions
  const handleOpenDeleteModal = (TextId) => {
    setSelectedTextId(TextId);
    setDeleteModalOpen(true);
  };

  const handleOpenEditModal = (Text) => {
    setSelectedTextId(Text._id);
    setSelectedText(Text);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = async () => {
    setSelectedText(null);
    setSelectedTextId(null);
    setEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setSelectedTextId(null);
    setDeleteModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultFeature = await managerService.usegetCategoriesFeature();
        setCategoriesFeature(resultFeature.categoriesFeature);

        const resultProfession = await managerService.usegetCategoriesProfession();
        setCategoriesProfession(resultProfession.categoriesprofession);

        const resultPosts = await managerService.usegetCategoriesProfession();
        setCategoriesProfession(resultProfession.categoriesprofession);

      } catch (error) {
        const errorMessage = buildNewToolErrorMessage(error);
        console.error(errorMessage);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const search = () => {
    const filteredSuggestions = aiTools?.filter((name) =>
      name.toLowerCase().includes(names.toLowerCase())
    );
    setNamesArray(filteredSuggestions);
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newTextValidationSchema),
  });
  
  const onSubmit = (data) => {
    console.log("oi");
    const combinedData = {
      ...data,
      id_categoryfeature: data.id_categoryfeature,
      id_categoryprofession: data.id_categoryprofession,
    };
    console.log(combinedData);
    handleCreateBlog(combinedData);
  };

  return (
    <Container>
      <Title>SUBMETER NOVO POST</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInputBorder
            name='title'
            register={register}
            placeholder='Título do post:'
            errors={errors}
          />
          <FormInputBorder
            name='imageUrl'
            register={register}
            placeholder=' Upload de imagem:'
            icon={FaUpload}
            errors={errors}
          />
          <FormInputBorder
            name='shortDescription'
            register={register}
            placeholder='Descrição curta:'
            errors={errors}
          />
          <FormsTextArea
            name='longDescription'
            register={register}
            placeholder='Descrição longa:'
            errors={errors}
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

          <SubmitButton>
            <p>Enviar</p>
          </SubmitButton>
        </Section>
      </Form>

      <Section2>
        <Title>GERENCIAR POSTS</Title>
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
              _id={selectedTextId}
              close={handleCloseDeleteModal}
              //deleteFunction={managerService.useDeleteAITexts}
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
            <ModalEdit _id={selectedTextId} Text={selectedText} close={handleCloseEditModal} />
          </StyledModal>
        )}
        <TextList>

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




          <TextListItem key={Text._id}>
            Título 1
            <TextButtons>
              <FaTrash onClick={() => handleOpenDeleteModal(Text?._id)} />
              <FaEdit onClick={() => handleOpenEditModal(Text)} />
            </TextButtons>
          </TextListItem>
          
          <TextListItem key={Text._id}>
            Título 2
            <TextButtons>
              <FaTrash onClick={() => handleOpenDeleteModal(Text?._id)} />
              <FaEdit onClick={() => handleOpenEditModal(Text)} />
            </TextButtons>
          </TextListItem>

        </TextList>
      </Section2>  
     
    </Container>
  );
}
