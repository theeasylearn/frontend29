import { useState } from "react";
import axios from 'axios';
//
export default function AdminLogin() {
  let [email,setEmail] = useState();
  let [password,setPassword] = useState();
  let checkLogin = function(e)
  {
      e.preventDefault();
      console.log(email,password);
      let apiAddress = "https://theeasylearnacademy.com/shop/ws/admin_login.php?email=admin@gmail.com&password=123123";
      let form = new FormData();
      form.append('email',email);
      form.append('password',password);

      //api calling
      axios({
        method:'post',
        url:apiAddress,
        data:form,
        responseType:'json'
      }).then((response) => {
        console.log(response);
      });

  }
  return (
    <div className="container">
      {/* Outer Row */}
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
