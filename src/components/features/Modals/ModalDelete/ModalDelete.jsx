import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";
import { toast } from "react-toastify";

export default function ModalDelete({ _id, close, deleteFunction }) {
  const handleDelete = async () => {
    try {
      await deleteFunction(_id);
      toast.success("Item deletado com sucesso!");
      close();
    } catch (error) {
      toast.error("Erro ao deletar item. Favor tentar novamente!");
      console.error("Erro ao deletar item", error);
    }
  };

  return (
    <Container>
      <Message>Tem certeza que deseja excluir o item?</Message>
      <DeleteButton type='button' onClick={handleDelete}>
        Excluir
      </DeleteButton>
    </Container>
  );
}

ModalDelete.propTypes = {
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};
