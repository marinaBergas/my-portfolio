import React, { useState } from "react";
import Video from "../backgroundVideo/Video";
import HeaderArtical from "../headerArtical/HeaderArtical";
import NavBar from "../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
import "./header.scss";
const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="header__content ">
      <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <HeaderArtical />
      <Video />
    </div>
  );
};

export default Header;
