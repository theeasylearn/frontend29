
import React from "react";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
import getBase, { NETWORK_ERROR, getImageBase } from "./common";
import axios from 'axios';
import { showMessage } from "./message";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withRouter from "./MyHOC";

class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            mobile: "",
            password: "",
            confirm_password: "",
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    Register = (e) => {
        console.log(this.state);
        e.preventDefault();
        if (this.state.password !== this.state.confirm_password) {
            showMessage('password and confirm password are not same');
        }
        else {
            //api calling
            let apiAddress = getBase() + "register.php";
            let form = new FormData();
            form.append("email",this.state.email);
            form.append("password",this.state.password);
            form.append("mobile",this.state.mobile);

            axios({
                method:'post',
                responseType:'json',
                url:apiAddress,
                data:form
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if(error !== 'no')
                    showMessage(error);
                else 
                {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    if(success === 'no')
                        showMessage(message);
                    else 
                    {
                        showMessage(message,'success');
                        setTimeout(() => {
                            //navigate user on login 
                            this.props.navigate('/userlogin');
                        }, 2000);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showMessage(NETWORK_ERROR);
            })
        }



    }
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
                        <ToastContainer />
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
                                    <form onSubmit={this.Register} className="needs-validation" noValidate>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label visually-hidden">Email address</label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" required value={this.state.email} onChange={(e) => this.onChangeValue(e)} />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="mobile" className="form-label visually-hidden">Mobile</label>
                                                <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="mobile" required
                                                    value={this.state.mobile} onChange={(e) => this.onChangeValue(e)} />
                                            </div>
                                            <div className="col-12">
                                                <div className="password-field position-relative">
                                                    <label htmlFor="password" className="form-label visually-hidden">Password</label>
                                                    <div className="password-field position-relative">
                                                        <input type="password" className="form-control fakePassword" id="password" name="password" placeholder="Password" required value={this.state.password} onChange={(e) => this.onChangeValue(e)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="password-field position-relative">
                                                    <label htmlFor="confirm_password" className="form-label visually-hidden">Confirm
                                                        Password</label>
                                                    <div className="password-field position-relative">
                                                        <input type="password" className="form-control fakePassword" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required
                                                            value={this.state.confirm_password} onChange={(e) => this.onChangeValue(e)} />
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
export default withRouter(UserRegister);