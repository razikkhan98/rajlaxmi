import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Component/Pages/Login";
import Registration from "./Component/Pages/Resignation";
import Home from "./Component/Pages/Home";
import Product from "./Component/Pages/Products/index";
import "react-toastify/dist/ReactToastify.css";

import ProductInner from "./Component/Pages/Products/productinner";
import ProductDescription from "./Component/Pages/ProductDescription/productdescription";

import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products-inner" element={<ProductInner />} />
          <Route path="/productdescription/:id" element={<ProductDescription />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
