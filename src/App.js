import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Component/Pages/Login";
import Registration from "./Component/Pages/Resignation";
import Home from "./Component/Pages/Home";
import Product from "./Component/Pages/Products/index";

import ProductInner from "./Component/Pages/Products/productinner";
import ProductDescription from "./Component/Pages/ProductDescription/productdescription";



function App() {
  return (
    <>
      <Router>
        {/* <Login/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products-inner" element={<ProductInner />} />
          <Route path="/productdescription" element={<ProductDescription />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
