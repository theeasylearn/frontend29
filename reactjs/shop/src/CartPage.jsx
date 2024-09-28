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
import 'react-toastify/dist/ReactToastify.css';

class Cart extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data : [],
            grandTotal:0
        }
    }
    removeFromCart = (item) => {
        //api call to delete item from cart 
        //remove item from data state array
        //update grandTotal
        let apiAddress = getBase() + `delete_from_cart.php?cartid=${item['cartid']}`;
    }
    componentDidMount()
    {
        let userid = this.props.cookies['userid'];
        let apiAddress = getBase() + `cart.php?usersid=${userid}`;
        axios({
            method:'get',
            responseType:'json',
            url:apiAddress
        }).then((response) => {
            console.log(response.data);
            /*
            0: Object { error: "no" }
            1: Object { total: 2 }
            2: Object { id: "2", cartid: "40", title: "dell laptop", … }
            3: Object { id: "1", cartid: "41", title: "Acer Laptop", … }
*/
            let error = response.data[0]['error'];
            if(error !== 'no')
            {
                showMessage(error);
            }    
            else 
            {
                let total = response.data[1]['total'];
                if(total === 0)
                    showMessage('cart is empty');
                else 
                {
                    response.data.splice(0,2);
                    this.setState({
                        data: response.data
                    },()=> {
                        let temp =0
                        this.state.data.map((item) => {
                            temp = temp + (item['price'] * item['quantity']);
                        });
                        this.setState({
                            grandTotal:temp
                        });
                    });
                    
                }
            }
        }).catch((error)=>{
            if (error.code === 'ERR_NETWORK')
                showMessage(NETWORK_ERROR);
        })
    }

    displayCart = (item) => {
        //calculate grand total
       
        return (   <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item py-3 ps-0 border-top">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-6 col-lg-7">
                            <div className="d-flex">
                                <img src={getImageBase() + "product/" + item['photo']} alt="Ecommerce" className="icon-shape icon-xxl" />
                                <div className="ms-3">
                                    <Link to="/productdetail" className="text-inherit">
                                        <h6 className="mb-0">{item['title']}</h6>
                                    </Link>
                                    <div className="mt-2 small lh-1">
                                        <a href="#!" className="text-decoration-none text-inherit">
                                            <span className="me-1 align-text-bottom">
                                                <button onClick={() => this.removeFromCart(item)} className="btn btn-sm btn-danger">Remove</button>
                                            </span>
                                            <span className="text-muted" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="colb-4 col-md-3 col-lg-3">
                            ₹ {item['price']} X {item['quantity']}
                        </div>
                        <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold">₹ {item['price'] * item['quantity']}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>);
    }
    render() {
        return (
            <div>
                <HeaderUser />
                <NavbarUser />
                <ToastContainer />
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
                             {this.state.data.map((item) => this.displayCart(item))}
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-primary">Proceed to checkout</button>
                                <h3>Grand total {this.state.grandTotal}</h3>
                            </div>
                        </div>
                    </section>
                </main>
                <FooterUser />
            </div>
        );
    }
}
export default withRouter(Cart);