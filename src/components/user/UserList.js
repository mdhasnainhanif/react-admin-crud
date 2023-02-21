import React, { forwardRef, useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import axios from "axios";

const UserList = () => {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  // modal

  const [lgShow, setLgShow] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [apiData, setApiData] = useState([])

  const submit = () => {
    axios.post("https://63f493a23f99f5855db2a1dd.mockapi.io/crud", {
      e_fname: fname,
      e_lname: lname,
      e_email: email,
      e_pass: pass,
    });

    Swal.fire({
      icon: "success",
      title: "Great",
      text: "Add Data Successfully",
    });
  };

  const getData=()=>{
    axios.get("https://63f493a23f99f5855db2a1dd.mockapi.io/crud")
    .then((response)=>{
      setApiData(response?.data)
    })
  
  }

  useEffect(()=>{
    getData()
  },[])
 
  return (
    <>
      <Header />
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-body">
            <div id="user-profile">
              <div className="row">
                <div className="col-12">
                  <div className=" profile-with-cover py-3">
                    <div className="col-lg-12" id="al">
                      {/* modal start */}
                      <Button className="mb-1" onClick={() => setLgShow(true)}>
                        Add User
                      </Button>
                      <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                      >
                        <Modal.Header>
                          <Modal.Title id="example-modal-sizes-title-lg">
                            Large Modal
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="row mt-2">
                            <div className="col-lg-6" id="al">
                              <label>First Name</label>
                              <input
                                onChange={(e) => setFname(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                id="mt"
                              />
                            </div>
                            <div className="col-lg-6" id="al">
                              <label>Last Name</label>
                              <input
                                onChange={(e) => setLname(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
                                type="Email"
                                className="form-control"
                                placeholder="Email"
                                id="mt"
                              />
                            </div>
                            <div className="col-lg-6" id="al">
                              <label>Password</label>
                              <input
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                id="mt"
                              />
                            </div>
                          </div>

                          <hr />
                          <button
                            className="btn btn-danger"
                            onClick={() => setLgShow(false)}
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary ml-1"
                            onClick={submit}
                          >
                            Submit
                          </button>
                        </Modal.Body>
                      </Modal>
                      {/* modal end */}
                      <MaterialTable
                        title="User List"
                        columns={[
                          { title: "First Name", field: "e_fname" },
                          { title: "Last Name", field: "e_lname" },
                          { title: "Email", field: "e_email" },
                          { title: "Password", field: "e_pass" },
                        ]}
                        data={apiData}
                        actions={[
                          {
                            icon: "edit",
                            tooltip: "Edit User",
                            // onClick: (event, rowData) =>
                            //   alert("You saved " + rowData.name),
                          },
                          (rowData) => ({
                            icon: "delete",
                            tooltip: "Delete User",
                            // onClick: (event, rowData) =>
                            //   confirm("You want to delete " + rowData.name),
                            disabled: rowData.birthYear < 2000,
                          }),
                        ]}
                        // options={{
                        //   actionsColumnIndex: -1,
                        // }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserList;
