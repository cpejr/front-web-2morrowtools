import { Menu } from "antd";
import { HeartOutlined, MenuOutlined, ToolOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerMenuHeader } from "./Styles";

export default function MenuHeader() {
  const navigate = useNavigate();

  const items = [
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

  function handleItemClick(item) {
    if (item.onClick) {
      item.onClick();
    }
  }

  return (
    <ContainerMenuHeader>
      <Menu mode='horizontal' triggerSubMenuAction='click'>
        {items.map((item) => (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.children.map((child) => (
              <Menu.Item
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                key={child.key}
                icon={child.icon}
                onClick={() => handleItemClick(child)}
              >
                {child.label}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </ContainerMenuHeader>
  );
}
