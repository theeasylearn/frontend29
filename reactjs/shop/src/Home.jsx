import React from "react";

import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <HeaderUser />
                <NavbarUser />
                <main>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-12 ">
                                <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 text-center text-lg-start rounded shadow">
                                    <div className="d-lg-flex align-items-center">
                                        <img src="theme/assets/images/about/about-icons-1.svg" alt className="img-fluid" />
                                        <div className="ms-lg-4">
                                            <h1 className="fs-2 mb-1">Welcome to FreshCart</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="container mb-5">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
                                <div className="col">
                                    <a href="shop-grid.html" className="text-decoration-none text-inherit">
                                        <div className="card card-product">
                                            <div className="card-body text-center py-8">
                                                <img src="theme/assets/images/category/category-dairy-bread-eggs.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                                                <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="my-lg-14 my-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        <div className="mb-6"><img src="theme/assets/images/icons/clock.svg" alt /></div>
                                        <h3 className="h5 mb-3">10 minute grocery now</h3>
                                        <p className="mb-0">Get your order delivered to your doorstep at the earliest from FreshCart
                                            pickup
                                            stores near you.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        <div className="mb-6"><img src="theme/assets/images/icons/gift.svg" alt /></div>
                                        <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
                                        <p className="mb-0">Cheaper prices than your local supermarket, great cashback offers to top it
                                            off. Get
                                            best pricess &amp; offers.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        <div className="mb-6"><img src="theme/assets/images/icons/package.svg" alt /></div>
                                        <h3 className="h5 mb-3">Wide Assortment</h3>
                                        <p className="mb-0">Choose from 5000+ products across food, personal care, household, bakery,
                                            veg and
                                            non-veg &amp; other categories.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        <div className="mb-6"><img src="theme/assets/images/icons/refresh-cw.svg" alt /></div>
                                        <h3 className="h5 mb-3">Easy Returns</h3>
                                        <p className="mb-0">
                                            Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No
                                            questions asked
                                            <a href="#!">policy</a>
                                            .
                                        </p>
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