import PropTypes from "prop-types";
import { useState } from "react";
import {
  Container,
  Tittle,
  Label,
  ModalContent,
  Form,
  Section,
  LabelWraper,
  MultipleSelect,
  SubmitText,
} from "./Styles";
import { toast } from "react-toastify";
import * as managerService from "../../../../services/ManagerService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaUpload } from "react-icons/fa";
import { buildEditToolErrorMessage, editToolValidationSchema } from "./utils";
import { FormsTextArea, FormInputBorder, SubmitButton, FormImageInput } from "../../../";

export default function ModalEdit({ _id, tool, close, transformArrayItems }) {
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [idCategoriesFeature, setIdsCategoriesFeature] = useState([]);
  const [idCategoriesPrices, setIdsCategoriesPrices] = useState([]);
  const [idCategoriesProfession, setIdsCategoriesProfession] = useState([]);
  // Forms values

  useEffect(() => {
    setIdsCategoriesFeature(tool?.id_categoryfeatures.map((ids) => ids._id) || []);
    setIdsCategoriesPrices(tool?.id_categoryprices.map((ids) => ids._id) || []);
    setIdsCategoriesProfession(tool?.id_categoryprofessions.map((ids) => ids._id) || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState({
    name: tool.name,
    imageURL: tool.imageURL,
    shortDescription: tool.shortDescription,
    longDescription: tool.longDescription,
    link: tool.link,
    youtubeVideoLink: tool.youtubeVideoLink,
  });

  // On Submit
  const onSubmit = async () => {
    const body = {
      ...formData,
      id_categoryfeature: idCategoriesFeature,
      id_categoryprice: idCategoriesPrices,
      id_categoryprofession: idCategoriesProfession,
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
              <FormImageInput
                name='imageURL'
                defaultValue={tool.imageURL}
                placeholder='URL da imagem:'
                icon={FaUpload}
                errors={errors}
                register={register}
                onChange={(imageURL) => setFormData({ ...formData, imageURL })}
              />
              {/* <FormInputBorder
                name='imageURL'
                defaultValue={tool.imageURL}
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
              <MultipleSelect
                value={idCategoriesFeature}
                name='id_categoryfeature'
                onChange={(e) => {
                  setIdsCategoriesFeature(e.value);
                }}
                options={transformArrayItems(categoriesFeature)}
                optionLabel='label'
                placeholder='Escolha as características'
                className='w-full md:w-20rem'
                filter
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Category Price:</Label>
              <MultipleSelect
                value={idCategoriesPrices}
                name='id_categoryprice'
                onChange={(e) => {
                  setIdsCategoriesPrices(e.value);
                }}
                options={transformArrayItems(categoriesPrices)}
                optionLabel='label'
                placeholder='Escolha as características'
                className='w-full md:w-20rem'
                filter
              />
            </LabelWraper>

            <LabelWraper>
              <Label>Category Profession:</Label>
              <MultipleSelect
                value={idCategoriesProfession}
                name='id_categoryprofession'
                onChange={(e) => {
                  setIdsCategoriesProfession(e.value);
                }}
                options={transformArrayItems(categoriesProfession)}
                optionLabel='label'
                placeholder='Escolha as características'
                className='w-full md:w-20rem'
                filter
              />
            </LabelWraper>
          </Section>
          <SubmitButton type='submit'>
            <SubmitText>Salvar</SubmitText>
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
  transformArrayItems: PropTypes.func.isRequired,
};
