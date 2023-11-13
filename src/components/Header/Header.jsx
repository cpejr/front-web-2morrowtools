import { Container, Line, Links, LoginButton, LoginSocial, SocialMedias } from "./Styles";
import logo from "../../assets/logo.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Favorites } from "../../pages";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <img onClick={() => navigate("/")} src={logo} />
      <Links>
        <Link to={"/"}>Lorem Ipsur</Link>
        <Link to={"/favorites"}>Meus Favoritos</Link>
      </Links>
      <LoginSocial>
        <LoginButton>
          Fazer Login
          <UserOutlined />
        </LoginButton>
        <Line />
        <SocialMedias>
          <FacebookOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
          <LinkedinOutlined />
        </SocialMedias>
      </LoginSocial>
    </Container>
  );
}
