import {
  Container,
  ContainerMenu,
  GroupMedias,
  Line,
  Links,
  LoginButton,
  LoginSocial,
  SocialMedias,
  Select,
  Selected,
  ThemeSelector,
} from "./Styles";
import logo from "../../assets/logo.svg";
import BlueLogo from "../../assets/blue-logo.svg";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import { signInWithGooglePopup } from "./../../services/firebase";
import { usePostUser } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";
import isAdm from "../../utils/isAdm";
import React, { useState } from "react";
import { useGlobalColor } from "../../stores/GlobalColor";

export default function Header() {
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);
  const { globalColor, setGlobalColor } = useGlobalColor();
  const availableTheme = ["dark", "light"];
  const [bar, setBar] = useState(false);
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
        <img onClick={() => navigate("/")} src={BlueLogo} alt='Logo' />
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
      <Select bar={bar}>
        <Selected onClick={() => setCollapse((prev) => !prev)}>
          <p>{globalColor}</p>
          <IoIosArrowDown />
        </Selected>
        <ThemeSelector collapse={+collapse}>
          {availableTheme.map((theme) => (
            <button
              type='button'
              key={theme}
              onClick={() => {
                setGlobalColor(theme);
                setCollapse((prev) => !prev);
              }}
              style={{ display: collapse ? "flex" : "none" }}
            >
              <p>{theme}</p>
            </button>
          ))}
        </ThemeSelector>
      </Select>
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
