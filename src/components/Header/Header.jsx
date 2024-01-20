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
  SubmitButton,
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
import React, { useState } from "react";
import { useGlobalColor } from "../../stores/GlobalColor";

export default function Header() {
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);
  const { globalColor, setGlobalColor } = useGlobalColor();
  const availableTheme = ["Dark", "Light"];
  const { setToken, getToken, getUser, clearAuth, setUser } = useAuthStore();
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
      const googleResponse = await signInWithGooglePopup();
      const response = await usePostUser({
        name: googleResponse?.user?.displayName,
        email: googleResponse?.user?.email,
        imageURL: googleResponse?.user?.photoURL,
        type: "User",
      });
      setToken(response.token);
      setUser(response.user);

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
        <MenuHeader globalColor={globalColor} setGlobalColor={setGlobalColor} />
        {globalColor === "Dark" ? (
          <img onClick={() => navigate("/")} src={logo} alt='Logo' />
        ) : (
          <img onClick={() => navigate("/")} src={BlueLogo} alt='Logo' />
        )}
      </ContainerMenu>
      <Links>
        <Link to='/'>Página Inicial</Link>
        <Link>
          <span onClick={() => redirectToFavorites()}>Meus Favoritos</span>
        </Link>
        {getUser()?.type === "Admin" ? (
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
      <SubmitButton
        onClick={() => {
          window.open("https://bit.ly/2MT_submeter_ferramenta", "_blank");
        }}
      >
        Submeter Ferramenta
      </SubmitButton>
      <Select>
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
                window.location.reload();
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
