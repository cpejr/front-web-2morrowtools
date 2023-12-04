import PropTypes from "prop-types";
import { useState } from "react";
import { FiSave } from "react-icons/fi";
import { Container, Label, ModalContent, ModalButton, Form } from "./Styles";
import FormSelect from "../../../common/FormSelect/FormSelect";
import { toast } from "react-toastify";
import * as managerService from "../../../../services/ManagerService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../../common/FormInput/FormInput";
import FormsTextArea from "../../../common/FormsTextArea/FormsTextArea";
import { FaUpload } from "react-icons/fa";
import { buildEditToolErrorMessage } from "./utils";

export default function ModalEdit({ tool, close }) {
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [categoriesPrices, setCategoriesPrices] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);

  // Forms values
  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    shortDescription: "",
    longDescription: "",
    link: "",
    youtubeVideoLink: "",
  });

  // On submit
  const onSubmit = async (data) => {
    const combinedData = {
      ...formData,
      id_categoryfeature: data.id_categoryfeature,
      id_categoryprice: data.id_categoryprice,
      id_categoryprofession: data.id_categoryprofession,
    };
    try {
      await managerService.useCreateAITools(combinedData);
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
  } = useForm();
  //   {
  //   resolver: zodResolver(editToolValidationSchema),
  // }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <Label htmlFor='title'>Título:</Label>
          <FormInput
            name='name'
            placeholder='Título:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Label htmlFor='image'>Imagem:</Label>
          <FormInput
            name='imageURL'
            placeholder='URL da imagem:'
            icon={FaUpload}
            errors={errors}
            onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}
          />

          <Label htmlFor='shortDescription'>Descrição Curta:</Label>
          <FormInput
            name='shortDescription'
            placeholder='Descrição curta:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
          />

          <Label htmlFor='longDescription'>Descrição Longa:</Label>
          <FormsTextArea
            name='longDescription'
            rows={4}
            placeholder='Descrição longa:'
            onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
          />

          <Label htmlFor='link'>Link do Site:</Label>
          <FormInput
            name='link'
            placeholder='Link do site:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />

          <FormInput
            name='youtubeVideoLink'
            placeholder='Link do vídeo no Youtube:'
            errors={errors}
            onChange={(e) => setFormData({ ...formData, youtubeVideoLink: e.target.value })}
          />

          <FormSelect
            name='id_categoryfeature'
            control={control}
            data={categoriesFeature.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Característica'
          />

          <FormSelect
            name='id_categoryprice'
            control={control}
            data={categoriesPrices.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Preço'
          />

          <FormSelect
            name='id_categoryprofession'
            control={control}
            data={categoriesProfession.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))}
            placeholder='Profissão'
          />

          <ModalButton type='submit'>
            <FiSave size={25} />
            <p>Salvar Alterações</p>
          </ModalButton>
        </ModalContent>
      </Form>
    </Container>
  );
}

ModalEdit.propTypes = {
  tool: PropTypes.object,
  close: PropTypes.func.isRequired,
};
