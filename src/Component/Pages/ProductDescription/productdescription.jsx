import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import productFullNew from "../../Assets/img/ProductDescription/productFullNew.png";
import productSmall1 from "../../Assets/img/ProductDescription/productSmall1.png";
import productSmall2 from "../../Assets/img/ProductDescription/productSmall2.png";
import productSmall3 from "../../Assets/img/ProductDescription/productSmall3.png";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ProductCard from "../../Common/ProductDescriptionCard/ProductCard";
import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";
import { FaRegHeart, FaStarHalfAlt } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import FillHeart from "../../Assets/img/slickimg/fillheart.svg";
import { useForm } from "react-hook-form";
// import { useLocation, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import CheckMark from "../../Assets/img/ProductDescription/check-mark_5290058 1.svg";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/UserContext";
import {
  renderStars,
  StarRating,
} from "../../Common/RatingFunctionality/RatingFunctionality";
import axios from "axios";
import { FetchRatingDataAPI, postData } from "../../../services/apiService";
import { toast } from "react-toastify";
import RecommendNavSearchCard from "../../Common/AutoSuggestModalCards/RecomendNavSearchCard";
import Product1 from "../../Assets/img/ProductDescription/Rectangle 55.png";
import AddToCartProccess from "../../Common/AddToCartProccess/AddToCartProccess";

// json
const ProductCardData = [
  {
    id: 1,
    name: "Organic Kabuli Chana",
    price: "180.00",
    qty: "500 gm",
    image: Product1,
    rating: 3.5,
    reviews: 312,
  },
  {
    id: 2,
    name: "Soyabean Chunk Small Size",
    price: "58.00",
    qty: "500 gm",
    image: Product1,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 3,
    name: "Organic Jaggery Powder",
    price: "54.00",
    qty: "500 gm",
    image: Product1,
    rating: 5,
    reviews: 210,
  },
  {
    id: 4,
    name: "Hing Powder",
    price: "1200.00",
    qty: "500 gm",
    image: Product1,
    rating: 5,
    reviews: 210,
  },
];

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
          ? `active-tabPanel tab-content d-block inter-font-family-400 ${
              children?.type?.name == "CustomerReviews" ? "mt-3" : ""
            }`
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
  // Rating States
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratingsBreakdown, setRatingsBreakdown] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  // ==========
  // Fetch rating
  // ===========
  const FetchRating = async () => {
    try {
      const response = await FetchRatingDataAPI(product?.id);
      
      // setFetchRatingData(response);
      setAverageRating(response?.averageRating || 0);
      setTotalReviews(response?.totalReviews || 0);
      setRatingsBreakdown(
        response?.ratingsBreakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      );
      setReviews(response?.reviews || []);

      setReviews(response?.reviews);
    } catch (error) {}
  };
  useEffect(() => {
    FetchRating();
  }, []);
  return (
    <div className="customer-review ms-3">
      {[5, 4, 3, 2, 1]?.map((rating) => (
        <div className="row rating-text inter-font-family-500 pb-2">
          <div className="col-4 col-md-2 col-lg-2 start-gleeful px-0">
            {renderStars(product?.id, rating, product)}
          </div>
          <div className="col-3 progress prog px-0">
            <div
              class="progress-bar prog-bar"
              role="progressbar"
              style={{ width: `${ratingsBreakdown[rating]}%` }}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="col-4 col-lg-7 col-md-7 inter-font-family-500 font-size-12  font-sm-8 text-color-gleeful  text-decoration-underline">
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const params = useParams();
  // ============
  // States
  // ==========
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("100 gm");
  const [FetchRatingData, setFetchRatingData] = useState();
  const [activeImage, setActiveImage] = useState(productFullNew); // Main Image State
  // const smallImages = [product.image, product.smallImage1, product.smallImage2, product.smallImage3];
  const smallImages = [productSmall1, productSmall2, productSmall3];
  const { AddToWishList, WishListItems } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const GetproductUrlId = location.state?.product;
  let uid = sessionStorage.getItem("uid");

  let UserDetail = JSON?.parse(sessionStorage.getItem("userDetail") || "{}");
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

  // ====================================
  // Check Product already added or not
  // ==================-=================
  let storedCart = JSON.parse(sessionStorage.getItem(`cart_${uid}`)) || {};
  const itemsArray = [];
  Object.keys(storedCart).forEach((productId) => {
    Object.keys(storedCart[productId]).forEach((weight) => {
      itemsArray.push({
        id: productId,
        weight,
        quantity: storedCart[productId][weight].quantity,
        productDetails: storedCart[productId][weight].productDetails,
      });
    });
  });
  const isAlreadyAdd = itemsArray?.some(
    (product) =>
      Number(product?.productDetails?.id) === Number(GetproductUrlId?.id) &&
      product?.productDetails?.qty === selectedOption
  );

  // =================
  // Handle Add To Cart Functionality
  // =================

  const navigate = useNavigate();
  const isAuthenticated = !!sessionStorage.getItem("token"); 

  const HandleAddToCart = async () => {
        if (!isAuthenticated) {
          navigate("/login");
          toast.warning(" Please login to add items!", {
            position: "top-right",
            autoClose: 3000,
          });
          return;
        }
    try {
      const payload = {
        uid,
        product_id: GetproductUrlId?.id,
        product_name: GetproductUrlId?.name,
        product_price: GetproductUrlId?.price,
        product_quantity: 1,
        product_weight: selectedOption,
      };
      const response = await postData("addtocart", payload);
      if (response?.message == "Added to cart successfully") {
        toast.success(`${GetproductUrlId?.name} added to cart!`, {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(`${error?.message}`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false); // Get Rating
  const [GetRating, setGetRating] = useState();
  // Feedback submit
  const onSubmit = async (data) => {
    if (!GetRating) {
      toast.error(`Please Rate Product`, {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    try {
      const payload = {
        uid,
        user_name: UserDetail?.name,
        user_email: UserDetail?.email,
        title: data?.title,
        rating: GetRating,
        feedback: data?.message,
        product_id: params?.id,
      };
      const response = await postData("feedback", payload);
      if (response?.success) {
        toast.success(`${response?.message}`, {
          position: "top-right",
          autoClose: 2000,
        });
      }
      reset();
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const FilterWish = WishListItems?.filter((check) => check?.uid == uid);

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
            
            <div className="col-12 col-md-12 col-lg-5">
              {/* Full-size Image */}
              <div className="slider-fullsize-image-div">
                <div className="slider-fullsize-img-inner">
                  {/* Icons (Heart & Share) */}
                  <div
                    className="heart"
                    onClick={() => AddToWishList(GetproductUrlId)}
                  >
                    {!FilterWish?.some(
                      (item) =>
                        Number(item?.product_id) === Number(GetproductUrlId?.id)
                    ) ? (
                      <FaRegHeart className="text-color-terracotta" />
                    ) : (
                      <img
                        className="h-auto object-fit-none"
                        src={FillHeart}
                        alt=""
                      />
                    )}
                  </div>
                  {/* <div className="share">
                    <PiShareFatBold className="text-color-terracotta" />
                  </div> */}
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
                <span className="d-block">(Incl. of all taxes)</span>
              </div>
              {/*--------------Product Quantity------------  */}
              <div className="product-quantity">
                {["100 gm", "500 gm", "1 kg", "5 kg"].map((weight, index) => (
                  <label
                    key={index}
                    className={`radio-button ${
                      selectedOption === weight ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      className="product-quantity-link inter-font-family-400"
                      name="option"
                      value={weight} // Use the actual weight value
                      checked={selectedOption === weight} // Check if this weight is selected
                      onChange={handleRadioChange}
                    />
                    {weight}
                  </label>
                ))}
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
                <NavLink to="">
                  <button
                    onClick={() => handleShow()}
                    className="btn-buy-now inter-font-family-500"
                  >
                    Buy Now
                  </button>
                </NavLink>
                <button
                  onClick={() => HandleAddToCart()}
                  className={`btn-add-to-cart inter-font-family-500 mt-3 mt-md-0 ${
                    !isAlreadyAdd ? "" : "btn btn-outline-secondary "
                  }`}
                  disabled={isAlreadyAdd}
                >
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
            {/* <ProductCard /> */}
            <div className="d-flex  overflow-auto">
              {ProductCardData?.map((i) => (
                <RecommendNavSearchCard product={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center padding-top-100 position-relative">
          {!uid ? (
            <></>
          ) : (
            <div className="col-lg-10 col-md-10 px-4">
              <p className="font-size-24 feedback-text font-sm-size-18 text-center">
                Want to share your Product or Delivery experience with us?
              </p>

              <div className="">
                <p className="font-size-32 feedback-heading josefin-sans-font-family">
                  Rate Us
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="feedback-bg-img row"
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="font-size-18 product-qty inter-font-family-500">
                      Tap To Rate
                    </div>
                    <div className="ms-5 feedback-rating mb-0">
                      <StarRating SetRating={setGetRating} />
                    </div>
                  </div>
                  <hr />

                  <div className="mt-4 col-lg-5">
                    <label className="inter-font-family-500 font-size-12 product-qty d-block">
                      Title for your review
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Title here"
                      {...register("title", {
                        required: "Title is required",
                      })}
                      className="feedback-input border-0 rounded-3 pb-3 pt-2 mt-1 px-3 feedback-inp-tag w-100"
                    />
                    {errors.title && (
                      <p className="text-danger">{errors.title.message}</p>
                    )}
                  </div>

                  <div className="my-4 col-lg-5">
                    <label
                      for="exampleFormControlTextarea1"
                      class="inter-font-family-500 product-qty font-size-12 d-block"
                    >
                      Your Review
                    </label>
                    <textarea
                      class="feedback-input border-0 rounded-3 p-2 mt-1 feedback-inp-tag w-100"
                      placeholder="Enter your comment here"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      {...register("message", {
                        required: "First name is required",
                      })}
                    ></textarea>
                  </div>
                  <hr />
                  <div className="pb-5 mb-5 d-flex d-lg-block justify-content-center justify-content-lg-start ">
                    <button
                      type="submit"
                      className="background-color-terracotta w-25 mb-5 mt-5 text-color-white py-2 inter-font-family-500 font-size-16 rounded border-0 w-auto px-1"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
              {/* </div> */}
            </div>
          )}
        </div>
        {/* </div> */}
        {/*------------ Product detail End----------- */}
        <Footer />
      </section>

      <AddToCartProccess showModal={showModal} handleClose={handleClose} />
    </>
  );
};

export default ProductDescription;
