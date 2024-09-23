import React from "react";

import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
import withRouter from "./MyHOC";
import getBase, { getImageBase, NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { ToastContainer } from "react-toastify";

class ProductDetail extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            categorytitle:'',
            title:'',
            price:'',
            stock:'',
            photo:'',
            detail:'',
            weight:'',
            size:''
        }
    }
    componentDidMount()
    {
        let productid = this.props.params.productid;
        //api call 
        let apiAddress = getBase() + "product.php?productid=" + productid;
        console.log(apiAddress);

        axios({
            method:'get',
            responseType:'json',
            url:apiAddress
        }).then((response) => {
            console.log(response.data);
            this.setState({
                categorytitle: response.data[2]['categorytitle'],
                title: response.data[2]['categorytitle'],
                price: response.data[2]['price'],
                stock: response.data[2]['stock'],
                photo: response.data[2]['photo'],
                detail: response.data[2]['detail'],
                weight: response.data[2]['weight'],
                size: response.data[2]['size']
            });

        }).catch((error) => {
            if(error.code === 'ERR_NETWORK')
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
                        <div className="container">
                            <ToastContainer />
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-8">
                                        <h3 className="mb-0">{this.state.title}</h3>
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
                                            <img src={getImageBase() + "/product/" + this.state.photo} alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-xl-6">
                                    <div className="ps-lg-10 mt-6 mt-md-0">
                                        <a href="#!" className="mb-4 d-block">{this.state.categorytitle}</a>
                                        <h1 className="mb-1">{this.state.title}</h1>
                                        <div className="fs-4 d-flex justify-content-between mb-3">
                                            <span className="fw-bold text-dark">₹ {this.state.price}</span>
                                            <button type="button" className="btn btn-primary">
                                                <i className="feather-icon icon-shopping-bag me-2" />
                                                Add to cart
                                            </button>
                                        </div>
                                        <div>
                                            <table className="table table-bordered table-sm">
                                                <tbody>
                                                 
                                                    <tr>
                                                        <td>Stock:</td>
                                                        <td>{this.state.stock}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Size:</td>
                                                        <td>{this.state.size}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Weight</td>
                                                        <td>{this.state.weight}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Detail:</td>
                                                        <td>{this.state.stock}</td>
                                                        
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
export default withRouter(ProductDetail);