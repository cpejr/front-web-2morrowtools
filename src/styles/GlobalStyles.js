import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./styleVariables";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Exo2};
    font-size: 15px;
    background-color: ${colors.blue.background};
    color: ${colors.white};

    padding: 0;
    margin: 0;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.blue.dark};
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.black};
    }

    @media (max-width: 700px) {
      font-size: 12px;
    }
  }

  a {
    color: inherit; 
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
