import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";
import { useEffect } from "react";
//https://theeasylearnacademy.com/shop/ws/users.php
export default function Users() {
  VerifyLogin();
  
  useEffect(() => {

  });
  return (
    <div id="wrapper">
      <Sidebar />
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <AdminHeader />
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 d-flex justify-content-between">
                    <h5 class="m-0 font-weight-bold text-primary">
                      Users - Customers
                    </h5>
                  </div>
                  <div class="card-body">
                    <table class="table table-striped table-sm">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Created at</th>
                          <th>History</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>ankit@gmail.com</td>
                          <td>1234567890</td>
                          <td>Fri 09-08-2024</td>
                          <td>
                            <Link class="btn btn-primary" to="/orders">
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
