import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import getBase, { NETWORK_ERROR } from "./common";
import axios from "axios";
import { showMessage } from "./message";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./VerifyLogin";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
export default function ChangePassword() {
  VerifyLogin();
  //create variables for inputs 
  let [password, setPassword] = useState('');
  let [newpassword, setNewPassword] = useState('');
  let [confirmpassword, setConfirmPassword] = useState('');
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let navigate = useNavigate();
  let updatePassword = function (e) {
    e.preventDefault();
    console.log('form submitted');
    console.log(password, newpassword, confirmpassword);

    if (newpassword !== confirmpassword) {
      showMessage('new password and confirm new password must be same');
    }
    else {
      let apiAddress = getBase() + "change_password.php";
      let form = new FormData();
      form.append("id", cookies['adminid']);
      form.append("password", password);
      form.append("newpassword", newpassword);
      axios({
        method: 'post',
        url: apiAddress,
        responseType: 'json',
        data: form
      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no') {
          showMessage(error);
        }
        else {
          let success = response.data[1]['success'];
          showMessage(response.data[2]['message'], 'success');
          if (success === 'yes') {
            //navigate to category route
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        }
      }).catch((error) => {
        console.log(error);
        if (error.code === 'ERR_NETWORK')
          showMessage(NETWORK_ERROR);
      });
    }
  }

  return (<div id="wrapper">
    <Sidebar />
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <AdminHeader />
        {/* Begin Page Content */}
        <div className="container-fluid">
          <ToastContainer />
          <div className="row">
            <div className="col-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                  <h5 className="m-0 font-weight-bold text-primary">
                    Change password
                  </h5>
                </div>
                <div className="card-body">
                  <form action="" encType="multipart/form-data" method="post" onSubmit={updatePassword}>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Current password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="new_password" className="form-label">
                        New password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="new_password"
                        className="form-control"
                        required=""
                        value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirm_password" className="form-label">
                        Confirm new password
                      </label>
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        className="form-control"
                        required=""
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <input
                        type="submit"
                        value="save changes"
                        name="submit"
                        className="btn btn-primary"

                      />
                      <input
                        type="reset"
                        defaultValue="clear"
                        name="reset"
                        className="btn btn-light"
                      />
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
  </div>)
}