import React, { useState } from "react";
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
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";

const BestSellers = [
  {
    id: 1,
    name: "Organic Kabuli Chana",
    price: "190.00",
    qty: "500 gm",
    image: Images1,
    rating: 3.5,
    reviews: 312,
  },
  {
    id: 2,
    name: "Soyabean Chunk Small Size",
    price: "22.00",
    qty: "500 gm",
    image: Images2,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 3,
    name: "Organic Jaggery Powder",
    price: "32.00",
    qty: "500 gm",
    image: Images3,
    rating: 5,
    reviews: 210,
  },
  {
    id: 4,
    name: "Hing Powder",
    price: "1300.00",
    qty: "500 gm",
    image: Images4,
    rating: 5,
    reviews: 210,
  },
  {
    id: 5,
    name: "Organic Kabuli Chana",
    price: "170.00",
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
    price: "44.00",
    qty: "500 gm",
    image: Images2,
    rating: 4.0,
    reviews: 210,
  },
  {
    id: 11,
    name: "Organic Jaggery Powder",
    price: "52.00",
    qty: "500 gm",
    image: Images3,
    rating: 5,
    reviews: 210,
  },
  {
    id: 12,
    name: "Hing Powder",
    price: "120.00",
    qty: "500 gm",
    image: Images4,
    rating: 5,
    reviews: 210,
  },
];
const ProductInner = () => {
  // =======================
  // Sort Functionality
  // =======================

  const [sortedProducts, setSortedProducts] = useState(BestSellers);

  const handleSortChange = (optionId) => {
    let sortedArray = [...BestSellers];

    switch (optionId) {
      case 1:
        break;
      case 2:
        sortedArray = sortedArray.sort((a, b) => b.reviews - a.reviews);
        break;
      case 3:
        sortedArray = sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 4:
        sortedArray = sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 5:
        sortedArray = sortedArray.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case 6:
        sortedArray = sortedArray.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case 7:
        break;
      case 8:
        break;
      default:
        break;
    }

    setSortedProducts(sortedArray);
    console.log(sortedArray); // Log sorted data to console
  };
  // -========== Sort Functionality End =============

  return (
    <React.Fragment>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
          <div className="container pt-5 text-light-gray-color font-size-14 inter-font-family-400">
            <span> Back</span>{" "}
            <img src={ArrowDark} className="mx-2" alt="Loading" />{" "}
            <span className=" text-color-dark-grayish-blue">Spices</span>
            <div className="d-flex product-inner-page-filter justify-content-end pt-3">
              <div className="px-3 product-page-sort-filter">
                <SortDropdown onSortChange={handleSortChange} />
              </div>
              <div className="px-3 product-page-filter-filter">
                <FilterDropDown />
              </div>
            </div>
          </div>
        </div>
        <div className="background-color-light-grayish-yellow padding-bottom-60 pb-5">
          <div className="container pb-5 mb-5">
            <div className="row mb-5 justify-content-center">
              <h2 className="ms-3 text-color-dark-grayish-blue font-size-32 josefin-sans-font-family-500">
                Spices
              </h2>
              {sortedProducts?.map((product, index) => (
                <>
                  <div
                    key={index}
                    className="col-md-5 col-lg-3 col-sm-12  py-3"
                  >
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
