import { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState } from "react";
export default function DashBoard() {
    let {category,setCategory} = useState();
    let {product,setProduct} = useState();
    let {users,setUsers} = useState();
    let {orders,setOrders} = useState();
    let {daily,setDaily} = useState();
    let {monthly,setMonthly} = useState();
    let {weekly,setWeekly} = useState();
    let {yearly,setYearly} = useState();

    useEffect(() =>{
        //api call 
        let apiAddress = getBase() + "summery.php";
        axios({
            method:'get',
            responseType:'json',
            url:apiAddress,
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error!='no')
                showMessage(error);
            else 
            {
                setCategory(response.data[1]['categories']);
                setProduct(response.data[1]['products']);
                setUsers(response.data[1]['users']);
                setOrders(response.data[1]['orders']);
                setDaily(response.data[1]['daily']);
                setWeekly(response.data[1]['weekly']);
                setMonthly(response.data[1]['monthly']);
                setYearly(response.data[1]['yearly']);
            }
        }).catch((error) =>{
            if(error.code === 'ERR_NETWORK')
                showMessage(NETWORK_ERROR)    
        })
    })
    return (<div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                <AdminHeader />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Dashboard</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {/* Earnings (Monthly) Card Example */}
                                        <div className="col-xl-3 col-md-6 mb-4">
                                            <div className="card border-left-primary shadow h-100 py-2">
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col mr-2">
                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                Orders Amount (today)
                                                            </div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{daily}</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <i className="fas fa-calendar fa-2x text-gray-300" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-4">
                                            <div className="card border-left-primary shadow h-100 py-2">
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col mr-2">
                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                Orders Amount (Monthly)
                                                            </div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{monthly}</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <i className="fas fa-calendar fa-2x text-gray-300" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-4">
                                            <div className="card border-left-primary shadow h-100 py-2">
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col mr-2">
                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                Orders (Weekly)
                                                            </div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{weekly}</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <i className="fas fa-calendar fa-2x text-gray-300" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-4">
                                            <div className="card border-left-primary shadow h-100 py-2">
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col mr-2">
                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                Orders Amount (Yearly)
                                                            </div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{yearly}</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <i className="fas fa-calendar fa-2x text-gray-300" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-xl-4 col-md-6 mb-4">
                                            <div className="card border-left-danger shadow h-100 py-2">
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col mr-2">
                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                Products
                                                            </div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{product}</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <i className="fa fa-gift fa-2x text-info" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 mb-4">
                                            <div className="card border-left-danger shadow h-100 py-2">
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col mr-2">
                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                Categories
                                                            </div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{category}</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <i className="fa fa-tags fa-2x text-danger" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 mb-4">
                                            <div className="card border-left-danger shadow h-100 py-2">
                                                <div className="card-body">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col mr-2">
                                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                Users
                                                            </div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{users}</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <i className="fa fa-users fa-2x text-success" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
    </div>)
}