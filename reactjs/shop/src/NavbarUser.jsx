import React from "react";
import { Link } from "react-router-dom";
import withRouter from "./MyHOC";

class NavbarUser extends React.Component {
    constructor(props) {
        super(props);
    }
    MenuItemForUser = () => {
        if (this.props.cookies['userid'] !== undefined) {
            return (<>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">Checkout</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li></>);
        }

    }

    MenuItemforGuest = () => {
        if (this.props.cookies['userid'] === undefined) {
            return (<>
                <li className="nav-item">
                    <Link className="nav-link" to="/userregister">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/userlogin">Login</Link>
                </li>

            </>);
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0 py-lg-2 navbar-default">
                <div className="container-fluid">
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
                        <div className="offcanvas-header pb-1">
                            <Link to="/"><img src="userFiles/assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></Link>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <ul className="navbar-nav align-items-center navbar-offcanvas-color">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category">Shop</Link>
                                    </li>
                                    {this.MenuItemForUser()}
                                    {this.MenuItemforGuest()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default withRouter(NavbarUser);