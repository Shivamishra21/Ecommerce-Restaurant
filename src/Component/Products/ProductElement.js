import styled from "styled-components";

export const ProductsContainer = styled.div`
  
  padding: 5rem calc((100vw-1300px) / 2);
  background: #150f0f;
  color: #fff;
`;


export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  ${'' /* these medias are not working you need to work on it */}
  ${'' /* @media screen and (max-width:320px){
    flex:100%;
  }
  @media screen and(min-width:390px){
    flex:50%;
  } */}
`;


export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;


export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;

  ${'' /* &:hover{
    
    box-shadow: 1px 4px 20px 4px #fdc500
  } */}
`;


export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  padding-top:-1rem

`;


export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  display:flex;
  flex-wrap:no-wrap;
`;


export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;


export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;
export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #fff;
  }
  &:active{
    color:black;
  }
`;


export const ProductPrice = styled.p`
  margin-button: 1rem;
  font-size: 2rem;
`;
