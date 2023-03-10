import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-static footer-light navbar-border navbar-shadow ">
      <p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
        <span className="float-md-left d-block d-md-inline-block">
          Copyright © 2018{" "}
          <Link className="text-bold-800 grey darken-2" to="#" target="_blank">
            PIXINVENT{" "}
          </Link>
          , All rights reserved.{" "}
        </span>
        <span className="float-md-right d-block d-md-inline-blockd-none d-lg-block">
          Hand-crafted &amp; Made with <i className="ft-heart pink" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
