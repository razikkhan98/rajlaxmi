import React from "react";

// Common
import Navbar from "../../Common/Navbar";
import AddtoCard from "../../Common/Addtocard";

// Images
import About from "../../Assets/img/About/about.png";
import Images1 from "../../Assets/img/Shopcategory/Rectangle 55.png";
import Images2 from "../../Assets/img/Shopcategory/Soyabean chunk small size.png";
import Images3 from "../../Assets/img/Shopcategory/Organic Jaggery Powder.png";
import Images4 from "../../Assets/img/Shopcategory/Hing Powder.png";
import Images5 from "../../Assets/img/Shopcategory/Organic Barley Atta.png";
import Images6 from "../../Assets/img/Shopcategory/Organic Maize whole.png";
import Images7 from "../../Assets/img/Shopcategory/Organic Black sesame.png";
import Images8 from "../../Assets/img/Shopcategory/Organic Idli Rice.png";
import Images9 from "../../Assets/img/Shopcategory/Organic Coriander powder.png";
import Images10 from "../../Assets/img/Shopcategory/Organic nutmeg whole.png";
import Images11 from "../../Assets/img/Shopcategory/Organic Chaach Masala.png";
import Images12 from "../../Assets/img/Shopcategory/Organic Brown Sugar.png";

// Data Import
const BestSellers = [
  {
    title: "Best Sellers",
    products: [
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
    ],
  },
];

const SeasonalHarvest = [
  {
    title: "Seasonal Harvest",
    products: [
      {
        id: 5,
        name: "Organic Barley Atta",
        price: "70.00",
        qty: "500 gm",
        image: Images5,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 6,
        name: "Organic Maize whole",
        price: "35.00",
        qty: "500 gm",
        image: Images6,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 7,
        name: "Organic Black sesame",
        price: "240.00",
        qty: "500 gm",
        image: Images7,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 8,
        name: "Organic Idli Rice",
        price: "75.00",
        qty: "500 gm",
        image: Images8,
        rating: 4.5,
        reviews: 210,
      },
    ],
  },
];

const EcoEssentials = [
  {
    title: "Eco Essentials",
    products: [
      {
        id: 9,
        name: "Organic Coriander powder",
        price: "125.00",
        qty: "500 gm",
        image: Images9,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 10,
        name: "Organic Nutmeg Whole",
        price: "1,150.00",
        qty: "500 gm",
        image: Images10,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 11,
        name: "Organic Chaach Masala",
        price: "35.00",
        qty: "500 gm",
        image: Images11,
        rating: 4.5,
        reviews: 210,
      },
      {
        id: 12,
        name: "Organic Brown Sugar",
        price: "240.00",
        qty: "500 gm",
        image: Images12,
        rating: 4.5,
        reviews: 210,
      },
    ],
  },
];

const Home = () => {
  return (
    <React.Fragment>
      {/* Start Hero */}
      <section>
        <div className="bg-custom-gradient">
          <Navbar />

          <div className="container">
            <h1>Welcome to Rajlaxmi Organic Farm</h1>
          </div>
        </div>
      </section>

      {/* End Hero */}

      {/* Start About */}
      <section className="background-color-gleeful-opacity d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-sm-12">
              <div>
                <div className="josefin-sans-font-family font-size-40 text-color-dark-ashy-blue">
                  About Us
                </div>
                <div className="inter-font-family font-size-24 text-capitalize text-color-dark-ashy-blue py-4">
                  quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam
                  ultrices vehicula, lacus tincidunt id viverra nulla, dui. leo.
                  urna at, sit lacus faucibus placerat
                </div>
                <div className="inter-font-family font-size-24 text-capitalize text-color-dark-ashy-blue">
                  sollicitudin. Sed placerat sapien placerat. Ut venenatis quam
                  felis, nisi viverra nisl. quis placerat.
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <img src={About} alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/*Start Shop By Category Card */}
      <section className="background-color-light-grayish-yellow category-padding" >
        <div className="container">
          <div className="josefin-sans-font-family font-size-40 text-color-dark-grayish-blue pb-4">
            Shop By Category
          </div>
          {/*Start Best Sellers */}
          <div className="row">
            {BestSellers.map((category, index) => (
              <>
                <div
                  className="col-md-1 col-sm-12 d-flex justify-content-start align-items-center text-rotate pb-4"
                  key={index}
                >
                  <div className="josefin-sans-font-family-500 font-size-30 text-color-dark-grayish-blue">
                    {category.title}
                  </div>
                </div>
                <div className="col-md-11 col-sm-12">
                  <div className="row">
                    {category.products.map((product, index) => (
                      <div key={index} className="col-md-3 col-sm-12">
                        <AddtoCard key={product.id} product={product} />
                      </div>
                    ))}
                  </div>
                  <div className="col-md-12 py-5">
                    <div className="horizontal-line"> </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* End Best Sellers */}

          {/* Start Seasonal Harvest */}
          <div className="row">
            {SeasonalHarvest.map((category, index) => (
              <>
                <div
                  className="col-md-1 col-sm-12 d-flex justify-content-start align-items-center text-rotate pb-4"
                  key={index}
                >
                  <div className="josefin-sans-font-family-500 font-size-30 text-color-dark-grayish-blue">
                    {category.title}
                  </div>
                </div>
                <div className="col-md-11 col-sm-12">
                  <div className="row">
                    {category.products.map((product, index) => (
                      <div key={index} className="col-md-3 col-sm-12">
                        <AddtoCard key={product.id} product={product} />
                      </div>
                    ))}
                  </div>
                  <div className="col-md-12 py-5">
                    <div className="horizontal-line"> </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* End Seasonal Harvest */}

          {/* Start EcoEssentials*/}
          <div className="row">
            {EcoEssentials.map((category, index) => (
              <>
                <div
                  className="col-md-1 col-sm-12 d-flex justify-content-start align-items-center text-rotate pb-4"
                  key={index}
                >
                  <div className="josefin-sans-font-family-500 font-size-30 text-color-dark-grayish-blue">
                    {category.title}
                  </div>
                </div>
                <div className="col-md-11 col-sm-12">
                  <div className="row">
                    {category.products.map((product, index) => (
                      <div key={index} className="col-md-3 col-sm-12">
                        <AddtoCard key={product.id} product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/*End Shop By Category Card */}

      {/* Start Why Choose Us  */}
      <section className="py-5 background-color-blue">
        <div className="container">
          <div className="josefin-sans-font-family font-size-40 text-center">
            Why Choose us?
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
