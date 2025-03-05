import React, { useState } from "react";

// images
import rightTick from "../../Assets/img/ourProducts/rightTick.svg";
import prdimg from "../../Assets/img/Product/image 66.svg";
import trash from "../../Assets/img/ourProducts/TrashSimple.svg";
import cross from "../../Assets/img/Product/cross.svg";
import { Modal } from "react-bootstrap";

const AddToCartProccess = ({ showModal, handleClose }) => {
  // States
  const [step, setStep] = useState(0);
  const [Paymode, setPaymode] = useState(false);

  // Functions
  const handleTapSteps = () => {
    setStep(step + 1);
    if (step >= 1) {
      return setPaymode(!Paymode);
    }
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        className="AddToCartModal modal-fullscreen modal-dialog-centered modal-dialog-box"
      >
        <div className="modal-content AddToCartModal-modal bg-transparent">
          <div className="d-flex justify-content-center ">
            <div className="background-color-add-modal rounded-top-4 me-4">
              <img
                type="button"
                onClick={() => handleClose()}
                className="mx-4 mt-3 mb-2 "
                src={cross}
                alt=""
              />
            </div>
          </div>
          <Modal.Header className="modal-header AddToCartModal-header justify-content-center">
            <div className="d-flex">
              <div>
                <div
                  className={`tick-box${
                    step >= 1 ? "-active" : ""
                  } d-flex justify-content-center align-items-center`}
                >
                  {step >= 1 && <img src={rightTick} alt="" />}
                </div>
                <span>Cart</span>
              </div>

              <div className="text-center">
                <div className="d-flex">
                  <hr
                    className={`tick-progress-bar${step >= 1 ? "-active" : ""}`}
                  />
                  <div
                    className={`tick-box${
                      step >= 1 ? "-active" : ""
                    } d-flex justify-content-center align-items-center`}
                  >
                    {step >= 2 && <img src={rightTick} alt="" />}
                  </div>
                  <hr
                    className={`tick-progress-bar${step >= 2 ? "-active" : ""}`}
                  />
                </div>
                <span>Address</span>
              </div>

              <div>
                <div
                  className={`tick-box${
                    step >= 2 ? "-active" : ""
                  } d-flex justify-content-center align-items-center`}
                >
                  {step >= 2 && <img src={rightTick} alt="" />}
                </div>
                <span>Payment</span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className=" background-color-light-grayish-yellow pt-0">
            <div className="container-fluid">
              <div className={`row ${Paymode ? "" : "justify-content-evenly"}`}>
                {/* items Add */}
                <div
                  className={`col-lg-4 AddToCartModal-modal-grid-1 pt-3 ${
                    Paymode ? "d-none" : ""
                  } `}
                >
                  <div className="d-flex justify-content-between">
                    <span className="text-color-terracotta font-size-14 inter-font-family-500">
                      02 Products
                    </span>
                    <span>Clear all</span>
                  </div>
                  <hr />

                  {[1, 2, 3]?.map((i, index) => (
                    <div className="d-flex  align-items-center product-cards my-3">
                      <div className=" p-0">
                        <img src={prdimg} className="rounded m-2" alt="" />
                      </div>
                      <div className="ms-2 product-cards-center p-0">
                        <div className="text-color-dark-grayish-blue inter-font-family-500 font-size-16 pt-1">
                          Hing Powder
                        </div>
                        <div className="text-color-dark-grayish-blue inter-font-family-400 font-size-14 pt-1">
                          Qty: 500 gm
                        </div>
                        <div className="text-color-dark-grayish-blue inter-font-family-500 font-size-24 pt-2">
                          ₹ 1200
                        </div>
                      </div>
                      <div className=" product-cards-end p-0 background-color-gleeful d-flex justify-content-center align-items-center">
                        <div>
                          <div className=" button-addtocard d-grid justify-content-center">
                            <div>
                              <button className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center">
                                -
                              </button>
                            </div>
                            <div className="text-center">
                              <span className="font-size-24">1</span>
                            </div>
                            <div>
                              <button className="background-color-terracotta font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" product-cards-end p-0 background-color-terracotta AddToCartModal-delete-button d-flex justify-content-center align-items-center">
                        <span className="text-white inter-font-family-600 font-size-16">
                          Delete
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="d-flex justify-content-between mt-5">
                    <button className={`addToCartModalButton font-size-16 px-5 inter-font-family-500 rounded`}>Add more item</button>
                    <button className={`addToCartModalButton font-size-16 px-5 inter-font-family-500 rounded`}>Proceed</button>
                  </div>
                </div>
                <hr className={`vertical-hr ${Paymode ? "d-none" : ""}`} />
                {/* Detail Form */}
                <div
                  className={`col-lg-4 AddToCartModal-modal-grid-2 pt-3 ${
                    Paymode ? "payModeBlackScreenActive" : ""
                  }`}
                >
                  <div className="">
                    <span className="address-heading font-size-14 inter-font-family-500">
                      Address Details
                    </span>
                    <hr />
                  </div>
                  <div className="row">
                    {[1, 2, 3]?.map((i, index) => (
                      <div className="col-lg-3 ps-2 me-4 mb-3 address-section p-0 rounded-3">
                        <div className="d-flex justify-content-end align-items-center">
                          <div className="address-box-section background-color-gleeful-opacity rounded-circle d-flex justify-content-center align-items-center mt-2 mx-2">
                            <img className="" src={trash} alt="" />
                          </div>
                        </div>
                        <div className="font-size-14 inter-font-family-500">
                          Admin Panel
                        </div>
                        <div className="font-size-12 inter-font-family-300 text-trunc-class">
                          AAA, Nagar sapna sangita road tower indore
                        </div>
                        <div className="font-size-12 inter-font-family-300">
                          987654321
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr className="address-sect-hr" />
                  <div className="login-text font-size-14 inter-font-family-500">
                    Add New Address
                  </div>
                  <form className="row" action="">
                    <div className="col-lg-6 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        First Name
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-6 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        Last Name
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-6 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        Adress
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-6 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        Apartment, Region, etc. (optional)
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-4 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        Country
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-8 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        Contact No
                      </label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-lg-4 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        State
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-4 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        City
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-4 address-section-form form-group pt-3">
                      <label
                        className="font-size-12 inter-font-family-400"
                        for=""
                      >
                        Pincode
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </form>
                  <div className=" mt-5">
                    <button className={`addToCartModalButton font-size-16 px-5 inter-font-family-500 rounded`}>Proceed with this address</button>
                  </div>
                </div>
                <hr
                  className={`vertical-hr ${
                    Paymode ? "payModeBlackScreenLineActive" : ""
                  }`}
                />
                {/* payment details */}
                <div
                  className={`col-lg-4 payment-section AddToCartModal-modal-grid-1 pt-3 ${
                    Paymode ? "payModeBlackScreenActive" : ""
                  }`}
                >
                  <div className="">
                    <span className="address-heading font-size-14 inter-font-family-500">
                      Bill Summary
                    </span>
                    <hr />
                  </div>
                  <div className="">
                    <ul>
                      <li className="d-flex justify-content-between py-2">
                        <span className="login-text font-size-14 inter-font-family-500">
                          x1 Hing Powder
                        </span>
                        <span className="font-size-16 inter-font-family-500">
                          ₹ 1200
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="login-text font-size-14 inter-font-family-500">
                          x1 Hing Powder
                        </span>
                        <span className="font-size-16 inter-font-family-500">
                          ₹ 1200
                        </span>
                      </li>
                    </ul>
                    <hr className="address-sect-hr" />
                    <ul>
                      <li className="d-flex justify-content-between">
                        <span className="login-text font-size-14 inter-font-family-500">
                          Deliver To:
                        </span>
                        <span className="font-size-16 inter-font-family-500 text-truncate">
                          abc Road, XYZ Nagar, Madhya Pr...
                        </span>
                      </li>
                      <li className="d-flex justify-content-between  py-3">
                        <span className="login-text font-size-14 inter-font-family-500 d-flex align-items-center">
                          Coupon Code
                        </span>
                        {/* <span className="font-size-16 inter-font-family-500">₹ 1200</span> */}
                        <div className="background-color-add-modal apply-coupon p-2  rounded">
                          <input
                            className="coupon-input"
                            type="text"
                            name=""
                            id=""
                          />{" "}
                          <button className=" background-color-terracotta text-white border-0 rounded py-1 font-size-12 inter-font-family-500 px-3">
                            Apply
                          </button>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="login-text font-size-14 inter-font-family-500">
                          Sub Total:
                        </span>
                        <span className="font-size-16 inter-font-family-500">
                          ₹ 1200
                        </span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span className="login-text font-size-14 inter-font-family-500">
                          Tax:
                        </span>
                        <span className="font-size-16 inter-font-family-500">
                          ₹ 1200
                        </span>
                      </li>
                    </ul>
                    <hr />
                    <div className=" d-flex justify-content-around align-item-center">
                      <span className="font-size-24 inter-font-family-500 d-flex justify-content-around align-items-center">
                        ₹1200
                      </span>
                      <button
                        onClick={() => handleTapSteps()}
                        className="btn payment-section-button text-white font-size-16 inter-font-family-500 px-5"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
                <hr className={`vertical-hr ${Paymode ? "" : "d-none"}`} />
                {/* Paymode section */}
                <div
                  className={`col-lg-4 ${
                    Paymode ? "" : "d-none"
                  } payment-section AddToCartModal-modal-grid-1 pt-3`}
                >
                  <div className="font-size-24 inter-font-family-500 text-color-dark-grayish-blue">
                    Payment
                  </div>
                  <p className="font-size-16 inter-font-family-400 login-text">
                    All transactions are secure and encypted
                  </p>
                  <form action="">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label font-size-16 inter-font-family-500 text-color-dark-grayish-blue"
                        for="exampleRadios1"
                      >
                        UPI, Debit Card, Credit Card, Net Banking
                      </label>
                      <p className="font-size-16 inter-font-family-400 login-text">
                        (By clicking on ‘Pay Now’ you will be redirected to the
                        respective platform to complete your purchase securely){" "}
                      </p>
                    </div>
                    <hr className="address-sect-hr" />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label font-size-16 inter-font-family-500 text-color-dark-grayish-blue"
                        for="exampleRadios2"
                      >
                        Cash On Delivery
                      </label>
                    </div>
                    <button className="btn payment-section-button-active text-white font-size-16 inter-font-family-500 px-5 mt-3">
                      Payment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
    // </div>
  );
};

export default AddToCartProccess;
