import React from "react";

// Images
import Images1 from "../../Assets/img/Proudly Certified/Proudly Certified-1.svg";
import Images2 from "../../Assets/img/Proudly Certified/Proudly Certified-2.svg";
import Images3 from "../../Assets/img/Proudly Certified/Proudly Certified-3.svg";
import Images4 from "../../Assets/img/Proudly Certified/Proudly Certified-4.svg";

const ProudlyCertified = () => {
  return (
    <>
      <section className="padding-top-100 padding-bottom-60 background-color-light-grayish-yellow">
        <div className="container pb-5">
          <div className="row pb-5">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center pb-5">
              <div className="josefin-sans-font-family-600 heading-text font-size-40 text-color-dark-grayish-blue">
                Proudly Certified
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <img src={Images1} alt="Loading" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <img src={Images2} alt="Loading" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <img src={Images3} alt="Loading" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <img src={Images4} alt="Loading" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProudlyCertified;
