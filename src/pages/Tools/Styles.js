import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";
import { Button, Input } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 4rem;
`;
export const ToolCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: auto;
  justify-content: center;
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const LetComment = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 1rem;
  align-self: center;
  > h2 {
    font-size: 35px;
  }
`;
export const BlueButton = styled(Button)`
  width: 13rem;
  height: 3rem;
  align-self: center;
  font-size: 24px;
`;
export const CommentInput = styled(Input)`
  width: 100%;
  height: 3rem;
`;
export const CommentDiv = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-self: center;
  gap: 1rem;
  height: auto;
  > h1 {
    font-size: 50px;
  }
`;
export const Comment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
  border-radius: 6px;
  border: 2px solid ${colors.white};
  max-height: 40rem;
  overflow-y: scroll;
`;
export const OtherTools = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: auto;
  > h1 {
    font-size: 50px;
  }
`;
export const CardLine = styled.div`
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
export const DiscoverDiv = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-self: center;
  gap: 1rem;
  height: auto;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 6px;
  padding: 4rem 2rem;
`;
export const DiscoverData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 55%;
  > h6 {
    font-size: 24px;
    margin: 0;
  }
  > p {
    margin: 0;
    font-size: 22px;
  }
`;
export const DiscoverInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 45%;
  gap: 1rem;
`;
export const HalfInput = styled(Input)`
  width: 49%;
  height: 3rem;
  font-size: 22px;
`;
export const FullInput = styled(Input)`
  width: 100%;
  height: 3rem;
  font-size: 22px;
`;
