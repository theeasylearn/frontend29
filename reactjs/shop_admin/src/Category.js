import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";

export default function Category() {
    //create state array
    let [categories, setCategories] = useState([]); //[] create state array
   
    VerifyLogin(); 
    useEffect(() => {
        if (categories.length === 0) {
            let apiAddress = getBase() + "category.php";
            axios({
                method: 'get',
                url: apiAddress,
                responseType: 'json',

            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if (error !== 'no')
                    showMessage(error);
                else {
                    let total = response.data[1]['total'];
                    if (total === 0)
                        showMessage('no category found');
                    else {
                        //delete 2 elements from begining
                        response.data.splice(0, 2);
                        //store remaining array into state array
                        setCategories(response.data);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showMessage(NETWORK_ERROR)
            });
        }
    });
    
    let deleteCategory = function(categoryid)
    {
        console.log(categoryid);
        let apiAddress = getBase() + "delete_category.php?id=" + categoryid;
        axios({
            method:'get',
            responseType:'json',
            url:apiAddress,

        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
                showMessage(error);
            else 
            {
                showMessage(response.data[1]['message'],'success');
                //delete the same category from state array
                let temp = categories.filter((item) => {
                    if(item.id != categoryid)
                        return item;
                });
                //now set this filtered list into categories
                setCategories(temp);

            }
        }).catch((error) => {
            console.log(error);
            if(error.code === 'ERR_NETWORK')
                showMessage(NETWORK_ERROR);
        });
    }
    return (<div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <AdminHeader />
                <ToastContainer />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Category</h5>
                                    <Link to="/add-category" className="btn btn-primary btn-sm">Add
                                        <i className="fa fa-plus" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Title</th>
                                                <th>Photo</th>
                                                <th>is live</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories.map((item) => {
                                                return (<tr>
                                                    <td>{item['id']}</td>
                                                    <td>{item['title']}</td>
                                                    <td width="20%">
                                                        <img src={"https://theeasylearnacademy.com/shop/images/category/" + item['photo']} alt className="img-fluid" />
                                                    </td>
                                                    <td>{item['islive'] === '1' ? 'Yes' : 'no'}</td>
                                                    <td width="15%">
                                                        <Link to="/edit-category" className="btn btn-warning btn-sm">Edit</Link>
                                                        <button onClick={() => deleteCategory(item.id)} type='button' className="btn btn-danger btn-sm">Delete</button>
                                                    </td>
                                                </tr>)
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}