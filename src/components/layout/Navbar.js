import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ico.png";
import "../../style/NavBar.css"

function Navbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top shadowNavbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
          data-target="#myNavbar"
        > <span className="navbar-toggler-icon"></span></button>

      <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item pr-4">
            <Link className="navlink" to="/covid19live">
              Covid-19 Live
            </Link>
          </li>
          <li className="nav-item pr-2">
            <Link className="navlink" to="/aboutus">
              About Us
            </Link>
          </li>

          <li className="nav-item">
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
</div>
      </nav>
  );
}
export default Navbar;