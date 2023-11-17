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
import logo from "../../assets/logo.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";

export default function Header() {
  const navigate = useNavigate();

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
        <LoginButton>
          Fazer Login
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
