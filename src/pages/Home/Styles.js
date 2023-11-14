import { Input, Select } from "antd";
import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 100px;
  img {
    width: 100%;
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const InputStyled = styled(Input)`
  width: 35rem;
  height: 35px;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  .ant-input-prefix {
    padding: 0.5rem;
  }
`;

export const FilterArea = styled.div`
  display: flex;
  width: 80%;
  height: 130px;
  margin-bottom: 20px;
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 50%;
`;

export const BlueCheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 20%;
  label {
    color: ${colors.blue.light};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 30%;
`;

export const SearchBarInput = styled(Input)`
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
export const Line = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
`;
export const MobileLine = styled.div``;
