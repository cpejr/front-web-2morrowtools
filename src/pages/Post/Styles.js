import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";
import { Button, Input } from "antd";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 8rem 0;
  gap: 2rem;
  overflow-x: hidden;
`;

export const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const ErrorTitle = styled.div`
  margin-top: 20%;
  font-size: 3rem;
  margin-bottom: 0.625rem;
`;

export const HtmlContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  > * {
    width: 100%;
  }

  width: 60%;
  p:has(img) {
    text-align: center;
  }

  img {
    width: 40vw;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    img {
      width: 80vw;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Categories = styled.div`
  border: 1px solid;
  padding: 0.625rem;
  border-radius: 0.31rem;
  cursor: pointer;
`;
export const Image = styled.img`
  object-fit: cover;
  margin-bottom: 20px;
  width: 100vw;
  height: auto;
  max-height: 38vh;
  @media (max-width: ${breakpoints.smallTablet}) {
    max-height: 20rem;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    max-height: 10rem;
  }
`;

export const SmallDescription = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: left;
  width: 60%;
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;

export const LargeDescription = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: left;
  width: 60%;
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;

export const TagsLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 1rem;
  font-size: 55px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }
`;

export const Tag = styled.div`
  display: flex;
  width: auto;
  padding: 5px 1.5rem;
  height: fit-content;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  font-size: 15px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 13px;
    padding: 5px 1rem;
  }
  &:hover {
    border: 1px solid ${colors.blue.light};
    color: ${colors.blue.light};
  }
`;

export const CommentSection = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-self: center;
  gap: 2rem;
  text-align: center;
  height: auto;
  > h1 {
    font-size: 40px;
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

export const CommentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
  border-radius: 6px;
  border: 2px solid ${colors.white};
  max-height: 40rem;
  overflow-y: scroll;
`;

export const LetComment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  align-self: center;
  > h2 {
    font-size: 35px;
    margin: 0;
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

export const CommentInput = styled(Input)`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  border: 1px solid ${colors.white};
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 13px;
  }
`;

export const BlueButton = styled(Button)`
  width: 13rem;
  height: 3rem;
  align-self: center;
  font-size: 24px;
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
export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const Line = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0;
  }
`;
