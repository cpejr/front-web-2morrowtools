import { Modal } from "antd";
import styled from "styled-components";
import { MultiSelect } from "primereact/multiselect";
import { AutoComplete } from "primereact/autocomplete";
import { breakpoints, colors } from "../../styles/styleVariables";

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
    margin-top: 50px;
    margin-inline: auto;
  }

  @media (max-width: 370px) {
    font-size: 2.5rem;
    margin-top: 80px;
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

export const Section3 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70%;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Selects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5rem;
  padding-inline: 15%;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 0;
    gap: 1rem;
    align-items: center;
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

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70%;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.grey.cardBackground};
    @media (max-width: ${breakpoints.tablet}) {
      width: 90%;
      margin-inline: auto;
    }
  }
  .ant-modal-body {
    color: ${colors.white};
    border-radius: none;
  }
`;

export const TextList = styled.ul`
  list-style-type: none;
  padding: 0;
  height: fit-content;
  font-size: 2rem;
  color: ${colors.white};
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
export const AutoCompleteInput = styled(AutoComplete)`
  width: 95%;
  align-self: flex-end;
  box-shadow: none;
  > input {
    box-shadow: none;
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
export const TextListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: ${colors.white};
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1.2rem;
  }
`;
export const TextButtons = styled.div`
  display: flex;
  gap: 8px;

  svg {
    cursor: pointer;
  }
`;
