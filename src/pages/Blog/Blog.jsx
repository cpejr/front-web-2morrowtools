import { useState, useEffect } from "react";
import { 
  Form, 
  Title, 
  DivRow,
  SVGDiv, 
  Section, 
  TextList, 
  Section2,  
  Container,
  StyledModal, 
  TextButtons, 
  IconWrapper,
  TextListItem, 
  AutoCompleteInput,
} from "./Styles";
import { 
  ModalEdit,
  FormSelect,
  ModalDelete, 
  SubmitButton, 
  FormsTextArea,
  FormImageInput, 
  FormInputBorder, 
} from "../../components";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaTrash, FaEdit } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import * as managerService from "../../services/ManagerService";
import { newTextValidationSchema, buildNewToolErrorMessage } from "./utils";

export default function Blog() {

  // Set variables
  const [names, setNames] = useState("");
  const [namesArray, setNamesArray] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoriesProfession, setCategoriesProfession] = useState([]);

  async function handleCreateBlog(data) {
    try {
      await managerService.useCreateBlog(data);
      toast.success("Post criado com sucesso!");
      toast.clearWaitingQueue();
      getPosts();
    } catch (error) {
      toast.error("Erro ao criar post. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao criar a post", error);
    }
  }
  
  async function getPosts() {
    const posts = await managerService.useGetBlogs();
    setCurrentBlogs(posts.blogs);
    setNamesArray(posts.blogs.name)
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
    getPosts();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultFeature = await managerService.usegetCategoriesFeature();
        setCategoriesFeature(resultFeature.categoriesFeature);

        const resultProfession = await managerService.usegetCategoriesProfession();
        setCategoriesProfession(resultProfession.categoriesprofession);

        getPosts();
      } catch (error) {
        const errorMessage = buildNewToolErrorMessage(error);
        console.error(errorMessage);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const search = () => {
    const filteredSuggestions = currentBlogs?.filter((name) =>
    name.toLowerCase().includes(name.toLowerCase()));

    setNamesArray(filteredSuggestions);
  };

  const { handleSubmit, register, control, formState: { errors } }
          = useForm({ resolver: zodResolver(newTextValidationSchema) });
  
  const onSubmit = (data) => {
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
            name='name'
            register={register}
            placeholder='Título do post:'
            errors={errors}
          />
          <FormImageInput
            name='imageURL'
            placeholder='   URL da imagem:'
            errors={errors}
            register={register}
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
            destroyOnClose >

            <ModalDelete
              _id={selectedTextId}
              close={handleCloseDeleteModal}
              deleteFunction={managerService.useDeletePost}
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
  
          {currentBlogs?.map((post) => (
            <TextListItem key={post.name}>
              {post.name}
              <TextButtons>
                <FaTrash onClick={() => handleOpenDeleteModal(post._id)} />
                <FaEdit onClick={() => handleOpenEditModal(post._id)} />
              </TextButtons>
            </TextListItem>
          ))}

        </TextList>
      </Section2>  
     
    </Container>
  );
}
