import React, { useState, useContext, useEffect } from "react";

// Common
import { CartContext } from "../../Context/UserContext"; // Import Cart Context

// Icons
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

import FillHeart from "../../Assets/img/slickimg/fillheart.svg";
import { Bounce, toast } from "react-toastify";

// Generate or Retrieve Unique User ID for session
const getSessionUID = () => {
  let uid = sessionStorage.getItem("uid");
  if (!uid) {
    uid = `user_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("uid", uid);
  }
  return uid;
};

const AddtoCard = ({ product }) => {
  // UseState

  // useState for Add to Cart Button
  const { addToCart, removeFromCart, AddToWishList, WishListItems } =
    useContext(CartContext);

  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState("500gm");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const weightOptions = ["500gm", "1kg", "2kg"]; // Available sizes

  const navigate = useNavigate();

  const uid = getSessionUID(); // Get UID for session
  const isAuthenticated = !!sessionStorage.getItem("token"); // Check if user is logged in

  // Function

  useEffect(() => {
    const fetchCartData = () => {
      const storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
      if (storedCart[product.id] && storedCart[product.id][selectedWeight]) {
        setIsAdded(true);
        setQuantity(storedCart[product.id][selectedWeight].quantity);
      } else {
        setIsAdded(false);
        setQuantity(0);
      }
    };
  
    fetchCartData();
  
    // 🔥 Listen for cart updates globally
    window.addEventListener("cartUpdated", fetchCartData);
  
    return () => {
      window.removeEventListener("cartUpdated", fetchCartData);
    };
  }, [product.id, selectedWeight, uid]);
  

  // Add to Cart
  const increaseQuantity = () => {
    if (!isAuthenticated) {
      navigate("/login");
      toast.warning("⚠️ Please login to add items!", { position: "top-right", autoClose: 3000 });
      return;
    }
  
    let storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
  
    if (!storedCart[product.id]) {
      storedCart[product.id] = {};
    }
  
    if (!storedCart[product.id][selectedWeight]) {
      storedCart[product.id][selectedWeight] = {
        productDetails: product,
        quantity: 1,
      };
      toast.success(`${product.name} added to cart!`, { position: "top-right", autoClose: 2000 });
    } else {
      storedCart[product.id][selectedWeight].quantity += 1;
      toast.info(`Increased quantity of ${product.name}`, { position: "top-right", autoClose: 2000 });

    }
  
    sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));
  
    // 🔄 Update UI immediately
    setIsAdded(true);
    setQuantity(storedCart[product.id][selectedWeight].quantity);
  
    // 🔥 Notify all components
    window.dispatchEvent(new Event("cartUpdated"));
  };
  

  // Remove from Cart
  const decreaseQuantity = () => {
    let storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
  
    if (
      storedCart[product.id] &&
      storedCart[product.id][selectedWeight]?.quantity > 1
    ) {
      storedCart[product.id][selectedWeight].quantity -= 1;
      toast.info(`Decreased quantity of ${product.name}`, { position: "top-right", autoClose: 2000 });
    } else {
      delete storedCart[product.id][selectedWeight];
  
      if (Object.keys(storedCart[product.id]).length === 0) {
        delete storedCart[product.id]; // Remove entire product if no sizes left
      }
      toast.error(`Removed ${product.name} from cart!`, { position: "top-right", autoClose: 2000 });
      setIsAdded(false);
    }
  
    sessionStorage.setItem(`cart_${uid}`, JSON.stringify(storedCart));
  
    // 🔄 Update UI immediately
    setQuantity(storedCart[product.id]?.[selectedWeight]?.quantity || 0);
    // setIsAdded(
    //   storedCart[product.id] && Object.keys(storedCart[product.id]).length > 0
    // );
  
    // 🔥 Notify all components
    window.dispatchEvent(new Event("cartUpdated"));
  };
  

  //   Rating Change
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline key={i} className="start-gleeful" fontSize={15} />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <TiStarHalfOutline key={i} className="start-gleeful" fontSize={15} />
        );
      } else {
        stars.push(
          <TiStarOutline key={i} className="start-gleeful" fontSize={15} />
        );
      }
    }
    return stars;
  };

  return (
    <React.Fragment>
      <div className="shop-by-category background-color-white m-auto md:m-auto position-relative my-2 ">
        <div className="d-flex justify-content-center pt-2">
          <div>
            {/* Icons (Heart & Share) */}
            <div className="heart" onClick={() => AddToWishList(product)}>
              {!WishListItems.some((item) => item?.id === product?.id) ? (
                <FaRegHeart className="text-color-terracotta" />
              ) : (
                <img src={FillHeart} alt="" />
              )}
            </div>
            <div className="share">
              <PiShareFatBold className="text-color-terracotta" />
            </div>

            {/* Product Image & Qty Selector */}

            <div className="gm" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <div>
                <span className="inter-font-family-500 font-size-14 text-color-dark-grayish-blue ml-3">
                  Qty
                </span>
                <span className="inter-font-family-500 font-size-14 ms-2 text-color-dark-grayish-blue">
                  {selectedWeight}
                </span>
                <MdOutlineArrowDropDown className="text-color-terracotta" />
              </div>
              {dropdownOpen && (
                <div
                  className="position-absolute bg-white border rounded mt-1"
                  style={{ width: "120px", zIndex: 1000 }}
                >
                  {weightOptions.map(
                    (weight) =>
                      weight !== selectedWeight && ( // Hide selected weight
                        <div
                          key={weight}
                          className="p-2 cursor-pointer hover-bg-light"
                          onClick={() => {
                            setSelectedWeight(weight);
                            setDropdownOpen(false);
                          }}
                        >
                          {weight}
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
            <img
              src={product.image}
              alt="Loading"
              className="img-fluid"
              onClick={() =>
                navigate(`/productdescription/${product.id}`, {
                  state: { product },
                })
              }
            />
          </div>
        </div>

        {/* Product Name & Ratings */}

        <div className="d-flex justify-content-between px-2 pt-2">
          <div className="inter-font-family-500 card-heading font-size-16 pt-2 text-color-dark-grayish-blue">
            {product.name}
          </div>
          <div
            className="w-50 d-flex justify-content-center rating-height"
            style={{ height: "59px" }}
          >
            <div>
              <div className="pt-1">
                <span className="start-gleeful">
                  {renderStars(product.rating)}
                </span>
              </div>
              <div className="inter-font-family-500 font-size-10 font-sm-8 start-gleeful pt-2">
                {product.rating} ({product.reviews} Reviews)
              </div>
            </div>
          </div>
        </div>

        {/* Price & Add to Cart Button */}

        <div className="d-flex justify-content-between pt-2">
          <div className="ms-4 d-flex align-items-center">
            <MdCurrencyRupee className="" />
            <span className="inter-font-family-500 font-size-16 text-color-black">
              {product.price}
            </span>
          </div>
          {/* Add to Cart / Quantity Controls */}
          {!isAdded ? (
            <div>
              {/* <button
                className="background-color-terracotta button-addtocard inter-font-family-500 font-size-16"
                onClick={() => {
                  setIsAdded(true);
                  setQuantity(1); // Set initial quantity to 1
                  addToCart(product, 1, selectedWeight);
                }}
              >
                Add
              </button> */}
              <button
                className="background-color-terracotta button-addtocard inter-font-family-500 font-size-16"
                onClick={increaseQuantity}
              >
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="background-color-gleeful button-addtocard d-flex justify-content-around align-items-center">
                <div>
                  <button
                    className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                </div>
                <div>
                  <span className="font-size-24">{quantity}</span>
                </div>
                <div>
                  <button
                    className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddtoCard;
