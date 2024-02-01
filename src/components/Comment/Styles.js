import styled from "styled-components";
import { breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  height: auto;
  width: 60px;
  border-radius: 50%;

  @media (max-width: ${breakpoints.desktop}) {
    width: 50px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 45px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 40px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 35px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 30px;
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
