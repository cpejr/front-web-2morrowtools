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
  margin-top: 120px;
  padding: 20px;  
`;

export const CardsContainer =  styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
  gap: 3rem;
  h1 {
    margin-top: 50px; 
  }
  @media (max-width: ${breakpoints.mobile}) {
    overflow-x: scroll;  
  }

`
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;

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