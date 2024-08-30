import React from "react";

import FooterUser from "./FooterUser";
import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import { Link } from "react-router-dom";
export default class CategoryPage extends React.Component {
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
                                        <h3 className="mb-0">Shop by Category</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container mb-5">
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
                                <div className="col">
                                    <Link to="/product" className="text-decoration-none text-inherit">
                                        <div className="card card-product shadow">
                                            <div className="card-body text-center py-4">
                                                <img src="theme/assets/images/category/category-dairy-bread-eggs.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                                                <div className="h5">Dairy, Bread &amp; Eggs</div>
                                            </div>
                                        </div>
                                    </Link>
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