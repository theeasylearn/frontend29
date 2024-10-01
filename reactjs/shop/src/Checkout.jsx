import React from "react";
import FooterUser from "./FooterUser";
import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import withRouter from "./MyHOC";
import getBase, { NETWORK_ERROR } from "./common";
import axios from 'axios';
import { showMessage } from "./message";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Checkout extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            mobile: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            zipCode: '',
            remarks: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    doCheckout = (e) => {
        console.log(this.state);
        e.preventDefault();
        let apiAddress = getBase() + "checkout.php";
        let form = new FormData();
        //input : usersid,fullname,address1,address2,mobile,city,pincode,remarks (required)
       
        form.append("usersid",this.props.cookies['userid']);
        form.append("fullname",this.state.fullName);
        form.append("address1",this.state.addressLine1);
        form.append("address2",this.state.addressLine2);
        form.append("mobile",this.state.mobile);
        form.append("city",this.state.city);
        form.append("pincode",this.state.pincode);
        form.append("remarks",this.state.remarks);
        
        axios({
            method:'post',
            responseType:'json',
            url:apiAddress,
            data:form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error!=='no')
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
                        this.props.navigate("/");
                    }, 2000);
                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showMessage(NETWORK_ERROR);
        });

    }
    render() {
        return (
            <div>
                <HeaderUser />
                <NavbarUser />
                <main>
                    <section className="my-lg-4">
                        <ToastContainer />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-8">
                                        <h3 className="mb-0">Checkout</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <form onSubmit={this.doCheckout}>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            className="form-control"
                                                            placeholder="Full Name"
                                                            aria-label="First name"
                                                            value={this.state.fullName}
                                                            onChange={this.handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="tel"
                                                            name="mobile"
                                                            className="form-control"
                                                            placeholder="Mobile"
                                                            aria-label="Last name"
                                                            value={this.state.mobile}
                                                            onChange={this.handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            name="addressLine1"
                                                            className="form-control"
                                                            placeholder="Address Line 1"
                                                            value={this.state.addressLine1}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            name="addressLine2"
                                                            className="form-control"
                                                            placeholder="Address Line 2"
                                                            value={this.state.addressLine2}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            className="form-control"
                                                            placeholder="City"
                                                            value={this.state.city}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            name="zipCode"
                                                            className="form-control"
                                                            placeholder="Zip Code"
                                                            value={this.state.zipCode}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            name="remarks"
                                                            className="form-control"
                                                            placeholder="Remarks"
                                                            value={this.state.remarks}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12 text-end">
                                                        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                                                        <button type='submit' className="btn btn-primary">Place Order</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <ul className="list-group">
                                        <li className="list-group-item px-4 py-3">
                                            <h3>Order detail</h3>
                                        </li>
                                        <li className="list-group-item px-4 py-3">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div>Item Subtotal</div>
                                                <div className="fw-bold">{this.props.cookies['grandtotal']}</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    Delivery charge
                                                    <i className="feather-icon icon-info text-muted" data-bs-toggle="tooltip" title="Default tooltip" />
                                                </div>
                                                <div className="fw-bold">0</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item px-4 py-3">
                                            <div className="d-flex align-items-center justify-content-between fw-bold">
                                                <div>Total</div>
                                                <div>{this.props.cookies['grandtotal']}</div>
                                            </div>
                                        </li>
                                    </ul>
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
export default withRouter(Checkout);