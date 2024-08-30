import React from "react";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
export default class Forgotpassword extends React.Component {
    render() {
        return (
            <div>
                <div className="border-bottom shadow-sm">
                    <nav className="navbar navbar-light py-2">
                        <div className="container justify-content-center justify-content-lg-between">
                                <img src="theme/assets/images/logo/freshcart-logo.svg" alt className="d-inline-block align-text-top" />
                            <span className="navbar-text">
                                Already have an account?
                                <Link to="/userlogin">Sign in</Link>
                            </span>
                        </div>
                    </nav>
                </div>
                <main>
                    <section className="my-lg-14 my-8">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                    <img src="theme/assets/images/svg-graphics/fp-g.svg" alt className="img-fluid" />
                                </div>
                                <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
                                    <div>
                                        <div className="mb-lg-9 mb-5">
                                            <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                                            <p>Please enter the email address associated with your account and We will email new password.
                                            </p>
                                        </div>
                                        <form className="needs-validation" noValidate>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label htmlFor="formForgetEmail" className="form-label visually-hidden">Email address</label>
                                                    <input type="email" className="form-control" id="formForgetEmail" placeholder="Email" required />
                                                    <div className="invalid-feedback">Please enter correct password.</div>
                                                </div>
                                                <div className="col-12 d-grid gap-2">
                                                    <button type="submit" className="btn btn-primary">Reset Password</button>
                                                    <Link to="/userlogin" className="btn btn-light">Back</Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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