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
import { usePostUser } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";
import isAdm from "../../utils/isAdm";
import React from "react";

export default function Header() {
  const navigate = useNavigate();
  const { setToken, getToken, getUser, clearAuth } = useAuthStore();
  const [loginLogoff, setLoginLogoff] = React.useState(getToken() ? "Fazer Logoff" : "Fazer Login");
  const [profilePicture, setProfilePicture] = React.useState(
    loginLogoff === "Fazer Login" ? (
      <UserOutlined />
    ) : (
      <img src={getUser()?.imageURL} alt='Profile' />
    )
  );

  const logGoogleUser = async () => {
    if (getToken() === null) {
      const response = await signInWithGooglePopup();
      const tokenObject = await usePostUser({
        name: response?.user?.displayName,
        email: response?.user?.email,
        imageURL: response?.user?.photoURL,
        type: "Admin",
      });

      setToken(tokenObject.token);

      window.location.reload();

      setLoginLogoff("Fazer Logoff");
      setProfilePicture(<img src={getUser()?.imageURL} alt='Profile' />);
    } else {
      clearAuth();
      setLoginLogoff("Fazer Login");
      setProfilePicture(<UserOutlined />);
    }
  };

  const redirectToFavorites = async () => {
    if (getToken() === null) {
      await logGoogleUser();
    }
    if (getToken() !== null) {
      window.location.href = "./favoritos";
    }
  };

  const redirectToIa = async () => {
    if (getToken() === null) {
      await logGoogleUser();
    }
    if (getToken() !== null) {
      window.location.href = "./adicionar-ia";
    }
  };

  const redirectToCategories = async () => {
    if (getToken() === null) {
      await logGoogleUser();
    }
    if (getToken() !== null) {
      window.location.href = "./adicionar-categoria";
    }
  };

  return (
    <Container>
      <ContainerMenu>
        <MenuHeader />
        <img onClick={() => navigate("/")} src={logo} alt='Logo' />
      </ContainerMenu>
      <Links>
        <Link to='/'>Página Inicial</Link>
        <Link>
          <span onClick={() => redirectToFavorites()}>Meus Favoritos</span>
        </Link>
        {isAdm(getUser()?.email) ? (
          <React.Fragment>
            <Link>
              <span onClick={() => redirectToIa()}>Gerenciar Ferramentas</span>
            </Link>
            <Link>
              <span onClick={() => redirectToCategories()}>Gerenciar Categorias</span>
            </Link>
          </React.Fragment>
        ) : null}
      </Links>
      <LoginSocial>
        <LoginButton onClick={logGoogleUser}>
          {loginLogoff}
          {profilePicture}
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
