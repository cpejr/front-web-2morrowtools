import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6rem auto;
  gap: 2rem;
  text-align: center;
`;

export const Section = styled.div`
  width: 80%;
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
  height: 22rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.smallTablet}) {
    height:15rem;
  }
`;

export const SmallDescription = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: left;
  width: 60%;
  @media (max-width: ${breakpoints.mobile}) {
    width:80%;
  }
`;

export const LargeDescription = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: left;
  width: 60%;
  @media (max-width: ${breakpoints.mobile}) {
    width:80%;
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
