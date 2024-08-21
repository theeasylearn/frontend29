import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

export default function ChangePassword() {
  return (<div id="wrapper">
    <Sidebar />
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <AdminHeader />
        {/* Begin Page Content */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                  <h5 className="m-0 font-weight-bold text-primary">
                    Change password
                  </h5>
                </div>
                <div className="card-body">
                  <form action="" encType="multipart/form-data" method="post">
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Current password
                      </label>
                      <input
                        type="password"
                        name=""
                        id=""
                        className="form-control"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        New password
                      </label>
                      <input
                        type="password"
                        name=""
                        id=""
                        className="form-control"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Confirm new password
                      </label>
                      <input
                        type="password"
                        name=""
                        id=""
                        className="form-control"
                        required=""
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <input
                        type="submit"
                        defaultValue="save changes"
                        name="submit"
                        className="btn btn-primary"
                      />
                      <input
                        type="reset"
                        defaultValue="clear"
                        name="submit"
                        className="btn btn-light"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
    </div>
    {/* End of Content Wrapper */}
  </div>)
}