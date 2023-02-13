import React from "react";

const userprofile = () => {
  return (
    <div className="app-content content">
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <div id="user-profile">
            <div className="row">
              <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control w-50"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control w-50"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userprofile;
