import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/styleVariables";
import { Menu, Modal } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: ${colors.blue.background};
  width: 100%;
  height: 85px;
  padding: 0 2%;
  font-size: 1.2rem;
  img {
    width: 8rem;
    &:hover {
      cursor: pointer;
    }
  }
  /* 
  @media (max-width: ${breakpoints.smallDevice}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  } */
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
  word-wrap: break-word;
  width: 30rem;
  font-size: 1rem;
  a {
    font-family: ${fonts.Exo2};

    &:hover {
      color: ${colors.blue.light};
      cursor: pointer;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 30rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;

export const LoginSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  @media (max-width: ${breakpoints.tablet}) {
    width: 18rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 10rem;
  }
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10rem;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  color: ${colors.white};
  background-color: ${colors.transparent};
  font-family: ${fonts.Exo2};
  font-weight: 400;
  word-wrap: break-word;
  margin-right: 10px;
  font-size: 1rem;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    display: none;
  }
`;
export const LoginButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  height: 45px;
  border: 1px solid;
  border-radius: 10px;
  color: ${colors.white};
  background-color: ${colors.transparent};
  font-family: ${fonts.Exo2};
  font-weight: 400;
  word-wrap: break-word;
  font-size: 1rem;
  img {
    width: 20%;
    border-radius: 50%;
  }

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 10rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 10rem;
    height: 40px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 7rem;
    font-size: 0.8rem;
  }
`;

export const Line = styled.div`
  height: 80px;
  border: 0.5px solid ${colors.grey.veryLight};
  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

export const HamburgerMenu = styled(Menu)`
  width: 0rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 6rem;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${colors.blue.accent};
    text-decoration-thickness: 0.2rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    :hover {
      text-decoration: underline;
      text-decoration-color: white;
      text-decoration-thickness: 0.2rem;
    }
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 4.2rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    padding-left: 1.4rem;
    p {
      text-align: center;
    }
  }
`;

export const ThemeSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 200;
  margin-top: 2rem;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.collapse ? "auto" : "0rem")};
  overflow-y: hidden;
  border-radius: 0.5rem;

  button {
    border: none;
    background-color: ${colors.blue.background};
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover {
      cursor: pointer;
    }
    p {
      color: ${colors.white};
      :hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${colors.blue.accent};
        text-decoration-thickness: 0.2rem;
      }
    }
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: row;
    border: none;
    width: auto;
    height: auto;
    display: ${(props) => (props.collapse ? "flex" : "none")};
    transition: display 500ms ease-in-out;
    margin-top: 0;
    background-color: ${colors.blue.background};
    left: 0;
    right: 0;
    text-align: center;
    justify-content: center;
    button {
      font-size: 1.5rem;
      background-color: ${colors.blue.background};
      color: ${colors.white};
      font-weight: 600;

      p {
        font-weight: 700;
        :hover {
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: ${colors.blue.accent};
          text-decoration-thickness: 0.2rem;
        }
      }
    }
  }
`;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.blue.background};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;
