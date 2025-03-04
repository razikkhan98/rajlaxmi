import React from "react";

// Home inside the common
import About from "./about";
import ShopCategory from "./shopCategory";
import WhyChoose from "./whyChoose";

// Common
import Navbar from "../../Common/Navbar";

// Images
import AboutImg from "../../Assets/img/About/about.png";
import Home1 from "../../Assets/img/Home/homeimg1.png";
import Home2 from "../../Assets/img/Home/homeimg2.png";
import Home3 from "../../Assets/img/Home/homeimg3.png";
import Home4 from "../../Assets/img/Home/homeimg4.png";
import Home5 from "../../Assets/img/Home/homeimg5.png";
import Home6 from "../../Assets/img/Home/homeimg6.png";
import OurProducts from "./ourProducts";
import ProudlyCertified from "./proudlyCertified";
import Footer from "../../Common/Footer";

const Home = () => {
  return (
    <React.Fragment>
      {/* Start Hero */}
      <section>
        <div className="home bg-custom-gradient">
          <Navbar />

          <div className="container">
            {/* <div className="row py-5">
              <div className="col-lg-3 col-md-12 px-0 home-col1">
                <p className="home-para1 mb-0 pb-1">Organic Product</p>
                <div className="img1">
                  <img src={Home1} alt="Loading" />
                </div>
                <div className="img2 mt-4">
                  <img src={Home2} alt="Loading" />
                </div>
              </div>
              <div className="col-lg-4 me-4 px-0">
                <div className="img3">
                  <img src={Home3} alt="Loading" />
                </div>
              </div>
              <div className="col-lg-4 px-0">
                <div className="image45">
                  <div className="img4">
                    <img src={Home4} alt="Loading" />
                  </div>
                  <div className="img5">
                    <img src={Home5} alt="Loading" />
                  </div>
                </div>
                <div className="img6 mt-4">
                  <p className="home-para2">100% Vegeterian</p>
                  <img src={Home6} alt="Loading" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* End Hero */}

      {/* Start About */}
      <About img={AboutImg} />
      {/* End About */}

      {/*Start Shop By Category Card */}
      <ShopCategory />
      {/*End Shop By Category Card */}

      {/* Start Why Choose Us  */}
      <WhyChoose />
      {/* End Why Choose Us  */}

      {/*Start Explore Our Products */}
      <OurProducts />
      {/*End Explore Our Products */}

      {/* Start Proudly certified */}

      <ProudlyCertified />

      {/* End Proudly certified */}

      {/* Start Footer  */}
      <Footer/>
      {/* Start End */}
    </React.Fragment>
  );
};

export default Home;
