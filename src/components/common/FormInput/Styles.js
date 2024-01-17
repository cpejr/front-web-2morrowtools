import styled from "styled-components";
import Input from "antd/es/input/Input";
import { colors } from "../../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  width: 100%;
`;

export const Label = styled.label`
  color: #ffffff;
  margin-bottom: 1rem;

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
  border-radius: 0;
  border-color: ${colors.white};
  color: ${colors.white};
  

  width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.white};
  background-color: ${colors.blue.background};
  
  @media (max-width: 700px) {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    height: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${colors.white};
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
  font-size: 1.3rem;
  color: red;
  font-weight: 400;
`;
