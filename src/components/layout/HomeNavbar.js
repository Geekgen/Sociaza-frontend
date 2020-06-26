import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Logo from "../../assets/ico.png";

 function HomeNavbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadowNavbar">
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
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="navlink " to="/">
              Home&nbsp;<i className="fas fa-home"></i>{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="navlink nav-text">
            <NavDropdown title="Services" bsPrefix="nav-text" id="basic-nav-dropdown">
              <NavDropdown.Item href="/news">
                Breaking News
              </NavDropdown.Item>
              <NavDropdown.Item href="/service?service=pedals">
                Pedals
              </NavDropdown.Item>
              <NavDropdown.Item href="/service?service=hiking">
                Hiking trails
              </NavDropdown.Item>
              <NavDropdown.Item href="/service?service=picnic">
                Picnic
              </NavDropdown.Item>
              <NavDropdown.Item href="/service?service=happyhour">
                Kleber (Happy hour)
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/service?service=haircut">
                Outdoor Haircut
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service?service=all">
                All Services
              </NavDropdown.Item>
            </NavDropdown>
          </li>

          <li className="nav-item">
            <Link className="navlink " to="/serviceform">
              Service Form
            </Link>
          </li>

          <li className="nav-item">
            <Link className="navlink " to="/covid19live">
              Covid19Live
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navlink " to="/aboutus">
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="navlink " to="/profile">
              My Profile
            </Link>
          </li>

          <li className="nav-item">
            <button
              className="btn my-2 my-sm-0"
              onClick={onLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default HomeNavbar;