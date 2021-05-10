import React, { useState } from "react";
import { Menu } from "antd";




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
      <Menu.Item key="home" className="custom-class">
        Home
      </Menu.Item>
      <Menu.Item key="signup" className="custom-class">
        Signup
      </Menu.Item>
      <Menu.Item key="login" className="custom-class">
        Log In
      </Menu.Item>

      <Menu.Item key="setting:1" className="custom-class">
        Shop
      </Menu.Item>
      <Menu.Item key="setting:2" className="custom-class">
        Checkout
      </Menu.Item>
    </Menu>
  );
};

export default Header;
