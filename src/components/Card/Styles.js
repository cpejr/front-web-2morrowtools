import { Card, Button, Rate } from "antd";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 24rem;
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
    width: 24rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 25rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 26.66rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 22rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const Stars = styled(Rate)`
  color: ${colors.white};
  font-size: 30px;
  .ant-rate-star-second {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const Image = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  cursor: pointer;
  > img {
    width: 100%;
    height: 12.63rem;
    border-radius: 1rem;
    @media (max-width: ${breakpoints.desktop}) {
      height: 10rem;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      height: 10rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
      height: 12rem;
    }
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }

  > p {
    font-size: 22px;
    @media (max-width: ${breakpoints.desktop}) {
      font-size: 17.6px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 13.2px;
    }

    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 11.88px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 17.6px;
    }
  }
  > span {
    font-size: 22px;
    @media (max-width: ${breakpoints.desktop}) {
      font-size: 17.6px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 13.2px;
    }

    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 11.88px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 17.6px;
    }
  }
`;
export const LineSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  > svg {
    cursor: pointer;
    font-size: 30px;
    @media (max-width: ${breakpoints.desktop}) {
      font-size: 24px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 20px;
    }

    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 18px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 20px;
    }
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 17.5px;
  .favoriteIcon {
    &:hover {
      color: ${colors.blue.accent};
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 15.75px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 11.81px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 10.63px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15.75px;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
`;
export const BlueButton = styled(Button)`
  width: 16rem;
  height: 3rem;
  background-color: ${colors.blue.accent};
  border: none;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.desktop}) {
    width: 12rem;
    height: 2.25rem;
  }

  &:hover {
    background-color: ${colors.blue.hover};
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: first baseline;
  height: auto;
  gap: 10px;
  flex-wrap: wrap;
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
  @media (max-width: ${breakpoints.desktop}) {
    height: 32px;
    font-size: 12px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    height: 24px;
    font-size: 9px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    height: 21.6px;
    font-size: 12px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 32px;
    font-size: 12px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 9px;
  }
  &:hover {
    border: 1px solid ${colors.blue.light};
    color: ${colors.blue.light};
  }
`;
