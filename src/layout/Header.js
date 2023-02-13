import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
import { navbartoggle } from "../Redux/Action/ActionFunction";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const mystate = useSelector((state) => state.Counter);
  console.log("value of counter", mystate);
  const [open, setopen] = useState(false);
  const [Togglebtn, setTogglebtn] = useState(false);
  const [Togglemobile, setTogglemobile] = useState(false);
  const [Profilebtn, setProfilebtn] = useState(false);

  const myopenfunction = () => {
    dispatch(navbartoggle(!mystate));
    // console.log("value of state is ===>",open)
  };

  const togglefunction = () => {
    setTogglebtn(!Togglebtn);
    // setIsHovering(isHovering);
    console.log("value of toggle", Togglebtn);
    if (Togglebtn == false) {
      document.body.classList.add("menu-collapsed");

      document.body.classList.remove("menu-expanded");
    } else {
      document.body.classList.add("menu-expanded");
      document.body.classList.remove("menu-collapsed");
    }
  };
  const [isHovering, setIsHovering] = useState(false);

  const [isHovering2, setIsHovering2] = useState(false);

  // const handleMouseOver = () => {
  //     setIsHovering(!isHovering);
  // setTogglebtn(!Togglebtn)
  //     console.log("i am running")
  //   };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // const handleMouseOver2 = () => {
  //     setIsHovering2(true);
  // };

  // const handleMouseOut2 = () => {
  //     setIsHovering2(false);
  // };

  const ahmed = () => {
    // alert("hello balohc")

    // open
    // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-open

    // close
    // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-hide
    // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-hide
    setTogglemobile(!Togglemobile);
    if (Togglemobile == false) {
      document.body.classList.add(
        "vertical-layout",
        "2-columns",
        "fixed-navbar",
        "vertical-overlay-menu",
        "pace-done",
        "menu-hide"
      );
      document.body.classList.remove(
        "vertical-menu-modern",
        "menu-expanded",
        "menu-open"
      );
    } else {
      document.body.classList.add(
        "menu-open"
        // vertical-layout 2-columns fixed-navbar vertical-overlay-menu pace-done menu-open
      );

      document.body.classList.remove("menu-hide");
    }
  };

  const profilebtnfun = () => {
    setProfilebtn(!Profilebtn);
  };

  return (
    <>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-dark navbar-shadow">
        <div className="navbar-wrapper">
          {/* working */}
          {/* <div className="navbar-header expanded" > */}
          <div
            className={
              isHovering ? "navbar-header expanded  " : "navbar-header "
            }
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a
                  onClick={ahmed}
                  className="nav-link nav-menu-main menu-toggle hidden-xs"
                  href="#"
                >
                  <i className="ft-menu font-large-1" />
                </a>
              </li>
              <li className="nav-item mr-auto">
                <a className="navbar-brand" href="index.html">
                  <img
                    className="brand-logo"
                    alt="modern admin logo"
                    src="../../../app-assets/images/logo/logo.png"
                  />
                  <h3 className="brand-text">&nbsp;&nbsp;Admin Panel</h3>
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a
                  className="nav-link open-navbar-container"
                  data-toggle="collapse"
                  data-target="#navbar-mobile"
                >
                  <i className="la la-ellipsis-v" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
              </ul>
              <ul className="nav navbar-nav float-right">
                <li
                  className={
                    Profilebtn
                      ? "dropdown dropdown-user nav-item show "
                      : "dropdown dropdown-user nav-item"
                  }
                  onClick={profilebtnfun}
                >
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span className="mr-1">
                      Hello,
                      <span className="user-name text-bold-700">Hasnain</span>
                    </span>
                    <span className="avatar avatar-online">
                      <img
                        src="../../../app-assets/images/portrait/small/avatar-s-19.png"
                        alt="avatar"
                      />
                      <i />
                    </span>
                  </a>
                  <div
                    className={
                      Profilebtn
                        ? "dropdown-menu dropdown-menu-right show"
                        : "dropdown-menu dropdown-menu-right"
                    }
                  >
                    <a className="dropdown-item" href="#">
                      <i className="ft-user" /> Edit Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ft-mail" /> My Inbox
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ft-check-square" /> Task
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ft-message-square" /> Chats
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="ft-power" /> Logout
                    </a>
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          isHovering
            ? "main-menu menu-fixed menu-dark menu-accordion menu-shadow expanded "
            : "main-menu menu-fixed menu-dark menu-accordion menu-shadow  "
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        data-scroll-to-active="true"
      >
        <div className="main-menu-content">
          <Scrollbars style={{ maxWidth: 260, height: "90vh" }}>
            <ul
              className="navigation navigation-main"
              id="main-menu-navigation"
              data-menu="menu-navigation"
            >
              <li
                
              >
                <Link to={"/"}>
                  <i className="la la-home" />
                  <span className="menu-title" >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li
                
              >
                <Link to={"/userprofile"}>
                  <i className="la la-user" />
                  <span className="menu-title" >
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
          </Scrollbars>
        </div>
      </div>
    </>
  );
};

export default Header;
