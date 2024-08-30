import React from "react";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
export default class UserLogin extends React.Component {
    render() {
        return (
            <div>
                <div className="border-bottom shadow-sm">
                    <nav className="navbar navbar-light py-2">
                        <div className="container justify-content-center justify-content-lg-between">
                                <img src="theme/assets/images/logo/freshcart-logo.svg" alt className="d-inline-block align-text-top" />
                            <span className="navbar-text">
                                Already have an account?
                                <Link to="/userregister">Sign in</Link>
                            </span>
                        </div>
                    </nav>
                </div>
                <main>
                    <section className="my-lg-14 my-8">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                    <img src="theme/assets/images/svg-graphics/signin-g.svg" alt className="img-fluid" />
                                </div>
                                <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                    <div className="mb-lg-9 mb-5">
                                        <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                                        <p>Welcome back to FreshCart! Enter your email to get started.</p>
                                    </div>
                                    <form className="needs-validation" noValidate>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label htmlFor="formSigninEmail" className="form-label visually-hidden">Email address</label>
                                                <input type="email" className="form-control" id="formSigninEmail" placeholder="Email" required />
                                                <div className="invalid-feedback">Please enter name.</div>
                                            </div>
                                            <div className="col-12">
                                                <div className="password-field position-relative">
                                                    <label htmlFor="formSigninPassword" className="form-label visually-hidden">Password</label>
                                                    <div className="password-field position-relative">
                                                        <input type="password" className="form-control fakePassword" id="formSigninPassword" placeholder="*****" required />
                                                        <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                                        <div className="invalid-feedback">Please enter password.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    Forgot password?
                                                    <Link to="/forgotpassword">Reset It</Link>
                                                </div>
                                            </div>
                                            <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Sign In</button></div>
                                            <div>
                                                Don’t have an account?
                                                <Link to="/userregister">Sign Up</Link>
                                            </div>
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