import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//example of bootstrap 5 login form
var PageContent = (
    <div className='container mt-5'>
        <div className='row'>
            <div className="col-6 offset-3">
                {/* Login  */}
                <div className="card shadow">
                    <div className="card-header text-bg-primary">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className='mb-3'>
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input id='email' type="email" className='form-control' required  />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password" className='form-label'>Password</label>
                                <input id='password' type="password" className='form-control' required  />
                            </div>
                            <input type="submit" value="Sign in" className='btn btn-primary w-100' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
root.render(PageContent);