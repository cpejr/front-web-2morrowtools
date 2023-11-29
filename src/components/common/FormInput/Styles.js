import styled from "styled-components";
import Input from "antd/es/input/Input";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  gap: 0.5rem;

  width: 100%;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 2.4rem;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }
`;

export const StyledInput = styled(Input)`
  height: 6rem;
  font-size: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: white;
  border: solid 0.1rem;
  border-color: white;
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

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 10px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.76rem;
  color: red;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
`;
