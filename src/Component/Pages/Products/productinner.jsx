import React from "react";
import Navbar from "../../Common/Navbar";
import Sort from "../../Assets/img/Product/SlidersHorizontal.svg";
import Funnel from "../../Assets/img/Product/Funnel.svg";
import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
import Images2 from "../../Assets/img/Shopcategory/Soyabean chunk small size.png";
import Images3 from "../../Assets/img/Shopcategory/Organic Jaggery Powder.png";
import Images4 from "../../Assets/img/Shopcategory/Hing Powder.png";
import AddtoCard from "../../Common/Addtocard";
import Footer from "../../Common/Footer";
import FilterDropDown from "../../Common/Filter/filter";
import SortDropdown from "../../Common/Sort/sort";

const BestSellers = [
  {
    id: 1,
    name: "Organic Kabuli Chana",
    price: "180.00",
    qty: "500 gm",
    image: Images1,
    rating: 3.5,
    reviews: 312,
  },
  {
    id: 2,
    name: "Soyabean Chunk Small Size",
    price: "58.00",
    qty: "500 gm",
    image: Images2,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 3,
    name: "Organic Jaggery Powder",
    price: "54.00",
    qty: "500 gm",
    image: Images3,
    rating: 5,
    reviews: 210,
  },
  {
    id: 4,
    name: "Hing Powder",
    price: "1200.00",
    qty: "500 gm",
    image: Images4,
    rating: 5,
    reviews: 210,
  },
  {
    id: 5,
    name: "Organic Kabuli Chana",
    price: "180.00",
    qty: "500 gm",
    image: Images1,
    rating: 3.5,
    reviews: 312,
  },
  {
    id: 6,
    name: "Soyabean Chunk Small Size",
    price: "58.00",
    qty: "500 gm",
    image: Images2,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 7,
    name: "Organic Jaggery Powder",
    price: "54.00",
    qty: "500 gm",
    image: Images3,
    rating: 5,
    reviews: 210,
  },
  {
    id: 8,
    name: "Hing Powder",
    price: "1200.00",
    qty: "500 gm",
    image: Images4,
    rating: 5,
    reviews: 210,
  },
  {
    id: 9,
    name: "Organic Kabuli Chana",
    price: "180.00",
    qty: "500 gm",
    image: Images1,
    rating: 3.5,
    reviews: 312,
  },
  {
    id: 10,
    name: "Soyabean Chunk Small Size",
    price: "58.00",
    qty: "500 gm",
    image: Images2,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 11,
    name: "Organic Jaggery Powder",
    price: "54.00",
    qty: "500 gm",
    image: Images3,
    rating: 5,
    reviews: 210,
  },
  {
    id: 12,
    name: "Hing Powder",
    price: "1200.00",
    qty: "500 gm",
    image: Images4,
    rating: 5,
    reviews: 210,
  },
];
const ProductInner = () => {
  return (
    <React.Fragment>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
          <div className="d-flex justify-content-center py-5">
            <div className="px-3">
              <SortDropdown />
            </div>
            <div className="px-3">
              <FilterDropDown />
            </div>
          </div>
        </div>
        <div className="background-color-light-grayish-yellow padding-bottom-60">
          <div className="container">
            <div className="row">
              {BestSellers.map((product, index) => (
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

export default ProductInner;
