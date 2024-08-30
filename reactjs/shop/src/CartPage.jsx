import React from "react";

import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
export default class CartPage extends React.Component {
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
                                        <h3 className="mb-0">Cart</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="offcanvas-body">
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item py-3 ps-0 border-top">
                                            <div className="row align-items-center">
                                                <div className="col-6 col-md-6 col-lg-7">
                                                    <div className="d-flex">
                                                        <img src="theme/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                                        <div className="ms-3">
                                                            <Link to="/productdetail" className="text-inherit">
                                                                <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                                            </Link>
                                                            <div className="mt-2 small lh-1">
                                                                <a href="#!" className="text-decoration-none text-inherit">
                                                                    <span className="me-1 align-text-bottom">
                                                                        <button className="btn btn-sm btn-danger">Remove</button>
                                                                    </span>
                                                                    <span className="text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="colb-4 col-md-3 col-lg-3">
                                                    ₹ 1,25,000 X 3
                                                </div>
                                                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                    <span className="fw-bold">₹ 3,75,000</span>
                                                </div>
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