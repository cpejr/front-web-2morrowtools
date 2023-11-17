import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/styleVariables";
import { Menu } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: #080b10;
  width: 100%;
  height: 120px;
  font-size: 2rem;
  img {
    width: 15rem;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
    img {
      width: 10rem;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    justify-content: space-evenly;
    img {
      width: 10rem;
    }
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      width: 8rem;
    }
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.smallDevice}) {
    justify-content: space-around;
    width: 100%;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30rem;
  a {
    font-family: ${fonts.Exo2};
    font-size: 1.6rem;
    &:hover {
      color: ${colors.blue.light};
      cursor: pointer;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 30rem;
    a {
      font-size: 1.4rem;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const LoginSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
  @media (max-width: ${breakpoints.tablet}) {
    width: 22rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 15rem;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15rem;
  height: 60px;
  border: 1px solid;
  border-radius: 3px;
  color: white;
  background-color: transparent;
  font-family: ${fonts.Exo2};
  font-size: 1.6rem;
  font-weight: 400;
  word-wrap: break-word;
  &:hover {
    background-color: ${colors.white};
    color: black;
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 10rem;
    font-size: 1.4rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 8rem;
    height: 40px;
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 7rem;
    font-size: 0.8rem;
  }
`;

export const Line = styled.div`
  height: 80px;
  border: 0.5px solid ${colors.veryLightGrey};
  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 6rem;
  span:hover {
    color: ${colors.blue.light};
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;

export const GroupMedias = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ContainerMenuHeader = styled(Menu)`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
