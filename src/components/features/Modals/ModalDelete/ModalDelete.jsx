import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";
import * as managerService from "../../../../services/ManagerService";
import { toast } from "react-toastify";

export default function ModalDelete({ _id, close }) {
  const handleDelete = async () => {
    try {
      await managerService.useDeleteAITools(_id);
      toast.success("Ferramenta deletada com sucesso!");
      close();
    } catch (error) {
      toast.error("Erro ao deletar ferramenta. Favor tentar novamente!");
      console.error("Erro ao deletar ferramenta", error);
    }
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
