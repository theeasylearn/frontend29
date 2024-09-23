import React from "react";

import FooterUser from "./FooterUser";
import HeaderUser from "./HeaderUser";
import NavbarUser from "./NavbarUser";
import { Link } from "react-router-dom";
import getBase, { NETWORK_ERROR, getImageBase } from "./common";
import axios from 'axios';
import { showMessage } from "./message";
import {ToastContainer} from 'react-toastify';
export default class Category extends React.Component {
    constructor(props) {
        super(props);
        //create state array
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        //api call
        let apiAddress = getBase() + "category.php";
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
                    <section className="my-lg-4">
                        <div className="container">
                            <ToastContainer />
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
                            {this.state.data.map((item) => {
                                return (<div className="col">
                                    <Link to={"/product/" + item['id']} className="text-decoration-none text-inherit">
                                        <div className="card card-product shadow">
                                            <div className="card-body text-center py-4">
                                                <img src={ getImageBase() + "category/" + item['photo']} alt="Grocery Ecommerce Template" className="img-fluid mb-3" />
                                                <div className="h5">{item['title']}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>)
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