import styled from "styled-components";
import { Input, Button } from "antd";
import { colors } from "../../../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;
`;

export const Form = styled.form``;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  align-self: baseline;

  color: white;
  padding-bottom: 0.5rem;
`;

export const StyledInput = styled(Input)`
  height: 6rem;
  font-size: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: white;
  width: 100%;

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
  font-weight: 700;
  color: red;

  margin-top: 0.5rem;
`;

export const ModalButton = styled(Button)`
  cursor: pointer;
  gap: 0.7rem;
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  width: 21.2rem;
  height: 4.5rem;

  background-color: transparent;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  color: white;

  margin-top: 1.5rem;

  &:hover {
    background-color: ${colors.white};
    color: black;
    cursor: pointer;
  }
  s p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
  }
`;
