export default function Usercheckout(){
    return(
        <div>
  {/* navigation */}
  <header className="py-lg-5 py-4 px-0 border-bottom border-bottom-lg-0">
    <div className="container-fluid">
      <div className="row w-100 align-items-center g-0 gx-lg-3">
        <div className="col-xxl-9 col-lg-8">
          <div className="d-flex align-items-center">
            <a className="navbar-brand d-none d-lg-block" href="theme/index.html">
              <img src="theme/assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
            </a>
          </div>
          <div className="d-flex justify-content-between w-100 d-lg-none">
            <a className="navbar-brand" href="theme/index.html">
              <img src="theme/assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
            </a>
            <div className="d-flex align-items-center lh-1">
              {/*  menu Button */}
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                  <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0 py-lg-2 navbar-default">
    <div className="container-fluid">
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
        <div className="offcanvas-header pb-1">
          <a href="index.html"><img src="theme/assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          {/* responsive menu */}
          <div>
            <ul className="navbar-nav align-items-center navbar-offcanvas-color">
              <li className="nav-item">
                <a className="nav-link" href="user_home.html">Home</a>
              </li>
            </ul>
          </div>
          {/* responsive menu */}
        </div>
      </div>
    </div>
  </nav>
  <main>
    <section className="my-lg-4">
      {/* category */}
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-12">
            <div className="mb-8">
              {/* heading */}
              <h3 className="mb-0">Checkout</h3>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="card shadow">
              <div className="card-body">
                <form action>
                  {/* row */}
                  <div className="row g-3">
                    {/* col */}
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="fullname" aria-label="First name" required />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      <input type="tel" className="form-control" placeholder="mobile" aria-label="Last name" required />
                    </div>
                    {/* col */}
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="Address Line 1" />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input type="text" className="form-control" placeholder="Address Line 2" />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input type="text" className="form-control" placeholder="Zip Code" />
                    </div>
                    <div className="col-12">
                      {/* button */}
                      <input type="text" className="form-control" placeholder="Remarks" />
                    </div>
                    {/* button */}
                    <div className="col-12 text-end">
                      <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                      <button className="btn btn-primary" type="button">Place Order</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <ul className="list-group">
              <li className="list-group-item px-4 py-3">
                <h3>Order detail</h3>
              </li>
              <li className="list-group-item px-4 py-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div>Item Subtotal</div>
                  <div className="fw-bold">375000</div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    Delivery charge
                    <i className="feather-icon icon-info text-muted" data-bs-toggle="tooltip" title="Default tooltip" />
                  </div>
                  <div className="fw-bold">0</div>
                </div>
              </li>
              {/* list group item */}
              <li className="list-group-item px-4 py-3">
                <div className="d-flex align-items-center justify-content-between fw-bold">
                  <div>Total</div>
                  <div>375000</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer" style={{"padding":"20px"}}>
    <div className="container">
      <div className="col-md-12 text-center">
        <span className="small text-muted">
          © 2022
          <span id="copyright">
            -
          </span>
          FreshCart eCommerce HTML Template. All rights reserved. Powered by
          <a href="#">frontend29@theeasylearnacademy</a>
          .
        </span>
      </div>
    </div>
  </footer></div>
    )
}