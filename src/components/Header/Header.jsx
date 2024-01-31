/* eslint-disable react-hooks/rules-of-hooks */
import { Container, ContainerMenu, Links, SubmitButton } from "./Styles";
import logo from "../../assets/logo.svg";
import BlueLogo from "../../assets/blue-logo.svg";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import LoginSocialArea from "./LoginSocialArea";
import { signInWithGooglePopup } from "./../../services/firebase";
import { usePostUser } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";
import React from "react";
import { useGlobalColor } from "../../stores/GlobalColor";

export default function Header() {
  const navigate = useNavigate();
  const { globalColor, setGlobalColor } = useGlobalColor();
  const { setToken, getToken, getUser, clearAuth, setUser } = useAuthStore();

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
      setUser({
        ...response.user,
        imageURL: googleResponse?.user?.photoURL,
      });

      window.location.reload();
    } else {
      clearAuth();
    }
  };

  const redirect = async (path) => {
    if (!getToken()) await logGoogleUser();
    if (getToken()) navigate(path);
  };

  const changeTheme = () => {
    setGlobalColor(globalColor === "Dark" ? "Light" : "Dark");
    window.location.reload();
  };

  return (
    <Container>
      <ContainerMenu>
        <MenuHeader globalColor={globalColor} setGlobalColor={setGlobalColor} />
        {globalColor === "Dark" ? (
          <a href='/'>
            <img src={logo} alt='Logo' />
          </a>
        ) : (
          <a href='/'>
            <img src={BlueLogo} alt='Logo' />
          </a>
        )}
      </ContainerMenu>
      <Links>
        <Link to='/blog'>Blog</Link>
        <Link>
          <span onClick={() => (window.location.href = "/favoritos")}>Favoritos</span>
        </Link>
        {getUser()?.type === "Admin" ? (
          <React.Fragment>
            <Link>
              <span onClick={() => (window.location.href = "/adicionar-ia")}>Ferramentas</span>
            </Link>
            <Link>
              <span onClick={() => (window.location.href = "/adicionar-categoria")}>
                Categorias
              </span>
            </Link>
            <Link>
              <span onClick={() => (window.location.href = "/admin")}>Usuários</span>
            </Link>
          </React.Fragment>
        ) : null}
        <span onClick={changeTheme} style={{ cursor: "pointer" }}>
          {globalColor === "Light" ? <BulbOutlined /> : <BulbFilled />}
        </span>
      </Links>

      <SubmitButton
        onClick={() => {
          window.open("https://bit.ly/2MT_submeter_ferramenta", "_blank");
        }}
      >
        Submeter Ferramenta
      </SubmitButton>
      <LoginSocialArea />
    </Container>
  );
}
