import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

export default function products() 
{
  return (
    <div id="wrapper">
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
                    <h5 className="m-0 font-weight-bold text-primary">
                      Product
                    </h5>
                    <a
                      href="admin_add_product.html "
                      className="btn btn-primary btn-sm"
                    >
                      add
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Photo</th>
                          <th>Stock</th>
                          <th>is Live?</th>
                          <th>Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <a
                              href="admin_view_product_detail.html"
                              target="_blank"
                            >
                              IPhone - 14 <br />
                              Phone
                            </a>
                          </td>
                          <td>125000</td>
                          <td>
                            <img
                              src="http://picsum.photos/100"
                              className="img-fluid"
                            />
                          </td>
                          <td>100</td>
                          <td>Yes</td>
                          <td>
                            <a
                              href="admin_edit_product.html"
                              className="btn btn-warning btn-sm btn-block mb-1"
                            >
                              Edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm btn-block"
                            >
                              Delete
                            </a>
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
  )
}
