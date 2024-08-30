import React from "react";

import FooterUser from "./FooterUser";
import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import { Link } from "react-router-dom";
export default class Checkout extends React.Component {
    render() {
        return (
            <div>
                <HeaderUser />
                <NavbarUser />
                <main>
                    <section className="my-lg-4">
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
                                            <form action>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" placeholder="fullname" aria-label="First name" required />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="tel" className="form-control" placeholder="mobile" aria-label="Last name" required />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" placeholder="Address Line 1" />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" placeholder="Address Line 2" />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" placeholder="City" />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" placeholder="Zip Code" />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" placeholder="Remarks" />
                                                    </div>
                                                    <div className="col-12 text-end">
                                                        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                                                        <button className="btn btn-primary" type="button">Place Order</button>
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
                                                <div className="fw-bold">375000</div>
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
                                                <div>375000</div>
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