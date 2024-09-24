import React from "react";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";

import getBase, { NETWORK_ERROR, getImageBase } from "./common";
import axios from 'axios';
import { showMessage } from "./message";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withRouter from "./MyHOC";
class UserLogin extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }
    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    login = (e) => {
        e.preventDefault();
        console.log(this.state);
        //https://theeasylearnacademy.com/shop/ws/login.php
    }
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
                                    <form className="needs-validation" onSubmit={this.login}>
                                        <div className="row g-3">
                                            <div className="col-12">
<label htmlFor="email" className="form-label visually-hidden">Email address</label>
<input type="email" className="form-control" id="email" placeholder="Email" required  name="email"
value={this.state.email} onChange={(e) => this.onChangeValue(e)} />
                                                <div className="invalid-feedback">Please enter name.</div>
                                            </div>
                                            <div className="col-12">
                                                <div className="password-field position-relative">
<label htmlFor="password" className="form-label visually-hidden">Password</label>
                                                    <div className="password-field position-relative">
<input type="password" className="form-control fakePassword" id="password" placeholder="*****" required name="password"
value={this.state.password} onChange={(e) => this.onChangeValue(e)} />
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
export default withRouter(UserLogin);