import PropTypes from "prop-types";
import { useState } from "react";
import { Container, Tittle, Label, ModalContent, Form, Section, LabelWraper } from "./Styles";
import { toast } from "react-toastify";
import * as managerService from "../../../../services/ManagerService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaUpload } from "react-icons/fa";
import { buildEditPostErrorMessage, editPostValidationSchema } from "./utils";
import { colors } from "../../../../styles/styleVariables";
import {
  FormsTextArea,
  FormInputBorder,
  SubmitButton,
  FormSelect,
  FormImageInput,
} from "../../..";

export default function ModalEditBlog({ _id, post, close }) {

  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);

  // Forms values
  const [formData, setFormData] = useState({
    name: post.name,
    imageURL: post.imageURL,
    shortDescription: post.shortDescription,
    longDescription: post.longDescription
  });

  // On Submit
  const onSubmit = async (data) => {
    const body = {
      ...formData,
      id_categoryfeature: data.id_categoryfeature,
      id_categoryprofession: data.id_categoryprofession,
    };

    try {
      await managerService.useEditBlog(_id, body);
      toast.success("Item editado com sucesso!");
      toast.clearWaitingQueue();
      close();
    } catch (error) {
      toast.error("Erro ao editar item. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao editar a item", error);
    }
  };

  // Get functions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultFeature = await managerService.usegetCategoriesFeature();
        setCategoriesFeature(resultFeature.categoriesFeature);
        const resultProfession = await managerService.usegetCategoriesProfession();
        setCategoriesProfession(resultProfession.categoriesprofession);
      } catch (error) {
        const errorMessage = buildEditPostErrorMessage(error);
        console.error(errorMessage);
      }
    };
    fetchData();
  }, []);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editPostValidationSchema),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <Tittle>Editar Informações</Tittle>
          <Section>
            <LabelWraper>
              <Label>Nome:</Label>
              <FormInputBorder
                name='name'
                defaultValue={post.name}
                placeholder='Título:'
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>URL da imagem:</Label>
              <FormImageInput
                name='imageURL'
                defaultValue={post.imageURL}
                placeholder='  URL da imagem:'
                icon={FaUpload}
                errors={errors}
                register={register}
                onChange={(imageURL) => setFormData({ ...formData, imageURL })}
              />
              {/* <FormInputBorder
                name='imageURL'
                defaultValue={post.imageURL}
                placeholder='URL da imagem:'
                icon={FaUpload}
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}
              /> */}
            </LabelWraper>

            <LabelWraper>
              <Label>Descrição curta:</Label>
              <FormInputBorder
                name='shortDescription'
                defaultValue={post.shortDescription}
                placeholder='Descrição curta:'
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Descrição longa:</Label>
              <FormsTextArea
                name='longDescription'
                rows={4}
                defaultValue={post.longDescription}
                placeholder='Descrição longa:'
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Category Feature:</Label>
              <FormSelect
                name='id_categoryfeature'
                control={control}
                dropdownStyle={{ backgroundColor: colors.blue.background }}
                defaultValue={post.id_categoryfeature?._id}
                data={categoriesFeature.map(({ _id, name }) => ({
                  label: name,
                  value: _id,
                }))}
                placeholder='Característica'
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Category Profession:</Label>
              <FormSelect
                name='id_categoryprofession'
                control={control}
                dropdownStyle={{ backgroundColor: colors.blue.background }}
                defaultValue={post.id_categoryprofession?._id}
                data={categoriesProfession.map(({ _id, name }) => ({
                  label: name,
                  value: _id,
                }))}
                placeholder='Profissão'
              />
            </LabelWraper>
          </Section>
          <SubmitButton type='submit'>
            <p>Salvar</p>
          </SubmitButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEditBlog.propTypes = {
  post: PropTypes.object,
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
