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
  width: 34rem;
  border-radius: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 28rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 23rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 20rem;
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
  width: auto;
  height: auto;
  gap: 2rem;
  @media (max-width: ${breakpoints.tablet}) {
    gap: 2.5rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    gap: 3rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    gap: 4rem;
  }
`;
export const Tag = styled.div`
  width: 9.5rem;
  opacity: 0.8;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  &:hover {
    border: 2px solid ${colors.blue.light};
    color: ${colors.blue.light};
    opacity: 1;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 7.5rem;
    font-size: 13px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 5.5rem;
    font-size: 11px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 4rem;
    font-size: 8px;
  }
`;
export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;
export const Text = styled.div`
  width: auto;
  display: block;
  height: 135px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 27px;
  @media (max-width: ${breakpoints.tablet}) {
    height: 115px;
    font-size: 23px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    height: 90;
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
    font-size: 12px;
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 17%;
  height: auto;
  color: red;
  cursor: pointer;
  font-size: 20px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 13px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10 px;
  }
`;
