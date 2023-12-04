import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";
import { Input, Select } from "antd";

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export const Checkboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 35rem;
  @media (max-width: ${breakpoints.tablet}) {
    width: 25rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 22rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`;

export const CheckboxItem = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 5px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 33%;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 33%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 50%;
  }
`;

export const BlueCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  label {
    color: ${colors.blue.light};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const InputStyled = styled(Input)`
  width: 15rem;
  height: 35px;
  padding: 0.8rem;
`;

export const SelectStyled = styled(Select)`
  width: 15rem;
  height: 35px;
  .ant-select-arrow {
    color: white;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
  }
`;
