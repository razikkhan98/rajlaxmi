import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Common/Navbar";
import Sort from "../../Assets/img/Product/SlidersHorizontal.svg";
import Funnel from "../../Assets/img/Product/Funnel.svg";
import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
import Images2 from "../../Assets/img/Shopcategory/Soyabean chunk small size.png";
import Images3 from "../../Assets/img/Shopcategory/Organic Jaggery Powder.png";
import Images4 from "../../Assets/img/Shopcategory/Hing Powder.png";
import empty from "../../Assets/img/slickimg/emplywish-removebg-preview.png";
import AddtoCard from "../../Common/Addtocard";
import Footer from "../../Common/Footer";

import { CartContext } from "../../Context/UserContext";
import { getData } from "../../../services/apiService";
import axios from "axios";

const WishList = () => {
  // useState for Add to Cart Button
  const { WishListItems, setWishListItems } = useContext(CartContext);

  // Functions
  const FetchWishListData = async () => {
    try {
      // const response = await getData("getAllWishlist");
      const response = await axios.get(
        "https://7839-106-222-215-159.ngrok-free.app/rajlaxmi/getAllWishlist",
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      const transformedProducts = response?.data?.wishlist?.map((product) => ({
        id: product?.id,
        name: product?.product_name,
        price: product?.product_price,
        qty: `${product?.product_quantity} gm`,
        image: product?.product_image,
      }));
      setWishListItems(response?.data?.wishlist);
    } catch (error) {}
  };

  const transformedArray = WishListItems?.map((obj) => ({
    backId: obj?.id,
    uid: obj?.uid,
    name: obj?.product_name,
    price: obj?.product_price,
    quantity: obj?.product_quantity,
    id: obj?.product_id,
    image: obj?.product_image,
  }));

  // get Wishlist Data
  useEffect(() => {
    FetchWishListData();
  }, []);

  return (
    <React.Fragment>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
        </div>
        <div className="background-color-light-grayish-yellow padding-bottom-60">
          <div className="container">
            {WishListItems?.length > 0 ? (
              <div className="row">
                {transformedArray?.map((product, index) => (
                  <>
                    <div key={index} className="col-md-3 col-sm-12  py-3">
                      <AddtoCard key={product.id} product={product} />
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <div className="row justify-content-center">
                <img className="w-50" src={empty} alt="" />
              </div>
            )}
          </div>
        </div>

        <Footer />
      </section>
    </React.Fragment>
  );
};

export default WishList;
