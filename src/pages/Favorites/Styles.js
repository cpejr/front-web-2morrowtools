import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/styleVariables";
import { Card } from "../../components";

export const CardFavorite = styled(Card)`
  width: 600px;
  background-color: red;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-content: center;
  align-items: center;
  padding: 20px;
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: ${colors.blue.whiteBlue};
  }
  h2 {
    margin-left: 0px;
    font-family: ${fonts.Exo2};
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.desktop}) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const CardsContainer =  styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: row;
  overflow-x: hidden;
  margin-bottom: 30px;
  @media (max-width: ${breakpoints.mobile}) {
    overflow-x: scroll;  
  }

`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 40px;
  .arrow {
    font-size: 40px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    .arrow {
        font-size: 30px;
      }
  @media (max-width: ${breakpoints.mobile}) {
    .arrow {
    display: none;      
  }
  }
  
`