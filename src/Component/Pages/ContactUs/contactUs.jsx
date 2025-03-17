import React, { useContext } from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";

const ContactUs = () => {
  // useState for Add to Cart Button

  return (
    <React.Fragment>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
        <div className=" padding-bottom-60 padding-top-100">
          <div className="container contact-section ">
            <div className="row ">
            <div className="col-lg-7"></div>
            <div className="col-lg-5"></div>
            </div>
            </div>
        </div>
            </div>

        <Footer />
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
