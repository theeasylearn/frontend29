export default function Sidebar()
{
    return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <img src="theme/img/tiny.png" alt />
            <div className="sidebar-brand-text">Online shop <br /> Admin</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
            <a className="nav-link" href="admin_dashboard.html">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="admin_category.html">
                <i className="fas fa-fw fa-table" />
                <span>Categories</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="admin_products.html">
                <i className="fas fa-fw fa-table" />
                <span>Products</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="admin_users.html">
                <i className="fas fa-fw fa-table" />
                <span>Users</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="admin_orders.html">
                <i className="fas fa-fw fa-table" />
                <span>Orders</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="admin_change_password.html">
                <i className="fas fa-fw fa-table" />
                <span>Change Password</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="admin_logout.html">
                <i className="fas fa-fw fa-table" />
                <span>Logout</span></a>
        </li>
    </ul>);
}