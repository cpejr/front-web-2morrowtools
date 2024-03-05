import styled from "styled-components";
import { colors } from "../../../styles/styleVariables";

export const Container = styled.div`
  border: 0.1rem solid black;
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
