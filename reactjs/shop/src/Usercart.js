export default function Usercart(){
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
              <h3 className="mb-0">Cart</h3>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section>
      <div className="container">
        <div className="offcanvas-body">
          <div>
            <ul className="list-group list-group-flush">
              {/* list group */}
              <li className="list-group-item py-3 ps-0 border-top">
                {/* row */}
                <div className="row align-items-center">
                  <div className="col-6 col-md-6 col-lg-7">
                    <div className="d-flex">
                      <img src="theme/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                      <div className="ms-3">
                        {/* title */}
                        <a href="shop-single.html" className="text-inherit">
                          <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                        </a>
                        {/* text */}
                        <div className="mt-2 small lh-1">
                          <a href="#!" className="text-decoration-none text-inherit">
                            <span className="me-1 align-text-bottom">
                              <button className="btn btn-sm btn-danger">Remove</button>
                            </span>
                            <span className="text-muted" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* input group */}
                  <div className="colb-4 col-md-3 col-lg-3">
                    {/* input */}
                    {/* input */}
                    ₹ 1,25,000 X 3
                  </div>
                  {/* price */}
                  <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold">₹ 3,75,000</span>
                  </div>
                </div>
              </li>
            </ul>
            {/* btn */}
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