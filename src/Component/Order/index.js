import { useLocation } from "react-router-dom";
import {
  OrderCard,
  OrderContainer,
  OrderH1,
  OrderH2,
  OrderP,
  OrderName,
  OrderPrice,
  OrderDetail,
} from "./orderElement";
import { useState } from "react";
import Sidebar from "../Sidebar/index";
import { Bars, Cart, NavIcon, CartCount ,Nav} from "../Navbar/NavbarElement";
import {FaTrashAlt} from "react-icons/fa"

const Order = () => {
  const location = useLocation();
  const OrderProduct = location.state?.OrderProduct;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let total = parseFloat(0);

  return (
    <div>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <OrderContainer>
        {" "}
        <OrderH1>Your Order Summary !</OrderH1>
        <div style={{ margin: "4rem" }}>
          <OrderDetail style={{ background: "#e31837" }}>
            <OrderName>Item</OrderName>
            <OrderName>Price</OrderName>
            
          </OrderDetail>
          {OrderProduct.map((item, index) => {
            return (
              <OrderDetail>
                <OrderName>{item.name}</OrderName>
                <OrderName>${item.price}</OrderName>
        
                <div style={{ display: "none" }}>{(total += item.price)}</div>
              </OrderDetail>
            );
          })}
          <OrderDetail style={{ background: "#e31837" }}>
            <OrderName>Total</OrderName>
            <OrderPrice>${total.toFixed(2)}</OrderPrice>
          </OrderDetail>
        </div>
        <OrderH2>
          If you really want to make a friend, go to someone's house and eat
          with him🍕🍕...the people who give you their food give you their
          heart💝💝
        </OrderH2>
      </OrderContainer>
    </div>
  );
};

export default Order;
