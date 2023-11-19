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
`;
export const ImageCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  gap: 1rem;
  flex: 1;
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
  > p {
    font-size: 25px;
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
  > svg {
    cursor: pointer;
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 1rem;
  font-size: 55px;
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
  @media (max-width: ${breakpoints.desktop}) {
  }
  @media (max-width: ${breakpoints.tablet}) {
  }

  @media (max-width: ${breakpoints.smallTablet}) {
  }
  @media (max-width: ${breakpoints.mobile}) {
  }
  @media (max-width: ${breakpoints.smallDevice}) {
  }
  &:hover {
    border: 1px solid ${colors.blue.light};
    color: ${colors.blue.light};
  }
`;
export const Stars = styled(Rate)`
  color: ${colors.white};
  font-size: 55px;
  @media (max-width: ${breakpoints.desktop}) {
  }
  @media (max-width: ${breakpoints.tablet}) {
  }

  @media (max-width: ${breakpoints.smallTablet}) {
  }
  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const BlueButton = styled(Button)`
  width: 13rem;
  height: 3rem;
  align-self: center;
  font-size: 24px;
`;
export const RateDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  > p {
    font-size: 35px;
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
  > h1 {
    font: 55px;
  }
  > p {
    font-size: 25px;
  }
`;
export const VideoDiv = styled.div`
  display: flex;
  width: 40rem;
  height: 22.5rem;
  border-radius: 6px;
`;
