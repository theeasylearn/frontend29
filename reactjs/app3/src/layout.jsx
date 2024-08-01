import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <div className="text-center p-3 text-bg-success fixed-bottom">
                Copyright by frontend29
            </div>
        </>
    )
}
export default Layout;