import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  //object destructring
  let { productid } = useParams();
  //create state variable(hold only one value at time)
  let [title, setTitle] = useState();
  let [price, setPrice] = useState();
  let [weight, setWeight] = useState();
  let [size, setSize] = useState();
  let [detail, setDetail] = useState();
  let [photo, setPhoto] = useState();
  let [isLive, setIsLive] = useState();
  let [categoryid, setCategoryId] = useState();
  let [stock, setStock] = useState();
  let [isDataFetched, setIsDataFetched] = useState(false);
  //create state array (many values at a time)
  let [category, setCategories] = useState([]);

  //create navigate object
  let navigate = useNavigate();

  let fetchSingleProduct = function () {
    //api call
    let apiAddress = getBase() + "product.php?productid=" + productid;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showMessage(error);
      else {
        let total = response.data[1]['total'];
        if (total === 0)
          showMessage('no product found');
        else {
          //response.data.splice(0,2); //delete 1st object
          setTitle(response.data[2]['title']);
          setPrice(response.data[2]['price']);
          setStock(response.data[2]['stock']);

          setPhoto(response.data[2]['photo']);
          setWeight(response.data[2]['weight']);
          setIsLive(response.data[2]['islive']);

          setDetail(response.data[2]['detail']);
          setCategoryId(response.data[2]['categoryid']);
          setSize(response.data[2]['size']);


        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showMessage(NETWORK_ERROR);
    });
  }
  let fetchCategories = function () {
    if (category.length === 0) {
      let apiAddress = getBase() + "category.php";
      axios({
        method: 'get',
        url: apiAddress,
        responseType: 'json',

      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showMessage(error);
        else {
          let total = response.data[1]['total'];
          if (total === 0)
            showMessage('no category found');
          else {
            //delete 2 elements from begining
            response.data.splice(0, 2);
            //store remaining array into state array
            setCategories(response.data);
            setIsDataFetched(true);

          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          showMessage(NETWORK_ERROR)
      });
    }
  }
  useEffect(() => {
    if (isDataFetched === false) {
      fetchSingleProduct();
      fetchCategories();
    }
  }); 
  
  let updateProduct = function(e)
  {
      e.preventDefault();
      console.log(categoryid,title,price,stock,weight,size,isLive,detail,photo);
      let apiAddress = getBase() + "update_product.php";
      // input : name,photo,price,stock,detail,productid,categoryid (required) 
      let form = new FormData();
      form.append("name", title);
      form.append("photo", photo);
      form.append("price", price);
      form.append("stock", stock);
      form.append("size", size);
      form.append("weight", weight);
      form.append("detail", detail);
      form.append("categoryid",categoryid);
      form.append("islive", isLive);
      form.append("productid", productid);
      axios({
        method:'post',
        responseType:'json',
        url:apiAddress,
        data:form
      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if(error !=='no')
            showMessage(error);
        else 
        {
            let success = response.data[1]['success'];
            let message = response.data[2]['message'];
            if(success==='no')
                showMessage(message);
            else 
            {
                showMessage(message,'success');
                setTimeout(() => {
                    navigate("/product");
                },2000);
            }
        }
    }).catch((error) => {
        if(error.code === 'ERR_NETWORK')
            showMessage(NETWORK_ERROR);
    });

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
                      Products (edit)
                    </h5>
                    <a
                      href="admin_product.html"
                      className="btn btn-primary btn-sm"
                    >
                      back
                    </a>
                  </div>
                  <div className="card-body">
                    <form onSubmit={updateProduct}>
                      <div className="row">
                        <div className="col-sm-2">
                          <b>Existing Photo</b> <br />
                          <img
                            src={"http://www.theeasylearnacademy.com/shop/images/product/" + photo}
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-sm-10">
                          <div className="row mb-3">
                            <div className="col-md-4">
                              <label htmlFor="category" className="form-label">
                                Change Category
                              </label>{" "}
                              <br />
                              <select
                                id="category"
                                className="form-select"
                                required=""
                                onChange={(e) => setCategoryId(e.target.value)}
                              >
                                <option value=''>Choose Category</option>
                                {category.map((item) => {
                                  console.log(item.id, categoryid);
                                  if (item.id == categoryid)
                                    return (<option selected='selected' value={item['id']}>{item['title']}</option>)
                                  else
                                    return (<option value={item['id']}>{item['title']}</option>)
                                })}
                              </select>
                            </div>
                            <div className="col-md-4">
                              <label htmlFor="title" className="form-label">
                                Edit Title
                              </label>
                              <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} // Ensure the state is updated
                                className="form-control"
                                id="title"
                                placeholder="Enter title"
                                required=""
                              />
                            </div>
                            <div className="col-md-4">
                              <label htmlFor="price" className="form-label">
                                Edit Price
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="price"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                placeholder="Enter price"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <label htmlFor="details" className="form-label">
                                Edit Details
                              </label>
                              <textarea
                                className="form-control"
                                id="details"
                                rows={3}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder="Enter details"
                                required=""
                                defaultValue={detail}>

                              </textarea>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-4">
                              <label htmlFor="stock" className="form-label">
                                Edit Stock
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="stock"
                                placeholder="Enter stock quantity"
                                required="" value={stock}
                                onChange={(e) => setStock(e.target.value)}
                              />
                            </div>
                            <div className="col-md-4">
                              <label htmlFor="weight" className="form-label">
                                Edit Weight
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="weight"
                                placeholder="Enter weight"
                                required="" value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                              />
                            </div>
                            <div className="col-md-4">
                              <label htmlFor="size" className="form-label">
                                Edit Size
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="size" value={size}
                                placeholder="Enter size"
                                required=""
                                onChange={(e) => setSize(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-4">
                              <label htmlFor="photo" className="form-label">
                                Change Photo
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="photo"
                                required=""
                                onChange={(e) => setPhoto(e.target.files[0])}
                                accept="image/*"
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Is Live</label>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="islive"
                                  id="isLiveYes"
                                  defaultValue={1}
                                  required=""
                                  checked={(isLive === '1') ? 'checked' : ''}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="isLiveYes"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="islive"
                                  id="isLiveNo"
                                  defaultValue={0}
                                  required=""
                                  checked={(isLive === '0') ? 'checked' : ''}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="isLiveNo"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <button
                                type="submit"
                                className="btn btn-primary w-100 mb-2"
                              >
                                Save changes
                              </button>
                              <button
                                type="reset"
                                className="btn btn-light w-100"
                              >
                                Clear all
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
