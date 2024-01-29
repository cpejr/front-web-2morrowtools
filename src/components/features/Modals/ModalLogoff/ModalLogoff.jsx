import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";

export default function ModalLogoff({ close, handleLogOff }) {
  return (
    <Container>
      <Message>Tem certeza que deseja sair?</Message>
      <DeleteButton
        onClick={() => {
          handleLogOff();
          close();
        }}
        type='button'
      >
        Sair
      </DeleteButton>
    </Container>
  );
}

ModalLogoff.propTypes = {
  close: PropTypes.func.isRequired,
  handleLogOff: PropTypes.func.isRequired,
};
