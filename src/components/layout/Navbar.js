import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Logo from "../../assets/ico.png";
import "../../style/NavBar.css"

 function Navbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadowNavbar">
       <div className="d-flex flex-grow-1">
      <a className="navbar-brand mt=0" href="/">
        <img
          src={Logo}
          width={50}
          height={50}
          alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item">
            <Link className="navlink" to="/covid19live">
              Covid19Live
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navlink" to="/aboutus">
              About Us
            </Link>
          </li>
       
              <li className="nav-item active">
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#login"
                >Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#sign-up"
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>

         {/*  <li className="nav-item">
            <button
              className="btn my-2 my-sm-0"
              onClick={onLogout}
            >
              Logout
            </button>
          </li> */}
       
      
    </nav>
  );
}
export default Navbar;