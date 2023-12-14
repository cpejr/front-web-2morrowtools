import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";
import { AutoComplete } from "primereact/autocomplete";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0rem 3rem 0rem 3rem;
  height: auto;
  padding-bottom: 15rem;
  padding-top: 8rem;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: white;
  font-weight: 600;
  margin: 0;
  text-align: center;
  padding-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
    line-height: 3.9rem;
    height: 3.9rem;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 2.2rem;
    font-weight: 500;
  }
  @media (max-width: 310px) {
    margin-top: 2rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1.8rem;
  }
`;

export const DivNew = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  align-self: center;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px 0px #000, -5px -5px 10px 0px #1a212d;
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
  @media (max-width: ${breakpoints.mobile}) {
    width: 37rem;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 28rem;
  }
  @media (max-width: 310px) {
    margin-top: 2rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 22rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  gap: 1.5rem;
  background: #080b10;
  width: 100%;
`;

export const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
  height: fit-content;
  font-size: 2rem;
  margin-left: 4rem;
  color: white;
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    margin-left: 1rem;
  }
`;

export const CategoryListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1.2rem;
  }
`;

export const CategoryButtons = styled.div`
  display: flex;
  gap: 8px;

  svg {
    cursor: pointer;
  }
`;
export const IconWrapper = styled.div`
  width: 100%;
  height: 3rem;
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
      @media (max-width: ${breakpoints.smallDevice}) {
        width: 1.2;
      }
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 10%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 15%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 18%;
  }
`;
export const AutoCompleteInput = styled(AutoComplete)`
  width: 95%;
  align-self: flex-end;
  height: 100%;
  > input {
    background-color: ${colors.blue.background};
    width: 100%;
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
    width: 85%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 82%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 80%;
  align-self: center;
`;
