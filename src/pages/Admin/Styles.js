import styled from "styled-components";
import { Button as AntdButton } from "antd";
import { breakpoints, colors } from "../../styles/styleVariables";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Modal } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
  color: ${colors.white};
`;
export const ProfilePic = styled.img`
  border-radius: 50%;
`;
export const Table = styled(DataTable)`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  min-height: 70%;
`;
export const TableColumn = styled(Column)`
  display: flex;
  background-color: ${colors.blue.background};
`;
export const Select = styled(Dropdown)`
  width: 80%;
  background-color: ${colors.black};
  .p-multiselect-label {
    width: 215px;
    overflow-x: scroll;
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
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.blue.background};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;

export const NewsLetter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;
export const Button = styled(AntdButton)`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-weight: bold;
  border-color: ${colors.white};
  width: 15%;
  align-self: center;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: smaller;
  }
  @media (max-width: 380px) {
    font-size: 0.6rem;
  }
  > svg {
    font-size: larger;
  }
`;
