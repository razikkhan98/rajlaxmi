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
import WishList from "./Component/Pages/Wishlist/wishlist";
import Feedback from "./Component/Pages/Feedback/feedback.jsx";
import ScrollToTop from "./Component/Common/Scroll-to-Top/index.jsx";
import ContactUs from "./Component/Pages/ContactUs/contactUs.jsx";

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
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
