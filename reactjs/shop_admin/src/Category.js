import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

export default function Category() {
    return (<div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <AdminHeader />
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
                                                <th>Detail</th>
                                                <th>is live</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Phone</td>
                                                <td width="20%">
                                                    <img src="https://picsum.photos/100" alt className="img-fluid" />
                                                </td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea fugit iste est! Eum beatae fuga ipsam temporibus culpa, id sunt dignissimos. Numquam natus tenetur repellat quidem reiciendis, dicta eligendi.</td>
                                                <td>Yes</td>
                                                <td width="15%">
                                                    <Link to="/edit-category" className="btn btn-warning btn-sm">Edit</Link>
                                                    <button type='button' className="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </tr>
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