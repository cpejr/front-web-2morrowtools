import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;

  width: 100%;
`;

export const Label = styled.label`
  color: #ffffff;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }
`;

export const StyledInput = styled.input`
  height: 3rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: white;
  border: solid 0.1rem;
  border-color: white;
  width: 100%;
  background-color: ${colors.blue.background};
  border: ${(props) => (props?.error ? "0.2rem red solid" : "0.1rem black solid")};
  ::placeholder {
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    height: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 10px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.76rem;
  color: red;
  font-weight: 700;
`;
