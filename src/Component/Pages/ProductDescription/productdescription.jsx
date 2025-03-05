import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productFullNew from "../../Assets/img/ProductDescription/productFullNew.png";
import productSmall1 from "../../Assets/img/ProductDescription/productSmall1.png";
import productSmall2 from "../../Assets/img/ProductDescription/productSmall2.png";
import productSmall3 from "../../Assets/img/ProductDescription/productSmall3.png";
import wishlistHeart from "../../Assets/img/ProductDescription/wishlistHeart.svg";
import share from "../../Assets/img/ProductDescription/share.svg";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ProductCard from "../../Common/ProductDescriptionCard/ProductCard";
import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png"
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png"


const Tab = ({ label, isActive, onClick, className }) => {
  return (
    <button className={`${className} ${isActive ? 'active-tab tab-heading' : 'nonactive-tab tab-heading'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabPanel = ({ children, isActive, className }) => {
  return (
    <div className={`${className} ${isActive ? 'active-tabPanel tab-content d-block inter-font-family-400' : 'tab-content d-none inter-font-family-400'}`}
    >
      {children}
    </div>
  );
};

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Description', content: 'Savor the richness of 100% Organic Anjeer (Dried Figs)—pure, natural, and free from additives or preservatives. Handpicked from the finest farms, our Anjeer is sun-dried to perfection, retaining its natural sweetness and essential nutrients. Soft, chewy, and delicious, it makes for a guilt-free snack or a versatile ingredient in your favorite recipes.' },
    { label: 'Benefits', content: 'This is content for Tab 2' },
    { label: 'Customer Reviews', content: 'This is content for Tab 3' },
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
  const [rating, setRating] = useState(3.2); // Initialize with a default fractional rating
  const totalReviews = 312;

  const handleRating = (value) => {
    setRating(value);
  };

  const [selectedOption, setSelectedOption] = useState('');
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const pincodeData = [
    { pincode: '110001', status: 'Delivery is available' },
    { pincode: '110002', status: 'Delivery is not available' },
    { pincode: '110003', status: 'Delivery is available' },
    { pincode: '110004', status: 'Delivery is not available' },
    { pincode: '110005', status: 'Delivery is available' },
    { pincode: '110006', status: 'Delivery is not available' },
    { pincode: '110007', status: 'Delivery is available' },
    { pincode: '110008', status: 'Delivery is not available' },
    { pincode: '110009', status: 'Delivery is available' },
    { pincode: '110010', status: 'Delivery is not available' },
  ];

  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState('');

  const checkDeliveryStatus = () => {
    const data = pincodeData.find((item) => item.pincode === pincode);
    if (data) {
      setStatus(data.status);
    } else {
      setStatus('Pincode not found. Please check and try again.');
    }

    // Remove the status message after a random delay between 3 and 5 seconds
    const delay = Math.floor(Math.random() * 2000) + 3000; // Delay between 3000ms (3s) and 5000ms (5s)

    setTimeout(() => {
      setStatus('');
    }, delay);
  };

  const renderStar = (starValue) => {
    const decimalPart = rating - Math.floor(rating);
    if (rating >= starValue) {
      return "full";
    } else if (decimalPart >= 0.75 && rating >= starValue - 0.75) {
      return "three-quarter";
    } else if (decimalPart >= 0.5 && rating >= starValue - 0.5) {
      return "half";
    } else if (decimalPart >= 0.25 && rating >= starValue - 0.25) {
      return "quarter";
    } else {
      return "empty";
    }
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      const thumbnails = [productSmall1, productSmall3, productSmall2];
      return (
        <a>
          <img src={thumbnails[i]} alt={`thumbnail-${i + 1}`} />
        </a>
      );
    },
  };

  return (
    <>
      <div className="bg-custom-gradient-product productDescription-section">
        <Navbar />
        <div className="container pt-5 text-light-gray-color font-size-14 inter-font-family-500">
         <span> Back</span> <img src={ArrowLight} className="mx-2" alt="Loading" /> <span>Dry Fruits</span> <img src={ArrowDark} className="mx-2" alt="Loading" /> <span className="text-dark">Anjeer</span>
        </div>
      </div>

      <section className=" background-color-light-grayish-yellow">
        <div className="container">
          <div className="row">
            {/*------------ slider section start------------ */}
            <div className="col-12 col-md-5">
              {/* <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <img src={productSmall2} alt="product1" />
                  </div>
                  <div className="">
                    <img src={productSmall1} alt="slideone" />
                  </div>
                  <div>
                    <img src={productSmall3} alt="slidethree" />
                  </div>
                </Slider>
              </div> */}
              <div className="slider-fullsize-image-div">
                <img className="wishlist-icon" src={wishlistHeart} alt="wishlist" />
                <img className="share-icon" src={share} alt="share" />
                <div className="slider-fullsize-img-inner">
                  <img className="w-100 slider-fullimage" src={productFullNew} alt="activeslide" />
                </div>
              </div>
              <div className="slider-slide-image-div">
                <div className="slider-slide-image-inner">
                  <img className="h-100 w-100 slider-slide-image" src={productSmall2} alt="product1" />
                </div>
                <div className="slider-slide-image-inner">
                  <img className="h-100 w-100 slider-slide-image" src={productSmall1} alt="slideone" />
                </div>
                <div className="slider-slide-image-inner">
                  <img className="h-100 w-100 slider-slide-image" src={productSmall3} alt="slidethree" />
                </div>
              </div>
            </div>
            {/*------------ slider section End------------ */}
            {/*------------ Product detail start----------- */}
            <div className="col-1"></div>
            <div className="col-12 col-md-6">
              <h1 className="heading-product-name text-color-black inter-font-family-500 mb-3 mt-3 mt-md-0">
                Organic Anjeer
              </h1>
              <p className="mb-3 product-description inter-font-family-400 text-color-black">
                Organic Lorem Ipsum cia doer la fansco anjeer la bela
              </p>
              {/*------------ Product rating-------------- */}
              <div className="rating-container">
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <span
                      key={starValue}
                      className={`star ${renderStar(starValue)}`}
                      onClick={() => handleRating(starValue)}
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                        >
                          <path
                            d="M7.99938 11.8182L11.4194 13.9213C11.5081 13.9752 11.6108 14.0015 11.7145 13.997C11.8182 13.9925 11.9183 13.9574 12.002 13.8961C12.0858 13.8347 12.1495 13.7499 12.185 13.6524C12.2206 13.5549 12.2265 13.449 12.2019 13.3482L11.2719 9.42379L14.3156 6.79879C14.3932 6.73064 14.4492 6.64127 14.4766 6.54169C14.504 6.44211 14.5016 6.3367 14.4697 6.23845C14.4379 6.14021 14.378 6.05344 14.2974 5.98885C14.2168 5.92427 14.1191 5.8847 14.0163 5.87504L10.0219 5.55004L8.48313 1.82504C8.4439 1.72893 8.37694 1.6467 8.29078 1.58881C8.20462 1.53092 8.10318 1.5 7.99938 1.5C7.89558 1.5 7.79413 1.53092 7.70797 1.58881C7.62182 1.6467 7.55485 1.72893 7.51563 1.82504L5.97688 5.55004L1.9825 5.87504C1.87898 5.88413 1.78043 5.92352 1.69917 5.98829C1.61791 6.05307 1.55754 6.14035 1.52559 6.23924C1.49365 6.33813 1.49156 6.44424 1.51958 6.54431C1.5476 6.64439 1.60448 6.73398 1.68313 6.80191L4.72688 9.42691L3.79688 13.3482C3.77229 13.449 3.77815 13.5549 3.81372 13.6524C3.8493 13.7499 3.91298 13.8347 3.99672 13.8961C4.08047 13.9574 4.18052 13.9925 4.28422 13.997C4.38793 14.0015 4.49064 13.9752 4.57938 13.9213L7.99938 11.8182Z"
                            stroke="#E07A5F"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill={renderStar(starValue) === "full" || renderStar(starValue) === "three-quarter" ? "#E07A5F" : "none"}
                          />
                        </svg>
                      </div>
                    </span>
                  ))}
                </div>

                <div className="rating-text inter-font-family-500">
                  <span className="rating-value">{rating.toFixed(1)}</span>
                  <span className="review-count">({totalReviews} reviews)</span>
                </div>
              </div>
              {/*-----------Product Price----------  */}
              <div className="product-value">
                <span className="product-real-value inter-font-family-400">
                  <del>₹ 1080.00</del>
                </span>
                <span className="product-discount-value inter-font-family-500">₹ 980.00</span>
              </div>
              {/*--------------Product Quantity------------  */}
              <div className="product-quantity">
                <label className={`radio-button ${selectedOption === 'option1' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleRadioChange}
                  />
                  100 gm
                </label>

                <label className={`radio-button ${selectedOption === 'option2' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleRadioChange}
                  />
                  500 gm
                </label>

                <label className={`radio-button ${selectedOption === 'option3' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option3"
                    checked={selectedOption === 'option3'}
                    onChange={handleRadioChange}
                  />
                  1 kg
                </label>

                <label className={`radio-button ${selectedOption === 'option4' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    className="product-quantity-link inter-font-family-400"
                    name="option"
                    value="option4"
                    checked={selectedOption === 'option4'}
                    onChange={handleRadioChange}
                  />
                  5 kg
                </label>
              </div>
              {/*-------Delivery status based on Pincode------------  */}
              <div className="Delivery-status-div">
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
                  <button onClick={checkDeliveryStatus} className="check-button inter-font-family-500">
                    Check
                  </button>
                </div>
                {status && <div className="status-message">{status}</div>}
              </div>
              {/*----- Buttons------- */}
              <div className="d-inline-block d-md-flex mb-4 procced-btn">
                <button className="btn-buy-now inter-font-family-500">Buy Now</button>
                <button className="btn-add-to-cart inter-font-family-500 mt-3 mt-md-0">Add To Cart</button>
              </div>

              {/* Tabs Component */}
              <TabComponent />
            </div>
          </div>

          <div className="pt-5">
            <p className="font-size-24 fw-bold">Recommendations For you</p>
            <ProductCard />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center padding-top-100 position-relative">
          <div className="col-lg-5">
            <div className="product-description-img ms-5">
            </div>

            <div className="position-absolute top-50 text-center z-3 mt-5">
              <p className="font-size-24 inter-font-family-400">Want to share your Product or Delivery experience with us?</p>
              <button className="text-white feedbak-btn px-4 py-2 mt-2 font-size-16 inter-font-family-400 rounded-3 border-0">Submit Feedback</button>
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
