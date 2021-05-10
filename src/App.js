import React from "react";
import { BrowserRouter as Router, Link ,Route} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Hero from "./Component/Hero/index";
import Products from "./Component/Products";
import { productData, productDataDessert } from "./Component/Products/data";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";
import Order from "./Component/Order"

function App() {
  return (
    <Router>
      <GlobalStyle />
     
      <Route path="/" exact render={()=> <Hero />}/>
      
      <Route path="/" exact render={()=> <Feature />}/>
      
      <Route
        path="/pizza"
        render={() => <Products heading="Choose your favourite pizza from our resto..." data={productData} />}
      />
      <Route
        path="/dessert"
        render={() => <Products heading="Choose your favourite dessert from our resto..." data={productDataDessert} />}
      />
      <Route
        path="/order"
        render={() => <Order />}
      />
      <Footer/>
    </Router>
  );
}

export default App;
