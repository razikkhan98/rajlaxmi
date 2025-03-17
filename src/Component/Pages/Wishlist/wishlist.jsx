import React, { useContext } from "react";
import Navbar from "../../Common/Navbar";

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
            <div className="row">
              {WishListItems?.map((product, index) => (
                <>
                  <div key={index} className="col-md-3 col-sm-12  py-3">
                    <AddtoCard key={product.id} product={product} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </React.Fragment>
  );
};

export default WishList;
