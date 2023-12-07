import { Select } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .ant-select-selector {
    border: 0.2rem solid ${(props) => (props.error ? "red" : "#9f9f9f ")};
    margin: 0 !important;
    padding-left: 1.6rem !important;
    font-size: 2rem;

    @media (max-width: 700px) {
      font-size: 1.6rem;
    }

    @media (max-width: 370px) {
      font-size: 1.2rem;
    }
  }

  .ant-select-selection-placeholder {
    color: #9f9f9f;
  }
  .ant-select {
  }
`;

export const StyledSelect = styled(Select)`
  flex-grow: 1;
  width: 100%;
  height: 6rem;

  @media (max-width: 700px) {
    height: 3rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: red;

  margin-top: ${(props) => (props.error ? "0.5rem" : "0")};

  @media (max-width: 700px) {
    font-size: 1.4rem !important;
  }
`;

export const Label = styled.label`
  font-size: 2.2rem;
  font-weight: 400;
`;
