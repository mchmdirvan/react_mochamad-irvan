/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#e9ec79] px-20 py-14">
        <h1 className="text-center pt-5 font-[Caprasimo] text-[10rem] border-b-2 border-black ">
          Saladworks
        </h1>

        <div className="flex flew-row  pt-3 mx-5">
          <div className="w-3/5">
            <h2 className="text-5xl font-semibold my-5">Join our newsletter</h2>
            <p className="w-3/4 my-5">
              Sign up for exclusive promos,new menu drops, store openings, and
              more.
            </p>
            <input
              type="email"
              name="email-footer"
              id="email-footer"
              placeholder="Drop Your Mail Here"
              className="border-0 p-3 mb-3 w-3/4"
            />
          </div>
          <div className="flex flex-col gap-4 py-10">
            <h6 className="font-bold">Come and Visit Us!</h6>
            <p>Raya Bogor Street Number 4, DKI Jakarta, Indonesian</p>
            <p>+62 881 0800 70700</p>
            <div className="social-icons border-t-2 border-black flex gap-10 py-2">
              <a
                href="https://www.facebook.com/mochamad.irvan.378/"
                className="btn"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/xzrvan/" className="btn">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/mchmdirvan/" className="btn">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="px-5 py-4 ">
            <h6 className=" font-bold">ABOUT US</h6>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investor</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer>
        <p className="text-center py-2 bg-black text-white">
          codeCompetence2 - Mochamad Irvan
        </p>
      </footer>
    </>
  );
}
