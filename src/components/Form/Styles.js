import styled from "styled-components";
import { Form, Input } from "antd";

export const ContainerForm = styled.div`
  align-items: center;
`;
export const StyledForm = styled(Form)`
  //max-width: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px;
  border-radius: 5px;

  .ant-form-item {
    margin-bottom: 16px;
  }
`;
export const CustomInput = styled(Input)`
  width: 80rem;
  height: 40px;
  padding: 10px;
`;
