import { Input } from "antd";
import { AutoComplete } from "primereact/autocomplete";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 100px;
  gap: 2rem;

  .p-autocomplete-items-wrapper {
    background-color: green;
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    h1 {
      font-size: 2.7rem;
    }
    h2 {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;

export const HomeImage = styled.img`
  width: 100%;
`;

export const InputStyled = styled(Input)`
  width: 35rem;
  height: 35px;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  .ant-input-prefix {
    padding: 0.5rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 28rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 22rem;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  margin: 50px 0px 20px 0px;
  justify-content: center;
  gap: 4rem;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0;
  }
`;
export const IconWrapper = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${colors.white};
  border-radius: 6px;
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 70%;
  }
`;
export const SVGDiv = styled.div`
  display: flex;
  width: 3%;
  padding-left: 0.7%;
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
  align-self: center;
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

export const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 1rem;
  border-radius: 100px;
  border: 1px solid ${colors.blue.background};
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? colors.blue.background : colors.white)};
  color: ${({ isActive }) => (isActive ? colors.white : colors.blue.background)};
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  &:hover {
    background-color: ${({ isActive }) => (isActive ? colors.blue.background : colors.blue.hover)};
  }
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 2rem;
  width: fit-content;
  align-self: center;
  justify-content: center;
  gap: 2rem;
`;
