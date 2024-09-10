import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
export default function AddProduct() {
    /* create state variables for each and every input */
    var [categoryId, setCategoryId] = useState(''); // For storing category ID
    var [title, setTitle] = useState(''); // For storing the title
    var [price, setPrice] = useState(''); // For storing the title
    var [photo, setPhoto] = useState(''); // For storing the photo URL or file path
    var [stock, setStock] = useState(0); // For storing the quantity
    var [size, setSize] = useState(''); // For storing the size
    var [weight, setWeight] = useState(''); // For storing the weight
    var [detail, setDetail] = useState(''); // For storing the details
    var [isLive, setIsLive] = useState(false); // For storing live status (boolean)
    
    let saveProduct = function(e)
    {
        e.preventDefault();
        console.log(categoryId,title,photo,stock,size,weight,detail,isLive);
        let form = new FormData(); //create object of FormData class
        form.append("title", title);
        form.append("photo", photo);
        form.append("price", price);
        form.append("stock", stock);
        form.append("size", size);
        form.append("weight", weight);
        form.append("detail", detail);
        form.append("categoryid", categoryId);
        form.append("isLive", isLive);
        let apiAddress = getBase() + "insert_product.php";
        axios({
            method:'post',
            responseType:'json',
            url:apiAddress,
            data:form
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            if(error.code === 'ERR_NETWORK')
                showMessage(NETWORK_ERROR);
        });
    }
    return (<div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                <AdminHeader />
                {/* Begin Page Content */}
                <div className="container-fluid">
                    <ToastContainer />
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Products (add)</h5>
                                    <Link to="/product" className="btn btn-primary btn-sm">back
                                    </Link>
                                </div>
                                <div className="card-body">
                                   <form encType="multipart/form-data" method="post" onSubmit={saveProduct}>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <label htmlFor="categoryid" className="form-label">Category</label> <br />
                                                <select id="categoryid" className="form-select" required
                                                onChange={(e) => setCategoryId(e.target.value)}>
                                                    <option selected>Choose...</option>
                                                    <option value={1}>Category 1</option>
                                                    <option value={2}>Category 2</option>
                                                    <option value={3}>Category 3</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="title" className="form-label">Title</label>
                                                <input type="text" className="form-control" id="title" placeholder="Enter title" required
                                                value={title} onChange={(e) => setTitle(e.target.value)} />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="price" className="form-label">Price</label>
                                                <input type="number" className="form-control" id="price" placeholder="Enter price" required
                                                value={price} onChange={(e) => setPrice(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="details" className="form-label">Details</label>
                                                <textarea className="form-control" id="details" rows={3} placeholder="Enter details" required defaultValue={detail} onChange={(e) => setDetail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <label htmlFor="stock" className="form-label">Stock</label>
                                                <input type="number" className="form-control" id="stock" placeholder="Enter stock quantity" required value={stock} onChange={(e) => setStock(e.target.value)} />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="weight" className="form-label">Weight</label>
                                                <input type="number" className="form-control" id="weight" placeholder="Enter weight" required  value={weight} onChange={(e) => setWeight(e.target.value)} />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="size" className="form-label">Size</label>
                                                <input type="text" className="form-control" id="size" placeholder="Enter size" required  value={size} onChange={(e) => setSize(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <label htmlFor="photo" className="form-label">Photo</label>
                                                <input type="file" className="form-control" id="photo" 
                                                required accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label">Is Live</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="isLiveYes" defaultValue={'1'} required  onChange={(e) => setIsLive(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="isLiveYes">Yes</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="isLiveNo" defaultValue={'0'} required onChange={(e) => setIsLive(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="isLiveNo">No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="submit" className="btn btn-primary w-100 mb-2">Save all</button>
                                                <button type="reset" className="btn btn-light w-100">Clear all</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
    </div>
    )
}