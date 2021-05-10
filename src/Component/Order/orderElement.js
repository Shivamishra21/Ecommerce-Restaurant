import styled from "styled-components";
import orderImg from "../../Images/Order.jpg";

export const OrderContainer = styled.div`
  padding: 5rem calc((100vw-1300px) / 2);
  background: #150f0f;
  ${'' /* background:red; */}
  color: #fff;
  ${'' /* height:100vh; */}
`;

export const OrderCard = styled.div`
  background: url(${orderImg});
  background-position: center;
  background-size: cover;
  color: #fff;
  height: 80vh;
  display: flex;
  width: 80vw;
  margin: auto;
  justify-content: center;

  filter: blur(3px);
  border:2px solid white;
  box-sizing: border-box;
`;
export const OrderH2 = styled.h1`
/* Black w/opacity/see-through */
color: white;
font-weight: normal;
${'' /* border-bottom:3px solid black; */}
font-family: 'Niconne', cursive;
width: content-fit;
font-size:clamp(2rem, 2.7vw, 3rem);
z-index:999;
padding: 3rem;
background:#150f0f;
`;
export const OrderH1 = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
`;

export const OrderP = styled.p`
    ${'' /* background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.4);  */}
    color:black ;
    ${'' /* font-weight: bold;
    border: 3px solid #f1f1f1; */}
   
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    font-size :2rem;
    font-weight:normal;
    display:block;
  `

  export const OrderName = styled.span `
  font-size:clamp(1.5rem,2vw,2.7rem);
 
  

  `;
  export const OrderPrice = styled.span `
  font-size:clamp(1.5rem,2.5vw,3rem);
  `;

  export const OrderDetail = styled.div `
  display:flex;
  justify-content:space-around;
  background:black;
  align-items:flex-start;
  border-bottom:1px solid #ffc500;
  text-align:left;
  &:hover{
    color:#d5bf86
  }

  `