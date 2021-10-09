import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import { ReactComponent as Logo } from "../../assets/logo.jpg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { navbarlinksRight } from "../../utils/Utils";
import "./NavBar.scss";
const NavBar = ({ collapsed, setCollapsed }) => {
  const [activeId, setActiveId] = useState("");

  const handleClick = (id) => {
    setActiveId(id);
  };
  const handleBarClick = () => {
    setCollapsed(!collapsed);
  };

  const navLinks = navbarlinksRight.map((link) => (
    <NavLink
      className={`${
        activeId === link.id && link.id !== 4
          ? "activeLink NavLink "
          : link.id !== 4
          ? " NavLink"
          : "linkBtn"
      }`}
      to="/"
      key={link.id}
      onClick={() => handleClick(link.id)}
    >
      {link.linkName}
    </NavLink>
  ));
  return (
    <nav className="navBar">
      <div className="navbar-logo ">
        <NavLink to="/">
          <Logo className="logo" />
        </NavLink>
      </div>
      <div className="mobile-bars" onClick={() => handleBarClick()}>
        <FaBars />
      </div>
      <ul className="navbar-menu">
        <li>{navLinks}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
