/* eslint-disable no-unused-vars */
import React from "react";

import { useTitle } from "../utils/hooks/customHooks";
import HeroImage from "../assets/hero-img.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  useTitle("Landing Page");
  return (
    <>
      <Navbar />

      <main className="flex justify-center items-center bg-[#37517E] h-[93vh]">
        <div className=" ps-12 text-white font-[Jost] max-w-2xl">
          <h1 className=" text-[3.2rem] font-bold leading-none">
            Better Solution For Your Business
          </h1>
          <p className=" text-gray-300 text-2xl mt-3 mb-16 ">
            We are team of talented designers making website with Bootstrap
          </p>
          <div className="tooltip" data-tip="Start Your Journey">
            <a href="createAccount.html">
              <button
                type="button"
                className="rounded-full bg-[#47B2E4] px-4 py-2 "
                data-bs-toggle="tooltip"
                title="Start Your Journey!"
              >
                Get Started
              </button>
            </a>
          </div>
          <button className="ms-12 px-4 hover:border-white hover:rounded-full hover:border-2">
            Watch Video
          </button>
          <button className="ms-12 px-4 hover:border-white hover:rounded-full hover:border-2">
            Go to Create Product
          </button>
        </div>
        <div className="">
          <img src={HeroImage} alt="" className="" />
        </div>
      </main>

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
      <Footer />
    </>
  );
}

export default LandingPage;
