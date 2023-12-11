import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { ModalContent, Tittle, Container, Form } from "./Styles";
import FormInput from "../../../common/FormInput/FormInput";
import { useState } from "react";

import SubmitButton from "../../../common/SubmitButton/SubmitButton";
import { useForm } from "react-hook-form";

export default function ModalEditCategory({ _id, category, close, editFunction }) {
  const [name, setName] = useState("");

  // On Submit
  const onSubmit = async () => {
    try {
      await editFunction(_id, { name });
      toast.success("Ferramenta editada com sucesso!");
      toast.clearWaitingQueue();
      close();
    } catch (error) {
      toast.error("Erro ao editar ferramenta. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao editar a ferramenta", error);
    }
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(editToolValidationSchema),
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
            placeholder='Nome da ferramenta:'
            errors={errors}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
