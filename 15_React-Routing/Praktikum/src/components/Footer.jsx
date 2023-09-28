/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex justify-around py-20 font-[Jost]">
        <div className="">
          <h1 className="text-[#37517E] text-3xl font-medium">ARSHA</h1>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <br />
          <p>
            <b>Phone:</b> +1 5589 55488 55
          </p>
          <p>
            <b>Email:</b> info@example.com
          </p>
        </div>
        <div className="">
          <h4 className="text-[#37517E] font-bold mb-3">Useful Links</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy police</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-[#37517E] font-bold mb-3">Our Services</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className=" max-w-sm">
          <h4 className="text-[#37517E] font-bold">Our Social Networks</h4>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-[#47B2E4]"></div>
            <div className="h-8 w-8 rounded-full bg-[#47B2E4]"></div>
            <div className="h-8 w-8 rounded-full bg-[#47B2E4]"></div>
            <div className="h-8 w-8 rounded-full bg-[#47B2E4]"></div>
            <div className="h-8 w-8 rounded-full bg-[#47B2E4]"></div>
          </div>
        </div>
      </footer>

      <footer className="flex bg-[#37517E] justify-between text-white p-10">
        <p>
          ©Copyright by <b>Arsha</b>. All rights reserved.
        </p>
        <p>
          Designed by <span className="text-[#47B2E4]">BootstrapMade</span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
