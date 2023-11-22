import { Form, Button } from "antd";
import { StyledForm, CustomInput, ContainerForm } from "./Styles";

const CustomForm = ({ onSubmit }) => {
  if( typeof onSubmit != "function" ){
    console.error("A propriedade onSubmit deve ser uma função");
    return null;
  }
  
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <ContainerForm>
      <StyledForm onFinish={onFinish}>
        <Form.Item>
          <CustomInput placeholder='Título:' />
        </Form.Item>
        <Form.Item>
          <CustomInput placeholder='Upload de Imagem' />
        </Form.Item>
        <Form.Item>
          <Button>Enviar</Button>
        </Form.Item>
      </StyledForm>
    </ContainerForm>
  );
};

export default CustomForm;
