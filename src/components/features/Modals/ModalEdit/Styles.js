import styled from "styled-components";
import { Input } from "antd";
import { breakpoints, colors } from "../../../../styles/styleVariables";
import { MultiSelect } from "primereact/multiselect";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Tittle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  align-self: baseline;
  margin: 0;
  align-self: center;

  color: ${colors.white};
  padding-bottom: 2.5rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  align-self: baseline;

  color: ${colors.white};
  padding-bottom: 1rem;
`;

export const StyledInput = styled(Input)`
  height: 6rem;
  font-size: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: ${colors.white};
  width: 100%;

  @media (max-width: 700px) {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    height: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;

  margin-top: 0.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const LabelWraper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  flex-direction: column;
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
export const SubmitText = styled.p`
  color: ${colors.white};
  &:hover {
    color: ${colors.black};
  }
`;
