/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import MainForm from "../components/MainForm";
import Table from "../components/Table";
import BootstrapLogo from "../assets/bootstrap-logo.svg";

function CreateProduct() {
  return (
    <>
      <Navbar />

      <main className="body">
        {/* Title and Description */}
        <img
          src={BootstrapLogo}
          alt="Bootstrap Logo"
          className="mx-auto d-block bootstrap-logo"
        />

        <h2>Create Product</h2>
        <p>
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </main>

      <MainForm />
      <Table />
    </>
  );
}

export default CreateProduct;
