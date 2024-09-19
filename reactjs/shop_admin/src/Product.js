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
//https://theeasylearnacademy.com/shop/ws/delete_product.php?id=1
export default function Products() 
{
  //create state array
  let [products,setProducts] = useState([]);
  VerifyLogin();
  useEffect(() => {
      let apiAddress = getBase() + "product.php";
      axios({
          method:'get',
          responseType:'json',
          url:apiAddress
      }).then((response) => {
          console.log(response.data);
          let error = response.data[0]['error'];
          if(error !=='no')
            showMessage(error);
          else 
          {
            let total = response.data[1]['total'];
            if(total === 0)
              showMessage('no product found');
            else 
            {
                response.data.splice(0,2); //delete 1st object
                setProducts(response.data);
                
            }
          }
      }).catch((error) => {
        if(error.code === 'ERR_NETWORK')
            showMessage(NETWORK_ERROR);
      });
  })
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
                      Product
                    </h5>
                    <Link to="/add-product" className="btn btn-primary btn-sm">add
                      <i className="fa fa-plus" />
                    </Link>
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
                          {products.map((item) => {
                              return (<tr>
                                <td>{item['id']}</td>
                                <td>
                                  <Link
                                    to={"/view-product-detail/" + item['id']}
                                    target="_blank"
                                  >
                                   {item['title']} <br />
                                    {item['categorytitle']}
                                  </Link>
                                </td>
                                <td>{item['price']}</td>
                                <td>
                                  <img
                                    src={"http://theeasylearnacademy.com/shop/images/product/" + item['photo']} alt='image not available'
                                    className="img-fluid"
                                  />
                                </td>
                                <td>{item['stock']}</td>
                                <td>{(item['islive']==='1')?'Yes':'No'}</td>
                                <td>
                                  <Link
                                    to={"/edit-product/" + item['id']}
                                    className="btn btn-warning btn-sm btn-block mb-1"
                                  >
                                    Edit
                                  </Link>
                                  <a
                                    href="#"
                                    className="btn btn-danger btn-sm btn-block"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>);
                          })}
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
