/* eslint-disable no-unused-vars */
import React from "react";
import BootstrapLogo from "../assets/bootstrap-logo.svg";

function HeroSection() {
  return (
    <main className="body">
      {/* Title and Description */}
      <img
        src={BootstrapLogo}
        alt="Bootstrap Logo"
        className="mx-auto d-block bootstrap-logo"
      />

      <h2>Create Product</h2>
      <p>
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
    </main>
  );
}

export default HeroSection;
