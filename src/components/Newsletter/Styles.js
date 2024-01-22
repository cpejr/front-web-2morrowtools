import { Button as AntdButton, Input as AntdInput } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  gap: 20px;
  padding: 20px;
  max-width: 80vw;
  box-shadow: -2px -1px 5px 0.5px white, 2px 2px 2px 1px grey;
  flex-wrap: wrap;
  height: 200px;
`;
export const Input1 = styled(AntdInput)`
  width: 100%;
  font-weight: 300;
  font-size: large;
  border: 2px solid #240079;
`;

export const Button = styled(AntdButton)`
  color: #240079;
  font-weight: bold;
  border-color: #240079;
  width: 40%;
  align-self: center;
`;

export const Title = styled.div`
  font-size: larger;
  font-weight: bold;
`;
export const Description = styled.div``;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  justify-content: center;
  @media (max-width: ${breakpoints.newsletter}) {
    width: 100%;
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
  justify-content: center;
  @media (max-width: ${breakpoints.newsletter}) {
    width: 100%;
    align-self: center;
  }
`;

export const Break = styled.div`
  display: flex;
  gap: 10px;
`;
