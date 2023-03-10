import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const HiddenLabels = () => {
    return (
        <>
            <Header />
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                            <h3 className="content-header-title mb-0 d-inline-block">Hidden Label Forms</h3>
                            <div className="row breadcrumbs-top d-inline-block">
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="index.html">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item"><Link to="#">Form Layouts</Link>
                                        </li>
                                        <li className="breadcrumb-item active"><Link to="#">Hidden Label Forms</Link>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="content-header-right col-md-6 col-12">
                            <div className="dropdown float-md-right">
                                <button className="btn btn-danger dropdown-toggle round btn-glow px-2" id="dropdownBreadcrumbButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownBreadcrumbButton"><Link className="dropdown-item" to="#"><i className="la la-calendar-check-o" /> Calender</Link>
                                    <Link className="dropdown-item" to="#"><i className="la la-cart-plus" /> Cart</Link>
                                    <Link className="dropdown-item" to="#"><i className="la la-life-ring" /> Support</Link>
                                    <div className="dropdown-divider" /><Link className="dropdown-item" to="#"><i className="la la-cog" /> Settings</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        {/* Hidden label form layout section start */}
                        <section id="hidden-label-form-layouts">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-basic-form">Project Info</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>This is the most basic and default form having form sections.
                                                        Just add <code>.sr-only</code> class to a label to hide.
                                                        To add form section user <code>.form-section</code> class
                                                        with any heading tags. This form has the buttons on the bottom
                                                        left corner which is the default position.</p>
                                                </div>
                                                <form className="form">
                                                    <div className="form-body">
                                                        <h4 className="form-section"><i className="ft-user" /> Personal Info</h4>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput1">First Name</label>
                                                                <input type="text" id="projectinput1" className="form-control" placeholder="First Name" name="fname" />
                                                            </div>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput2">Last Name</label>
                                                                <input type="text" id="projectinput2" className="form-control" placeholder="Last Name" name="lname" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput3">E-mail</label>
                                                                <input type="text" id="projectinput3" className="form-control" placeholder="E-mail" name="email" />
                                                            </div>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput4">Contact Number</label>
                                                                <input type="text" id="projectinput4" className="form-control" placeholder="Phone" name="phone" />
                                                            </div>
                                                        </div>
                                                        <h4 className="form-section"><i className="ft-clipboard" /> Requirements</h4>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput5">Company</label>
                                                                <input type="text" id="projectinput5" className="form-control" placeholder="Company Name" name="company" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput6">Interested in</label>
                                                                <select id="projectinput6" name="interested" className="form-control">
                                                                    <option value="none" selected disabled>Interested in</option>
                                                                    <option value="design">design</option>
                                                                    <option value="development">development</option>
                                                                    <option value="illustration">illustration</option>
                                                                    <option value="branding">branding</option>
                                                                    <option value="video">video</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput7">Budget</label>
                                                                <select id="projectinput7" name="budget" className="form-control">
                                                                    <option value={0} selected disabled>Budget</option>
                                                                    <option value="less than 5000$">less than 5000$</option>
                                                                    <option value="5000$ - 10000$">5000$ - 10000$</option>
                                                                    <option value="10000$ - 20000$">10000$ - 20000$</option>
                                                                    <option value="more than 20000$">more than 20000$</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only">Select File</label>
                                                                <label id="projectinput8" className="file center-block">
                                                                    <input type="file" id="file" />
                                                                    <span className="file-custom" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="projectinput9">About Project</label>
                                                                <textarea id="projectinput9" rows={5} className="form-control" name="comment" placeholder="About Project" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-colored-controls">User Profile</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Just add <code>.sr-only</code> class to a label to hide. You
                                                        can always change the border color of the form controls using
                                                        <code>border-*</code> class. In this example we have user
                                                        <code>border-primary</code> class for form controls. Form
                                                        action buttons are on the bottom right position.</p>
                                                </div>
                                                <form className="form">
                                                    <div className="form-body">
                                                        <h4 className="form-section"><i className="ft-eye" /> About User</h4>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="userinput1">Fist Name</label>
                                                                <input type="text" id="userinput1" className="form-control border-primary" placeholder="Name" name="name" />
                                                            </div>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="userinput2">Last Name</label>
                                                                <input type="text" id="userinput2" className="form-control border-primary" placeholder="Company" name="company" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="userinput3">Username</label>
                                                                <input type="text" id="userinput3" className="form-control border-primary" placeholder="Username" name="username" />
                                                            </div>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="userinput4">Nick Name</label>
                                                                <input type="text" id="userinput4" className="form-control border-primary" placeholder="Nick Name" name="nickname" />
                                                            </div>
                                                        </div>
                                                        <h4 className="form-section"><i className="ft-mail" /> Contact Info &amp; Bio</h4>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="userinput5">Email</label>
                                                                <input className="form-control border-primary" type="email" placeholder="email" id="userinput5" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="userinput6">Website</label>
                                                                <input className="form-control border-primary" type="url" placeholder="http://" id="userinput6" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only">Contact Number</label>
                                                                <input className="form-control border-primary" type="tel" placeholder="Contact Number" id="userinput7" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="userinput8">Bio</label>
                                                                <textarea id="userinput8" rows={5} className="form-control border-primary" name="bio" placeholder="Bio" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions right">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-tooltips">Issue Tracking</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Just add <code>.sr-only</code> class to a label to hide. This
                                                        form shows tooltips on hover to provide useful information
                                                        while user is filling the form. Use data attributes like
                                                        toggle <code>data-toggle</code>, trigger <code>data-trigger</code>,
                                                        placement <code>data-placement</code>, title <code>data-title</code>                        to show tooltips on form controls.</p>
                                                </div>
                                                <form className="form">
                                                    <div className="form-body">
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="issueinput1">Issue Title</label>
                                                                <input type="text" id="issueinput1" className="form-control" placeholder="issue title" name="issuetitle" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Issue Title" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="issueinput2">Opened By</label>
                                                                <input type="text" id="issueinput2" className="form-control" placeholder="opened by" name="openedby" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Opened By" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="issueinput3">Date Opened</label>
                                                                <input type="date" id="issueinput3" className="form-control" name="dateopened" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Opened" />
                                                            </div>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="issueinput4">Date Fixed</label>
                                                                <input type="date" id="issueinput4" className="form-control" name="datefixed" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="issueinput5">Priority</label>
                                                                <select id="issueinput5" name="priority" className="form-control" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Priority">
                                                                    <option value="low">Low</option>
                                                                    <option value="medium">Medium</option>
                                                                    <option value="high">High</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="issueinput6">Status</label>
                                                                <select id="issueinput6" name="status" className="form-control" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Status">
                                                                    <option value="not started">Not Started</option>
                                                                    <option value="started">Started</option>
                                                                    <option value="fixed">Fixed</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="issueinput8">Comments</label>
                                                                <textarea id="issueinput8" rows={5} className="form-control" name="comments" placeholder="comments" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Comments" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-icons">Timesheet</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Just add <code>.sr-only</code> class to a label to hide. This
                                                        form shows the use of icons with form controls. Define the
                                                        position of the icon using <code>has-icon-left</code> or
                                                        <code>has-icon-right</code> class. Use <code>icon-*</code>                        class to define the icon for the form control. See Icons
                                                        sections for the list of icons you can use. </p>
                                                </div>
                                                <form className="form">
                                                    <div className="form-body">
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="timesheetinput1">Employee Name</label>
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="text" id="timesheetinput1" className="form-control" placeholder="employee name" name="employeename" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-user" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="timesheetinput2">Project Name</label>
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="text" id="timesheetinput2" className="form-control" placeholder="project name" name="projectname" />
                                                                    <div className="form-control-position">
                                                                        <i className="la la-briefcase" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="timesheetinput3">Date</label>
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="date" id="timesheetinput3" className="form-control" name="date" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-message-square" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only">Rate Per Hour</label>
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">$</span>
                                                                    </div>
                                                                    <input type="text" className="form-control" placeholder="Rate Per Hour" aria-label="Amount (to the nearest dollar)" name="rateperhour" />
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text">.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="timesheetinput5">Start Time</label>
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="time" id="timesheetinput5" className="form-control" name="starttime" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-clock" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-md-6 mb-2">
                                                                <label className="sr-only" htmlFor="timesheetinput6">End Time</label>
                                                                <div className="position-relative has-icon-left">
                                                                    <input type="time" id="timesheetinput6" className="form-control" name="endtime" />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-clock" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="timesheetinput7">Notes</label>
                                                                <div className="position-relative has-icon-left">
                                                                    <textarea id="timesheetinput7" rows={5} className="form-control" name="notes" placeholder="notes" defaultValue={""} />
                                                                    <div className="form-control-position">
                                                                        <i className="ft-file" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions right">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-round-controls">Complaint Form</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Just add <code>.sr-only</code> class to a label to hide. This
                                                        is a variation to the default form control styling. In this
                                                        example all the form controls has round styling. To apply
                                                        round style add class <code>round</code> to any form control.</p>
                                                </div>
                                                <form className="form">
                                                    <div className="form-body">
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="complaintinput1">Company Name</label>
                                                                <input type="text" id="complaintinput1" className="form-control round" placeholder="company name" name="companyname" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="complaintinput2">Employee Name</label>
                                                                <input type="text" id="complaintinput2" className="form-control round" placeholder="employee name" name="employeename" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="complaintinput3">Date of Complaint</label>
                                                                <input type="date" id="complaintinput3" className="form-control round" name="complaintdate" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="complaintinput4">Supervisor's Name</label>
                                                                <input type="text" id="complaintinput4" className="form-control round" placeholder="supervisor name" name="supervisorname" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="complaintinput5">Complaint Details</label>
                                                                <textarea id="complaintinput5" rows={5} className="form-control round" name="complaintdetails" placeholder="details" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="complaintinput6">Signature</label>
                                                                <input type="text" id="complaintinput6" className="form-control round" placeholder="signature" name="signature" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-square-controls">Donation</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Just add <code>.sr-only</code> class to a label to hide. This
                                                        is another variation to the default form control styling.
                                                        In this example all the form controls has square styling.
                                                        To apply square style add class <code>square</code> to any
                                                        form control.</p>
                                                </div>
                                                <form className="form">
                                                    <div className="form-body">
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="donationinput1">Full Name</label>
                                                                <input type="text" id="donationinput1" className="form-control square" placeholder="name" name="fullname" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="donationinput2">Email</label>
                                                                <input type="email" id="donationinput2" className="form-control square" placeholder="email" name="email" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="donationinput3">Contact Number</label>
                                                                <input type="tel" id="donationinput3" className="form-control square" name="contact" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="donationinput4">Dontaion Type</label>
                                                                <input type="text" id="donationinput4" className="form-control square" placeholder="type of donation" name="donationtype" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only">Amount</label>
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">$</span>
                                                                    </div>
                                                                    <input type="text" className="form-control square" placeholder="amount" aria-label="Amount (to the nearest dollar)" name="amount" />
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text">.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="donationinput7">Comments</label>
                                                                <textarea id="donationinput7" rows={5} className="form-control square" name="comments" placeholder="comments" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions right">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-form-center">Event Registration</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Just add <code>.sr-only</code> class to a label to hide. This
                                                        example shows a way to center your form in the card. Here
                                                        we have used <code>col-md-6 ml-auto</code> classes to center
                                                        the form in a full width card. User can always change those
                                                        classes according to width and offset requirements. This
                                                        example also uses form action buttons in the center bottom
                                                        position of the card.</p>
                                                </div>
                                                <form className="form">
                                                    <div className="row justify-content-md-center">
                                                        <div className="col-md-6">
                                                            <div className="form-body">
                                                                <div className="row">
                                                                    <div className="form-group col-12 mb-2">
                                                                        <label className="sr-only" htmlFor="eventRegInput1">Full Name</label>
                                                                        <input type="text" id="eventRegInput1" className="form-control" placeholder="name" name="fullname" />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="form-group col-12 mb-2">
                                                                        <label className="sr-only" htmlFor="eventRegInput2">Title</label>
                                                                        <input type="text" id="eventRegInput2" className="form-control" placeholder="title" name="title" />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="form-group col-12 mb-2">
                                                                        <label className="sr-only" htmlFor="eventRegInput3">Company</label>
                                                                        <input type="text" id="eventRegInput3" className="form-control" placeholder="company" name="company" />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="form-group col-12 mb-2">
                                                                        <label className="sr-only" htmlFor="eventRegInput4">Email</label>
                                                                        <input type="email" id="eventRegInput4" className="form-control" placeholder="email" name="email" />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="form-group col-12 mb-2">
                                                                        <label className="sr-only" htmlFor="eventRegInput5">Contact Number</label>
                                                                        <input type="tel" id="eventRegInput5" className="form-control" name="contact" placeholder="contact number" />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="form-group col-12 mb-2">
                                                                        <label className="sr-only">Existing Customer</label>
                                                                        <div className="input-group">
                                                                            <div className="d-inline-block custom-control custom-radio mr-1">
                                                                                <input type="radio" name="customer1" className="custom-control-input" defaultChecked id="yes" />
                                                                                <label className="custom-control-label" htmlFor="yes">Yes</label>
                                                                            </div>
                                                                            <div className="d-inline-block custom-control custom-radio">
                                                                                <input type="radio" name="customer1" className="custom-control-input" id="no" />
                                                                                <label className="custom-control-label" htmlFor="no">No</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions center">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                            <div className="row justify-content-md-center">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title" id="hidden-label-card-center">Event Registration</h4>
                                            <Link className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></Link>
                                            <div className="heading-elements">
                                                <ul className="list-inline mb-0">
                                                    <li><Link data-action="collapse"><i className="ft-minus" /></Link></li>
                                                    <li><Link data-action="reload"><i className="ft-rotate-cw" /></Link></li>
                                                    <li><Link data-action="expand"><i className="ft-maximize" /></Link></li>
                                                    <li><Link data-action="close"><i className="ft-x" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-content collpase show">
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <p>Just add <code>.sr-only</code> class to a label to hide. This
                                                        example shows a ways to center your card with form. Here
                                                        we have used <code>col-md-6 ml-auto</code> classes to center
                                                        the card as its not full width. User can always change those
                                                        classes according to width and offset requirements. This
                                                        example also uses form action buttons in the center bottom
                                                        position of the card.</p>
                                                </div>
                                                <form className="form">
                                                    <div className="form-body">
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="eventInput1">Full Name</label>
                                                                <input type="text" id="eventInput1" className="form-control" placeholder="name" name="fullname" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="eventInput2">Title</label>
                                                                <input type="text" id="eventInput2" className="form-control" placeholder="title" name="title" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="eventInput3">Company</label>
                                                                <input type="text" id="eventInput3" className="form-control" placeholder="company" name="company" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="eventInput4">Email</label>
                                                                <input type="email" id="eventInput4" className="form-control" placeholder="email" name="email" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only" htmlFor="eventInput5">Contact Number</label>
                                                                <input type="tel" id="eventInput5" className="form-control" name="contact" placeholder="contact number" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-12 mb-2">
                                                                <label className="sr-only">Existing Customer</label>
                                                                <div className="input-group">
                                                                    <div className="d-inline-block custom-control custom-radio mr-1">
                                                                        <input type="radio" name="customer2" className="custom-control-input" defaultChecked id="yes1" />
                                                                        <label className="custom-control-label" htmlFor="yes1">Yes</label>
                                                                    </div>
                                                                    <div className="d-inline-block custom-control custom-radio">
                                                                        <input type="radio" name="customer2" className="custom-control-input" id="no1" />
                                                                        <label className="custom-control-label" htmlFor="no1">No</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions center">
                                                        <button type="button" className="btn btn-warning mr-1">
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
                        {/* // Hidden label form layout section end */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HiddenLabels