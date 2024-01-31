import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./styleVariables";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Exo2};
    font-size: 13px;
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

  .p-autocomplete-items-wrapper {
      background-color: ${colors.blue.background};
    }
    .p-autocomplete-item{
      color: ${colors.white};
      &:hover{
        background-color: ${colors.white};
        color: ${colors.black};
      }
    }

  .p-multiselect-items-wrapper {
    background-color: ${colors.blue.background};
    color: ${colors.white};
  }

  .p-multiselect-item-group{
    background-color: ${colors.blue.background};
    color: ${colors.white};
  }

  .p-multiselect-item {
    color: ${colors.white};
    &:hover{
      background-color: ${colors.grey.cardHover};
    }
  }

  .p-highlight{
    background-color: ${colors.grey.cardHover};
    } 
  

  .p-multiselect-header{
    background-color: ${colors.blue.background};
    color: ${colors.white};
  }

.p-dropdown-items-wrapper{
  background-color: ${colors.blue.background};
  color: ${colors.white}
}
.p-datatable .p-datatable-tbody > tr > td {
  background-color: ${colors.blue.background}; 
  color: ${colors.white};

}  
.p-datatable .p-sortable-column{
  background-color: ${colors.blue.background};
  color: ${colors.white};
  
}
.p-datatable .p-paginator-bottom{
  background-color: ${colors.blue.background};
  color: ${colors.white};
}
.p-dropdown-item {
    color: ${colors.white};
    &:hover{
      background-color: ${colors.grey.cardHover};
    }
}
.p-dropdown-panel .p-dropdown-header{
  background-color: ${colors.blue.background};
  color: ${colors.white};
}
.p-checkbox-icon{
  color: ${colors.white}
}
 
  
`;
