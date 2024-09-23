import React from "react";

import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import { Link } from "react-router-dom";
import withRouter from "./MyHOC";
import getBase, { NETWORK_ERROR, getImageBase } from "./common";
import axios from 'axios';
import { showMessage } from "./message";
import {ToastContainer} from 'react-toastify';

class Product extends React.Component {    

    constructor(props)
    {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount()
    {
        let categoryid = this.props.params.categoryid;
        //alert(categoryid);
        let apiAddress = getBase() + "product.php?categoryid=" + categoryid;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
                showMessage(error);
            else 
            {
                let total = response.data[1]['success'];
                if(total === 0)
                    showMessage('no category found');
                else 
                {
                    //remove 1st object
                    response.data.splice(0,2);
                    this.setState({
                        data:response.data
                    });
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
                    <ToastContainer />
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
                                {this.state.data.map((item)=>{
                                    return (<div className="col">
                                        <div className="card card-product shadow">
                                            <div className="card-body">
                                                <div className="text-center position-relative">
                                                    <Link to={"/productdetail/" + item['id'] }>
                                                        <img src={getImageBase() + "product/" + item['photo']} alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                                                    </Link>
                                                </div>
                                               
                                                <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">
                                                    {item['title']}</a></h2>
                                                <div className="d-flex justify-content-between align-items-center mt-3">
                                                    <div>
                                                        <span className="text-dark">{item['price']}</span>
                                                    </div>
                                                    <div>
                                                        <button href="#!" className="btn btn-primary btn-sm">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>);
                                })}
                            </div>
                        </div>
                    </section>
                </main>
                <FooterUser />
            </div>
        );
    }
}
export default withRouter(Product);