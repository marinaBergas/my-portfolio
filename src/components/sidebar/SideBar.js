import React, { Fragment, useState } from "react";
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
    <Fragment key={link.id}>
      {link.linkName !== "Resume" && (
        <HashLink
          className={`${
            activeId === link.id ? "activeLink NavLink " : " NavLink"
          }`}
          to={`/${link.link}`}
          onClick={() => handleClick(link.id)}
        >
          {link.linkName}
        </HashLink>
      )}
      {link.linkName === "Resume" && (
        <a
          className={`${
            activeId === link.id && link.id !== 4
              ? "activeLink NavLink "
              : link.id !== 4
              ? " NavLink"
              : "linkBtn"
          }`}
          href={link.link}
          onClick={() => handleClick(link.id)}
        >
          {link.linkName}
        </a>
      )}
    </Fragment>
  ));
  return (
    <aside id="sidebar" className={cName}>
      {navLinks}
    </aside>
  );
};

export default SideBar;
