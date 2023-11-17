import { Card, Button, Rate } from "antd";
import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  align-items: center;
  gap: 50px;
  box-shadow: 0px 4px 4px 0px ${colors.shadow};
  &:hover {
    background-color: #1c2431;
  }
  @media (max-width: ${breakpoints.desktop}) {
    width: 400px;
    margin-top: 80px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 270px;
    margin-top: 150px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 400px;
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
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;
export const Image = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  > img {
    width: 100%;
    height: 229px;
    @media (max-width: ${breakpoints.desktop}) {
      height: 183.2px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      height: 137.4px;
    }

    @media (max-width: ${breakpoints.smallTablet}) {
      height: 123.66px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      height: 183.2px;
    }
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 35px;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 31.5px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 23.625px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 21.2625px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 31.5px;
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
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 35px;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 31.5px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 23.625px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 21.2625px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 31.5px;
  }
`;
export const LineSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  > svg {
    cursor: pointer;
  }
`;
export const BlueButton = styled(Button)`
  width: 160px;
  height: 50px;
  background-color: ${colors.blue.accent};
  border: none;
  margin-top: 1rem;
  @media (max-width: ${breakpoints.desktop}) {
    width: 128px;
    height: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 96px;
    height: 30px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    width: 86.4px;
    height: 27px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 128px;
    height: 40px;
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
  height: 40px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  font-size: 15px;
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
