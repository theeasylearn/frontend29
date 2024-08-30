import React from "react";

import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
export default class ProductDetail extends React.Component {
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
                                        <h3 className="mb-0">IPhone - 15</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-xl-6">
                                    <div className="product" id="product">
                                        <div className="zoom" onmousemove="zoom(event)" style={{}}>
                                            <img src="theme/assets/images/products/product-single-img-1.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-xl-6">
                                    <div className="ps-lg-10 mt-6 mt-md-0">
                                        <a href="#!" className="mb-4 d-block">IPhone</a>
                                        <h1 className="mb-1">IPhone 15</h1>
                                        <div className="fs-4 d-flex justify-content-between mb-3">
                                            <span className="fw-bold text-dark">₹ 1,25,000</span>
                                            <button type="button" className="btn btn-primary">
                                                <i className="feather-icon icon-shopping-bag me-2" />
                                                Add to cart
                                            </button>
                                        </div>
                                        <div>
                                            <table className="table table-bordered table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td width="25%">Product Code:</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>Stock:</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>Size:</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>Weight</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>Detail:</td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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