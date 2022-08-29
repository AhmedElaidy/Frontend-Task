import React from "react";
import "./Navbar.css";
import { ShoppingCartOutlined, HddOutlined } from "@ant-design/icons";
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="leftNavBar">
        <div>Welcome to iCloudReady</div>
        <div>
          You have started your <span>30 days trial</span>
        </div>
      </div>
      <div className='middleNavBar'>
        <div>Our architects are here to help</div>
        <div>Book a free session</div>
      </div>
      <div className="rightNavBar">
        <div>
          <ShoppingCartOutlined />
        </div>
        <div>
          <HddOutlined />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
