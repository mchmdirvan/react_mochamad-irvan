/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as z from "zod";

import BootstrapLogo from "../assets/bootstrap-logo.svg";

import CreateProductLanguage from "../utils/constants/CreateProductLanguage";
import {
  setProducts,
  editProduct,
  deleteProduct,
} from "../utils/states/redux/reducers/reducers";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import {
  Input,
  File,
  TextArea,
  Select,
  RadioGroup,
} from "../components/FormComponent";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Table from "../components/Table";

import { getProducts } from "../utils/API/posts/api";

function CreateProduct() {
  useTitle("Create Product");

  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [selectedId, setSelectedId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [radioOption] = useState([
    {
      id: "freshness-new",
      label: "Brand New",
    },
    {
      id: "freshness-second",
      label: "Second Hand",
    },
    {
      id: "freshness-refurbished",
      label: "Refurbished",
    },
  ]);

  const MAX_FILE_SIZE = 5000000;
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  const schema = z.object({
    productName: z
      .string()
      .min(1, { message: "Please enter a valid Product Name" })
      .max(25, { message: "Product Name must not exceed 25 characters." })
      .refine((value) => !/@|#|\{|\}/.test(value), {
        message: "Product Name should not contain symbols",
      }),
    productPrice: z
      .string()
      .min(1, { message: "Please enter a valid Product Price" }),
    productCategory: z
      .string()
      .min(1, { message: "The Product Category field must be filled in" }),
    imageOfProduct: z
      .any()
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Max image size is 5MB.`
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
    productFreshness: z
      .string()
      .min(1, { message: "Please enter a valid product freshness" }),
    additionalDescription: z.string().min(1, {
      message: "The Additional Description field must be filled in",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      productFreshness: "",
    },
  });

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    try {
      const response = await getProducts();
      dispatch(setProducts(response))
    } catch (error) {
      console.log(error.toString());
    }
  }

  function onSubmit(data) {
    if (!isEdit) {
      const product = {
        id: uuidv4(),
        ...data,
        imageOfProduct: URL.createObjectURL(data.imageOfProduct[0]),
      };
      const newProducts = [...products, product];
      dispatch(setProducts(newProducts));
    } else {
      const updateProduct = {
        id: selectedId,
        ...data,
        imageOfProduct: URL.createObjectURL(data.imageOfProduct[0]),
      };
      dispatch(editProduct(updateProduct));
      reset();
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
    dispatch(deleteProduct(id));
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
        <form
          aria-label="product-form"
          noValidate=""
          onSubmit={handleSubmit(onSubmit)}
        >
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
            ariaLabel="input-product-name"
          />

          {/* Form Product Category */}
          <Select
            register={register}
            label="Product Category"
            name="productCategory"
            id="productCategory"
            options={["Fruits", "Vegetable", "Dairy"]}
            placeholder="Choose..."
            error={errors.productCategory?.message}
            ariaLabel="input-product-category"
          />

          {/* Form Image of Product */}
          <File
            register={register}
            label="Product Image"
            type="file"
            id="imageOfProduct"
            error={errors.imageOfProduct?.message}
            name="imageOfProduct"
            ariaLabel="input-product-image"
          />

          {/* Form Product Freshness */}
          <div className="mt-5">
            <RadioGroup
              id="input-product-freshness"
              label="Product Freshness"
              name="productFreshness"
              options={radioOption}
              register={register}
              defaultValue={""}
              error={errors.productFreshness?.message}
              ariaLabel="input-product-freshness"
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
            ariaLabel="input-product-description"
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
            ariaLabel="input-product-price"
          />

          {/* Button to Submit the Form */}
          <Button
            type="submit"
            id="submitButton"
            label="Submit"
            ariaLabel="btn-submit"
          />

          {/* Button to Generate Random Number */}
          <Button
            type="Button"
            id="generateRandomNumberButton"
            label="Generate Random Number"
            ariaLabel="btn-random"
            onClick={() => generateRandomNumber()}
          />
        </form>
      </main>

      <Table
        headers={[
          "No",
          "Product Name",
          "Product Category",
          "Product Image",
          "Product Freshness",
          "Additional Description",
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
