import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Orelega One', cursive;
  
}
#count{
    background:#e31837;
color:white;
font-size:1.5rem;
border-radius:75%;
width:content-fit;
height:40%;
padding:1%;
display:flex;
align-items:center;
justify-content:center;
position:relative;
right:49%;
font-weight:normal;
};

`
