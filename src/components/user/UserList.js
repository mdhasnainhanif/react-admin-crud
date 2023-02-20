import React, { forwardRef } from "react";
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
                      <MaterialTable
                        title="User List"
                        columns={[
                          { title: "First Name", field: "fname" },
                          { title: "Last Name", field: "lname" },
                          { title: "Email", field: "email" },                        
                        ]}
                        data={[
                          {
                            fname: "Mehmet",
                            lname: "Khalil",
                            email: "hasnain@gmail.com",
                          },
                          {
                            fname: "Zerya",
                            lname: "Betül",
                            email: "khalil@gmail.com",
                          },
                        ]}
                        actions={[
                          {
                            icon: "save",
                            tooltip: "Save User",
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
