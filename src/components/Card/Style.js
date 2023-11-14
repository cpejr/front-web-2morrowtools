import { Card, Button, Rate } from "antd";
import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 780px;
  align-items: center;
  gap: 50px;
  box-shadow: 0px 4px 4px 0px ${colors.shadow};
  &:hover {
    background-color: #1c2431;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const Stars = styled(Rate)`
  color: ${colors.white};
  font-size: 30px;
`;
export const Image = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  > img {
    width: 100%;
    height: 229px;
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 35px;

  > p {
    font-size: 22px;
  }
  > span {
    font-size: 22px;
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 35px;
`;
export const LineSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  > svg {
    cursor: pointer;
  }
`;
export const BlueButton = styled(Button)`
  width: 160px;
  height: 50px;
  background-color: ${colors.blue.accent};
  border: none;
  margin-top: 1rem;
  &:hover {
    background-color: ${colors.blue.hover};
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
  height: auto;
  gap: 10px;
`;
export const Tag = styled.div`
  display: flex;
  width: auto;
  padding: 5px 20px;
  height: 40px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    border: 1px solid ${colors.blue.light};
    color: ${colors.blue.light};
  }
`;
