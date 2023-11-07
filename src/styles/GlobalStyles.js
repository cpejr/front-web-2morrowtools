import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./styleVariables";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Exo2};
    font-size: 15px;
    background-color: ${colors.blue[1]};
    color: ${colors.white};

    padding: 0;
    margin: 0;
    @media (max-width: 700px) {
      font-size: 11px;
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
