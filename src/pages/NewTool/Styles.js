import styled from "styled-components";
import { Modal } from "antd";
import { colors } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 4rem;

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
  color: white;
  font-weight: 600;
  height: 20%;
  padding-bottom: 1rem;
  padding-top: 4rem;
  text-align: center;
  margin-left: 5%;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.9sarem;
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
  padding: 0.8rem 1.6rem;
  color: white;
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
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: none;
  }
`;
