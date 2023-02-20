import React from "react";
import { Link } from "react-router-dom";

const userprofile = () => {
  return (
    <div className="app-content content">
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <div id="user-profile">
            <div className="row">
              <div className="col-12">
                <div className="card profile-with-cover py-3">
                  <div className="col-lg-12" id="al">
                    <h2>User Profile</h2>
                    <div className="media profil-cover-details w-100">
                      <div className="col-md-12 text-center">{/* image */}</div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-lg-6" id="al">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          id="mt"
                        />
                      </div>
                      <div className="col-lg-6" id="al">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          id="mt"
                        />
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-lg-6" id="al">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="mt"
                        />
                      </div>
                      <div className="col-lg-6" id="al">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          id="mt"
                        />
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col">
                        <Link to="/userupdateprofile">
                          <button className="btn btn-primary" >
                            Edit Profile
                          </button>
                        </Link>
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
};

export default userprofile;
