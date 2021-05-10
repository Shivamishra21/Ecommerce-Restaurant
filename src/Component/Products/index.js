import {
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductPrice,
  ProductsHeading,
  ProductWrapper,
  ProductTitle,
  ProductsContainer,
  ProductInfo,
} from "../Products/ProductElement";
import Sidebar from "../Sidebar/index";
// import Navbar from "../Navbar/index";
import { useState } from "react";
import { Bars, Cart, NavIcon, CartCount ,Nav} from "../Navbar/NavbarElement";
import Order from "../Order/index";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Products = ({ heading, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [count, setCount] = useState(0);
  const [products,setProducts] = useState([]);

  return (
    <div>
      <ProductsContainer>
        <Nav>
        <Link to = {{pathname :"/order",state:{OrderProduct:products}}} >
        <Cart />
          <CartCount style={{position:"absolute",left:"2.3rem",height:'33px ',width:"2rem"}}>{count}</CartCount>
        </Link>

          <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars />
          </NavIcon>
        </Nav>

        <Sidebar isOpen={isOpen} toggle={toggle} />
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>${product.price}</ProductPrice>
                  <ProductButton
                    onClick={() => {
                      setCount(count + 1);
                      console.log(count);
                      setProducts(products.concat(product))
                    }}
                  >
                    Add to Cart
                  </ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;

{
  /* <Link
to="/order"
style={{ textDecoration: "none", color: "white" }}
>
Add to Cart
</Link> */
}
