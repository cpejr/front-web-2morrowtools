import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";

export default function ModalDelete({ _id, close }) {
  const handleDelete = () => {
    console.log(`Excluir a ferramenta com ID ${_id}`);

    close();
  };

  return (
    <Container>
      <Message>Tem certeza que deseja excluir a ferramenta?</Message>
      <DeleteButton type='button' onClick={handleDelete}>
        Excluir
      </DeleteButton>
    </Container>
  );
}

ModalDelete.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
