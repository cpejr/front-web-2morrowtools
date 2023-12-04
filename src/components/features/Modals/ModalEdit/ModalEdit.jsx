import PropTypes from "prop-types";
import { useState } from "react";
import { Container, Tittle, Label, ModalContent, Form, Section } from "./Styles";
import FormSelect from "../../../common/FormSelect/FormSelect";
import { toast } from "react-toastify";
import * as managerService from "../../../../services/ManagerService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../../common/FormInput/FormInput";
import FormsTextArea from "../../../common/FormsTextArea/FormsTextArea";
import { FaUpload } from "react-icons/fa";
import { buildEditToolErrorMessage, editToolValidationSchema } from "./utils";
import SubmitButton from "../../../common/SubmitButton/SubmitButton";

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

  // On submit
  const onSubmit = async (data) => {
    const combinedData = {
      ...formData,
      id_categoryfeature: data.id_categoryfeature,
      id_categoryprice: data.id_categoryprice,
      id_categoryprofession: data.id_categoryprofession,
    };
    console.log("O ID da ferramenta é:", _id);

    try {
      await managerService.useEditAITools({ _id, body: combinedData });
      toast.success("Ferramenta editada com sucesso!");
      toast.clearWaitingQueue();
      close();
    } catch (error) {
      toast.error("Erro ao editar ferramenta. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao editar a ferramenta", error);
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
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(editToolValidationSchema),
  });

  return (
    <Container>
      <Tittle>Editar Informações</Tittle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <Section>
            <div>
              <Label>Nome:</Label>
              <FormInput
                name='name'
                defaultValue={tool.name}
                placeholder='Título:'
                errors={errors}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <Label>URL da imagem:</Label>
              <FormInput
                name='imageURL'
                defaultValue={tool.imageURL}
                placeholder='URL da imagem:'
                icon={FaUpload}
                errors={errors}
                onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}
              />
            </div>

            <div>
              <Label>Descrição curta:</Label>
              <FormInput
                name='shortDescription'
                defaultValue={tool.shortDescription}
                placeholder='Descrição curta:'
                errors={errors}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              />
            </div>

            <div>
              <Label>Descrição longa:</Label>
              <FormsTextArea
                name='longDescription'
                rows={4}
                defaultValue={tool.longDescription}
                placeholder='Descrição longa:'
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
              />
            </div>

            <div>
              <Label>Link do site:</Label>
              <FormInput
                name='link'
                defaultValue={tool.link}
                placeholder='Link do site:'
                errors={errors}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              />
            </div>

            <div>
              <Label>Link do vídeo no Youtube:</Label>
              <FormInput
                name='youtubeVideoLink'
                defaultValue={tool.youtubeVideoLink}
                placeholder='Link do vídeo no Youtube:'
                errors={errors}
                onChange={(e) => setFormData({ ...formData, youtubeVideoLink: e.target.value })}
              />
            </div>

            <div>
              <Label>Category Feature:</Label>
              <FormSelect
                name='id_categoryfeature'
                control={control}
                defaultValue={tool.id_categoryfeature._id}
                data={categoriesFeature.map(({ _id, name }) => ({
                  label: name,
                  value: _id,
                }))}
                placeholder='Característica'
              />
            </div>

            <div>
              <Label>Category Price:</Label>
              <FormSelect
                name='id_categoryprice'
                control={control}
                defaultValue={tool.id_categoryprice._id}
                data={categoriesPrices.map(({ _id, name }) => ({
                  label: name,
                  value: _id,
                }))}
                placeholder='Preço'
              />
            </div>

            <div>
              <Label>Category Profession:</Label>
              <FormSelect
                name='id_categoryprofession'
                control={control}
                defaultValue={tool.id_categoryprofession._id}
                data={categoriesProfession.map(({ _id, name }) => ({
                  label: name,
                  value: _id,
                }))}
                placeholder='Profissão'
              />
            </div>
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
