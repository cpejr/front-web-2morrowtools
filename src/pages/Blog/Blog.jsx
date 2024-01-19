import { useState } from "react";
import { 
  Container, 
  Title, 
  Section, 
  Section2, 
  Form, 
  StyledModal, 
  TextList, 
  TextButtons, 
  TextListItem, 
  IconWrapper,
  AutoCompleteInput,
  SVGDiv } from "./Styles";
import { FormInputBorder, ModalDelete, ModalEdit, FormsTextArea } from "../../components";
import SubmitButton from "../../components/common/SubmitButton/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTextValidationSchema } from "./utils";
import { FaUpload, FaTrash, FaEdit } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import * as managerService from "../../services/ManagerService";
import { useForm } from "react-hook-form";

export default function Blog() {

  // Set variables
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(null);
  const [namesArray, setNamesArray] = useState([]);
  const [names, setNames] = useState("");
  

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

  const search = () => {
    const filteredSuggestions = aiTools?.filter((name) =>
      name.toLowerCase().includes(names.toLowerCase())
    );
    setNamesArray(filteredSuggestions);
  };
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTextValidationSchema),
  });

  return (
    <Container>
      <Title>SUBMETER NOVO TEXTO</Title>

      <Form>
        <Section>
          <FormInputBorder
            name='title'
            register={register}
            placeholder='Título do post:'
            errors={errors}
          />
          <FormInputBorder
            name='title'
            register={register}
            placeholder=' Upload de imagem:'
            icon={FaUpload}
            errors={errors}
          />
          <FormInputBorder
            name='title'
            register={register}
            placeholder='Descrição curta:'
            errors={errors}
          />
          <FormsTextArea
            name='title'
            register={register}
            placeholder='Descrição longa:'
            errors={errors}
          />
          <SubmitButton type='submit'>
            <p>Enviar</p>
          </SubmitButton>
        </Section>
      </Form>

      <Section2>
        <Title>GERENCIAR TEXTOS</Title>
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
          
          <TextListItem key={Text._id}>
            Título 3
            <TextButtons>
              <FaTrash onClick={() => handleOpenDeleteModal(Text?._id)} />
              <FaEdit onClick={() => handleOpenEditModal(Text)} />
            </TextButtons>
          </TextListItem>
          
          <TextListItem key={Text._id}>
            Título 4
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
