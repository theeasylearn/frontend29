import React from 'react';
import ReactDOM from 'react-dom/client';
function MenuItem(props)
{
  return (<li className="nav-item">
    <a className="nav-link active" href={props.target} aria-current="page" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar">{props.text}</a>
  </li>)
}
function SiteHeader() {
  return (<header id="header" className="sticky-top bsb-tpl-header-sticky bsb-tpl-header-sticky-animationX">
    <nav id="scrollspyNav" className="navbar navbar-expand-lg bsb-tpl-bg-blue bsb-navbar bsb-navbar-hover bsb-navbar-caret bsb-tpl-navbar-sticky" data-bsb-sticky-target="#header">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="./assets/img/branding/wave-logo.svg" className="bsb-tpl-logo" alt />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul id="bsb-tpl-navbar" className="navbar-nav justify-content-end flex-grow-1">
              <MenuItem target='#scrollspyNav' text='Home' />
              <MenuItem target='#scrollspyServices' text='Services' />
              <MenuItem target='#scrollspyPortfolio' text='Portfolio' />
              <MenuItem target='#scrollspyAbout' text='About' />
              <MenuItem target='#scrollspyTeam' text='Team' />
              <MenuItem target='#scrollspyPricing' text='Pricing' />
              <MenuItem target='#scrollspyBlog' text='Blog' />
              <MenuItem target='#scrollspyContact' text='Contact' />

            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>)
}
function Slider() {
  return (<section id="scrollspyHero" className="bsb-hero-2 bsb-tpl-bg-blue py-5 py-xl-8 py-xxl-10">
    <div className="container overflow-hidden">
      <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
        <div className="col-12 col-lg-6 order-1 order-lg-0">
          <h1 className="display-3 fw-bolder mb-3">We provide easy <br /><mark className="bsb-tpl-highlight bsb-tpl-highlight-blue"><span className="bsb-tpl-font-hw display-2 text-accent fw-normal">solutions</span></mark> for startups at affordable rates.</h1>
          <p className="fs-4 mb-5">Our methods are straight, comfortable, and established to ensure evolution and acceleration.</p>
          <div className="d-grid gap-2 d-sm-flex">
            <button type="button" className="btn btn-primary bsb-btn-3xl rounded-pill">Free Consultation</button>
            <button type="button" className="btn btn-outline-primary bsb-btn-3xl rounded-pill">Buy Credits</button>
          </div>
        </div>
        <div className="col-12 col-lg-5 text-center">
          <img className="img-fluid" loading="lazy" src="./assets/img/hero/hero-home.jpg" alt style={{ "-webkit-mask-image": "url(./assets/img/hero/hero-blob-1.svg)", "mask-image": "url(./assets/img/hero/hero-blob-1.svg)" }} />
        </div>
      </div>
    </div>
  </section>)
}
function SiteServices()
{
  return (<section id="scrollspyServices" className="py-5 py-xl-8 bsb-section-py-xxl-1">
    <div className="container mb-5 mb-md-6 mb-xl-10">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
          <h2 className="display-3 fw-bolder mb-4">You will get the <br />perfect <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">resolutions</span></mark> with our proficient services.</h2>
        </div>
      </div>
    </div>
    <div className="container overflow-hidden">
      <div className="row gy-5 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center">
        <div className="col-11 col-sm-6 col-lg-3">
          <div className="badge bsb-tpl-bg-yellow text-primary p-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="currentColor" className="bi bi-pie-chart" viewBox="0 0 16 16">
              <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
            </svg>
          </div>
          <h4 className="mb-3">Market Research</h4>
          <p className="mb-3 text-secondary">We can help you to understand your target market and identify new opportunities for growth. We offer a variety of market research services, interviews, and focus groups.</p>
          <a href="#!" className="fw-bold text-decoration-none link-primary">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
          </a>
        </div>
        <div className="col-11 col-sm-6 col-lg-3">
          <div className="badge bsb-tpl-bg-green text-primary p-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="currentColor" className="bi bi-aspect-ratio" viewBox="0 0 16 16">
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
            </svg>
          </div>
          <h4 className="mb-3">Web Design</h4>
          <p className="mb-3 text-secondary">We can help you to create a visually appealing and user-friendly website. We take into account your brand identity and target audience when designing your website.</p>
          <a href="#!" className="fw-bold text-decoration-none link-primary">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
          </a>
        </div>
        <div className="col-11 col-sm-6 col-lg-3">
          <div className="badge bsb-tpl-bg-pink text-primary p-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="currentColor" className="bi bi-airplane-engines" viewBox="0 0 16 16">
              <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
            </svg>
          </div>
          <h4 className="mb-3">SEO Services</h4>
          <p className="mb-3 text-secondary">We can help you to improve your website's visibility in search engine results pages (SERPs). This can lead to more traffic to your website and more conversions.</p>
          <a href="#!" className="fw-bold text-decoration-none link-primary">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
          </a>
        </div>
        <div className="col-11 col-sm-6 col-lg-3">
          <div className="badge bsb-tpl-bg-cyan text-primary p-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
              <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
            </svg>
          </div>
          <h4 className="mb-3">Content Marketing</h4>
          <p className="mb-3 text-secondary">We can help you to promote your business online through a variety of digital marketing channels, including SEO, PPC, social media marketing, and email marketing.</p>
          <a href="#!" className="fw-bold text-decoration-none link-primary">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>);
}
function SiteParalax()
{
  return (<section className="bsb-cta-1 px-2 bsb-overlay" style={{ "background-image": "url('./assets/img/cta/cta-img-1.jpg')" }}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-9 col-lg-8 col-xl-8 col-xxl-7">
          <h3 className="fs-5 mb-3 text-white text-uppercase"><mark className="text-white bsb-tpl-highlight">Unlock Fresh Prospects</mark></h3>
          <h2 className="display-3 text-white fw-bolder mb-4 pe-xl-5">We are a design agency studio delivering custom creative &amp; unique websites.</h2>
          <a href="#!" className="btn btn-accent bsb-btn-3xl rounded mb-0 text-nowrap">Join Us</a>
        </div>
      </div>
    </div>
  </section>)
}
function SitePortfolio()
{
  return (<section id="scrollspyPortfolio" className="py-5 py-xl-8 bsb-section-py-xxl-1">
    <div className="container mb-5 mb-md-6 mb-xl-10">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
          <h2 className="display-3 fw-bolder mb-4">Meet our portfolio to <br /><mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">kickstart</span></mark> your success.</h2>
        </div>
      </div>
    </div>
    <div className="container overflow-hidden">
      <div className="row gy-2 g-md-2 g-xl-3 bsb-project-2-grid">
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale-up bsb-hover-scale" src="./assets/img/portfolio/project-landscape-1.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInLeft">Canvas Lover</h3>
              <div className="text-white bsb-hover-fadeInRight">Photography</div>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale bsb-hover-scale-up" src="./assets/img/portfolio/project-portrait-1.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInUp">Red Lava</h3>
              <div className="text-white bsb-hover-fadeInDown">Nature</div>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale-up bsb-hover-scale" src="./assets/img/portfolio/project-landscape-2.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInLeft">Jungle Book</h3>
              <div className="text-white bsb-hover-fadeInRight">Adventure</div>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale bsb-hover-scale-up" src="./assets/img/portfolio/project-portrait-2.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInUp">Wavy Road</h3>
              <div className="text-white bsb-hover-fadeInDown">Adventure</div>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale bsb-hover-scale-up" src="./assets/img/portfolio/project-portrait-3.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInUp">Golden Leaves</h3>
              <div className="text-white bsb-hover-fadeInDown">Photography</div>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale bsb-hover-scale-up" src="./assets/img/portfolio/project-portrait-4.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInUp">Minimal Notions</h3>
              <div className="text-white bsb-hover-fadeInDown">Design</div>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale-up bsb-hover-scale" src="./assets/img/portfolio/project-landscape-3.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInLeft">Bright Winks</h3>
              <div className="text-white bsb-hover-fadeInRight">Design</div>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 bsb-project-2-item">
          <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
            <a href="#!">
              <img className="img-fluid bsb-scale-up bsb-hover-scale" src="./assets/img/portfolio/project-landscape-4.jpg" alt />
            </a>
            <figcaption>
              <h3 className="text-white bsb-hover-fadeInLeft">Innovative Day</h3>
              <div className="text-white bsb-hover-fadeInRight">Photography</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>);
}
function SiteAboutus()
{
  return (<section id="scrollspyAbout" className="bsb-tpl-bg-alice-blue py-5 py-xl-8 bsb-section-py-xxl-1">
    {/* FAQ 1 - Bootstrap Brain Component */}
    <div className="container">
      <div className="row gy-5 gy-lg-0 align-items-lg-center">
        <div className="col-12 col-lg-6">
          <img className="img-fluid rounded" loading="lazy" src="./assets/img/about/about-img-1.png" alt />
        </div>
        <div className="col-12 col-lg-6">
          <div className="row justify-content-xl-end">
            <div className="col-12 col-xl-11">
              <h2 className="display-3 fw-bolder mb-4">Our <mark className="bsb-tpl-highlight bsb-tpl-highlight-blue"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">optimistic</span></mark><br /> methods will let you prefer us.</h2>
              <p className="fs-4 mb-5">Here are the leading reasons to prefer us for your brand. We believe in transparency without any hidden barriers.</p>
              <div className="accordion accordion-flush" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Highly Competitive Rates
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We offer some of the most competitive rates in the industry, without sacrificing quality. We understand that cost is an important factor when choosing a service provider, and we are committed to providing our clients with the best possible value for their money.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Contemporary Skills
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Our team is made up of highly skilled and experienced professionals who are up-to-date on the latest trends and technologies. We are constantly investing in our team's development to ensure that we can provide our clients with the highest level of service.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Top Notch Support
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We are committed to providing our clients with top-notch support. Our team is available 24/7 to answer your questions and resolve any issues you may encounter. We believe that our support is one of our greatest strengths, and we are proud to offer it to our clients.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Fact 1 - Bootstrap Brain Component */}
    <div className="container pt-5 pt-xl-8 bsb-section-pt-xxl-1">
      <div className="row gy-4">
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body text-center p-4 p-xxl-5">
              <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-yellow text-primary border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                </svg>
              </div>
              <h3 className="h1 mb-2">120K</h3>
              <p className="fs-5 mb-0 text-secondary">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body text-center p-4 p-xxl-5">
              <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-green text-primary border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-heart-pulse" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
                </svg>
              </div>
              <h3 className="h1 mb-2">1890+</h3>
              <p className="fs-5 mb-0 text-secondary">Issues Solved</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body text-center p-4 p-xxl-5">
              <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-pink text-primary border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-droplet" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                  <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                </svg>
              </div>
              <h3 className="h1 mb-2">250K</h3>
              <p className="fs-5 mb-0 text-secondary">Finished Projects</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body text-center p-4 p-xxl-5">
              <div className="btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 bsb-tpl-bg-cyan text-primary border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-cloud-moon" viewBox="0 0 16 16">
                  <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                  <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
                </svg>
              </div>
              <h3 className="h1 mb-2">786+</h3>
              <p className="fs-5 mb-0 text-secondary">Awwwards Winning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
function SiteTeam()
{
  return (<section id="scrollspyTeam" className="py-5 py-xl-8 bsb-section-py-xxl-1">
    <div className="container mb-5 mb-md-6 mb-xl-10">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
          <h2 className="display-3 fw-bolder mb-4">We are a group of <br /><mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">innovative</span></mark>, experienced, and proficient teams.</h2>
        </div>
      </div>
    </div>
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-lg-0 gx-xxl-5">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
            <div className="card-body p-0">
              <figure className="m-0 p-0">
                <img className="img-fluid" loading="lazy" src="./assets/img/team/team-img-1.jpg" alt />
                <figcaption className="m-0 p-4">
                  <h4 className="mb-1">Flora Nyra</h4>
                  <p className="text-secondary mb-0">Product Manager</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
            <div className="card-body p-0">
              <figure className="m-0 p-0">
                <img className="img-fluid" loading="lazy" src="./assets/img/team/team-img-2.jpg" alt />
                <figcaption className="m-0 p-4">
                  <h4 className="mb-1">Evander Mac</h4>
                  <p className="text-secondary mb-0">Art Director</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
            <div className="card-body p-0">
              <figure className="m-0 p-0">
                <img className="img-fluid" loading="lazy" src="./assets/img/team/team-img-3.jpg" alt />
                <figcaption className="m-0 p-4">
                  <h4 className="mb-1">Taytum Elia</h4>
                  <p className="text-secondary mb-0">Investment Planner</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
            <div className="card-body p-0">
              <figure className="m-0 p-0">
                <img className="img-fluid" loading="lazy" src="./assets/img/team/team-img-4.jpg" alt />
                <figcaption className="m-0 p-4">
                  <h4 className="mb-1">Wylder Elio</h4>
                  <p className="text-secondary mb-0">Financial Analyst</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
function SitePrice()
{
  return (<section id="scrollspyPricing" className="bsb-pricing-1 bsb-tpl-bg-sea-shell py-5 py-xl-8 bsb-section-py-xxl-1">
    <div className="container">
      <div className="row gy-5 gy-lg-0 align-items-center">
        <div className="col-12 col-lg-4">
          <h2 className="display-3 fw-bolder mb-4">Our <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">Pricing</span></mark></h2>
          <p className="fs-4 mb-4 mb-xl-5">Explore our flexible pricing to find an excellent fit to run your business.</p>
          <a href="#!" className="btn bsb-btn-2xl btn-primary rounded-pill">More Plans</a>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row justify-content-xl-end">
            <div className="col-12 col-xl-11">
              <div className="row gy-4 gy-md-0 gx-xxl-5">
                <div className="col-12 col-md-6">
                  <div className="card border-0 border-bottom border-primary shadow-sm">
                    <div className="card-body p-4 p-xxl-5">
                      <h2 className="h4 mb-2">Starter</h2>
                      <h4 className="display-3 fw-bold text-primary mb-0">$45</h4>
                      <p className="text-secondary mb-4">USD / Month</p>
                      <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>5</strong> Bootstrap Install</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>100,000</strong> Visits</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>30 GB</strong> Disk Space</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                          <span>Free <strong>SSL and CDN</strong></span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                          <span>Free <strong>Support</strong></span>
                        </li>
                      </ul>
                      <a href="#!" className="btn bsb-btn-2xl btn-accent rounded-pill">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card border-0 border-bottom border-primary shadow-lg pt-md-4 pb-md-4 bsb-pricing-popular">
                    <div className="card-body p-4 p-xxl-5">
                      <h2 className="h4 mb-2">Pro</h2>
                      <h4 className="display-3 fw-bold text-primary mb-0">$149</h4>
                      <p className="text-secondary mb-4">USD / Month</p>
                      <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>20</strong> Bootstrap Install</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>400,000</strong> Visits</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>50 GB</strong> Disk Space</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span>Free <strong>SSL and CDN</strong></span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span>Free <strong>Support</strong></span>
                        </li>
                      </ul>
                      <a href="#!" className="btn bsb-btn-2xl btn-accent rounded-pill">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
function SiteBlog()
{
  return (<section id="scrollspyPricing" className="bsb-pricing-1 bsb-tpl-bg-sea-shell py-5 py-xl-8 bsb-section-py-xxl-1">
    <div className="container">
      <div className="row gy-5 gy-lg-0 align-items-center">
        <div className="col-12 col-lg-4">
          <h2 className="display-3 fw-bolder mb-4">Our <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">Pricing</span></mark></h2>
          <p className="fs-4 mb-4 mb-xl-5">Explore our flexible pricing to find an excellent fit to run your business.</p>
          <a href="#!" className="btn bsb-btn-2xl btn-primary rounded-pill">More Plans</a>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row justify-content-xl-end">
            <div className="col-12 col-xl-11">
              <div className="row gy-4 gy-md-0 gx-xxl-5">
                <div className="col-12 col-md-6">
                  <div className="card border-0 border-bottom border-primary shadow-sm">
                    <div className="card-body p-4 p-xxl-5">
                      <h2 className="h4 mb-2">Starter</h2>
                      <h4 className="display-3 fw-bold text-primary mb-0">$45</h4>
                      <p className="text-secondary mb-4">USD / Month</p>
                      <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>5</strong> Bootstrap Install</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>100,000</strong> Visits</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>30 GB</strong> Disk Space</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                          <span>Free <strong>SSL and CDN</strong></span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-x text-danger" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                          <span>Free <strong>Support</strong></span>
                        </li>
                      </ul>
                      <a href="#!" className="btn bsb-btn-2xl btn-accent rounded-pill">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card border-0 border-bottom border-primary shadow-lg pt-md-4 pb-md-4 bsb-pricing-popular">
                    <div className="card-body p-4 p-xxl-5">
                      <h2 className="h4 mb-2">Pro</h2>
                      <h4 className="display-3 fw-bold text-primary mb-0">$149</h4>
                      <p className="text-secondary mb-4">USD / Month</p>
                      <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>20</strong> Bootstrap Install</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>400,000</strong> Visits</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span><strong>50 GB</strong> Disk Space</span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span>Free <strong>SSL and CDN</strong></span>
                        </li>
                        <li className="list-group-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                          </svg>
                          <span>Free <strong>Support</strong></span>
                        </li>
                      </ul>
                      <a href="#!" className="btn bsb-btn-2xl btn-accent rounded-pill">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
function SiteTestimonials()
{
  return (<section className="py-5 py-xl-8 bsb-section-py-xxl-1">
    <div className="container mb-5 mb-md-6 mb-xl-10">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
          <h2 className="display-3 fw-bolder mb-4">We believe in client <br /><mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">satisfaction</span></mark>. Here are some testimonials by our worthy clients.</h2>
        </div>
      </div>
    </div>
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-md-0 gx-xxl-5">
        <div className="col-12 col-md-4">
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body p-4 p-xxl-5">
              <figure>
                <img className="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial/testimonial-img-1.jpg" alt="Luna John" />
                <figcaption>
                  <div className="bsb-ratings text-warning mb-3" data-bsb-star={5} data-bsb-star-off={0} />
                  <blockquote className="bsb-blockquote-icon mb-4">We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget. We would highly recommend them to anyone looking for a reliable partner.</blockquote>
                  <h4 className="mb-2">Luna John</h4>
                  <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body p-4 p-xxl-5">
              <figure>
                <img className="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial/testimonial-img-2.jpg" alt="Mark Smith" />
                <figcaption>
                  <div className="bsb-ratings text-warning mb-3" data-bsb-star={4} data-bsb-star-off={1} />
                  <blockquote className="bsb-blockquote-icon mb-4">We were looking for a company that could help us develop a new website that was both visually appealing and user-friendly. We are so happy with the results, and we would highly recommend them to anyone looking for a new website.</blockquote>
                  <h4 className="mb-2">Mark Smith</h4>
                  <h5 className="fs-6 text-secondary mb-0">Marketing Specialist</h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body p-4 p-xxl-5">
              <figure>
                <img className="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src="./assets/img/testimonial/testimonial-img-4.jpg" alt="Luke Reeves" />
                <figcaption>
                  <div className="bsb-ratings text-warning mb-3" data-bsb-star={5} data-bsb-star-off={0} />
                  <blockquote className="bsb-blockquote-icon mb-4">We were looking for a company that could help us with our branding. We needed a website and marketing materials. They were able to create a brand identity that we loved. They worked with us to develop a logo that represented our company.</blockquote>
                  <h4 className="mb-2">Luke Reeves</h4>
                  <h5 className="fs-6 text-secondary mb-0">Sales Manager</h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
function SiteContent() {
  return (<main id="main">
    <SiteServices />
    <SiteParalax />
    <SitePortfolio />
    <SiteAboutus />
    <SiteTeam />
    <SitePrice />
    <SiteBlog />
    <SiteTestimonials />
    <section id="scrollspyBlog" className="bsb-tpl-bg-linen py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-4">
            <h2 className="display-3 fw-bolder mb-4">Our <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">Blog</span></mark></h2>
            <p className="fs-4 mb-4 mb-xl-5">Stay tuned and updated by the latest updates from our blog.</p>
            <a href="#!" className="btn bsb-btn-2xl btn-primary rounded-pill">More Plans</a>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <div className="row gy-4 gy-xxl-5 gx-xxl-5">
                  <div className="col-12 col-lg-6">
                    <article>
                      <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                          <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/blog/blog-image-1.jpg" alt />
                        </a>
                        <figcaption>
                          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                          <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                        </figcaption>
                      </figure>
                      <div className="entry-header mb-3">
                        <ul className="entry-meta list-unstyled d-flex mb-2">
                          <li>
                            <a className="link-primary text-decoration-none" href="#!">Business</a>
                          </li>
                        </ul>
                        <h2 className="entry-title h4 mb-0">
                          <a className="link-dark text-decoration-none" href="#!">How to Improve Your Project Management Skills</a>
                        </h2>
                      </div>
                      <div className="entry-footer">
                        <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                          <li>
                            <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                              </svg>
                              <span className="ms-2 fs-7">7 Feb 2023</span>
                            </a>
                          </li>
                          <li>
                            <span className="px-3">•</span>
                          </li>
                          <li>
                            <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                              <span className="ms-2 fs-7">55</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-lg-6">
                    <article>
                      <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                          <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/blog/blog-image-2.jpg" alt />
                        </a>
                        <figcaption>
                          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                          <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                        </figcaption>
                      </figure>
                      <div className="entry-header mb-3">
                        <ul className="entry-meta list-unstyled d-flex mb-2">
                          <li>
                            <a className="link-primary text-decoration-none" href="#!">Technology</a>
                          </li>
                        </ul>
                        <h2 className="entry-title h4 mb-0">
                          <a className="link-dark text-decoration-none" href="#!">Modern Cybersecurity Trends to Watch in 2023</a>
                        </h2>
                      </div>
                      <div className="entry-footer">
                        <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                          <li>
                            <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                              </svg>
                              <span className="ms-2 fs-7">12 Aug 2023</span>
                            </a>
                          </li>
                          <li>
                            <span className="px-3">•</span>
                          </li>
                          <li>
                            <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                              <span className="ms-2 fs-7">39</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-lg-6">
                    <article>
                      <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                          <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/blog/blog-image-3.jpg" alt />
                        </a>
                        <figcaption>
                          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                          <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                        </figcaption>
                      </figure>
                      <div className="entry-header mb-3">
                        <ul className="entry-meta list-unstyled d-flex mb-2">
                          <li>
                            <a className="link-primary text-decoration-none" href="#!">Health</a>
                          </li>
                        </ul>
                        <h2 className="entry-title h4 mb-0">
                          <a className="link-dark text-decoration-none" href="#!">Health Care Job Growth Outpaces Other Industries</a>
                        </h2>
                      </div>
                      <div className="entry-footer">
                        <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                          <li>
                            <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                              </svg>
                              <span className="ms-2 fs-7">21 Dec 2023</span>
                            </a>
                          </li>
                          <li>
                            <span className="px-3">•</span>
                          </li>
                          <li>
                            <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                              <span className="ms-2 fs-7">61</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-lg-6">
                    <article>
                      <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                        <a href="#!">
                          <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/blog/blog-image-4.jpg" alt />
                        </a>
                        <figcaption>
                          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                          <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                        </figcaption>
                      </figure>
                      <div className="entry-header mb-3">
                        <ul className="entry-meta list-unstyled d-flex mb-2">
                          <li>
                            <a className="link-primary text-decoration-none" href="#!">Networking</a>
                          </li>
                        </ul>
                        <h2 className="entry-title h4 mb-0">
                          <a className="link-dark text-decoration-none" href="#!">Five Essential Network Security Trends to Watch</a>
                        </h2>
                      </div>
                      <div className="entry-footer">
                        <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                          <li>
                            <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                              </svg>
                              <span className="ms-2 fs-7">21 Feb 2023</span>
                            </a>
                          </li>
                          <li>
                            <span className="px-3">•</span>
                          </li>
                          <li>
                            <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                              <span className="ms-2 fs-7">61</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section - Contact */}
    {/* Contact 2 - Bootstrap Brain Component */}
    <section id="scrollspyContact" className="py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded" loading="lazy" src="./assets/img/contact/contact-img-1.jpg" alt />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">Get in touch</h2>
                <p className="lead fs-4 text-secondary mb-5">We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.</p>
                <div className="d-flex mb-4">
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3">Address</h4>
                    <address className="mb-0 text-secondary">8014 Edith Blvd NE, Albuquerque, New York, United States</address>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3">Phone</h4>
                    <p className="mb-0">
                      <a className="link-secondary text-decoration-none" href="tel:+15057922430">(505) 792-2430</a>
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3">E-Mail</h4>
                    <p>
                      <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">demo@yourdomain.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>)
}
function SiteFooter()
{
  return (<footer className="footer">
    <section className="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0 justify-content-xl-between">
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <div className="widget">
              <a href="#!">
                <img src="./assets/img/branding/wave-logo.svg" alt className="bsb-tpl-logo-footer" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <div className="widget">
              <h4 className="widget-title mb-4">Get in Touch</h4>
              <address className="mb-4">8014 Edith Blvd NE, Albuquerque, New York, United States</address>
              <p className="mb-1">
                <a className="link-secondary text-decoration-none" href="tel:+15057922430">(505) 792-2430</a>
              </p>
              <p className="mb-0">
                <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">demo@yourdomain.com</a>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xl-2">
            <div className="widget">
              <h4 className="widget-title mb-4">Learn More</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="link-secondary text-decoration-none">About</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="link-secondary text-decoration-none">Contact</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="link-secondary text-decoration-none">Advertise</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="link-secondary text-decoration-none">Terms of Service</a>
                </li>
                <li className="mb-0">
                  <a href="#!" className="link-secondary text-decoration-none">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-xl-4">
            <div className="widget">
              <h4 className="widget-title mb-4">Our Newsletter</h4>
              <p className="mb-4">Subscribe to our newsletter to get our news &amp; discounts delivered to you.</p>
              <form action="#!">
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text" id="email-newsletter-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <input type="email" className="form-control" id="email-newsletter" defaultValue placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn btn-primary" type="submit">Subscribe</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-0">
          <div className="col-xs-12 col-md-7 order-1 order-md-0">
            <div className="copyright text-center text-md-start">
              © 2023. All Rights Reserved.
            </div>
            <div className="credits text-secondary text-center text-md-start mt-2 fs-7">
              Built by <a href="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">BootstrapBrain</a> with <span className="text-primary">♥</span>
            </div>
          </div>
          <div className="col-xs-12 col-md-5 order-0 order-md-1">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item">
                <a className="nav-link link-dark" href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-dark" href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-dark" href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-dark" href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>)
}
function WebSite() {
  return (<div data-bs-spy="scroll" data-bs-target="#bsb-tpl-navbar" data-bs-smooth-scroll="true" tabindex="0">
    <SiteHeader />
    <Slider />
    <SiteContent />
    <SiteFooter />
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WebSite />);