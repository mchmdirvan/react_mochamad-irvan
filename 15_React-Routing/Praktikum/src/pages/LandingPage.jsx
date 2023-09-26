/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";
import HeroImage from "../assets/hero-img.png";
import { useTitle } from "../utils/hooks/customHooks";
import Footer from "../components/Footer";

function LandingPage() {
    useTitle("Landing Page")
  return (
    <>
      <Navbar />
      {/* Body */}
      <div className="body">
        {/* Flex Container */}
        <div className="container px-5">
          <div className="body-container me-5">
            {/* Title */}
            <div className="title">
              <h1>Better Solution For Your Business</h1>
              <p>
                We are team of talented designers making website with Bootstrap
              </p>
            </div>
            {/* Button */}
            <div>
              <a href="createAccount.html">
                <button
                  type="button"
                  className="button"
                  data-bs-toggle="tooltip"
                  title="Start Your Journey!"
                >
                  Get Started
                </button>
              </a>
              <button className="button-video">Watch Video</button>
            </div>
          </div>
          {/* Image */}
          <div className="body-image">
            <img src={HeroImage} alt="" className="hero-image" />
          </div>
        </div>
      </div>

      {/* Footer 1 */}
      <footer className="newsletter">
        <h4>Join Our Newsletter</h4>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        {/* Soal Eksplorasi menambahkan required */}
        <div className="input-container">
          <input className="hover-input" type="email" required="" />
          <button className="button-subscribe">Subscribe</button>
        </div>
      </footer>
      <Footer/>
    </>
    
  );
}

export default LandingPage;
