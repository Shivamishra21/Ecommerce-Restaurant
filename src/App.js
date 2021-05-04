import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Hero from './Component/Hero/index'
import Products from "./Component/Products";
import { productData, productDataDessert } from "./Component/Products/data";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";


function App() {
  return (
    <Router>
    <GlobalStyle />
    
      <Hero/>
      <Products heading="Choose your favourite"  data={productData}/>
      <Feature/>
      <Products heading="Sweet Treats from you"  data={productDataDessert}/>
      <Footer/>
    </Router>
  );
}

export default App;
