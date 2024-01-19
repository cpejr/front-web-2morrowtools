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

export const LetComment = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 1rem;
  align-self: center;
  > h2 {
    font-size: 35px;
    @media (max-width: ${breakpoints.desktop}) {
    }
    @media (max-width: ${breakpoints.tablet}) {
    }
    @media (max-width: ${breakpoints.smallTablet}) {
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 25px;
    }
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
  padding-left: 1rem;

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 13px;
  }
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

    @media (max-width: ${breakpoints.smallTablet}) {
      align-self: center;
      font-size: 40px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 35px;
    }
    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 30px;
    }
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
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 40px;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      align-self: center;
      text-align: center;
      font-size: 32px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 25px;
    }
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
   margin-top: 4rem;
   margin-bottom: 2rem;
  gap: 1rem;
  height: auto;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 6px;
  padding: 4rem 2rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
  }
`;
export const DiscoverData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 55%;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 100%;
  }
  > h6 {
    font-size: 24px;
    margin: 0;

    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 20px;
    }
  }
  > p {
    margin: 0;
    font-size: 22px;
    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 18px;
    }
  }
`;
export const DiscoverInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 45%;
  gap: 1rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 100%;
  }
`;
export const HalfInput = styled(Input)`
  width: 49%;
  height: 3rem;
  font-size: 22px;
  padding-left: 1rem;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 100%;
    font-size: 20px;
  }
`;
export const FullInput = styled(Input)`
  width: 100%;
  height: 3rem;
  font-size: 22px;
  padding-left: 1rem;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 100%;
    font-size: 20px;
  }
`;
export const DiscoverLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 2%;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
    gap: 1rem;
  }
`;
