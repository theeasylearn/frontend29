
import React from "react";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";

export default class UserRegister extends React.Component {
    render() {
        return (
            <div>
                <div className="border-bottom shadow-sm">
                    <nav className="navbar navbar-light py-2">
                        <div className="container justify-content-center justify-content-lg-between">
                            <a className="navbar-brand" href="../index.html">
                                <img src="theme/assets/images/logo/freshcart-logo.svg" alt className="d-inline-block align-text-top" />
                            </a>
                            <span className="navbar-text">
                                Already have an account?
                                <Link to="userlogin">Sign in</Link>
                            </span>
                        </div>
                    </nav>
                </div>
                <main>
                    <section className="my-lg-14 my-8">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                    <img src="theme/assets/images/svg-graphics/signup-g.svg" alt className="img-fluid" />
                                </div>
                                <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                    <div className="mb-lg-9 mb-5">
                                        <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                                        <p>Welcome to FreshCart! Enter your email to get started.</p>
                                    </div>
                                    <form className="needs-validation" noValidate>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label htmlFor="formSignupEmail" className="form-label visually-hidden">Email address</label>
                                                <input type="email" className="form-control" id="formSignupEmail" placeholder="Email" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="mobile" className="form-label visually-hidden">Mobile</label>
                                                <input type="tel" className="form-control" id="mobile" placeholder="mobile" required />
                                            </div>
                                            <div className="col-12">
                                                <div className="password-field position-relative">
                                                    <label htmlFor="formSignupPassword" className="form-label visually-hidden">Password</label>
                                                    <div className="password-field position-relative">
                                                        <input type="password" className="form-control fakePassword" id="formSignupPassword" placeholder="Password" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="password-field position-relative">
                                                    <label htmlFor="formSignupPassword2" className="form-label visually-hidden">Confirm
                                                        Password</label>
                                                    <div className="password-field position-relative">
                                                        <input type="password" className="form-control fakePassword" id="formSignupPassword2" placeholder="Confirm Password" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Register</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <FooterUser />
            </div>
        );
    }
}