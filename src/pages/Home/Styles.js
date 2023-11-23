import { Input } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 100px;
  gap: 2rem;
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
  width: 95%;
  height: auto;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-around;
  gap: 3rem;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0;
  }
`;
