import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/styleVariables";
import { Select as AntdSelect } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  gap: 0.5rem;

  width: 100%;
`;

export const Label = styled.label`
  color: ${colors.white};
  font-size: 2.4rem;

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
  color: ${colors.white};
  width: 100%;
  background-color: ${colors.blue.background};
  border: ${(props) => (props?.error ? "0.1rem red solid" : `0.1rem ${colors.white} solid`)};
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

export const Select = styled(AntdSelect)`
  border: ${(props) => (props?.error ? "0.1rem red solid" : `0.1rem ${colors.white} solid`)};
  border-radius: 0.4rem;
  width: 120px;
`;
