import styled from "styled-components";
import { colors } from "../../../styles/styleVariables";

export const Container = styled.div`
  border: ${(props) => (props?.error ? "0.1rem red solid" : `0.1rem ${colors.white} solid`)};
  border-radius: 0.4rem;

  .rdw-editor-toolbar {
    background-color: transparent;
    border-bottom: 0.1rem solid black;
    border-radius: 0.4rem;
  }

  .rdw-editor-main {
    padding: 0 2rem;
    min-height: 6rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: red;
  padding-left: 1rem;
  font-weight: 400;
`;
