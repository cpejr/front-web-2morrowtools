import { Button as AntdButton, Input as AntdInput } from "antd";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

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
  @media (max-width: ${breakpoints.tablet}) {
    height: 250px;
  }
`;
export const Form = styled.form`
  display: flex;
`;
export const Input = styled(AntdInput)`
  width: 100%;
  font-weight: 300;
  font-size: large;
  border: 2px solid ${colors.white};
  border: ${(props) => (props?.error ? "0.1rem red solid" : `0.1rem ${colors.white} solid`)};
  ::placeholder {
    font-weight: 400;
  }
`;

export const Button = styled(AntdButton)`
  color: ${colors.white};
  font-weight: bold;
  border-color: ${colors.white};
  width: 40%;
  align-self: center;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 90%;
  }
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

export const MessageError = styled.div`
  font-size: 1.3rem;
  color: red;
  font-weight: 400;
`;
