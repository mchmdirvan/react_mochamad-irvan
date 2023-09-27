/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="section-hero">
          <h1>ARSHA</h1>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <br />
          <p>
            <b>Phone:</b> +1 5589 55488 55
          </p>
          <p>
            <b>Email:</b> info@example.com
          </p>
        </div>
        <div className="section-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy police</a>
            </li>
          </ul>
        </div>
        <div className="section-services">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="section-network">
          <h4>Our Social Networks</h4>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="social-icons">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
        </div>
      </footer>
      {/* Footer 3 */}
      <footer className="copyright-container">
        <p>
          ©Copyright by <b>Arsha</b>. All rights reserved.
        </p>
        <p>
          Designed by <span className="bootstrap-made-text">BootstrapMade</span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
