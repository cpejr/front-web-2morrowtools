import { HeartOutlined, MenuOutlined, ToolOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HamburgerMenu } from "./Styles";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menuItems = [
  getItem("", "hamburger", <MenuOutlined />, [
    getItem(" Lorem Ipsum", "/", <ToolOutlined style={{ fontSize: "1.3rem" }} />),
    getItem(" Meus Favoritos", "/favoritos", <HeartOutlined style={{ fontSize: "1.3rem" }} />),
    getItem(" Fazer Login", "login", <UserOutlined style={{ fontSize: "1.3rem" }} />),
  ]),
];

export default function MenuHeader() {
  const navigate = useNavigate();
  function onClick(key) {
    if (key && key !== "login") {
      navigate(key);
    }
  }

  return (
    <HamburgerMenu
      onClick={(e) => onClick(e.key)}
      mode='horizontal'
      items={menuItems}
      triggerSubMenuAction='click'
    />
  );
}
