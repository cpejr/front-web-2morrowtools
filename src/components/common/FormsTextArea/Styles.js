import styled from "styled-components";
import { Input } from "antd";
import { colors } from "../../../styles/styleVariables";
const { TextArea } = Input;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  gap: 0.5rem;

  width: 100%;
`;

export const Label = styled.label`
  color: ${colors.white};
  font-size: 2.4rem;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }
`;

export const StyledTextArea = styled.textarea`
  height: 6rem;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: ${colors.white};
  background-color: ${colors.blue.background};
  border: ${(props) => (props?.error ? "0.1rem red solid" : "0.1rem black solid")};
  ::placeholder {
    font-weight: 400;
  }
  @media (max-width: 700px) {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    height: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1rem;
  color: red;

  @media (max-width: 700px) {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`;
