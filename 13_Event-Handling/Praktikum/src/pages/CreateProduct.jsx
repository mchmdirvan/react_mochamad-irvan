/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MainForm from "../components/MainForm";
import Table from "../components/Table";
import BootstrapLogo from "../assets/bootstrap-logo.svg";
import CreateProductLanguage from "../utils/CreateProductLanguage";

function CreateProduct() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "id" : "en");
  };
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

        <h2>{CreateProductLanguage.title[currentLanguage]}</h2>
        <p>{CreateProductLanguage.description[currentLanguage]}</p>
        <button onClick={toggleLanguage}>Toggle Language</button>
      </main>

      <MainForm />
      <Table />
    </>
  );
}

export default CreateProduct;
