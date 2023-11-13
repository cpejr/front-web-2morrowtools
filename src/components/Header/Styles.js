import styled from "styled-components";
import { colors, fonts } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: #080b10;
  width: 100%;
  height: 148px;
  font-size: 2rem;
  img {
    width: 15rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  a {
    font-family: ${fonts.Exo2};
    font-size: 1.8rem;
    &:hover {
      color: ${colors.blue.light};
      cursor: pointer;
    }
  }
`;

export const LoginSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
`;

export const LoginButton = styled.button`
  width: 15rem;
  height: 60px;
  border: 1px solid;
  border-radius: 3px;
  color: white;
  background-color: transparent;
  font-family: ${fonts.Exo2};
  font-size: 2rem;
  font-weight: 400;
  word-wrap: break-word;
  &:hover {
    background-color: ${colors.white};
    color: black;
    cursor: pointer;
  }
`;

export const Line = styled.div`
  height: 80px;
  border: 0.5px solid ${colors.veryLightGrey};
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 6rem;
  span:hover {
    color: ${colors.blue.light};
    cursor: pointer;
  }
`;
