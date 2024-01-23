import styled from "styled-components";
import { Modal } from "antd";
import { breakpoints, colors } from "../../styles/styleVariables";
import { AutoComplete } from "primereact/autocomplete";

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

export const ToolList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
  height: 6rem;
  font-size: 2rem;
  margin-left: 4rem;
  margin-bottom: 50rem;
  color: ${colors.white};
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 70%;
  }
`;

export const ToolListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
