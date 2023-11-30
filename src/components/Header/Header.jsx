import {
  Container,
  ContainerMenu,
  GroupMedias,
  Line,
  Links,
  LoginButton,
  LoginSocial,
  SocialMedias,
} from "./Styles";
import logo from "../../assets/logo.svg";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import { signInWithGooglePopup } from "./../../services/firebase";

import { useState, useEffect } from "react";
import { usePostUser } from "../../services/ManagerService";

import useAuthStore from "../../stores/auth";

const profilePictureStyle = { width: "40px", borderRadius: "50%" };

export default function Header() {
  const navigate = useNavigate();
  const { setToken, getToken, getUser, clearAuth } = useAuthStore();

  

  const [loginLogoff, setLoginLogoff] = getToken()
    ? useState("Fazer Logoff")
    : useState("Fazer Login");

  const logGoogleUser = async () => {
    if (getToken() === null) {
      const response = await signInWithGooglePopup();

      const tokenObject = await usePostUser({
        name: response.user.displayName,
        email: response.user.email,
        imageURL: response.user.photoURL,
        type: "Admin",
      });

      setToken(tokenObject.token);

      setLoginLogoff("Fazer Logoff");
    } else {
      clearAuth();
      setLoginLogoff("Fazer Login");
    }
  };

  return (
    <Container>
      <ContainerMenu>
        <MenuHeader />
        <img onClick={() => navigate("/")} src={logo} />
      </ContainerMenu>
      <Links>
        <Link to={"/"}>Lorem Ipsur</Link>
        <Link to={"/favoritos"}>Meus Favoritos</Link>
      </Links>
      <LoginSocial>
        <LoginButton onClick={logGoogleUser}>
          {loginLogoff}
          {/* {getUser() === null ? (
            <UserOutlined />
          ) : (
            <img style={profilePictureStyle} src={getUser().userFound.imageURL} />
          )} */}
          <UserOutlined />
        </LoginButton>
        <Line />
        <SocialMedias>
          <GroupMedias>
            <FacebookOutlined />
            <TwitterOutlined />
          </GroupMedias>
          <GroupMedias>
            <InstagramOutlined />
            <LinkedinOutlined />
          </GroupMedias>
        </SocialMedias>
      </LoginSocial>
    </Container>
  );
}
