import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;
export const PhotoCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 5%;
  border-radius: 50%;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  height: 100%;
  align-self: center;
  > svg {
    color: ${colors.black};
    font-size: 60px;
  }
`;
export const CommentCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 25px;
`;
