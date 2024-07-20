import React from "react";
function Layout() {

    const Links = [
        "Home",
        "About Us",
        "Contact Us ",
        "Login",
        "Register",
        "Pricing",
    ]

    const dropDown = [
        { "link": "Product 1", "inStock": 0, "id": 1 },
        { "link": "Product 2", "inStock": 10, "id": 2 },
        { "link": "Product 3", "inStock": 20, "id": 3 },
        { "link": "Product 4", "inStock": 30, "id": 4 },
        { "link": "Product 5", "inStock": 0, "id": 5 },
        { "link": "Product 6", "inStock": 22, "id": 6 },
        { "link": "Product 7", "inStock": 0, "id": 7 },
    ]

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="image/react.png" className="img-fluid" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {Links.map((element) => {
                            return <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {element}
                                </a>
                            </li>
                        })}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Products
                            </a>
                            <ul className="dropdown-menu">
                                {dropDown.map((value) => {
                                    return <li key={value.id}>
                                        <a className={value.inStock === 0 ? "dropdown-item text-secondary" : "dropdown-item"} href="#">
                                            {value.link}
                                        </a>
                                    </li>
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}
export default Layout