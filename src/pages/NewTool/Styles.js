import { Button } from "antd";

import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

const firstBreakPoint = "1370px";
const secondBreakPoint = "1024px";
const thirdBreakPoint = "800px";
const mobileBreakPoint = "700px";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;
  margin-bottom: 100px;
  flex-direction: column;

  width: 60%;
  // ou qualquer valor desejado
  margin-left: 20%;
`;
export const BlueButton = styled(Button)`
  width: 150px;
  height: 50px;
  background-color: ${colors.blue.accent};
  border: none;
  margin-top: 1rem;
  @media (max-width: ${firstBreakPoint}) {
    width: 128px;
    height: 40px;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 96px;
    height: 30px;
  }

  @media (max-width: ${thirdBreakPoint}) {
    width: 86.4px;
    height: 27px;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 128px;
    height: 40px;
  }
  &:hover {
    background-color: ${colors.blue.hover};
  }
`;
