import React, { useContext } from "react";
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


const WishList = () => {
  // useState for Add to Cart Button
  const { WishListItems } = useContext(CartContext);

  return (
    <React.Fragment>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
          {/* <div className="d-flex justify-content-center py-5">
            <div className="px-3">
              <SortDropdown />
            </div>
            <div className="px-3">
              <FilterDropDown />
            </div>
          </div> */}
        </div>
        <div className="background-color-light-grayish-yellow padding-bottom-60">
          <div className="container">
            {WishListItems?.length > 0 ? (
              <div className="row">
                {WishListItems?.map((product, index) => (
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
