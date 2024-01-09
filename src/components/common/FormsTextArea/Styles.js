import styled from "styled-components";
import { colors } from "../../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  gap: 0.5rem;

  width: 100%;
`;

export const Label = styled.label`
  color: #ffffff;
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
  font-size: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: white;
  background-color: ${colors.blue.background};
  border: ${(props) => (props?.error ? "0.2rem red solid" : "0.1rem black solid")};
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
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
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
