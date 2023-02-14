import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const BasicForm = () => {
  return (
    <>
      <Header />
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
              <h3 className="content-header-title mb-0 d-inline-block">
                Basic Forms
              </h3>
              <div className="row breadcrumbs-top d-inline-block">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Form Layouts</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="#">Basic Forms</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="content-header-right col-md-6 col-12">
              <div className="dropdown float-md-right">
                <button
                  className="btn btn-danger dropdown-toggle round btn-glow px-2"
                  id="dropdownBreadcrumbButton"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Actions
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownBreadcrumbButton"
                >
                  <a className="dropdown-item" href="#">
                    <i className="la la-calendar-check-o" /> Calender
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="la la-cart-plus" /> Cart
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="la la-life-ring" /> Support
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <i className="la la-cog" /> Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="basic-form-layouts">
              <div className="row match-height">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title" id="basic-layout-form">
                        Project Info
                      </h4>
                      <a className="heading-elements-toggle">
                        <i className="la la-ellipsis-v font-medium-3" />
                      </a>
                      <div className="heading-elements">
                        <ul className="list-inline mb-0">
                          <li>
                            <a data-action="collapse">
                              <i className="ft-minus" />
                            </a>
                          </li>
                          <li>
                            <a data-action="reload">
                              <i className="ft-rotate-cw" />
                            </a>
                          </li>
                          <li>
                            <a data-action="expand">
                              <i className="ft-maximize" />
                            </a>
                          </li>
                          <li>
                            <a data-action="close">
                              <i className="ft-x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="card-text">
                          <p>
                            This is the most basic and default form having form
                            sections. To add form section use{" "}
                            <code>.form-section</code> class with any heading
                            tags. This form has the buttons on the bottom left
                            corner which is the default position.
                          </p>
                        </div>
                        <form className="form">
                          <div className="form-body">
                            <h4 className="form-section">
                              <i className="ft-user" /> Personal Info
                            </h4>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput1">
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    id="projectinput1"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="fname"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput2">
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    id="projectinput2"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lname"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput3">E-mail</label>
                                  <input
                                    type="text"
                                    id="projectinput3"
                                    className="form-control"
                                    placeholder="E-mail"
                                    name="email"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput4">
                                    Contact Number
                                  </label>
                                  <input
                                    type="text"
                                    id="projectinput4"
                                    className="form-control"
                                    placeholder="Phone"
                                    name="phone"
                                  />
                                </div>
                              </div>
                            </div>
                            <h4 className="form-section">
                              <i className="la la-paperclip" /> Requirements
                            </h4>
                            <div className="form-group">
                              <label htmlFor="companyName">Company</label>
                              <input
                                type="text"
                                id="companyName"
                                className="form-control"
                                placeholder="Company Name"
                                name="company"
                              />
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput5">
                                    Interested in
                                  </label>
                                  <select
                                    id="projectinput5"
                                    name="interested"
                                    className="form-control"
                                  >
                                    <option value="none" selected disabled>
                                      Interested in
                                    </option>
                                    <option value="design">design</option>
                                    <option value="development">
                                      development
                                    </option>
                                    <option value="illustration">
                                      illustration
                                    </option>
                                    <option value="branding">branding</option>
                                    <option value="video">video</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="projectinput6">Budget</label>
                                  <select
                                    id="projectinput6"
                                    name="budget"
                                    className="form-control"
                                  >
                                    <option value={0} selected disabled>
                                      Budget
                                    </option>
                                    <option value="less than 5000$">
                                      less than 5000$
                                    </option>
                                    <option value="5000$ - 10000$">
                                      5000$ - 10000$
                                    </option>
                                    <option value="10000$ - 20000$">
                                      10000$ - 20000$
                                    </option>
                                    <option value="more than 20000$">
                                      more than 20000$
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Select File</label>
                              <label
                                id="projectinput7"
                                className="file center-block"
                              >
                                <input type="file" id="file" />
                                <span className="file-custom" />
                              </label>
                            </div>
                            <div className="form-group">
                              <label htmlFor="projectinput8">
                                About Project
                              </label>
                              <textarea
                                id="projectinput8"
                                rows={5}
                                className="form-control"
                                name="comment"
                                placeholder="About Project"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="form-actions">
                            <button
                              type="button"
                              className="btn btn-warning mr-1"
                            >
                              <i className="ft-x" /> Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                              <i className="la la-check-square-o" /> Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* // Basic form layout section end */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BasicForm;
