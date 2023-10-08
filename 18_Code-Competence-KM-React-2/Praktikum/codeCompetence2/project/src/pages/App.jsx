/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import { Input, TextArea } from "../components/Form";
import Navbar from "../components/Navbar";
import Button from "../components/button";

import ImageHero from "../assets/medium-shot-smiley-man-eating-food.jpg";
import RiceBowl from "../assets/Rice-Bowl.jpg";
import Swal from "../utils/swal";

export default function App() {
  const schema = z.object({
    firstName: z
      .string()
      .min(1, { message: "The First Name field must be filled in" }),
    lastName: z
      .string()
      .min(1, { message: "The Last Name field must be filled in" }),
    email: z.string().min(1, { message: "The Email field must be filled in" }),
    feedback: z
      .string()
      .min(1, { message: "The feedback field must be filled in" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    Swal.fire({
      title: "Success",
      html: (
        <div>
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Email: {data.email}</p>
          <p>Feedback: {data.feedback}</p>
        </div>
      ),
      text: "Berhasil menampilkan data",
      showCancelButton: false,
    });
    reset();
  }

  return (
    <>
      <Navbar />
      <section className="flex flex-row justify-center items-center  bg-[#838671] h-[80vh] ">
        <div className="p-2 max-w-2xl">
          <h6 className="text-[#e9ec79] font-semibold">
            SALAD WORKS EXCLUSIVES
          </h6>
          <h1 className="text-[#fdfbef] mb-4 text-6xl font-semibold">
            Fuel up with high protein picks
          </h1>
          <p className="text-[#fdfbef] mt-4">
            Let our top protein-rich options power your day.
          </p>
          <div className="flex flex-row flex-wrap flex-initial w-1/2 my-4 gap-4">
            <div className=" w-24">
              <p className=" w-24 text-[#e9ec79]">380</p>
              <p className="text-[#fdfbef]">CALORIES</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79]  w-24">12G</p>
              <p className="text-[#fdfbef]">PROTEIN</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79]  w-24">18G</p>
              <p className="text-[#fdfbef]">FAT</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79]  w-24">0.3KG</p>
              <p className="text-[#fdfbef]">CO2E</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79]  w-24">LOW</p>
              <p className="text-[#fdfbef]">CARBON</p>
            </div>
          </div>
          <Button
            label="Order Now"
            className="bg-[#e9ec79] px-[8rem] hover:bg-[#a8ad58] hover:text-white mt-5  "
          />
        </div>

        <div className="p-2">
          <img
            src={ImageHero}
            alt="Smiley Man Eating Food"
            className=" w-[27rem]"
          />
        </div>
      </section>

      <section className="flex flex-row justify-center items-center bg-[#fdfbef] h-[60vh] gap-20">
        <div className="p-2 ">
          <img
            src={RiceBowl}
            alt="Chicken and Rice Bowl"
            className="w-[28rem]"
          />
        </div>
        <div className="p-2 max-w-2xl">
          <h1 className="mb-4 text-7xl font-semibold">Limited Time Only</h1>
          <p className="my-4 w-3/4">
            Get your forks on new hits like the Chicken + Chipotle Pepper Bowl
            before it's too late
          </p>
          <div className="flex flex-row flex-wrap flex-initial w-3/5 my-4 gap-4">
            <div>
              <p className=" w-24">600</p>
              <p className="text-gray-400">Calories</p>
            </div>
            <div>
              <p className=" w-24">31G</p>
              <p className="text-gray-400">Protein</p>
            </div>
            <div>
              <p className=" w-24">62G</p>
              <p className="text-gray-400">Carbs</p>
            </div>
            <div>
              <p className=" w-24">27G</p>
              <p className="text-gray-400">Fat</p>
            </div>
            <div className="">
              <p className=" w-24">0.7kg</p>
              <p className="text-gray-400">CO2E</p>
            </div>
          </div>
          <Button
            label="Order Now"
            className="bg-[#838671] px-[8rem] hover:bg-[#56584a] text-white mt-5"
          />
        </div>
      </section>

      <section className="flex flex-row justify-around text-white pb-5 bg-[#838671]">
        <div className="w-1/4">
          <h2 className="pt-10 mt-10 font-semibold text-4xl">Contact Us</h2>
          <p className="pt-5 my-10">
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the-
            <a
              className=" text-blue-300 underline hover:text-blue-400"
              href="#"
            >
              departemen email
            </a>{" "}
            you'd like to contact below
          </p>
        </div>
        {/* Form Contact */}
        <form noValidate="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex flex-row gap-4">
              <Input
                register={register}
                className="w-72"
                label="First Name"
                type="text"
                name="firstName"
                id="firstName"
                error={errors.firstName?.message}
              />
              <Input
                register={register}
                className="w-72"
                label="Last Name"
                type="text"
                name="lastName"
                id="lastName"
                error={errors.lastName?.message}
              />
            </div>
            <Input
              register={register}
              className="w-full"
              label="Email"
              type="email"
              name="email"
              id="email"
              error={errors.email?.message}
            />
            <TextArea
              register={register}
              label="What can we help you with?"
              name="feedback"
              id="feedback"
              cols={5}
              rows={5}
              error={errors.feedback?.message}
            />
            <Button
              label="Submit"
              type="submit"
              className="bg-[#e9ec79] px-[8rem] hover:bg-[#a8ad58] hover:text-white mt-5 text-black"
            />
          </div>
        </form>
      </section>
    </>
  );
}
