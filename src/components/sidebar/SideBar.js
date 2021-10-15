import React, { useState } from "react";
import { navbarlinksRight } from "../../utils/Utils";
import { HashLink } from "react-router-hash-link";

import "./SideBar.scss";
const SideBar = ({ collapsed, setCollapsed }) => {
  const cName = collapsed ? "side-bar animation" : "side-bar";
  const [activeId, setActiveId] = useState("");

  const handleClick = (id) => {
    setActiveId(id);
    setCollapsed(!collapsed);
  };
  const navLinks = navbarlinksRight.map((link) => (
    <HashLink
      className={`${activeId === link.id ? "activeLink NavLink " : " NavLink"}`}
      to={`/${link.link}`}
      key={link.id}
      onClick={() => handleClick(link.id)}
    >
      {link.linkName}
    </HashLink>
  ));
  return (
    <aside id="sidebar" className={cName}>
      {navLinks}
    </aside>
  );
};

export default SideBar;
