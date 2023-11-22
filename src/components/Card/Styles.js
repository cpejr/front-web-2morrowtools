import { Card, Button, Rate } from "antd";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: auto;
  align-items: center;
  gap: 3.33rem;
  box-shadow: 0px 4px 4px 0px ${colors.shadow};
  &:hover {
    background-color: #1c2431;
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 24rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 25rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 30rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 26.66rem;
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
  > img {
    width: 100%;
    height: 12.63rem;
    @media (max-width: ${breakpoints.desktop}) {
      height: 10rem;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      height: 9rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
      height: 10rem;
    }
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
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

export const BlueButton = styled(Button)`
  width: 8rem;
  height: 3rem;
  background-color: ${colors.blue.accent};
  border: none;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.desktop}) {
    width: 6rem;
    height: 2.25rem;
  }

  &:hover {
    background-color: ${colors.blue.hover};
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
  height: auto;
  gap: 10px;
`;
export const Tag = styled.div`
  display: flex;
  width: auto;
  padding: 5px 20px;
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
    font-size: 9px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    height: 21.6px;
    font-size: 8.1px;
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
