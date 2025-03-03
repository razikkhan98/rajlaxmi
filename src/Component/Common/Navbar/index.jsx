// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "../../Assets/img/Logo/RAJLAXMI JAVIK PNG.png";
// import { PiShoppingCartSimpleFill } from "react-icons/pi";
// import { RiSearch2Line } from "react-icons/ri";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? "scrolled" : ""}`}>
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           <img src={Logo} alt="Logo" style={{ height: "42px", width: "44px" }} />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse gap-4" id="navbarNav">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
//             {["Home", "Products", "About Us", "Contact"].map((link) => (
//               <li className="nav-item" key={link}>
//                 <a className="nav-link" href="#">{link}</a>
//               </li>
//             ))}
//           </ul>
//           <div className="d-flex gap-4">
//             <button className="login-btn rounded-pill" type="button">
//               Login
//             </button>
//             <button className="nav-search-btn rounded-circle border-0 px-2 d-flex align-items-center justify-content-around">
//               <RiSearch2Line className="nav-search-icon" />
//             </button>
//             <button className="cart-btn rounded-circle border-0 px-2">
//               <PiShoppingCartSimpleFill className="mt-2 cart-icon" />
//               <span className="cart-quantity translate-middle rounded-pill">
//                 0
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../Assets/img/Logo/RAJLAXMI JAVIK PNG.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const DataNavbar = [
  {
    title: "Home",
    url: "/home",
    
  },
  {
    title: "Products",
    url: "/products",
  },
  
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-background ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" style={{ height: "42px", width: "44px" }} />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          {!isOpen ?   <FaBarsStaggered/> : <RxCross2/>}
        
        </button>

        {/* Navbar Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            {DataNavbar.map((link , i) => (
              <li className="nav-item" key={i}>
                {/* <a className="nav-link" href=>{link.title}</a> */}
                <Link className="nav-link" to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-4">
            <button className="login-btn rounded-pill mx-3" type="button">
              Login
            </button>
            <button className="nav-search-btn rounded-circle border-0 px-2 d-flex align-items-center justify-content-around">
              <RiSearch2Line className="nav-search-icon" />
            </button>
            <button className="cart-btn rounded-circle border-0 px-2">
              <PiShoppingCartSimpleFill className="mt-2 cart-icon" />
              <span className="cart-quantity translate-middle rounded-pill">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
