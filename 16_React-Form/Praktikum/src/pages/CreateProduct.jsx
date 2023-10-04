/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as z from "zod";

import BootstrapLogo from "../assets/bootstrap-logo.svg";

import CreateProductLanguage from "../utils/constants/CreateProductLanguage";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import {
  Input,
  File,
  TextArea,
  Select,
  RadioInput,
} from "../components/FormComponent";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Table from "../components/Table";

function CreateProduct() {
  useTitle("Create Product");

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const schema = z.object({
    productName: z
      .string()
      .min(1, { message: "Please enter a valid Product Name" })
      .max(25, { message: "Product Name must not exceed 25 characters." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function onSubmit(data) {
    if (!isEdit) {
      const product = {
        id: uuidv4(),
        ...data,
      };
      setProducts([...products, product]);
      saveDataToLocalStorage("products", [...products, product]);
    } else {
      const updateProduct = {
        id: selectedId,
        ...data,
      };
      const updatedProducts = products.map((product) =>
        product.id === selectedId ? updateProduct : product
      );
      setProducts(updatedProducts);
      saveDataToLocalStorage("products", updatedProducts);
    }
    reset();
    setIsEdit(false);

    Swal.fire({
      title: "Success",
      text: "Berhasil menambahkan data",
      showCancelButton: false,
    });
  }

  function handleDelete(id) {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    Swal.fire({
      title: "Success",
      text: "Berhasil menghapus data",
      showCancelButton: false,
    });
  }

  function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 1000);
    console.log(randomNum);
    return randomNum;
  }

  return (
    <>
      <Navbar />

      <main className=" py-10 flex flex-col items-center justify-center">
        {/* Title and Description */}
        <img
          src={BootstrapLogo}
          alt="Bootstrap Logo"
          className=" w-[4rem] align-middle"
        />
        <h1 className=" pt-5 font-semibold text-3xl">
          {CreateProductLanguage.title[currentLanguage]}
        </h1>
        <p className="pt-2 text-xl px-[17rem] text-center text-gray-700">
          {CreateProductLanguage.description[currentLanguage]}
        </p>
        <button
          className=" mt-1 px-4 border-blue-100 border-2 rounded-full text-center"
          onClick={() =>
            setCurrentLanguage(currentLanguage === "en" ? "id" : "en")
          }
        >
          Toggle Language
        </button>
      </main>

      <main className="px-[28rem]">
        <h4 className="font-semibold text-2xl">Detail Product</h4>
        <form className="" noValidate="" onSubmit={handleSubmit(onSubmit)}>
          {/* Form Product Name */}
          <Input
            register={register}
            className="w-72"
            label="Product Name :"
            type="text"
            name="productName"
            id="productName"
            autoFocus
            error={errors.productName?.message}
          />

          {/* Form Product Category */}
          <Select
            register={register}
            className=""
            label="Product Category"
            name="productCategory"
            id="productCategory"
            options={["Fruits", "Vegetable", "Dairy"]}
            placeholder="Choose..."
            error={errors.productCategory?.message}
          />

          {/* Form Image of Product */}
          <File
            register={register}
            className=""
            label="Image of Product"
            type="file"
            id="imageOfProduct"
            error={errors.imageOfProduct?.message}
            name="imageOfProduct"
          />

          {/* Form Product Freshness */}
          <div className="mt-5">
            <label>Product Freshness</label>
            <RadioInput
              register={register}
              id="brandNew"
              name="productFreshness"
              label="Brand New"
              value="Brand New"
            />
            <RadioInput
              register={register}
              id="secondHank"
              name="productFreshness"
              label="Second Hank"
              value="Second Hank"
            />
            <RadioInput
              register={register}
              id="refurbished"
              name="productFreshness"
              label="Refurbished"
              value="Refurbished"
            />
          </div>

          {/* Form Additional Description */}
          <TextArea
            register={register}
            className="mt-3"
            label="Addittional Description"
            name="additionalDescription"
            id="additionalDescription"
            cols={5}
            rows={5}
            error={errors.additionalDescription?.message}
          />

          {/* Form Product Price */}
          <Input
            register={register}
            className="w-full"
            label="Product Price"
            type="number"
            id="productPrice"
            placeholder="$1"
            error={errors.productPrice?.message}
            name="productPrice"
          />

          {/* Button to Submit the Form */}
          <Button type="submit" id="submitButton" label="Submit" className="" />

          {/* Button to Generate Random Number */}
          <Button
            type="Button"
            id="generateRandomNumberButton"
            label="Generate Random Number"
            onClick={() => generateRandomNumber()}
          />
        </form>
      </main>

      <Table
        headers={[
          "No",
          "Product Name",
          "Product Category",
          "Product Freshness",
          "Product Price",
          "Actions",
        ]}
        datas={products}
        onEditClick={(data) => {
          setIsEdit(true);
          setSelectedId(data.id);
          reset(data);
        }}
        onDeleteClick={(data) =>
          Swal.fire({
            title: "Peringatan",
            text: `Apakah anda yakin untuk menghapus product ${data.productName}?`,
          }).then((result) => {
            if (result.isConfirmed) {
              handleDelete(data.id);
            }
          })
        }
      />
    </>
  );
}

export default CreateProduct;
