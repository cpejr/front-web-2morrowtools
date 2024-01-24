import styled from "styled-components";
import { breakpoints, colors } from "../../styles/styleVariables";
import { Button, Rate } from "antd";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: auto;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: 1rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
  }
`;
export const ImageCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  gap: 1rem;
  flex: 1;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 90%;
  }
`;
export const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    width: 95%;
  }
`;
export const DataCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  align-self: start;
  gap: 2.5rem;
  @media (max-width: ${breakpoints.desktop}) {
    gap: 2rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    margin-top: 1rem;
    align-self: center;
  }

  > p {
    font-size: 25px;
    @media (max-width: ${breakpoints.desktop}) {
      font-size: 20px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 17px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 15px;
    }
    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 13px;
    }
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const LineSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-size: 55px;
  gap: 1rem;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 20px;
  }
  > svg {
    cursor: pointer;
  }
`;
export const TagsLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 1rem;
  font-size: 55px;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;
export const TabletTagsLine = styled.div`
  display: none;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 1rem;
  font-size: 55px;

  @media (max-width: ${breakpoints.smallTablet}) {
    display: flex;
    margin-bottom: 1rem;
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 1rem;
  font-size: 55px;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 20px;
  }
`;
export const Tag = styled.div`
  display: flex;
  width: auto;
  padding: 5px 1.5rem;
  height: 2rempx;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  font-size: 15px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 13px;
    padding: 5px 1rem;
  }
  &:hover {
    border: 1px solid ${colors.blue.light};
    color: ${colors.blue.light};
  }
`;
export const Stars = styled(Rate)`
  color: ${colors.white};
  font-size: 55px;
  .ant-rate-star-second {
    color: ${colors.white};
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 45px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 35px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 25px;
  }
`;

export const BlueButton = styled(Button)`
  width: 13rem;
  height: 3rem;
  align-self: center;
  font-size: 24px;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 22px;
    width: 11rem;
    height: 2.54rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    width: 10rem;
    height: 2.31rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
    width: 11rem;
    height: 3rem;
  }
`;
export const RateDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  > p {
    font-size: 35px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 30px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 25px;
    }

    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 20px;
    }
  }
`;
export const KnowMore = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  border: solid 2px ${colors.white};
  border-radius: 6px;
  padding: 2rem;
  margin-top: 2rem;
  align-self: center;

  @media (max-width: ${breakpoints.smallTablet}) {
    border: none;
  }

  > h1 {
    font: 55px;
    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 40px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
  }
  > p {
    font-size: 25px;
    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 20px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 17px;
    }
  }
`;
export const VideoDiv = styled.div`
  display: flex;
  width: 40rem;
  height: 22.5rem;
  border-radius: 6px;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 30rem;
    height: 16.875rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 25rem;
    height: 14.0625rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 20rem;
    height: 11.25rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
`;
