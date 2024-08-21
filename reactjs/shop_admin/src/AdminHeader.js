export default function AdminHeader()
{
    let ButtonClick = function()
    {
        // alert('hi');
        document.getElementById('page-top').classList.toggle("sidebar-toggled");
        document.getElementById('accordionSidebar').classList.toggle("toggled");

    }
    return (<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button onClick={ButtonClick} id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
        </button>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className="nav-item dropdown no-arrow d-sm-none">
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Administrator</span>
                    <img className="img-profile rounded-circle" src="theme/img/undraw_profile.svg" />
                </a>
            </li>
        </ul>
    </nav>);
}