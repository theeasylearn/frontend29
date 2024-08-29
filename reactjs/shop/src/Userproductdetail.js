export default function Userproductdetail(){
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
              <h3 className="mb-0">IPhone - 15</h3>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section className="mt-8">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-xl-6">
            {/* img slide */}
            <div className="product" id="product">
              <div className="zoom" onmousemove="zoom(event)" style={{}}>
                {/* img */}
                {/* img */}
                <img src="theme/assets/images/products/product-single-img-1.jpg" alt />
              </div>
            </div>
            {/* product tools */}
          </div>
          <div className="col-md-7 col-xl-6">
            <div className="ps-lg-10 mt-6 mt-md-0">
              {/* content */}
              <a href="#!" className="mb-4 d-block">IPhone</a>
              {/* heading */}
              <h1 className="mb-1">IPhone 15</h1>
              <div className="fs-4 d-flex justify-content-between mb-3"> 
                {/* price */}
                <span className="fw-bold text-dark">₹ 1,25,000</span>
                <button type="button" className="btn btn-primary">
                  <i className="feather-icon icon-shopping-bag me-2" />
                  Add to cart
                </button>
              </div>
              {/* hr */}
              <div>
                {/* table */}
                <table className="table table-bordered table-sm">
                  <tbody>
                    <tr>
                      <td width="25%">Product Code:</td>
                      <td />
                    </tr>
                    <tr>
                      <td>Stock:</td>
                      <td />
                    </tr>
                    <tr>
                      <td>Size:</td>
                      <td />
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td />
                    </tr>
                    <tr>
                      <td>Detail:</td>
                      <td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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