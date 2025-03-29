import React from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ArrowLight from "../../Assets/img/ProductDescription/arrow-light.png";
import ArrowDark from "../../Assets/img/ProductDescription/arror-dark.png";

const ShippingPolicy = () => {
  return (
    <section>
      <div className="bg-custom-gradient-product">
        <Navbar />
        <div className="container pt-5 text-light-gray-color font-size-14 inter-font-family-500">
          <img src={ArrowDark} className="mx-2" alt="Loading" />{" "}
          <span className="text-dark">Shipping Policy</span>
        </div>
      </div>
      <div className="background-color-light-grayish-yellow py-3">
        <div className="container">
          <div className="refund-head my-4"></div>
          <hr />
          <div className="mt-4 mb-5 pb-5">
            <ul className="mt-4">
              <h5>
                <li>Processing Time</li>
              </h5>
              <li>All orders will be devliverd within , 5-10 Working days.</li>
              <li>
                Orders are not shipped or delivered on weekends or holidays.
              </li>
              <li>
                If we experience a high volume of orders, shipments may be
                delayed. In such cases, we will notify you via email or phone.
              </li>
            </ul>
            <ul className="mt-4">
              <h5>
                <li>Shipping Confirmation & Order Tracking</li>
              </h5>
              <li>
                {" "}
                You will receive a shipment confirmation email once your order
                has shipped, containing a tracking number and a link to track
                your package.
              </li>
              <li>
                {" "}
                Non-personal information is automatically collected as you
                interact with our website through the use of cookies, web
                beacons, and other tracking technologies.
              </li>
            </ul>
            <ul className="mt-4">
              <h5>
                <li> Damages</li>
              </h5>
              <li>
                {" "}
                RAJLAKSHMI JAVIKS is not responsible for products damaged or lost during
                shipping. If you received your order in a damaged condition,
                please contact the shipment carrier or our support team to file
                a claim.
              </li>
              <li>
                {" "}
                Please save all packaging materials and damaged goods before
                filing a claim.
              </li>
            </ul>
            <ul className="mt-4">
              <h5>
                <li> Undeliverable Packages</li>
              </h5>
              <li>
                {" "}
                If a package is returned to us as undeliverable due to an
                incorrect address provided by the customer, additional shipping
                charges may apply for reshipping.
              </li>
            </ul>
            <ul className="mt-4">
              <h5>
                <li> Contact Us</li>
              </h5>
              <li>
                {" "}
                For questions about shipping or issues with your order, please
                contact us:
              </li>
              <li> Email: rajlaxmiorganicfoods@gmail.com</li>
              <li> Phone: +91 8769115905</li>
              <li> Business Hours: Mon to Sat 10Am to 8Pm</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ShippingPolicy;
