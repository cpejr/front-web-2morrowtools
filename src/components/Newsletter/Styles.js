import { Button, Input } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  gap: 20px;
  padding: 20px;
  max-width: 80vw;
  box-shadow: -2px -1px 5px white;
  flex-wrap: wrap;
`;
export const NameInput = styled(Input)`
  border-radius: 3px;
  width: 100%;
`;

export const SendButton = styled(Button)`
  color: #a883ff;
  border-color: #a883ff;
  width: 50%;
  align-self: center;
`;

export const Text1 = styled.div`
  font-size: larger;
  font-weight: bold;
`;
export const Text2 = styled.div``;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  @media (max-width: ${breakpoints.newsletter}) {
    width: 100%;
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
  @media (max-width: ${breakpoints.newsletter}) {
    width: 100%;
    align-self: center;
  }
`;

export const Break = styled.div`
  display: flex;
  gap: 10px;
`;
