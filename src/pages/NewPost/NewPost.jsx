import { useState, useEffect } from "react";
import {
  Form,
  Title,
  Selects,
  SVGDiv,
  Section,
  TextList,
  Section2,
  Container,
  StyledModal,
  TextButtons,
  IconWrapper,
  TextListItem,
  MultipleSelect,
  AutoCompleteInput,
  Section3,
} from "./Styles";
import {
  ModalDelete,
  SubmitButton,
  ModalEditPost,
  FormImageInput,
  FormInputBorder,
  Editor,
} from "../../components";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaTrash, FaEdit } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import * as managerService from "../../services/ManagerService";
import { newPostValidationSchema, buildNewPostErrorMessage } from "./utils";

export default function NewPost() {
  // Set variables
  const [nameQuery, setNameQuery] = useState("");
  const [namesArray, setNamesArray] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [selectedText, setSelectedText] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [isEditSectionOpen, setEditSectionOpen] = useState(false);
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [idCategoriesFeature, setIdsCategoriesFeature] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [idCategoriesProfession, setIdsCategoriesProfession] = useState([]);

  const [editorValue, setEditorValue] = useState();
  const [editorError, setEditorError] = useState(false);

  async function handleCreatePost(data) {
    try {
      if (!editorValue || editorValue === "<p></p>\n") {
        setEditorError(true);
        throw new Error("O html deve ser preenchido");
      }
      await managerService.useCreatePost({ ...data, html: editorValue });
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
    const posts = await managerService.useGetPosts();
    setCurrentPosts(posts.Posts);
    setFilteredPosts(posts.Post);
    setNamesArray(posts.name);
  }

  // Modal Functions

  const handleOpenDeleteModal = (TextId) => {
    setSelectedTextId(TextId);
    setDeleteModalOpen(true);
  };

  const handleOpenEditModal = (post) => {
    if (isEditSectionOpen) {
      setSelectedText("");
      setSelectedTextId("");
      setEditSectionOpen(false);
      return;
    }
    setSelectedTextId(post._id);
    setSelectedText(post);
    setEditSectionOpen(true);
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
        const errorMessage = buildNewPostErrorMessage(error);
        console.error(errorMessage);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = ({ query }) => {
    const postNames = currentPosts?.map(function (post) {
      return post.name;
    });
    const filteredPostNames = postNames.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

    setNamesArray(filteredPostNames);
    const filterObjects = currentPosts.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filterObjects);
  };

  useEffect(() => {
    search({ query: nameQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameQuery]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(newPostValidationSchema) });

  const onSubmit = (data) => {
    const combinedData = {
      ...data,
      id_categoryfeature: idCategoriesFeature,
      id_categoryprofession: idCategoriesProfession,
    };
    handleCreatePost(combinedData);
  };

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
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
            name='imageUrl'
            placeholder='   URL da imagem:'
            errors={errors}
            register={register}
          />
          {/* <FormInputBorder
            name='shortDescription'
            register={register}
            placeholder='Descrição curta:'
            errors={errors}
          /> */}
          <Editor setEditorValue={setEditorValue} error={editorError} />

          <Selects>
            <MultipleSelect
              value={idCategoriesFeature}
              name='id_categoryfeature'
              onChange={(e) => {
                setIdsCategoriesFeature(e.value);
              }}
              options={transformArrayItems(categoriesFeature)}
              optionLabel='label'
              placeholder='Escolha as características'
              className='w-full md:w-20rem'
              filter
              errors={errors}
            />
            <MultipleSelect
              value={idCategoriesProfession}
              name='id_categoryprofession'
              onChange={(e) => {
                setIdsCategoriesProfession(e.value);
              }}
              options={transformArrayItems(categoriesProfession)}
              optionLabel='label'
              placeholder='Escolha as profissões'
              className='w-full md:w-20rem'
              filter
              errors={errors}
            />
          </Selects>

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
              deleteFunction={managerService.useDeletePost}
            />
          </StyledModal>
        )}

        <TextList>
          <IconWrapper>
            <SVGDiv>
              <SearchOutlined />
            </SVGDiv>
            <AutoCompleteInput
              suggestions={namesArray}
              completeMethod={search}
              value={nameQuery}
              onChange={(e) => setNameQuery(e.value)}
            ></AutoCompleteInput>
          </IconWrapper>
          {filteredPosts?.map((post) => (
            <TextListItem key={post.name}>
              {post.name}
              <TextButtons>
                <FaTrash onClick={() => handleOpenDeleteModal(post._id)} />
                <FaEdit onClick={() => handleOpenEditModal(post)} />
              </TextButtons>
            </TextListItem>
          ))}
        </TextList>
      </Section2>

      {isEditSectionOpen && (
        <Section3>
          <Title>EDITAR POST</Title>
          <ModalEditPost _id={selectedTextId} post={selectedText} />
        </Section3>
      )}
    </Container>
  );
}
