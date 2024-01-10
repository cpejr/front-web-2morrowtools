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
import { useState } from "react";
import { usePostUser } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";

export default function Header() {
  const navigate = useNavigate();

  const { setToken, getToken, getUser, clearAuth } = useAuthStore();
  const [loginLogoff, setLoginLogoff] = useState(getToken() ? "Fazer Logoff" : "Fazer Login");
  const [profilePicture, setProfilePicture] = useState(
    loginLogoff == "Fazer Login" ? <UserOutlined /> : <img src={getUser().imageURL} />
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

      setLoginLogoff("Fazer Logoff");
      setProfilePicture(<img src={getUser().imageURL} />);
      window.location.reload();
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

  return (
    <Container>
      <ContainerMenu>
        <MenuHeader />
        <img onClick={() => navigate("/")} src={logo} />
      </ContainerMenu>
      <Links>
        <Link to={"/"}>Página Inicial</Link>
        <Link>
          <span onClick={redirectToFavorites}>Meus Favoritos</span>
        </Link>
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
