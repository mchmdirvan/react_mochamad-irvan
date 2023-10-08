/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/button";
import ImageHero from "../assets/medium-shot-smiley-man-eating-food.jpg";

export default function App() {
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
              <p className="m-0 text-[#e9ec79]">380</p>
              <p className="text-[#fdfbef]">CALORIES</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79] m-0">12G</p>
              <p className="text-[#fdfbef]">PROTEIN</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79] m-0">18G</p>
              <p className="text-[#fdfbef]">FAT</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79] m-0">0.3KG</p>
              <p className="text-[#fdfbef]">CO2E</p>
            </div>
            <div className="w-24">
              <p className="text-[#e9ec79] m-0">LOW</p>
              <p className="text-[#fdfbef]">CARBON</p>
            </div>
          </div>
          <Button label="Order Now" className="bg-[#e9ec79] px-[8rem] hover:bg-[#a8ad58] hover:text-white mt-5  " />
        </div>

        <div className="p-2">
          <img
            src={ImageHero}
            alt="Smiley Man Eating Food"
            className=" w-[27rem]"
          />
        </div>
      </section>
    </>
  );
}
