import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

// This will create a Nav component that'll render <nav> tag with some styles
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

//To easily make a new component thay inherits the styling pf another,just wrap it in the styled() constructor Here we are using Link with its previous properties and adding some special designs to it.
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  disply: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;


${'' /* apply the following css when browser window id 400px wide or less */}
  @media screen and(max-width:400) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

//Create a NavIcon component that will render a div with following styles
export const NavIcon = styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:#fff;

p{
    transform:translate(-175%,100%);
    font-weight:bold;
}  
`;

//Here we installed the FaPizzaSlice icon from react-icons library
export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  
 
`;
