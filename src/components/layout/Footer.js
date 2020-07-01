import React from "react";
import {  BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../../style/Footer.css";

function Footer() {
  return (

    <div className="main-footer">
      <div className="container-fluid">
        <div className="row">
          {/* Column 1 */}
          <div className="col-xs-12 col-sm-6 col-md-6">
            <h6>Contact Us</h6>
            <ul className="list-unstyled">
              <li>e-Mail: sociaza.se@gmail.com</li>
              {/* <li>Address: Multrågatan 19, 162 54 Stockholm</li> */}
              <li>Phone No: 0046-07 6394708</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-xs-12 col-sm-6 col-md-6">
            <h6>Have Questions ?</h6>
            <div className="footer-link-container">
              <a href="/Faq" className="footer-links">
                FAQ
              </a>{" "}
              <br></br>
              {/* <a href="https://localhost:3001" className="footer-links">
                Chat
              </a> */}
            </div>
          </div>

          {/*  Column 3 */}
          <div className="col">
            {/* <h6>Service Partners</h6>
            <ul className="list-unstyled">
              <li>KTH Royal Institute of Technology, Stockholm</li>
              <li>Novare Potential, Stockholm</li>
            </ul> */}
          </div>
        </div>
        <hr /> 

        {/* Footer Bottom */}
        <div className="row">
          <p className="col-xs-12 col-sm-6 col-md-10">
            &copy;{new Date().getFullYear()} GEEKGEN INC | All Rights
            Reserved | &ensp;
            <a href="/serviceterms" className="footer-links">
            Terms of Service </a> {" "} &ensp; |  &ensp;
            <a href="/privacypolicy" className="footer-links">
                Privacy Policy
              </a>{" "}
          </p>
        </div>
      </div>
    </div>
  
  );
}

export default Footer;
