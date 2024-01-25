import PropTypes from "prop-types";
import { useState } from "react";
import { Container, Tittle, Label, ModalContent, Form, Section, LabelWraper } from "./Styles";
import FormSelect from "../../../common/FormSelect/FormSelect";
import { toast } from "react-toastify";
import * as managerService from "../../../../services/ManagerService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputBorder from "../../../common/FormInputBorder/FormInputBorder";
import FormsTextArea from "../../../common/FormsTextArea/FormsTextArea";
import { FaUpload } from "react-icons/fa";
import { buildEditToolErrorMessage, editToolValidationSchema } from "./utils";
import SubmitButton from "../../../common/SubmitButton/SubmitButton";
import { colors } from "../../../../styles/styleVariables";

export default function ModalEdit({ _id, tool, close }) {
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  // Forms values
  const [formData, setFormData] = useState({
    name: tool.name,
    imageURL: tool.imageURL,
    shortDescription: tool.shortDescription,
    longDescription: tool.longDescription,
    link: tool.link,
    youtubeVideoLink: tool.youtubeVideoLink,
  });

  // On Submit
  const onSubmit = async (data) => {
    const body = {
      ...formData,
      id_categoryfeature: data.id_categoryfeature,
      id_categoryprice: data.id_categoryprice,
      id_categoryprofession: data.id_categoryprofession,
    };

    try {
      await managerService.useEditAITools(_id, body);
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

        const resultPrices = await managerService.usegetCategoriesPrices();
        setCategoriesPrices(resultPrices.categoriesPrices);

        const resultProfession = await managerService.usegetCategoriesProfession();
        setCategoriesProfession(resultProfession.categoriesprofession);
      } catch (error) {
        const errorMessage = buildEditToolErrorMessage(error);
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
    resolver: zodResolver(editToolValidationSchema),
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
                defaultValue={tool.name}
                placeholder='Título:'
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>URL da imagem:</Label>
              <FormInputBorder
                name='imageURL'
                defaultValue={tool.imageURL}
                placeholder='URL da imagem:'
                icon={FaUpload}
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Descrição curta:</Label>
              <FormInputBorder
                name='shortDescription'
                defaultValue={tool.shortDescription}
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
                defaultValue={tool.longDescription}
                placeholder='Descrição longa:'
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Link do site:</Label>
              <FormInputBorder
                name='link'
                defaultValue={tool.link}
                placeholder='Link do site:'
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Link do vídeo no Youtube:</Label>
              <FormInputBorder
                name='youtubeVideoLink'
                defaultValue={tool.youtubeVideoLink}
                placeholder='Link do vídeo no Youtube:'
                errors={errors}
                register={register}
                onChange={(e) => setFormData({ ...formData, youtubeVideoLink: e.target.value })}
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Category Feature:</Label>
              <FormSelect
                name='id_categoryfeature'
                control={control}
                dropdownStyle={{ backgroundColor: colors.blue.background }}
                defaultValue={tool.id_categoryfeature._id}
                data={categoriesFeature.map(({ _id, name }) => ({
                  label: name,
                  value: _id,
                }))}
                placeholder='Característica'
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Category Price:</Label>
              <FormSelect
                name='id_categoryprice'
                control={control}
                dropdownStyle={{ backgroundColor: colors.blue.background }}
                defaultValue={tool.id_categoryprice._id}
                data={categoriesPrices.map(({ _id, name }) => ({
                  label: name,
                  value: _id,
                }))}
                placeholder='Preço'
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Category Profession:</Label>
              <FormSelect
                name='id_categoryprofession'
                control={control}
                dropdownStyle={{ backgroundColor: colors.blue.background }}
                defaultValue={tool.id_categoryprofession._id}
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

ModalEdit.propTypes = {
  tool: PropTypes.object,
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
