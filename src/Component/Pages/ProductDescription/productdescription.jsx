import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import productFullNew from "../../Assets/img/ProductDescription/productFullNew.png";
import productSmall1 from "../../Assets/img/ProductDescription/productSmall1.png";
import productSmall2 from "../../Assets/img/ProductDescription/productSmall2.png";
import productSmall3 from "../../Assets/img/ProductDescription/productSmall3.png";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ProductCard from "../../Common/ProductDescriptionCard/ProductCard";
import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";
import { FaRegHeart } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import FillHeart from "../../Assets/img/slickimg/fillheart.svg";

import CheckMark from "../../Assets/img/ProductDescription/check-mark_5290058 1.svg";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/UserContext";
import { renderStars } from "../../Common/RatingFunctionality/RatingFunctionality";
import axios from "axios";

const Tab = ({ label, isActive, onClick, className }) => {
  return (
    <button
      className={`${className} ${
        isActive ? "active-tab tab-heading" : "nonactive-tab tab-heading"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabPanel = ({ children, isActive, className }) => {
  return (
    <div
      className={`${className} ${
        isActive
          ? `active-tabPanel tab-content d-block inter-font-family-400 ${children?.type?.name == "CustomerReviews"? "mt-3" :""}`
          : "tab-content d-none inter-font-family-400"
      }`}
    >
      {children}
    </div>
  );
};
const BenefitsCards = () => {
  const benefits = [
    {
      description: "No added sugar, sulfites, or artificial preservatives.",
    },
    {
      description: "Packed with fiber, antioxidants, and essential minerals.",
    },
    {
      description: "Boosts digestion, heart health, and bone strength",
    },
  ];

  return (
    <div className="row">
      {benefits.map((benefit, index) => (
        <div key={index} className="col-4">
          <img src={CheckMark} alt="Loading" className="card-img-top" />
          <div className="card-body">
            <p className="card-text">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Tab Customer Reviews UI
const CustomerReviews = () => {
  const location = useLocation();
  const product = location.state?.product;
  return (
    <div className="customer-review ms-3">
        {[5, 4, 3, 2, 1]?.map((rating) => (
      <div className="row rating-text inter-font-family-500 pb-2">
            
          <div className="col-2 col-sm-3 start-gleeful px-0">
            {renderStars(product?.id, rating, product)}
          </div>
        <div className="col-3 col-sm-3 progress prog px-0">
          <div 
            class="progress-bar prog-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="col-7 col-sm-4 inter-font-family-500 font-size-12  font-sm-8 text-color-gleeful  text-decoration-underline">
          {product?.rating} ({product?.reviews} Reviews)
        </div>
        
      </div>
        ))}
    </div>
  );
};

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Description",
      content:
        "Savor the richness of 100% Organic Anjeer (Dried Figs)—pure, natural, and free from additives or preservatives. Handpicked from the finest farms, our Anjeer is sun-dried to perfection, retaining its natural sweetness and essential nutrients. Soft, chewy, and delicious, it makes for a guilt-free snack or a versatile ingredient in your favorite recipes.",
    },
    { label: "Benefits", content: <BenefitsCards /> },
    { label: "Customer Reviews", content: <CustomerReviews /> },
  ];

  return (
    <div className="tab-container">
      <div className="tab-main">
        {tabs.map((tab, index) => (
          <Tab
            className={tab.className}
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      {tabs.map((tab, index) => (
        <TabPanel key={index} isActive={activeTab === index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

const ProductDescription = () => {
  // ============
  // States
  // ==========
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [FetchRatingData, setFetchRatingData] = useState();
  const [activeImage, setActiveImage] = useState(productFullNew); // Main Image State
  // const smallImages = [product.image, product.smallImage1, product.smallImage2, product.smallImage3];
  const smallImages = [productSmall1, productSmall2, productSmall3];
  const { AddToWishList, WishListItems } = useContext(CartContext);

  const GetproductUrlId = location.state?.product;
  let uid = sessionStorage.getItem("uid");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const pincodeData = [
    { pincode: "110001", status: "Delivery is available" },
    { pincode: "110002", status: "Delivery is not available" },
    { pincode: "110003", status: "Delivery is available" },
    { pincode: "110004", status: "Delivery is not available" },
    { pincode: "110005", status: "Delivery is available" },
    { pincode: "110006", status: "Delivery is not available" },
    { pincode: "110007", status: "Delivery is available" },
    { pincode: "110008", status: "Delivery is not available" },
    { pincode: "110009", status: "Delivery is available" },
    { pincode: "110010", status: "Delivery is not available" },
  ];

  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState("");

  const checkDeliveryStatus = () => {
    const data = pincodeData.find((item) => item.pincode === pincode);
    if (data) {
      setStatus(data.status);
    } else {
      setStatus("Pincode not found. Please check and try again.");
    }

    // Remove the status message after a random delay between 3 and 5 seconds
    const delay = Math.floor(Math.random() * 2000) + 3000; // Delay between 3000ms (3s) and 5000ms (5s)

    setTimeout(() => {
      setStatus("");
    }, delay);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const FetchRating = async () => {
    try {
      const response = await axios.get(
        `https://9b64-2401-4900-8822-8a8-2d45-68ac-a185-2b63.ngrok-free.app/rajlaxmi/getAllFeedback/${GetproductUrlId?.id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log("response: ", response?.data?.review);
      setFetchRatingData();
    } catch (error) {}
  };
  useEffect(() => {
    FetchRating();
  }, []);

  return (
    <>
      <div className="bg-custom-gradient-product productDescription-section">
        <Navbar />
        <div className="container pt-5 text-light-gray-color font-size-14 inter-font-family-500">
          <span className=" inter-font-family-400"> Back</span>{" "}
          <img src={ArrowLight} className="mx-2" alt="Loading" />{" "}
          <span className=" inter-font-family-400">Dry Fruits</span>{" "}
          <img src={ArrowDark} className="mx-2" alt="Loading" />{" "}
          <span className="text-color-dark-grayish-blue font-size-14 inter-font-family-400">
            Anjeer
          </span>
        </div>
      </div>

      <section className="background-color-light-grayish-yellow">
        <div className="container">
          <div className="row justify-content-between">
            {/*------------ slider section start------------ */}
            {/* <div className="col-12 col-md-5">
           
              <div className="slider-fullsize-image-div">
                <img
                  className="wishlist-icon"
                  src={wishlistHeart}
                  alt="wishlist"
                />
                <img className="share-icon" src={share} alt="share" />
                <div className="slider-fullsize-img-inner">
                  <img
                    className="w-100 slider-fullimage"
                    src={product.image}
                    alt="activeslide"
                  />
                </div>
              </div>
              <div className="slider-slide-image-div">
                <div className="slider-slide-image-inner">
                  <img
                    className="h-100 w-100 slider-slide-image"
                    src={productSmall2}
                    alt="product1"
                  />
                </div>
                <div className="slider-slide-image-inner">
                  <img
                    className="h-100 w-100 slider-slide-image"
                    src={productSmall1}
                    alt="slideone"
                  />
                </div>
                <div className="slider-slide-image-inner">
                  <img
                    className="h-100 w-100 slider-slide-image"
                    src={productSmall3}
                    alt="slidethree"
                  />
                </div>
              </div>
            </div> */}
            <div className="col-12 col-md-12 col-lg-5">
              {/* Full-size Image */}
              <div className="slider-fullsize-image-div">
                <div className="slider-fullsize-img-inner">
                  {/* Icons (Heart & Share) */}
                  <div
                    className="heart"
                    onClick={() => AddToWishList(GetproductUrlId)}
                  >
                    {!WishListItems.some(
                      (item) => item?.id === GetproductUrlId?.id
                    ) ? (
                      <FaRegHeart className="text-color-terracotta" />
                    ) : (
                      <img className="h-auto" src={FillHeart} alt="" />
                    )}
                  </div>
                  <div className="share">
                    <PiShareFatBold className="text-color-terracotta" />
                  </div>
                  <img
                    className="w-100 slider-fullimage"
                    src={activeImage}
                    alt="active-slide"
                  />
                </div>
              </div>

              {/* Thumbnail Slider */}
              <Slider {...settings} className="slider-slide-image-div">
                {smallImages.map((img, index) => (
                  <div
                    key={index}
                    className="slider-slide-image-inner"
                    onClick={() => setActiveImage(img)}
                  >
                    <img
                      className="h-100 w-100 slider-slide-image"
                      src={img}
                      alt={`slide-${index}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/*------------ slider section End------------ */}
            {/*------------ Product detail start----------- */}
            <div className="col-12 col-md-12 col-lg-7 ps-lg-5 ps-md-0 mt-lg-0 mt-md-4 mt-sm-0">
              <h1 className="heading-product-name text-color-dark-grayish-blue inter-font-family-500 mb-3 mt-3 mt-md-0 text-truncate lh-sm">
                {GetproductUrlId?.name}
              </h1>
              <p className="mb-3 product-description inter-font-family-400 text-color-dark-grayish-blue">
                Organic Lorem Ipsum cia doer la fansco anjeer la bela
              </p>
              {/*------------ Product rating-------------- */}
              <div className="rating-container">
                <div className="rating-text inter-font-family-500">
                  <div className="start-gleeful">
                    {renderStars(
                      GetproductUrlId?.id,
                      GetproductUrlId?.rating,
                      GetproductUrlId
                    )}
                  </div>
                  <div className="inter-font-family-500 font-size-14 mx-2 font-sm-8 text-color-terracotta pt-2">
                    {GetproductUrlId?.rating} ({GetproductUrlId?.reviews}{" "}
                    Reviews)
                  </div>
                </div>
              </div>
              {/*-----------Product Price----------  */}
              <div className="product-value">
                <span className="product-real-value inter-font-family-400 text-color-black">
                  <del>₹ 1080.00</del>
                </span>
                <span className="product-discount-value inter-font-family-500 text-color-black">
                  ₹ 980.00
                </span>
              </div>
              {/*--------------Product Quantity------------  */}
              <div className="product-quantity">
                <label
                  className={`radio-button ${
                    selectedOption === "option1" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleRadioChange}
                  />
                  100 gm
                </label>

                <label
                  className={`radio-button ${
                    selectedOption === "option2" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleRadioChange}
                  />
                  500 gm
                </label>

                <label
                  className={`radio-button ${
                    selectedOption === "option3" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleRadioChange}
                  />
                  1 kg
                </label>

                <label
                  className={`radio-button ${
                    selectedOption === "option4" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option4"
                    checked={selectedOption === "option4"}
                    onChange={handleRadioChange}
                  />
                  5 kg
                </label>
              </div>
              {/*-------Delivery status based on Pincode------------  */}
              <div className="details-Delivery-status-div">
                <h3 className="heading-h2 check-delivery-status-text inter-font-family-500">
                  Check delivery status
                </h3>
                <div className="input-container">
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                    className="pincode-input inter-font-family-400"
                  />
                  <button
                    onClick={checkDeliveryStatus}
                    className="check-button inter-font-family-500"
                  >
                    Check
                  </button>
                </div>
                {status && <div className="status-message">{status}</div>}
              </div>
              {/*----- Buttons------- */}
              <div className="d-inline-block d-md-flex mb-3 procced-btn">
                <button className="btn-buy-now inter-font-family-500">
                  Buy Now
                </button>
                <button className="btn-add-to-cart inter-font-family-500 mt-3 mt-md-0">
                  Add To Cart
                </button>
              </div>

              {/* Tabs Component */}
              <TabComponent />
            </div>
          </div>

          <div className="pt-5">
            <p className="font-size-24 josefin-sans-font-family-600 text-color-dark-grayish-blue text-lg-start text-center">
              Recommendations For you
            </p>
            <ProductCard />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center padding-top-100 position-relative">
          <div className="col-lg-5 col-md-5">
            <div className="product-description-img ms-5"></div>

            <div className="position-absolute top-50 start-50 translate-middle text-center z-3 mt-5">
              <p className="font-size-24 feedback-text font-sm-size-18 text-center">
                Want to share your Product or Delivery experience with us?
              </p>
              <NavLink to={`/feedback/${GetproductUrlId?.id}`}>
                <button className="text-white feedbak-btn px-4 py-2 mt-2 font-size-16 inter-font-family-400 rounded-3 border-0">
                  Submit Feedback
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/*------------ Product detail End----------- */}
        <Footer />
      </section>
    </>
  );
};

export default ProductDescription;
