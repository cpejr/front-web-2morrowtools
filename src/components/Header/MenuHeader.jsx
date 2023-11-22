import { Menu } from "antd";
import { HeartOutlined, MenuOutlined, ToolOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerMenuHeader } from "./Styles";
import { signInWithGooglePopup } from "./../../services/firebase";

const profilePictureStyle = {
  width: "25px",
  borderRadius: "50%",
  display: "inline-block",
};

export default function MenuHeader() {
  const navigate = useNavigate();

  const itemsArray = [
    {
      key: "menu",
      icon: <MenuOutlined />,
      children: [
        {
          key: "0",
          label: "Lorem Ipsur",
          type: "menu-item",
          icon: <ToolOutlined />,
          onClick: () => navigate("/"),
        },
        {
          key: "1",
          label: "Meus Favorito",
          type: "menu-item",
          icon: <HeartOutlined />,
          onClick: () => navigate("/favoritos"),
        },
      ],
    },
  ];

  const [matches, setMatches] = useState(window.matchMedia("(max-width: 350px)").matches);
  const [items, setItems] = useState(itemsArray);
  const [loginLogoff, setLoginLogoff] = useState("Fazer Login");
  const [photoURL, setPhotoURL] = useState();

  function handleItemClick(item) {
    if (item.onClick) {
      item.onClick(matches);
    }
  }

  const logGoogleUser = async () => {
    if (loginLogoff == "Fazer Login") {
      const response = await signInWithGooglePopup();
      setPhotoURL(response.user.photoURL);
      setLoginLogoff("Fazer Logoff");
      const updatedChildren = [
        ...items[0].children,
        {
          key: "2",
          label: "Fazer Logoff",
          type: "menu-item",
          onClick: logGoogleUser,
        },
      ];
      const updatedItems = [...items];
      updatedItems[0] = { ...updatedItems[0], children: updatedChildren };
      setItems(updatedItems);
    } else {
      sessionStorage.clear();
    }
  };

  useEffect(() => {
    if (matches) {
      if (items[0].children.length < 3) {
        const updatedChildren = [
          ...items[0].children,
          {
            key: "2",
            label: "Fazer Login",
            type: "menu-item",
            icon: <UserOutlined />,
            onClick: logGoogleUser,
          },
        ];
        const updatedItems = [...items];
        updatedItems[0] = { ...updatedItems[0], children: updatedChildren };
        setItems(updatedItems);
      }
    }
  }, []);

  return (
    <ContainerMenuHeader>
      <Menu mode='horizontal' triggerSubMenuAction='click'>
        {items.map((item) => (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.children.map((child) => (
              <Menu.Item
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                key={child.key}
                icon={child.icon}
                onClick={() => handleItemClick(child)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {child.key === "2" && photoURL && (
                    <img
                      style={{
                        ...profilePictureStyle,
                        marginRight: "1rem", // Espaçamento entre a imagem e o texto
                        alignSelf: "center", // Alinhar verticalmente a imagem
                      }}
                      src={photoURL}
                    />
                  )}
                  {child.label}
                </div>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </ContainerMenuHeader>
  );
}
