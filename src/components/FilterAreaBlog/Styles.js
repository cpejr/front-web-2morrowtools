import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";
import { Button, Input, Select } from "antd";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  flex-direction: column;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  //gap: 1rem;
  label {
    //color: ${colors.blue.light};
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
  color: ${colors.blue.light};

  .ant-select-arrow {
    color: ${colors.white};
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
  }
`;

export const MultipleSelect = styled(MultiSelect)`
  background-color: ${colors.black};

  .p-multiselect-label {
    width: 215px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
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

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  margin: 20px;
`;

export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media (max-width: ${breakpoints.tablet}) {
    width: 40%;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 40%;
  }
`;

export const Buttons = styled(Button)`
  border: 1px solid #d1d5db;
  width: 130px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${colors.black};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 90%;
  }
`;

export const UniSelect = styled(Dropdown)`
  background-color: ${colors.black};
  .p-dropdown-label {
    color: ${colors.white};
    width: 200px;
    overflow-x: hidden;
  }
  .p-inputtext {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
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
export const ShowTags = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 1rem;
  padding: 0.2rem 1rem;
  color: ${colors.white};
  cursor: pointer;
  flex-wrap: wrap;
`;
export const Tags = styled.span`
  border-radius: 20px;
  border: 1px solid ${colors.white};
  padding: 0.5rem;
  background-color: ${colors.black};
`;
