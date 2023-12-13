import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../../styles/styleVariables";

export const SubmitSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Button = styled.button`
  width: 15rem;
  height: 3rem;
  background-color: ${colors.blue.accent};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    width: 128px;
    height: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 96px;
    height: 30px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    width: 86.4px;
    height: 27px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 128px;
    height: 40px;
  }
  &:hover {
    background-color: ${colors.blue.hover};
  }
  p {
    color: white;
    text-transform: uppercase;
    font-family: ${fonts.Exo2};
    margin: 0;
  }
`;
