import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";

export default function ModalDeleteUser({ close, handleUserDelete, id }) {
  return (
    <Container>
      <Message>Tem certeza que deseja excluir o item?</Message>
      <DeleteButton
        onClick={() => {
          handleUserDelete(id);
          close();
        }}
        type='button'
      >
        Excluir
      </DeleteButton>
    </Container>
  );
}

ModalDeleteUser.propTypes = {
  close: PropTypes.func.isRequired,
  handleUserDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
