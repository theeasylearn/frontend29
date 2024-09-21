import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import VerifyLogin from "./VerifyLogin";
//url update_category.php
//input (id,title,photo,islive)
export default function EditCategory() {
  VerifyLogin();
  
  return (
    <div id="wrapper">
      <Sidebar />
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <AdminHeader />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex justify-content-between">
                    <h5 className="m-0 font-weight-bold text-primary">
                      Category - (Edit Category)
                    </h5>
                    <a
                      href="admin_category.html"
                      className="btn btn-primary btn-sm"
                    >
                      Back
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-2">
                        <b>Existing Photo</b> <br />
                        <img
                          src="http://picsum.photos/200"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-sm-10">
                        <form
                          action=""
                          encType="multipart/form-data"
                          method="post"
                        >
                          <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                              Edit Title
                            </label>
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="form-control"
                              required=""
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="photo" className="form-label">
                              Change Photo
                            </label>
                            <input
                              type="file"
                              name="photo"
                              id="photo"
                              className="form-control-file"
                              required=""
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="detail" className="form-label">
                              Edit Detail
                            </label>
                            <textarea
                              name="detail"
                              id="detail"
                              className="form-control"
                              required=""
                              defaultValue={
                                "                                                                                        "
                              }
                            />
                          </div>
                          <label htmlFor="" className="form-label">
                            is Live?
                          </label>{" "}
                          <br />
                          <div className="form-check-inline">
                            <label htmlFor="yes" className="form-check-label">
                              <input
                                type="radio"
                                name="islive"
                                id="yes"
                                className="form-check-input"
                                defaultValue={1}
                              />{" "}
                              Yes
                            </label>
                          </div>
                          <div className="form-check-inline mb-3">
                            <label htmlFor="no" className="form-check-label">
                              <input
                                type="radio"
                                name="islive"
                                id="no"
                                className="form-check-input"
                                defaultValue={0}
                              />{" "}
                              No
                            </label>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
