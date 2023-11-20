import PropTypes from "prop-types";
import { useState } from "react";
import { FiSave } from "react-icons/fi";
import { Container, Label, ModalContent, ModalButton, Form, StyledInput } from "./Styles";

export default function ModalEdit({ tool, close }) {
  const [title, setTitle] = useState(tool?.title || "");
  const [image, setImage] = useState(tool?.image || "");
  const [shortDescription, setShortDescription] = useState(tool?.shortDescription || "");
  const [longDescription, setLongDescription] = useState(tool?.longDescription || "");
  const [link, setLink] = useState(tool?.link || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTool = {
      ...tool,
      title,
      image,
      shortDescription,
      longDescription,
      link,
    };

    close();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ModalContent>
          <Label htmlFor='title'>Título:</Label>
          <StyledInput
            id='title'
            name='title'
            placeholder='Digite aqui o título'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Label htmlFor='image'>Imagem:</Label>
          <StyledInput
            id='image'
            name='image'
            placeholder='Digite aqui o URL da imagem'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <Label htmlFor='shortDescription'>Descrição Curta:</Label>
          <StyledInput
            id='shortDescription'
            name='shortDescription'
            placeholder='Digite aqui a descrição curta'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />

          <Label htmlFor='longDescription'>Descrição Longa:</Label>
          <StyledInput
            id='longDescription'
            name='longDescription'
            placeholder='Digite aqui a descrição longa'
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
          />

          <Label htmlFor='link'>Link do Site:</Label>
          <StyledInput
            id='link'
            name='link'
            placeholder='Digite aqui o link do site'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <ModalButton type='submit'>
            <FiSave size={25} />
            <p>Salvar Alterações</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEdit.propTypes = {
  tool: PropTypes.object,
  close: PropTypes.func.isRequired,
};
