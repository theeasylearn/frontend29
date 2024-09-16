import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer } from "react-toastify";
export default function ViewOrderDetail() {
  //create variable to store input passed along with route 
  let {orderid} = useParams();
  let [billdate, setBillDate] = useState("");
  let [orderstatus, setOrderStatus] = useState("");
  let [id, setId] = useState("");
  let [fullname, setFullName] = useState("");
  let [address1, setAddress1] = useState("");
  let [address2, setAddress2] = useState("");
  let [city, setCity] = useState("");
  let [pincode, setPincode] = useState("");
  let [amount, setAmount] = useState("");

  useEffect(() => {
    //call api
    let apiAddress = getBase() + "orders.php?id=" + orderid;

    axios({
      method:'get',
      responseType:'json',
      url:apiAddress,
    }).then((response) =>{
       console.log(response.data);
       let error = response.data[0]['error'];
       if(error !== 'no')
          showMessage(error);
       else 
       {
          let total = response.data[1]['total'];
          if(total === 0)
            showMessage('no orders found');
          else 
          {
              response.data.splice(0,2);
              //copy value into individual state variables
              setAddress1(response.data[0]['address1']);
              setAddress2(response.data[0]['address2']);
              setAmount(response.data[0]['amount']);
              setBillDate(response.data[0]['billdate']);
              setCity(response.data[0]['city']);
              setFullName(response.data[0]['fullname']);
              setOrderStatus(response.data[0]['orderstatus']);
              setId(response.data[0]['id']);
              setFullName(response.data[0]['fullname']);
              setPincode(response.data[0]['pincode']);
              
          }
       }
    }).catch((error) => {
        if(error.code === 'ERR_NETWORK')
        {
            showMessage(NETWORK_ERROR);
        }  
    });
});

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
                      Order (Detail)
                    </h5>
                    <span>
                      <Link
                        to="/orders"
                        className="btn btn-primary btn-sm"
                      >
                        Back
                      </Link>
                      <Link
                        to="/print-orders"
                        className="btn btn-secondary btn-sm"
                      >
                        Print
                      </Link>
                    </span>
                  </div>
                  <div className="card-body">
                    <table className="table table-sm table-striped table-bordered">
                      <tbody>
                        <tr>
                          <td width="25%">Name</td>
                          <td width="25%">{fullname}</td>
                          <td width="25%">Date</td>
                          <td width="25%">{billdate}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>
                          {address1} <br />
                            {address2}
                          </td>
                          <td>Bill No</td>
                          <td>{id}</td>
                        </tr>
                        <tr>
                          <td>Pincode</td>
                          <td>{pincode}</td>
                          <td>Delivery Status</td>
                          <td>
                            <form action="">
                              <select
                                className="form-control"
                                name="orderstatus"
                                id="orderstatus"
                              >
                                <option value="">Select</option>
                                <option value="">Confirmed</option>
                                <option value="">Dispatched</option>
                                <option value="">Delivered</option>
                                <option value="">Canceled</option>
                              </select>
                              <input
                                type="submit"
                                defaultValue="save"
                                className="btn btn-primary w-100 mt-1"
                              />
                            </form>
                          </td>
                        </tr>
                        <tr>
                          <td>Mobile</td>
                          <td>1234567890</td>
                          <td>Payment Status</td>
                          <td>Online</td>
                        </tr>
                        <tr>
                          <td colSpan={1}>Remarks</td>
                          <td colSpan={3}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo possimus maxime debitis! Atque doloribus
                            laborum similique officia deleniti delectus velit,
                            et consequatur provident quas, ex sequi
                            necessitatibus a tenetur? Culpa.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <table className="table table-sm table-striped table-bordered">
                      <thead>
                        <tr>
                          <td>Sr No</td>
                          <td>Name</td>
                          <td align="right">Price</td>
                          <td align="right">Quantity</td>
                          <td align="right">Total</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="5%">1</td>
                          <td width="40%">IPhone - 15 pro</td>
                          <td width="10%" align="right">
                            125000
                          </td>
                          <td width="10%" align="right">
                            2
                          </td>
                          <td width="20%" align="right">
                            250000
                          </td>
                        </tr>
                        <tr>
                          <td width="5%">2</td>
                          <td width="40%">Macbook pro</td>
                          <td width="10%" align="right">
                            225000
                          </td>
                          <td width="10%" align="right">
                            1
                          </td>
                          <td width="20%" align="right">
                            225000
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4}>Total</td>
                          <td align="right">4,75,000</td>
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
