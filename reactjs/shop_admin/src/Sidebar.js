import { Link } from "react-router-dom";
export default function Sidebar()
{
    return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
            <img src="theme/img/tiny.png" alt />
            <div className="sidebar-brand-text">Online shop <br /> Admin</div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/category">
                <i className="fas fa-fw fa-table" />
                <span>Categories</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/product">
                <i className="fas fa-fw fa-table" />
                <span>Products</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/users">
                <i className="fas fa-fw fa-table" />
                <span>Users</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/orders">
                <i className="fas fa-fw fa-table" />
                <span>Orders</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/change-password">
                <i className="fas fa-fw fa-table" />
                <span>Change Password</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/logout">
                <i className="fas fa-fw fa-table" />
                <span>Logout</span></Link>
        </li>
    </ul>);
}