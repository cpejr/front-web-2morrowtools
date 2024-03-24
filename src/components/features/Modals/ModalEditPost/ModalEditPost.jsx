import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../../../common/SubmitButton/SubmitButton";
import * as managerService from "../../../../services/ManagerService";
import FormImageInput from "../../../common/FormImageInput/FormImageInput";
import FormInputBorder from "../../../common/FormInputBorder/FormInputBorder";
import { buildEditPostErrorMessage, editPostValidationSchema } from "./utils";
import { Container, Label, Form, Section, LabelWraper, MultipleSelect } from "./Styles";
import { Editor } from "../../..";
import JoditEditor from "jodit-react";

export default function ModalEditPost({ _id, post, close }) {
  const [categoriesFeature, setCategoriesFeature] = useState([]);
  const [idCategoriesFeature, setIdsCategoriesFeature] = useState([]);
  const [categoriesProfession, setCategoriesProfession] = useState([]);
  const [idCategoriesProfession, setIdsCategoriesProfession] = useState([]);

  const [editorValue, setEditorValue] = useState(post.html);
  const editor = useRef(null);

  // Forms values
  const [formData, setFormData] = useState({
    name: post.name,
    imageUrl: post.imageUrl,
    shortDescription: post.shortDescription,
    longDescription: post.longDescription,
  });

  // On Submit
  const onSubmit = async (data) => {
    let body = {
      ...data,
      id_categoryfeature: idCategoriesFeature,
      id_categoryprofession: idCategoriesProfession,
    };
    if (editorValue) body = { ...body, html: editorValue };

    try {
      await managerService.useUpdatePost(_id, body);
      toast.success("Post editada com sucesso!");
      toast.clearWaitingQueue();
      close();
    } catch (error) {
      toast.error("Erro ao editar post. Favor tentar novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao editar o post", error);
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
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editPostValidationSchema),
  });

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Label>URL da imagem:</Label>
            <FormImageInput
              name='imageUrl'
              placeholder='   URL da imagem:'
              errors={errors}
              register={register}
              defaultValue={post.imageUrl}
            />
          </LabelWraper>

          {/* <Editor setEditorValue={setEditorValue} html={post.html} /> */}
          <JoditEditor
            ref={editor}
            value={editorValue}
            onBlur={(newContent) => setEditorValue(newContent)}
          />

          <LabelWraper>
            <Label>Características:</Label>
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
            <Label>Profissões:</Label>
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
        <SubmitButton type='submit'>Salvar</SubmitButton>
      </Form>
    </Container>
  );
}

ModalEditPost.propTypes = {
  post: PropTypes.object,
  _id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
