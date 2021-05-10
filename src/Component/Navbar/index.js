import React from "react";
import { Bars, Nav, NavLink,NavIcon, Cart,CartCount } from "./NavbarElement";
import {BrowserRouter as Router} from "react-router-dom"
import '../../k.css'

const  Navbar = ({toggle}) => {
  return (
    <Router>
      <Nav>
        <NavLink >Pizza</NavLink>
        <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars/>
           
        </NavIcon>
      
        <Cart/>
        <CartCount style={{position:"absolute",left:"2.3rem",height:'33px ',width:"2rem"}}>0</CartCount>
    

      
      </Nav>
    </Router>
  );
};

export default Navbar;
