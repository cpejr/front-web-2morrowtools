import styled from "styled-components";
import { colors } from "../../../styles/styleVariables";
import { Select as AntdSelect } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  gap: 2rem;

  width: 100%;

  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }
`;

export const Select = styled(AntdSelect)`
  border: ${(props) => (props?.error ? "0.1rem red solid" : `0.1rem ${colors.white} solid`)};
  border-radius: 0.4rem;
  width: 120px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 10px;
    color: ${colors.icon};
  }
`;
