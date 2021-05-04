import React from "react";
import { Bars, Nav, NavLink,NavIcon } from "./NavbarElement";
import {BrowserRouter as Router} from "react-router-dom"

const  Navbar = ({toggle}) => {
  return (
    <Router>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars/>
        </NavIcon>
      </Nav>
    </Router>
  );
};

export default Navbar;
