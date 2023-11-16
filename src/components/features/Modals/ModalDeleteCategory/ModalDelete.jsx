//import { useState } from "react";

import PropTypes from "prop-types";
//import { TailSpin } from "react-loader-spinner";

import { Container, DeleteButton, Message } from "./Styles";

export default function ModalDelete({ _id, close }) {
  return (
    <Container>
      <Message>Tem certeza que deseja excluir a categoria?</Message>
      <DeleteButton type='button'>Excluir</DeleteButton>
    </Container>
  );
}

ModalDelete.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
