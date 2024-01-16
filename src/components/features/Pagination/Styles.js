import styled from "styled-components";
import { colors } from "../../../styles/styleVariables";

export const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 1rem;
  border-radius: 100px;
  border: 1px solid ${colors.blue.background};
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? colors.blue.hover : "transparent")};
  color: ${colors.white};
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
`;

export const ArrowButton = styled.button`
  display: flex;
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.white};
`;
