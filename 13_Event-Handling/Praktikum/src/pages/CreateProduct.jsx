/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import MainForm from "../components/MainForm";
import Table from "../components/Table";
import HeroSection from "../components/HeroSection";

function CreateProduct() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainForm />
      <Table />
    </>
  );
}

export default CreateProduct;
