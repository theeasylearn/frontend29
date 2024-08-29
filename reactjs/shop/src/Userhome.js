export default function Userhome(){
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
    <div className="container my-5">
      <div className="row">
        {/* col */}
        <div className="col-12 ">
          {/* cta */}
          <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 text-center text-lg-start rounded shadow">
            {/* img */}
            <div className="d-lg-flex align-items-center">
              <img src="theme/assets/images/about/about-icons-1.svg" alt className="img-fluid" />
              {/* text */}
              <div className="ms-lg-4">
                <h1 className="fs-2 mb-1">Welcome to FreshCart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div className="container mb-5">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
          {/* col */}
          <div className="col">
            <a href="shop-grid.html" className="text-decoration-none text-inherit">
              {/* card */}
              <div className="card card-product">
                <div className="card-body text-center py-8">
                  {/* img */}
                  <img src="theme/assets/images/category/category-dairy-bread-eggs.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
                  {/* text */}
                  <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="my-lg-14 my-8">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="theme/assets/images/icons/clock.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">10 minute grocery now</h3>
              {/* text */}
              <p className="mb-0">Get your order delivered to your doorstep at the earliest from FreshCart pickup
                stores near you.</p>
            </div>
          </div>
          {/* col */}
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="theme/assets/images/icons/gift.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
              {/* text */}
              <p className="mb-0">Cheaper prices than your local supermarket, great cashback offers to top it off. Get
                best pricess &amp; offers.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="theme/assets/images/icons/package.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">Wide Assortment</h3>
              {/* text */}
              <p className="mb-0">Choose from 5000+ products across food, personal care, household, bakery, veg and
                non-veg &amp; other categories.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="mb-8 mb-lg-0">
              {/* img */}
              <div className="mb-6"><img src="theme/assets/images/icons/refresh-cw.svg" alt /></div>
              {/* title */}
              <h3 className="h5 mb-3">Easy Returns</h3>
              {/* text */}
              <p className="mb-0">
                Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No
                questions asked
                <a href="#!">policy</a>
                .
              </p>
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