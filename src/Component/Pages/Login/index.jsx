  import React from "react";
  import Logi from "../../Assets/img/Login/Frame 1261158478.png";
  import Arro from "../../Assets/img/Login/Vector (1).svg";
import { Link } from "react-router-dom";

  const Login = () => {
    return (
      <>
        <section
          className="background-color-light-grayish-yellow d-flex justify-content-center align-items-center min-vh-100"
        >
          <div className="container py-4">
            <div className="login-modal-shadow rounded position-relative">
              <div className="position-absolute top-0 end-0">
                  <img src={Arro} alt="Loading" className="img-fluid"/>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12 d-flex">
                  <img src={Logi} alt="Loding" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-sm-12 px-5">
                  <div className="text-start josefin-sans-font-family-600 font-size-30 py-3 text-color-dark-grayish-blue pt-4">
                    Login
                  </div>
                  <p className="inter-font-family-400 font-size-16 text-color-dark-grayish-blue">
                    Please fill the details below to login to your account
                  </p>
                  <div>
                    <form action="" className="form-login">
                      <div className="pt-4">
                        <div>
                          <label
                            htmlFor=""
                            className="inter-font-family-400 font-size-14 login-text py-2"
                          >
                            Email/Contact
                          </label>
                        </div>
                        <div className="">
                          <input
                            type="text"
                            name="email"
                            className="input-style"
                          />
                        </div>
                      </div>
                      <div className="py-4">
                        <div>
                          <label
                            htmlFor=""
                            className="inter-font-family-400 font-size-14 login-text py-2"
                          >
                            Password
                          </label>
                        </div>
                        <div className="">
                          <input
                            type="password"
                            name="password"
                            className="input-style"
                          />
                        </div>
                      </div>
                      <div className="py-4">
                        <button
                          type="submit"
                          className="background-color-terracotta text-color-white py-2 inter-font-family-500 font-size-16 rounded border-0 "
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="py-4 w-75 text-center">
                    <span className="inter-font-family-400 font-size-14 ps-4">
                      Don’t have an account?
                    </span>
                    <span>
                      <Link
                        to="/registration"
                        className="px-2 text-decoration-none inter-font-family-500 font-size-14 text-color-terracotta"
                      >
                        Create an account
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default Login;
