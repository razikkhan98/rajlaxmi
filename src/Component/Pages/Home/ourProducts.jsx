import React, { useState } from "react";

// Images
import Mask from "../../Assets/img/ourProducts/Mask group.jpg";
import Care from "../../Assets/img/ourProducts/CaretDown.svg";
import Group from "../../Assets/img/ourProducts/Group.svg";
import Leaves from "../../Assets/img/ourProducts/leaves 1.svg";
import Vector from "../../Assets/img/ourProducts/Vector.svg";
import Email from "../../Assets/img/ourProducts/EnvelopeSimple.svg";
import Phone from "../../Assets/img/ourProducts/phone.svg";
import Map from "../../Assets/img/ourProducts/map.svg";

const CardData = [
  {
    title: "Nutrient-Rich Goodness",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Group,
    class: "goodness",
  },
  {
    title: "Naturally Pure Treats",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Leaves,
    class: "treats",
  },
  {
    title: "Eco-Friendly Choices",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Vector,
    class: "choices",
  },
  {
    title: "Nutrient-Rich Goodness",
    description:
      "quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam ultrices vehicula, lacus.",
    image: Group,
    class: "choices",
  },
];

const loction = [
  {
    img: Email,
    title: "rajlaxmiorganicfoods@gmail.com",
  },
  {
    img: Phone,
    title: +91 - 8769115905,
  },
  {
    img: Map,
    title:
      "Address: 11, manish bagh colony, Sapna sangeeta road, indore, madhya pradesh, 452001",
  },
];
const OurProducts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    <>
      <section className="background-color-light-grayish-yellow padding-top-100 padding-bottom-60">
        <div className="container py-2">
          <div className="josefin-sans-font-family-600 heading-text font-size-40 text-start">
            Explore Our Products
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="py-3">
                <img src={Mask} alt="Loading" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 py-3">
              <div className="josefin-sans-font-family-500 font-size-40 heading-title text-start mt-2">
                Natural and Nutritious dry Fruits
              </div>
              <div className="inter-font-family-400 font-size-24 text-capitalize text-description text-color-dark-ashy-blue py-3">
                quam dui. ex. elit quis dui. Morbi ac placerat Cras Nullam
                ultrices vehicula, lacus tincidunt id viverra nulla, dui. leo.
                urna at, sit lacus faucibus placerat
              </div>
              <div className="inter-font-family-400 font-size-24 text-capitalize text-description text-color-dark-ashy-blue">
                sollicitudin. Sed placerat sapien placerat. Ut venenatis quam
                felis, nisi viverra nisl. quis placerat.
              </div>
              <div className="py-4">
                <button className="background-color-terracotta font-size-16 inter-font-family-500 rounded-pill text-color-white py-2 px-4 border-0">
                  Explore Product
                  <span>
                    <img src={Care} alt="Loading" />
                  </span>
                  <span>
                    <img src={Care} alt="Loading" />
                  </span>
                  <span>
                    <img src={Care} alt="Loading" />
                  </span>
                </button>
              </div>
            </div>
            {CardData.map((item, index) => (
              <>
                <div className="natural-cards col-lg-3 col-md-6 col-sm-6 col-6 my-1">
                  <div className={item.class}>
                    <div className="py-2 d-flex  natural-icons justify-content-center">
                      <img
                        src={item.image}
                        alt="Loading"
                        className="img-fluid background-color-white rounded-3 p-2"
                        // style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <div className="inter-font-family-500 font-size-16 text-description text-center py-1">
                      {item.title}
                    </div>
                    <div className="inter-font-family-400 font-size-14 font-sm-8 text-capitalize text-center py-2">
                      {item.description}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <section>
        {/* <div className="container-fluid"> */}
          <div className="back-ground-img py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="josefin-sans-font-family-500 heading-title font-size-40 text-color-white pt-5 pb-4">
                    Have questions about our organic products?
                  </div>
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
                  <div className="py-2">
                    <img
                      src={Map}
                      alt="Loading"
                      className="background-color-white p-2 rounded-circle"
                    />
                    <span className="inter-font-family-500 font-size-16 text-description text-color-white px-2 text-capitalize ms-3">
                      Address: 11, manish bagh colony, Sapna sangeeta road,
                      indore, madhya pradesh, 452001
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-3 d-flex justify-content-center">
                  <div className="background-from  p-2">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        {/* <label htmlFor="name" className="form-label">
                          Name
                        </label> */}
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="mb-3 mx-1" style={{ width: "197px" }}>
                          {/* <label htmlFor="email" className="form-label">
                          Email
                        </label> */}
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-Mail"
                            required
                          />
                        </div>

                        <div className="mb-3 mx-1" style={{ width: "197px" }}>
                          {/* <label htmlFor="phone" className="form-label">
                          Phone
                        </label> */}
                          <input
                            type="tel"
                            className="form-control"
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
                          rows="4"
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
            <div className="together py-2 inter-font-family-500 font-size-24 heading-title text-color-white text-center">Let’s grow greener together!!!</div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default OurProducts;
