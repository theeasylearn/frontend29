import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminLogin() {
  let [email,setEmail] = useState();
  let [password,setPassword] = useState();
  let navigate = useNavigate();
  let checkLogin = function(e)
  {
      e.preventDefault();
      console.log(email,password);
      let apiAddress = "https://theeasylearnacademy.com/shop/ws/admin_login.php";
      let form = new FormData();
      form.append('email',email); //admin@gmail.com
      form.append('password',password); //123123

      //api calling
      axios({
        method:'post',
        url:apiAddress,
        data:form,
        responseType:'json'
      }).then((response) => {
        console.log(response);
        let error = response.data[0]['error'];
        if(error !== 'no')
          toast(error);
        else 
        {
          let success = response.data[1]['success'];
          let message = response.data[2]['message'];
          if(success === 'no')
            alert(message);
          else 
          {
            alert(message);
            //display another screen to user (dashboard)
            navigate("/dashboard");

          }
        }
      }).catch((error) => {
          console.log(error);
          if(error.code === 'ERR_NETWORK')
            alert('either server is offline or internet is not available or check api address');
      });

  }
  return (
    <div className="container">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block">
                  <img src="theme/img/large.png" />
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                    </div>
                    <form className="user" onSubmit={checkLogin}>
                      <div className="form-group">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control form-control-user"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control form-control-user"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary btn-user btn-block">
                        Sign in
                      </button>
                      <hr />
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
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
