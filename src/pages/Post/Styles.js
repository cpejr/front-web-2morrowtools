import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8rem 0;
  gap: 2rem;
  text-align: center;
  overflow-x: hidden;
`;

export const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
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
  width: 99vw;
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
