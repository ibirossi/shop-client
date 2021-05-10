import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="custom-class"
    >
      <Item key="home" icon={<HomeOutlined />}>
        <NavLink exact to="/">
          Home
        </NavLink>
      </Item>

      <Item key="signup" icon={<UserAddOutlined />} className="float-right">
        <NavLink to="/signup">Sign Up</NavLink>
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-right">
        <NavLink to="/login">Log In</NavLink>
      </Item>

      <SubMenu title="Username">
        <Item key="setting:1">Shop</Item>
        <Item key="setting:2">Checkout</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
