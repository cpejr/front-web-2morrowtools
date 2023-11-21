import { Input } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../styles/styleVariables";
import Select from "rc-select";
const mobileBreakPoint = "700px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 100px;
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

export const FilterInputStyled = styled(Input)`
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
  width: 80%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  @media (max-width: ${mobileBreakPoint}) {
    margin-bottom: 0;
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
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
  gap: 1rem;
  label {
    color: ${colors.blue.light};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const InputStyled = styled(Input)`
  width: 15rem;
  height: 35px;
  padding: 0.8rem;
`;

export const SelectStyled = styled(Select)`
  width: 15rem;
  height: 35px;
  .ant-select-arrow {
    color: white;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
  }
`;
