import React from "react";

import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
export default class Product extends React.Component {
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
                                        <h3 className="mb-0">Products</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container mb-5">
                            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                                <div className="col">
                                    <div className="card card-product shadow">
                                        <div className="card-body">
                                            <div className="text-center position-relative">
                                                <Link to="/productdetail">
                                                    <img src="theme/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                                                </Link>
                                            </div>
                                            <div className="text-small mb-1">
                                                <a href="#!" className="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
                                            </div>
                                            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">Haldiram's
                                                Sev
                                                Bhujia</a></h2>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div>
                                                    <span className="text-dark">$18</span>
                                                </div>
                                                <div>
                                                    <button href="#!" className="btn btn-primary btn-sm">
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
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