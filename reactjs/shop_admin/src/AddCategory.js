import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";
export default function AddCategory()
{
    VerifyLogin();
    
    /* declare state variables for each and every input that will be given by user */
    let [title,setTitle] = useState('');
    let [photo,setPhoto] = useState('');
    let [islive,setIsLive] = useState('');
    let navigate = useNavigate();
    let saveCategory = function(e)
    {
        e.preventDefault();
        console.log(title,photo,islive);
        let apiAddress = getBase() + "insert_category.php";
        //call api using post method
        let form = new FormData(); 
        form.append("title",title);
        form.append("photo",photo);
        form.append("islive",islive);
        axios({
            method:'post',
            url:apiAddress,
            data:form,
            responseType:'json'
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
            {
                showMessage(error);
            }
            else 
            {
                let success = response.data[1]['success'];
                showMessage(response.data[2]['message'],'success');
                if (success === 'yes')
                {
                    //navigate to category route
                    setTimeout(() => {
                        navigate("/category");
                    }, 2000);
                }    
            }
        }).catch((error) => {
            console.log(error);
            if (error.code === 'ERR_NETWORK')
                showMessage(NETWORK_ERROR);
        })
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
                    <ToastContainer/>
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Category - (Add Category)</h5>
                                    <Link to="/category" className="btn btn-primary btn-sm">Back
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={saveCategory} 
                                    action encType="multipart/form-data" method="post">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" name="title" id="title" className="form-control" required
                                            value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" name="photo" id="photo" className="form-control-file" required
                                            accept="image/*" 
                                            onChange={(e) => setPhoto(e.target.files[0])} />
                                        </div>
                                        <label htmlFor className="form-label">is Live?</label> <br />
                                        <div className="form-check-inline">
                                            <label htmlFor="yes" className="form-check-label">
                                                <input type="radio" name="islive" id="yes" className="form-check-input" 
                                                defaultValue={'1'}
                                                onChange={(e) => setIsLive(e.target.value)} /> Yes
                                            </label>
                                        </div>
                                        <div className="form-check-inline mb-3">
                                            <label htmlFor="no" className="form-check-label">
                                                <input type="radio" name="islive" id="no" className="form-check-input" defaultValue={0}
                                                onChange={(e) => setIsLive(e.target.value)} /> No
                                            </label>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <input type="submit" defaultValue="save" name="submit" className="btn btn-primary" />
                                            <input type="reset" defaultValue="clear" name="submit" className="btn btn-light" />
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
    </div>)
}