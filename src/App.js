import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Component/Pages/Login";
import Registration from "./Component/Pages/Resignation";
import Home from "./Component/Pages/Home";
import Product from "./Component/Pages/Products/index";
import "react-toastify/dist/ReactToastify.css";

import ProductInner from "./Component/Pages/Products/productinner";

import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products-inner" element={<ProductInner />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
