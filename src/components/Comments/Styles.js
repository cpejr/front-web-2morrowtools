import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

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

  @media (max-width: ${breakpoints.smallTablet}) {
    width: 10%;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    width: 15%;
  }
  > svg {
    color: ${colors.black};
    font-size: 60px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 50px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 45px;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
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
export const CommentCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 25px;
  font-weight: 600;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 22px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 18px;
    width: 90%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 14px;
    width: 85%;
  }
  > p {
    font-weight: normal;
    @media (max-width: ${breakpoints.desktop}) {
      font-size: 22px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 20px;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 18px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }
    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 13px;
    }
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
