import { Card } from "antd";
import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const StyledCard = styled(Card)`
  width: 500px;
  box-shadow: 0px 4px 4px 0px ${colors.shadow};

  &:hover {
    background-color: #1c2431;
  }
`;
