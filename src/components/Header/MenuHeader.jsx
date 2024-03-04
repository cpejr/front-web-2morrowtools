/* eslint-disable react-hooks/rules-of-hooks */
import {
  HeartOutlined,
  MenuOutlined,
  ToolOutlined,
  BulbOutlined,
  ArrowUpOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HamburgerMenu } from "./Styles";
import { signInWithGoogleRedirect, getGoogleRedirectResult } from "./../../services/firebase";
import useAuthStore from "../../stores/auth";
import { usePostUser } from "../../services/ManagerService";
import PropTypes from "prop-types";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function MenuHeader({ globalColor, setGlobalColor }) {
  const navigate = useNavigate();
  const { setToken, getToken, getUser, clearAuth, setUser } = useAuthStore();

  const menuItems = [
    getItem("", "hamburger", <MenuOutlined />, [
      getItem(" Meus Favoritos", "/favoritos", <HeartOutlined style={{ fontSize: "1.3rem" }} />),
      getItem(" Blog", "/blog", <FileTextOutlined style={{ fontSize: "1.3rem" }} />),
      ...(getUser()?.type === "Admin"
        ? [
            getItem(
              "Gerenciar Ferramentas",
              "/adicionar-ia",
              <ToolOutlined style={{ fontSize: "1.3rem" }} />
            ),
            getItem(
              "Gerenciar Posts",
              "/newpost",
              <FileTextOutlined style={{ fontSize: "1.3rem" }} />
            ),
            getItem(
              "Gerenciar Categorias",
              "/adicionar-categoria",
              <ToolOutlined style={{ fontSize: "1.3rem" }} />
            ),
            getItem("Usuários", "/admin", <UserOutlined style={{ fontSize: "1.3rem" }} />),
          ]
        : []),
      getItem("Submeter Ferramenta", "/submit", <ArrowUpOutlined style={{ fontSize: "1.3rem" }} />),
      getItem(globalColor, "/theme", <BulbOutlined style={{ fontSize: "1.3rem" }} />),
    ]),
  ];

  getGoogleRedirectResult().then((response) => {
    if (getToken() === null && response !== null) {
      usePostUser({
        name: response?.user?.displayName,
        email: response?.user?.email,
        imageURL: response?.user?.photoURL,
        type: "User",
      }).then((tokenObject) => {
        setToken(tokenObject.token);
        setUser({
          name: response?.user?.displayName,
          email: response?.user?.email,
          imageURL: response?.user?.photoURL,
          type: "User",
        });
      });
    }
  });

  function onClick(key) {
    if (key && key === "/theme") {
      setGlobalColor(globalColor === "Dark" ? "Light" : "Dark");
      window.location.reload();
      return;
    }
    if (key && key == "/favoritos" && getUser()) {
      navigate(key);
    }
    if (key && key == "/favoritos" && !getUser()) {
      logGoogleUser();
    }
    if (key && key !== "login" && key !== "/favoritos") {
      navigate(key);
    }
    if (key && key === "/admin") {
      navigate(key);
    }
    if (key && key === "/submit") {
      window.open("https://bit.ly/2MT_submeter_ferramenta", "_blank");
    }
  }

  const logGoogleUser = () => {
    if (getToken() === null) {
      signInWithGoogleRedirect();
    } else {
      clearAuth();
      window.location.reload();
    }
  };

  return (
    <HamburgerMenu
      onClick={(e) => onClick(e.key)}
      mode='horizontal'
      items={menuItems}
      triggerSubMenuAction='click'
    />
  );
}
MenuHeader.propTypes = {
  globalColor: PropTypes.string.isRequired,
  setGlobalColor: PropTypes.func.isRequired,
};
