import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
export default function ViewProductDetail() {
  let { productid } = useParams();
  //create state variables
  let [title,setTitle] = useState();
  let [price,setPrice] = useState();
  let [photo,setPhoto] = useState();
  let [weight,setWeight] = useState();
  let [size,setSize] = useState();
  let [detail,setDetail] = useState();
  let [stock,setStock] = useState();
  let [categorytitle,setCategoryTitle] = useState();
  let [isLive,setIsLive] = useState();
  useEffect(() => {
    console.log(productid);
    let apiAddress = getBase() + "product.php?productid=" + productid;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response);
      console.log('test');
      let error = response.data[0]['error'];
      if (error !== 'no')
        showMessage(error);
      else {
        let total = response.data[1]['total'];
        if (total === 0)
          showMessage('no product found');
        else 
        {
            setTitle(response.data[2]['title']);
            setDetail(response.data[2]['detail']);
            setPhoto(response.data[2]['photo']);
            setPrice(response.data[2]['price']);
            setStock(response.data[2]['stock']);
            setWeight(response.data[2]['weight']);
            setCategoryTitle(response.data[2]['categorytitle']);
            setSize(response.data[2]['size']);
            setIsLive(response.data[2]['islive']);

        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
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
                      Products (view detail)
                    </h5>
                    <a
                      href="admin_products.html"
                      className="btn btn-primary btn-sm"
                    >
                      Back
                    </a>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td width="25%">
                            <img
                              src={"http://theeasylearnacademy.com/shop/images/product/" + photo}
                              className="img-fluid"
                            />
                          </td>
                          <td>
                            <table className="table table-striped table-sm">
                              <tbody>
                                <tr>
                                  <td>Name</td>
                                  <td>{title}</td>
                                </tr>
                                <tr>
                                  <td>Category</td>
                                  <td>{categorytitle}</td>
                                </tr>
                                <tr>
                                  <td>Price</td>
                                  <td>{price}</td>
                                </tr>
                                <tr>
                                  <td>Stock</td>
                                  <td>{stock}</td>
                                </tr>
                                <tr>
                                  <td>Weight</td>
                                  <td>{weight}</td>
                                </tr>
                                <tr>
                                  <td>Size</td>
                                  <td>{size}</td>
                                </tr>
                                <tr>
                                  <td>Detail</td>
                                  <td>
                                    {detail}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Is Live</td>
                                  <td>{(isLive === '1')?"yes":"no"}</td>
                                </tr>
                                <tr>
                                  <td />
                                  <td />
                                </tr>
                                <tr>
                                  <td />
                                  <td />
                                </tr>
                              </tbody>
                            </table>
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
