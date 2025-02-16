import React, { useState } from "react";

// Images
import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";

// Icons
import { FaStar } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";

const AddtoCard = ({ product }) => {
  console.log(product);
  // ===========
  // useState
  // ===========

  // useState for Add to Cart Button

  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // ==============
  // function
  // ================

  // Handle Quantity Changes
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setIsAdded(false); // Reset if quantity reaches 0
      setQuantity(0);
    }
  };

  //   Rating Change
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline key={i} className="start-gleeful" fontSize={19} />
        );
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <TiStarHalfOutline key={i} className="start-gleeful" fontSize={19} />
        );
      } else {
        stars.push(
          <TiStarOutline key={i} className="start-gleeful" fontSize={19} />
        );
      }
    }
    return stars;
  };

  return (
    <React.Fragment>
      <div className="shop-by-category background-color-white position-relative">
        <div className="d-flex justify-content-center pt-2">
          <div>
            {/* Icons (Heart & Share) */}
            <div className="heart">
              <FaRegHeart className="text-color-terracotta" />
            </div>
            <div className="share">
              <PiShareFatBold className="text-color-terracotta" />
            </div>

            {/* Product Image & Qty Selector */}

            <div className="gm">
              <span className="inter-font-family-500 font-size-10 text-color-dark-grayish-blue ml-3">
                Qty
              </span>
              <span className="inter-font-family-500 font-size-14 ms-2">
                {product.qty}
              </span>
              <MdOutlineArrowDropDown
                fontSize={20}
                className="text-color-terracotta"
              />
            </div>
            <img src={product.image} alt="Loading" className="img-fluid" />
          </div>
        </div>

        {/* Product Name & Ratings */}

        <div className="d-flex justify-content-between px-2 pt-2">
          <div className="inter-font-family-500 font-size-16 pt-2 text-color-dark-grayish-blue">
            {product.name}
          </div>
          <div className="w-50 d-flex justify-content-center" style={{height:"59px"}}>
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
              <button
                className="background-color-terracotta button-addtocard inter-font-family-500 font-size-16"
                onClick={() => {
                  setIsAdded(true);
                  setQuantity(1); // Set initial quantity to 1
                }}
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
