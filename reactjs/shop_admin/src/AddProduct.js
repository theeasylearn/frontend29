import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

export default function AddProduct() {
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
                                    <h5 className="m-0 font-weight-bold text-primary">Products (add)</h5>
                                    <a href="admin_product.html" className="btn btn-primary btn-sm">back
                                    </a>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <label htmlFor="category" className="form-label">Category</label> <br />
                                                <select id="category" className="form-select" required>
                                                    <option selected>Choose...</option>
                                                    <option value={1}>Category 1</option>
                                                    <option value={2}>Category 2</option>
                                                    <option value={3}>Category 3</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="title" className="form-label">Title</label>
                                                <input type="text" className="form-control" id="title" placeholder="Enter title" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="price" className="form-label">Price</label>
                                                <input type="number" className="form-control" id="price" placeholder="Enter price" required />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="details" className="form-label">Details</label>
                                                <textarea className="form-control" id="details" rows={3} placeholder="Enter details" required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <label htmlFor="stock" className="form-label">Stock</label>
                                                <input type="number" className="form-control" id="stock" placeholder="Enter stock quantity" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="weight" className="form-label">Weight</label>
                                                <input type="number" className="form-control" id="weight" placeholder="Enter weight" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="size" className="form-label">Size</label>
                                                <input type="text" className="form-control" id="size" placeholder="Enter size" required />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <label htmlFor="photo" className="form-label">Photo</label>
                                                <input type="file" className="form-control" id="photo" required accept="image/*" />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label">Is Live</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="isLiveYes" defaultValue={1} required />
                                                    <label className="form-check-label" htmlFor="isLiveYes">Yes</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="islive" id="isLiveNo" defaultValue={0} required />
                                                    <label className="form-check-label" htmlFor="isLiveNo">No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="submit" className="btn btn-primary w-100 mb-2">Save</button>
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