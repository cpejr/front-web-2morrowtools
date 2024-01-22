import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";

export default function ModalDeleteUser({ handleUserDelete, id }) {
  return (
    <Container>
      <Message>Tem certeza que deseja excluir o item?</Message>
      <DeleteButton onClick={() => handleUserDelete(id)} type='button'>
        Excluir
      </DeleteButton>
    </Container>
  );
}

ModalDeleteUser.propTypes = {
  handleUserDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
