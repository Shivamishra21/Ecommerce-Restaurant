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
//import { productData } from "../Products/data";
const Products = ({heading,data}) => {
  return (
    <div>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton>{product.button}</ProductButton>
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
