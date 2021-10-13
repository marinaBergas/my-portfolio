import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navbarlinksRight } from "../../utils/Utils";

import "./SideBar.scss";
const SideBar = ({ collapsed, setCollapsed }) => {
  const cName = collapsed ? "side-bar animation" : "side-bar";
  const [activeId, setActiveId] = useState("");

  const handleClick = (id) => {
    setActiveId(id);
    setCollapsed(!collapsed);
  };
  const navLinks = navbarlinksRight.map((link) => (
    <a
      className={`${activeId === link.id ? "activeLink NavLink " : " NavLink"}`}
      href={link.link}
      key={link.id}
      onClick={() => handleClick(link.id)}
    >
      {link.linkName}
    </a>
  ));
  return (
    <aside id="sidebar" className={cName}>
      {navLinks}
    </aside>
  );
};

export default SideBar;
