import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/ico.png";

function HomeNavbar({ onLogout }) {
  return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="news">News</Nav.Link>
//       <Nav.Link href="about">About Us</Nav.Link>
//       <NavDropdown title="Services" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="service?service=pedals">Action</NavDropdown.Item>
//         <NavDropdown.Item href="service?service=hiking">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="service?service=happyhour">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//   )
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top shadowNavbar">
      <div className="container-fluid">
        <a className="navbar-brand mt=0" href="/">
          <img
            src={Logo}
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="navcollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" id="linkHome">
                <Link className="navlink nav-text" to="/">
                  Home&nbsp;<i className="fas fa-home"></i>{" "}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="navlink nav-text">
                <NavDropdown title="Services" bsPrefix="nav-text" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/news" >
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
              </NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service?service=all">
                All Services
              </NavDropdown.Item>*/}
            </NavDropdown>
          </li>

          <li className="nav-item">
            <Link className="navlink nav-text" to="/serviceform">
              Service Form
            </Link>
          </li>

          <li className="nav-item">
            <Link className="navlink nav-text" to="/covid19live">
              Covid-19 Live
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navlink nav-text" to="/aboutus">
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="navlink nav-text" to="/profile">
              My Profile
            </Link>
          </li>

          <li className="nav-item">
            <button
              className="btn"
              onClick={onLogout}
            >Logout
            </button>
          </li>
        </ul>
      </div> 
      </div>
      </div>

    </nav>
  );
}
export default HomeNavbar;