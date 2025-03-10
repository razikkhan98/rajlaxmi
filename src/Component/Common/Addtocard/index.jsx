// // import React, { useState, useContext, useEffect } from "react";

// // // Common
// // import { CartContext } from "../../Context/UserContext"; // Import Cart Context

// // // Icons
// // import { MdCurrencyRupee } from "react-icons/md";
// // import { FaRegHeart } from "react-icons/fa";
// // import { PiShareFatBold } from "react-icons/pi";
// // import { MdOutlineArrowDropDown } from "react-icons/md";
// // import { TiStarHalfOutline } from "react-icons/ti";
// // import { TiStarOutline } from "react-icons/ti";
// // import { TiStarFullOutline } from "react-icons/ti";
// // import { useNavigate } from "react-router-dom";

// // import FillHeart from "../../Assets/img/slickimg/fillheart.svg";
// // import { Bounce, toast } from "react-toastify";

// // // Generate or Retrieve Unique User ID for session
// // const getSessionUID = () => {
// //   let uid = sessionStorage.getItem("uid");
// //   if (!uid) {
// //     uid = `user_${Math.random().toString(36).substr(2, 9)}`;
// //     sessionStorage.setItem("uid", uid);
// //   }
// //   return uid;
// // };

// // const AddtoCard = ({ product }) => {
// //   // UseState

// //   // useState for Add to Cart Button
// //   const { addToCart, removeFromCart, AddToWishList, WishListItems } =
// //     useContext(CartContext);

// //   const [isAdded, setIsAdded] = useState(false);
// //   const [quantity, setQuantity] = useState(0);
// //   const [selectedWeight, setSelectedWeight] = useState("500gm");
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const weightOptions = ["500gm", "1kg", "2kg"]; // Available sizes

// //   const navigate = useNavigate();

// //   const uid = getSessionUID(); // Get UID for session
// //   const isAuthenticated = !!sessionStorage.getItem("token"); // Check if user is logged in

// //   // Function

// //   useEffect(() => {
// //     const fetchCartData = () => {
// //       const storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
// //       if (storedCart[product.id] && storedCart[product.id][selectedWeight]) {
// //         setIsAdded(true);
// //         setQuantity(storedCart[product.id][selectedWeight].quantity);
// //       } else {
// //         setIsAdded(false);
// //         setQuantity(0);
// //       }
// //     };

// //     fetchCartData();

// //     // 🔥 Listen for cart updates globally
// //     window.addEventListener("cartUpdated", fetchCartData);

// //     return () => {
// //       window.removeEventListener("cartUpdated", fetchCartData);
// //     };
// //   }, [product.id, selectedWeight, uid]);

// //   // Add to Cart
// //   const increaseQuantity = () => {
// //     if (!isAuthenticated) {
// //       navigate("/login");
// //       toast.warning("⚠️ Please login to add items!", { position: "top-right", autoClose: 3000 });
// //       return;
// //     }

// //     let storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};

// //     if (!storedCart[product.id]) {
// //       storedCart[product.id] = {};
// //     }

// //     if (!storedCart[product.id][selectedWeight]) {
// //       storedCart[product.id][selectedWeight] = {
// //         productDetails: product,
// //         quantity: 1,
// //       };
// //       toast.success(`${product.name} added to cart!`, { position: "top-right", autoClose: 2000 });
// //     } else {
// //       storedCart[product.id][selectedWeight].quantity += 1;
// //       toast.info(`Increased quantity of ${product.name}`, { position: "top-right", autoClose: 2000 });

// //     }

// //     sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));

// //     // 🔄 Update UI immediately
// //     setIsAdded(true);
// //     setQuantity(storedCart[product.id][selectedWeight].quantity);

// //     // 🔥 Notify all components
// //     window.dispatchEvent(new Event("cartUpdated"));
// //   };

// //   // Remove from Cart
// //   const decreaseQuantity = () => {
// //     let storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};

// //     if (
// //       storedCart[product.id] &&
// //       storedCart[product.id][selectedWeight]?.quantity > 1
// //     ) {
// //       storedCart[product.id][selectedWeight].quantity -= 1;
// //       toast.info(`Decreased quantity of ${product.name}`, { position: "top-right", autoClose: 2000 });
// //     } else {
// //       delete storedCart[product.id][selectedWeight];

// //       if (Object.keys(storedCart[product.id]).length === 0) {
// //         delete storedCart[product.id]; // Remove entire product if no sizes left
// //       }
// //       toast.error(`Removed ${product.name} from cart!`, { position: "top-right", autoClose: 2000 });
// //       setIsAdded(false);
// //     }

// //     sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));

// //     // 🔄 Update UI immediately
// //     setQuantity(storedCart[product.id]?.[selectedWeight]?.quantity || 0);
// //     // setIsAdded(
// //     //   storedCart[product.id] && Object.keys(storedCart[product.id]).length > 0
// //     // );

// //     // 🔥 Notify all components
// //     window.dispatchEvent(new Event("cartUpdated"));
// //   };

// //   //   Rating Change
// //   const renderStars = (rating) => {
// //     const stars = [];
// //     for (let i = 1; i <= 5; i++) {
// //       if (i <= Math.floor(rating)) {
// //         stars.push(
// //           <TiStarFullOutline key={i} className="start-gleeful" fontSize={15} />
// //         );
// //       } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
// //         stars.push(
// //           <TiStarHalfOutline key={i} className="start-gleeful" fontSize={15} />
// //         );
// //       } else {
// //         stars.push(
// //           <TiStarOutline key={i} className="start-gleeful" fontSize={15} />
// //         );
// //       }
// //     }
// //     return stars;
// //   };

// //   return (
// //     <React.Fragment>
// //       <div className="shop-by-category background-color-white m-auto md:m-auto position-relative my-2 ">
// //         <div className="d-flex justify-content-center pt-2">
// //           <div>
// //             {/* Icons (Heart & Share) */}
// //             <div className="heart" onClick={() => AddToWishList(product)}>
// //               {!WishListItems.some((item) => item?.id === product?.id) ? (
// //                 <FaRegHeart className="text-color-terracotta" />
// //               ) : (
// //                 <img src={FillHeart} alt="" />
// //               )}
// //             </div>
// //             <div className="share">
// //               <PiShareFatBold className="text-color-terracotta" />
// //             </div>

// //             {/* Product Image & Qty Selector */}

// //             <div className="gm" onClick={() => setDropdownOpen(!dropdownOpen)}>
// //               <div>
// //                 <span className="inter-font-family-500 font-size-14 text-color-dark-grayish-blue ml-3">
// //                   Qty
// //                 </span>
// //                 <span className="inter-font-family-500 font-size-14 ms-2">
// //                   {selectedWeight}
// //                 </span>
// //                 <MdOutlineArrowDropDown className="text-color-terracotta" />
// //               </div>
// //               {dropdownOpen && (
// //                 <div
// //                   className="position-absolute bg-white border rounded mt-1"
// //                   style={{ width: "120px", zIndex: 1000 }}
// //                 >
// //                   {weightOptions.map(
// //                     (weight) =>
// //                       weight !== selectedWeight && ( // Hide selected weight
// //                         <div
// //                           key={weight}
// //                           className="p-2 cursor-pointer hover-bg-light"
// //                           onClick={() => {
// //                             setSelectedWeight(weight);
// //                             setDropdownOpen(false);
// //                           }}
// //                         >
// //                           {weight}
// //                         </div>
// //                       )
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //             <img
// //               src={product.image}
// //               alt="Loading"
// //               className="img-fluid"
// //               onClick={() =>
// //                 navigate(`/productdescription/${product.id}`, {
// //                   state: { product },
// //                 })
// //               }
// //             />
// //           </div>
// //         </div>

// //         {/* Product Name & Ratings */}

// //         <div className="d-flex justify-content-between px-2 pt-2">
// //           <div className="inter-font-family-500 card-heading font-size-16 pt-2 text-color-dark-grayish-blue">
// //             {product.name}
// //           </div>
// //           <div
// //             className="w-50 d-flex justify-content-center rating-height"
// //             style={{ height: "59px" }}
// //           >
// //             <div>
// //               <div className="pt-1">
// //                 <span className="start-gleeful">
// //                   {renderStars(product.rating)}
// //                 </span>
// //               </div>
// //               <div className="inter-font-family-500 font-size-10 font-sm-8 start-gleeful pt-2">
// //                 {product.rating} ({product.reviews} Reviews)
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Price & Add to Cart Button */}

// //         <div className="d-flex justify-content-between pt-2">
// //           <div className="ms-4 d-flex align-items-center">
// //             <MdCurrencyRupee className="" />
// //             <span className="inter-font-family-500 font-size-16 text-color-black">
// //               {product.price}
// //             </span>
// //           </div>
// //           {/* Add to Cart / Quantity Controls */}
// //           {!isAdded ? (
// //             <div>
// //               {/* <button
// //                 className="background-color-terracotta button-addtocard inter-font-family-500 font-size-16"
// //                 onClick={() => {
// //                   setIsAdded(true);
// //                   setQuantity(1); // Set initial quantity to 1
// //                   addToCart(product, 1, selectedWeight);
// //                 }}
// //               >
// //                 Add
// //               </button> */}
// //               <button
// //                 className="background-color-terracotta button-addtocard inter-font-family-500 font-size-16"
// //                 onClick={increaseQuantity}
// //               >
// //                 Add
// //               </button>
// //             </div>
// //           ) : (
// //             <div>
// //               <div className="background-color-gleeful button-addtocard d-flex justify-content-around align-items-center">
// //                 <div>
// //                   <button
// //                     className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
// //                     onClick={decreaseQuantity}
// //                   >
// //                     -
// //                   </button>
// //                 </div>
// //                 <div>
// //                   <span className="font-size-24">{quantity}</span>
// //                 </div>
// //                 <div>
// //                   <button
// //                     className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
// //                     onClick={increaseQuantity}
// //                   >
// //                     +
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </React.Fragment>
// //   );
// // };

// // export default AddtoCard;

// import React, { useContext, useState } from "react";

// // Images
// import FillHeart from "../../Assets/img/slickimg/fillheart.svg";

// // Icons
// import { MdCurrencyRupee } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
// import { PiShareFatBold } from "react-icons/pi";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { TiStarHalfOutline } from "react-icons/ti";
// import { TiStarOutline } from "react-icons/ti";
// import { TiStarFullOutline } from "react-icons/ti";
// import { CartContext } from "../../Context/UserContext";
// import { Bounce, toast } from "react-toastify";
// import { postData } from "../../../services/apiService";

// const AddtoCard = ({ product }) => {
//   const { AddToWishList, WishListItems, setCart, cart } =
//     useContext(CartContext);

//   console.log(cart, "cart");

//   // useState for Add to Cart Button

//   const [isAdded, setIsAdded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedWeight, setSelectedWeight] = useState("500gm");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const weightOptions = ["500gm", "1kg", "2kg"]; // Available sizes

//   // Handle Quantity Changes
//   const increaseQuantity = () => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = prevQuantity + 1;
//       updateCart(newQuantity); // Update the cart correctly
//       return newQuantity;
//     });
//   };

//   const decreaseQuantity = () => {
//     setQuantity((prevQuantity) => {
//       if (prevQuantity > 1) {
//         const newQuantity = prevQuantity - 1;
//         updateCart(newQuantity); // Update cart
//         return newQuantity;
//       } else {
//         removeFromCart(product.id); // Remove item when quantity reaches 0
//         setIsAdded(false);
//         return 1; // Keep at least 1 to prevent negative values
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//   };

//   // Update Cart
//   const updateCart = (quantity) => {
//     const updatedCart = [...cart];
//     const existingProductIndex = updatedCart.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       updatedCart[existingProductIndex].quantity = quantity;
//     } else {
//       updatedCart.push({ ...product, quantity });
//     }

//     setCart(updatedCart);
//   };

//   // Add to Cart
//   const handleAddToCart = () => {
//     setIsAdded(true);
//     updateCart(1);
//     addToCartApi();
//   };

//   const userEndpoint = "addtocart";

//   // Api Post in cart

//   const addToCartApi = async () => {
//     try {
//       const response = await postData(userEndpoint, cart);
//       if (response.status === 200) {
//         toast.success("Item added to cart successfully", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           transition: Bounce,
//         });
//         setDropdownOpen(false);
//         setQuantity(1);
//         setIsAdded(false);
//       } else {
//         toast.error("Failed to add item to cart", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           transition: Bounce,
//         });
//       }
//     } catch (error) {
//       toast.error("Failed to add item to cart", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         transition: Bounce,
//       });
//       console.error(error);
//     }
//   };

//   // Rating Change
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(rating)) {
//         stars.push(
//           <TiStarFullOutline key={i} className="start-gleeful" fontSize={19} />
//         );
//       } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
//         stars.push(
//           <TiStarHalfOutline key={i} className="start-gleeful" fontSize={19} />
//         );
//       } else {
//         stars.push(
//           <TiStarOutline key={i} className="start-gleeful" fontSize={19} />
//         );
//       }
//     }
//     return stars;
//   };

//   return (
//     <React.Fragment>
//       <div className="shop-by-category background-color-white position-relative">
//         <div className="d-flex justify-content-center pt-2">
//           <div>
//             {/* Icons (Heart & Share) */}
//             <div className="heart" onClick={() => AddToWishList(product)}>
//               {!WishListItems.some((item) => item?.id === product?.id) ? (
//                 <FaRegHeart className="text-color-terracotta" />
//               ) : (
//                 <img src={FillHeart} alt="Loading" />
//               )}
//             </div>

//             <div className="share">
//               <PiShareFatBold className="text-color-terracotta" />
//             </div>

//             {/* Product Image & Qty Selector */}

//             <div className="gm" onClick={() => setDropdownOpen(!dropdownOpen)}>
//               <span className="inter-font-family-500 font-size-10 text-color-dark-grayish-blue ml-3">
//                 Qty
//               </span>
//               <span className="inter-font-family-500 font-size-14 ms-2">
//                 {selectedWeight}
//               </span>
//               <MdOutlineArrowDropDown
//                 fontSize={20}
//                 className="text-color-terracotta"
//               />
//               {dropdownOpen && (
//                 <div
//                   className="position-absolute bg-white border rounded mt-1"
//                   style={{ width: "120px", zIndex: 1000 }}
//                 >
//                   {weightOptions.map(
//                     (weight) =>
//                       weight !== selectedWeight && ( // Hide selected weight
//                         <div
//                           key={weight}
//                           className="p-2 cursor-pointer hover-bg-light"
//                           onClick={() => {
//                             setSelectedWeight(weight);
//                             setDropdownOpen(false);
//                           }}
//                         >
//                           {weight}
//                         </div>
//                       )
//                   )}
//                 </div>
//               )}
//             </div>
//             <img src={product.image} alt="Loading" className="img-fluid" />
//           </div>
//         </div>

//         {/* Product Name & Ratings */}

//         <div className="d-flex justify-content-between px-2 pt-2">
//           <div className="inter-font-family-500 font-size-16 pt-2 text-color-dark-grayish-blue">
//             {product.name}
//           </div>
//           <div
//             className="w-50 d-flex justify-content-center"
//             style={{ height: "59px" }}
//           >
//             <div>
//               <div className="pt-1">
//                 <span className="start-gleeful">
//                   {renderStars(product.rating)}
//                 </span>
//               </div>
//               <div className="inter-font-family-500 font-size-10 start-gleeful pt-2">
//                 {product.rating} ({product.reviews} Reviews)
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Price & Add to Cart Button */}

//         <div className="d-flex justify-content-between pt-2">
//           <div className="ms-4 d-flex align-items-center">
//             <MdCurrencyRupee className="" />
//             <span className="inter-font-family-500 font-size-16 text-color-black">
//               {product.price}
//             </span>
//           </div>

//           {/* Add to Cart / Quantity Controls */}

//           {!isAdded ? (
//             <div>
//               <button
//                 className="background-color-terracotta button-addtocard inter-font-family-500 font-size-16"
//                 onClick={handleAddToCart}
//               >
//                 Add
//               </button>
//             </div>
//           ) : (
//             <div>
//               <div className="background-color-gleeful button-addtocard d-flex justify-content-around align-items-center">
//                 <div>
//                   <button
//                     className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
//                     onClick={decreaseQuantity}
//                   >
//                     -
//                   </button>
//                 </div>
//                 <div>
//                   <span className="font-size-24">{quantity}</span>
//                 </div>
//                 <div>
//                   <button
//                     className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
//                     onClick={increaseQuantity}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default AddtoCard;

import React, { useContext, useEffect, useState } from "react";

// Images
import FillHeart from "../../Assets/img/slickimg/fillheart.svg";

// Icons
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  TiStarHalfOutline,
  TiStarOutline,
  TiStarFullOutline,
} from "react-icons/ti";
import { CartContext } from "../../Context/UserContext";
import { Bounce, toast } from "react-toastify";
import { postData, updateData } from "../../../services/apiService";
import { useNavigate } from "react-router-dom";

const AddtoCard = ({ product }) => {
  const { AddToWishList, WishListItems, setCart, cart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500gm");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const weightOptions = ["500gm", "1kg", "2kg"];

  const isAuthenticated = !!sessionStorage.getItem("token");
  const uid = sessionStorage.getItem("uid");

  const userEndpoint = "addtocart";


  const updateCart = (quantity, weight) => {
    const updatedCart = [...cart];
    const existingIndex = updatedCart.findIndex(
      (item) => item.id === product.id && item.selectedWeight === weight
    );

    if (existingIndex !== -1) {
      updatedCart[existingIndex].quantity = quantity;
    } else {
      updatedCart.push({ ...product, quantity, selectedWeight: weight });
    }

    setCart(updatedCart);
    return updatedCart;
  };

  const addToCartApi = async (updatedCart) => {
    try {
      const cartPayload = updatedCart.map((item) => ({
        product_id: item.id, // Ensure this matches backend expectations
        uid,
        product_name: item.name,
        product_price: item.price,
        product_quantity: item.quantity,
        product_weight: item.selectedWeight,
        product_total_amount: (item.price * item.quantity).toFixed(2),
      }));
      
      const response = await postData(userEndpoint, cartPayload);
      console.log('response:', response);
      if (response.status === 200) {
        toast.success("Item added to cart successfully", {
          transition: Bounce,
        });
      } else {
        toast.error("Failed to add item to cart");
      }
    } catch (error) {
      toast.error("Failed to add item to cart");
      console.error(error);
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login");
      toast.warning("⚠️ Please login to add items!", { autoClose: 3000 });
      return;
    }
    setIsAdded(true);
    const updatedCart = updateCart(1, selectedWeight);
    addToCartApi(updatedCart); // Directly call API here
  };

  const removeFromCart = (productId, weight) => {
    setCart(
      cart.filter(
        (item) => !(item.id === productId && item.selectedWeight === weight)
      )
    );
    setIsAdded(false);
  };

  // const increaseQuantity = () => {
  //   setQuantity((prev) => {
  //     const newQuantity = prev + 1;
  //     updateCart(newQuantity, selectedWeight);
  //     return newQuantity;
      
  //   });
  // };

  // const increaseQuantity = async () => {
  //   const newQuantity = quantity + 1;
  //   const newTotalAmount = (product.price * newQuantity).toFixed(2);
  
  //   setQuantity(newQuantity);
  //   updateCart(newQuantity, selectedWeight);
  //   const updataData = {
  //     uid,
  //     product_id: product.id,
  //     product_name: product.name,
  //     product_quantity: newQuantity,
  //     product_weight: selectedWeight,
  //     product_price: product.price,
  //     product_total_amount: newTotalAmount,
  //   }

  //   try {
  //     const response = await postData("updatecart",updataData);
  
  //     if (response.status === 200) {
  //       toast.success("Quantity increased successfully!", { transition: Bounce });
  //     } else {
  //       toast.error("Failed to update quantity");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to update quantity");
  //     console.error(error);
  //   }
  // };

  const increaseQuantity = async () => {
    const newQuantity = quantity + 1;
    const newTotalAmount = (product.price * newQuantity).toFixed(2);
  
    
  
    try {
      const response = await updateData("updatecart", product.id, {
        uid,
        product_id: product.id,
        product_name: product.name,
        product_quantity: newQuantity,
        product_weight: selectedWeight,
        product_price: product.price,
        product_total_amount: newTotalAmount,
      });
      setQuantity(newQuantity);
      updateCart(newQuantity, selectedWeight);

      if (response.status === 200) {
        toast.success("Quantity increased successfully!", { transition: Bounce });
      } else {
        toast.error("Failed to update quantity");
      }
    } catch (error) {
      toast.error("Failed to update quantity");
      console.error(error);
    }
  };
  

  
  
  const decreaseQuantity = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      const newTotalAmount = (product.price * newQuantity).toFixed(2);
  
     
  
      try {
        const response = await updateData("updatecart", product.id, {
          uid,
          product_id: product.id,
          product_name: product.name,
          product_quantity: newQuantity,
          product_weight: selectedWeight,
          product_price: product.price,
          product_total_amount: newTotalAmount,
        });
        setQuantity(newQuantity);
        updateCart(newQuantity, selectedWeight);
        if (response.status === 200) {
          toast.success("Quantity decreased successfully!", { transition: Bounce });
        } else {
          toast.error("Failed to update quantity");
        }
      } catch (error) {
        toast.error("Failed to update quantity");
        console.error(error);
      }
    } else {
      removeFromCart(product.id, selectedWeight);
    }
  };
  

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) {
        return (
          <TiStarFullOutline key={i} className="start-gleeful" fontSize={19} />
        );
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        return (
          <TiStarHalfOutline key={i} className="start-gleeful" fontSize={19} />
        );
      }
      return <TiStarOutline key={i} className="start-gleeful" fontSize={19} />;
    });
  };

  return (
    <div className="shop-by-category background-color-white position-relative">
      <div className="d-flex justify-content-center pt-2">
        <div>
          {/* Wishlist & Share */}
          <div className="heart" onClick={() => AddToWishList(product)}>
            {!WishListItems.some((item) => item?.id === product?.id) ? (
              <FaRegHeart className="text-color-terracotta" />
            ) : (
              <img src={FillHeart} alt="Wishlist" />
            )}
          </div>

          <div className="share">
            <PiShareFatBold className="text-color-terracotta" />
          </div>

          {/* Quantity Dropdown */}
          <div className="gm" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span className="inter-font-family-500 font-size-10 text-color-dark-grayish-blue ml-3">
              Qty
            </span>
            <span className="inter-font-family-500 font-size-14 ms-2">
              {selectedWeight}
            </span>
            <MdOutlineArrowDropDown
              fontSize={20}
              className="text-color-terracotta"
            />
            {dropdownOpen && (
              <div
                className="position-absolute bg-white border rounded mt-1"
                style={{ width: "120px", zIndex: 1000 }}
              >
                {weightOptions.map((weight) =>
                  weight !== selectedWeight ? (
                    <div
                      key={weight}
                      className="p-2 cursor-pointer hover-bg-light"
                      onClick={() => {
                        setSelectedWeight(weight);
                        setDropdownOpen(false);
                        setIsAdded(false); // Reset "Add to Cart" button
                        setQuantity(1); // Reset quantity to default
                      }}
                    >
                      {weight}
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>
          <img src={product.image} alt="Product" className="img-fluid" />
        </div>
      </div>

      {/* Product Details */}
      <div className="d-flex justify-content-between px-2 pt-2">
        <div className="inter-font-family-500 font-size-16 text-color-dark-grayish-blue">
          {product.name}
        </div>
        <div
          className="w-50 d-flex justify-content-center"
          style={{ height: "59px" }}
        >
          <div>
            <div className="pt-1">
              <span className="start-gleeful">
                {renderStars(product.rating)}
              </span>
            </div>
            <div className="inter-font-family-500 font-size-10 start-gleeful pt-2">
              {product.rating} ({product.reviews} Reviews)
            </div>
          </div>
        </div>
      </div>

      {/* Price & Add to Cart */}
      <div className="d-flex justify-content-between pt-2">
        <div className="ms-4 d-flex align-items-center">
          <MdCurrencyRupee />
          <span className="inter-font-family-500 font-size-16 text-color-black">
            {product.price}
          </span>
        </div>

        {!isAdded ? (
          <button
            className="background-color-terracotta button-addtocard"
            onClick={handleAddToCart}
          >
            Add
          </button>
        ) : (
          <div className="background-color-gleeful button-addtocard d-flex justify-content-around align-items-center">
            <button
              className="background-color-terracotta font-size-24 d-flex justify-content-center align-items-center"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="font-size-24">{quantity}</span>
            <button
              className="background-color-terracotta font-size-24 d-flex justify-content-center align-items-center"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddtoCard;
