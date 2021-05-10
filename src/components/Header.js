import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link exact to="/">Home</Link>
      </Item>

      <Item
        key="signup"
        icon={<UserAddOutlined />}
        className="float-right"
      >
        <Link to="/signup">Sign Up</Link>
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Log In</Link>
      </Item>

      <SubMenu title="Username">
        <Item key="setting:1">Shop</Item>
        <Item key="setting:2">Checkout</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
