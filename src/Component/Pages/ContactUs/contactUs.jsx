import React, { useContext, useState } from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";

// images
import Email from "../../Assets/img/ourProducts/EnvelopeSimple.svg";
import Phone from "../../Assets/img/ourProducts/phone.svg";
import Map from "../../Assets/img/ourProducts/map.svg";
import facebook from "../../Assets/img/Contact/icons8-facebook.svg";
import instagram from "../../Assets/img/Contact/icons8-instagram.svg";
import linkedin from "../../Assets/img/Contact/icons8-linkedin.svg";
import youtube from "../../Assets/img/Contact/icons8-youtube.svg";

const ContactUs = () => {
  // State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Functions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can make your POST API request here
  };

  return (
    <React.Fragment>
      <section>
        <div className="bg-custom-gradient-product">
          <Navbar />
          <div className=" padding-bottom-100 padding-top-100">
            <div className="padding-bottom-100 mb-5">
              <div className="container contact-section Delivery-status-div">
                <div className="row contact-section-row">
                  <div className="col-lg-7 d-grid">
                    <div className="mt-3 pt-lg-3 pt-sm-0 mx-1 mb-3  ">
                      <img className="mx-3" src={facebook} alt="" />
                      <img className="mx-3" src={instagram} alt="" />
                      <img className="mx-3" src={youtube} alt="" />
                      <img className="mx-3" src={linkedin} alt="" />
                    </div>
                    <div className="d-lg-flex d-sm-grid align-items-end pb-3 mb-lg-3 mb-sm-0 mx-lg-4 mx-sm-0">
                      <div className="contact-map ">
                        <img src="" alt="" />
                        <iframe
                          title="unique"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9386.246714403482!2d80.94632178408278!3d26.82813556144555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfcf919137107%3A0xaafc9fdde5fc4bdc!2sRumeno%20Farmotech%20%7C%20Animal%20Feed%20Manufacturer%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1713937138780!5m2!1sen!2sin"
                          className="w-100 h-100"
                          allowFullScreen="false"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                      <div className="ms-lg-3 ms-sm-0">
                        <div className="py-2">
                          <img
                            src={Email}
                            alt="Loading"
                            className="background-color-white p-2 rounded-circle"
                          />
                          <span className="inter-font-family-500 text-description font-size-16 text-color-white ms-3">
                            rajlaxmiorganicfoods@gmail.com
                          </span>
                        </div>
                        <div className="py-2">
                          <img
                            src={Phone}
                            alt="Loading"
                            className="background-color-white p-2 rounded-circle"
                          />
                          <span className="inter-font-family-500 text-description font-size-16 text-color-white ms-3">
                            +91-8769115905
                          </span>
                        </div>
                        <div className="py-2 d-flex">
                          <div>
                            <img
                              src={Map}
                              alt="Loading"
                              className="background-color-white p-2 rounded-circle"
                            />
                          </div>
                          <span className="inter-font-family-500 font-size-16 text-description text-color-white text-capitalize ms-3 contact-address">
                            Address: 11, manish bagh colony, Sapna sangeeta
                            road, indore, madhya pradesh, 452001
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-center mt-lg-3 mt-sm-0">
                    <div className="background-from contact-form  p-3 mt-4 mx-lg-4 mx-sm-4">
                      <form className="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                          {/* <label htmlFor="name" className="form-label">
                          Name
                        </label> */}
                          <input
                            type="text"
                            className="form-control contact-us-form"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="mb-3" style={{ width: "197px" }}>
                            {/* <label htmlFor="email" className="form-label">
                          Email
                        </label> */}
                            <input
                              type="email"
                              className="form-control contact-us-form"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="E-Mail"
                              required
                            />
                          </div>

                          <div className="mb-3 ms-2" style={{ width: "197px" }}>
                            {/* <label htmlFor="phone" className="form-label">
                          Phone
                        </label> */}
                            <input
                              type="tel"
                              className="form-control contact-us-form"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Contact No"
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          {/* <label htmlFor="message" className="form-label">
                          Message
                        </label> */}
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="6"
                            required
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="background-color-terracotta text-color-white py-2 w-100 inter-font-family-500 font-size-16 rounded border-0"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
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
