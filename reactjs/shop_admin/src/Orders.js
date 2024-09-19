import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";

//https://theeasylearnacademy.com/shop/ws/orders.php
export default function AdminOrders() {
  VerifyLogin();
  
  let apiAddress = getBase() + "orders.php";
  //create state array
  let [orders,setOrders] = useState([]);

  useEffect(() => {
      //call api
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
                //copy state array
                setOrders(response.data);
            }
         }
      }).catch((error) => {
          if(error.code === 'ERR_NETWORK')
          {
              showMessage(NETWORK_ERROR);
          }  
      });
  });

  let displayOrders = function(item)
  {
      return ( <tr>
        <td>{item.id}</td>
        <td>{item.billdate}</td>
        <td>{item.amount}</td>
        <td>
          {item.city} <br /> {item.pincode}
        </td>
        <td>{(item.orderstatus === '1')?'Confirmed':'Dispatched'}</td>
        <td>
          <Link
            className="btn btn-primary"
            to={"/view-order-detail/" + item.id}
          >
            View
          </Link>
        </td>
      </tr>);
  }
  return (
    <div id="wrapper">
      <Sidebar />
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <AdminHeader />
          <div className="container-fluid">
            <ToastContainer />
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
                        {orders.map((item) => displayOrders(item))}
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
