import { Card } from "antd";
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
  margin-left: 50px;
  margin-right: 40px;
  box-shadow: 0px 4px 4px 0px ${colors.shadow};
  background-color: ${colors.grey.cardBackground};
  &:hover {
    background-color: ${colors.grey.cardHover};
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
export const ImageHolder = styled.div`
  display: flex;
  height: auto;
  width: 27rem;
  border-radius: 20px;
  align-items: center;
  align-self: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 25rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 21rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 19rem;
  }
  > img {
    width: 100%;
    height: 16rem;
    border-radius: 20px;
    @media (max-width: ${breakpoints.desktop}) {
      height: 14rem;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      height: 14rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
      height: 11rem;
    }
  }
`;
export const LineTags = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: first baseline;
  height: auto;
  gap: 10px;
`;
export const Tag = styled.div`
  display: flex;
  width: auto;
  padding: 5px 0.8rem;
  height: 2.5rem;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  font-size: 14px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  @media (max-width: ${breakpoints.desktop}) {
    height: 32px;
    font-size: 12px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    height: 24px;
    font-size: 11px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    height: 21.6px;
    font-size: 10px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 32px;
    font-size: 10px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 9px;
  }
  &:hover {
    border: 1px solid ${colors.blue.light};
    color: ${colors.blue.light};
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 15px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;
export const Text = styled.div`
  width: 90%;
  display: block;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 90px;
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    height: 80;
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
    font-size: 12px;
  }
`;
export const Link = styled.button`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: auto;
  color: ${colors.blue.accent};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: ${colors.blue.hover};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 12px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 9 px;
  }
`;
