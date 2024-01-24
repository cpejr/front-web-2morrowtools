import { Card, Button, Rate } from "antd";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 36rem;
  height: auto;
  align-items: center;
  border-radius: 24px;
  gap: 3.33rem;
  box-shadow: 0px 4px 4px 0px ${colors.shadow};
  background-color: ${colors.grey.cardBackground};
  &:hover {
    background-color: ${colors.grey.cardHover};
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 36rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 30rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 25rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 22rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
