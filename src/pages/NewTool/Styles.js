import styled from "styled-components";
import { Button, Input, Modal, Select } from "antd";
import { breakpoints, colors } from "../../styles/styleVariables";
import { AutoComplete } from "primereact/autocomplete";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 8rem;
  gap: 3rem;

  @media (max-width: 700px) {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: ${colors.white};
  font-weight: 600;
  margin: 0;
  margin-left: 5rem;
  text-align: center;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.9rem;
    height: 3.9rem;
  }

  @media (max-width: 370px) {
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;
export const Section2 = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Selects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3rem;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ManageItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  gap: 3rem;
`;

export const ToolList = styled.div`
  padding: 0;
  width: 50%;
  height: auto;
  font-size: 2rem;
  margin-left: 4rem;
  color: ${colors.white};
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 70%;
  }
`;

export const ToolButtons = styled.div`
  display: flex;
  gap: 8px;

  svg {
    cursor: pointer;
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.grey.cardBackground};
  }
  .ant-modal-body {
    color: ${colors.white};
    border-radius: none;
  }
`;
export const AutoCompleteInput = styled(AutoComplete)`
  width: 95%;
  align-self: flex-end;
  > input {
    background-color: ${colors.blue.background};
    width: 100%;
    height: 35px;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: ${colors.white};
    border: none;
    margin: 0;

    &:focus {
      outline: none;
      border: none;
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 87%;
  }
`;

export const ShortDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 1rem;
`;
export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const IconWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${colors.white};
  border-radius: 6px;
`;
export const SVGDiv = styled.div`
  display: flex;
  width: 5%;
  padding-left: 1rem;
  > span {
    > svg {
      font-size: 1.7rem;
      @media (max-width: ${breakpoints.desktop}) {
        font-size: 1.5rem;
      }

      @media (max-width: ${breakpoints.smallMobile}) {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 10%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 13%;
  }
`;
export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  align-items: center;
  width: 90%;
  flex-direction: column;
  margin-top: 2rem;
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
    overflow-x: scroll;
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
export const Table = styled(DataTable)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-self: center;
  width: 90%;
  min-height: 70%;
`;
export const TableColumn = styled(Column)`
  display: flex;
  background-color: ${colors.blue.background};
`;
