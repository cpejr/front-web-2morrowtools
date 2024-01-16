import { Button } from "antd";
import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  align-self: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  align-self: center;
  justify-content: space-around;

  @media (max-width: ${breakpoints.smallDevice}) {
    width: 95%;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => (props.active ? colors.white : colors.blue.background)};
  border: 1px solid ${colors.white};
  color: ${colors.white};
  color: ${(props) => (props.active ? colors.black : colors.white)};
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
  width: 33%;
  height: 3rem;

  &:hover {
    background-color: ${colors.blue.main};
    border: none;
    color: ${(props) => (props.active ? colors.black : colors.white)};
    > span {
      color: ${(props) => (props.active ? colors.black : colors.white)};
    }
  }
  > span {
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1rem;
    }
    @media (max-width: ${breakpoints.smallDevice}) {
      padding: 0;
      margin: 0;
      font-size: 0.8rem;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: red;

  margin-top: ${(props) => (props.error ? "0.5rem" : "0")};

  @media (max-width: 700px) {
    font-size: 1.4rem !important;
  }
`;

export const Label = styled.label`
  font-size: 2.2rem;
  font-weight: 400;
`;
