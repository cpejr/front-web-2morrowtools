import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { ModalContent, Tittle, Container, Form } from "./Styles";
import { editCategoryValidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../common/FormInput/FormInput";

import SubmitButton from "../../../common/SubmitButton/SubmitButton";
import { useForm } from "react-hook-form";

export default function ModalEditCategory({ _id, category, close, editFunction }) {
  // On Submit
  const onSubmit = async (data) => {
    try {
      await editFunction(_id, data);
      toast.success("Item editado com sucesso!");
      toast.clearWaitingQueue();
      close();
    } catch (error) {
      toast.error("Erro ao editar item. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao editar a item", error);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editCategoryValidationSchema),
  });

  return (
    <Container>
      <ModalContent>
        <Tittle>Editar Categoria</Tittle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name='name'
            label='Nome:'
            defaultValue={category.name}
            register={register}
            placeholder='Nome da ferramenta:'
            errors={errors}
          />
          <SubmitButton type='submit'>
            <p>Salvar</p>
          </SubmitButton>
        </Form>
      </ModalContent>
    </Container>
  );
}

ModalEditCategory.propTypes = {
  _id: PropTypes.string.isRequired,
  category: PropTypes.object,
  close: PropTypes.func.isRequired,
  editFunction: PropTypes.func.isRequired,
};
