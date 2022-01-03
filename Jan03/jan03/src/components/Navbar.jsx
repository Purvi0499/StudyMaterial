import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles.css";
function Navbar() {
  return (
    <header className="header">
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </header>
  );
}
export { Navbar };
