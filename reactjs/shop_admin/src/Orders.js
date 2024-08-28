import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
export default function AdminOrders() {
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
                      Orders
                    </h5>
                  </div>
                  <div className="card-body">
                    <table className="table table-striped table-sm">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Delivery</th>
                          <th>Order Status</th>
                          <th>View Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Fri 09-08-2024</td>
                          <td>95214</td>
                          <td>
                            Bhavnagar <br /> 364001
                          </td>
                          <td>Confirmed</td>
                          <td>
                            <Link
                              className="btn btn-primary"
                              to="/view-order-detail"
                            >
                              View
                            </Link>
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
