import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
export default function AddCategory()
{
    return (<div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                <AdminHeader />
                {/* Begin Page Content */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Category - (Add Category)</h5>
                                    <Link to="/category" className="btn btn-primary btn-sm">Back
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <form action encType="multipart/form-data" method="post">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" name="title" id="title" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" name="photo" id="photo" className="form-control-file" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="detail" className="form-label">Detail</label>
                                            <textarea name="detail" id="detail" className="form-control" required defaultValue={"                                            "} />
                                        </div>
                                        <label htmlFor className="form-label">is Live?</label> <br />
                                        <div className="form-check-inline">
                                            <label htmlFor="yes" className="form-check-label">
                                                <input type="radio" name="islive" id="yes" className="form-check-input" defaultValue={1} /> Yes
                                            </label>
                                        </div>
                                        <div className="form-check-inline mb-3">
                                            <label htmlFor="no" className="form-check-label">
                                                <input type="radio" name="islive" id="no" className="form-check-input" defaultValue={0} /> No
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