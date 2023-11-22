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
import { signInWithGooglePopup } from "./../../services/firebase"

import { useState } from 'react';
import { usePostUser } from "../../services/ManegerService";

import useAuthStore from "../../stores/auth";

const profilePictureStyle = { width: "40px", 
borderRadius: "50%" }

export default function Header() {
  const navigate = useNavigate();
  const { setToken, clearAuth } = useAuthStore();
  
  const [loginLogoff, setLoginLogoff] = useState("Fazer Login");
  const [photoURL, setPhotoURL] = useState();

  const logGoogleUser = async () => {

    if(loginLogoff == "Fazer Login") {
      const response = await signInWithGooglePopup();
      
      const tokenObject = await usePostUser({
        name: response.user.displayName,
        email: response.user.email,
        imageURL: response.user.photoURL,
        type: "Admin"
      });

      setToken(tokenObject.token, tokenObject.userId);
      
      setPhotoURL(response.user.photoURL)
      setLoginLogoff("Fazer Logoff");
    } else {
      sessionStorage.clear()
      clearAuth();
      setLoginLogoff("Fazer Login");
    }
}

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
          {loginLogoff == "Fazer Login"? <UserOutlined /> : <img style={profilePictureStyle} src={photoURL}/>}
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