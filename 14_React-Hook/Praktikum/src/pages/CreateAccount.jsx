/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import bootstrapLogo from "../assets/bootstrap-logo.svg";
import article from "../utils/article";

function CreateAccount() {
  useEffect(() => {
    alert('Welcome!')
  },[])

  return (
    <main className="align-content-center text-center ">
      <img
        src={bootstrapLogo}
        alt="Bootstrap Logo"
        className="bootstrap-logo"
      />
      <h1>{article.title.en}</h1>
      <p className="container-sm">{article.description.en}</p>
    </main>
  );
}

export default CreateAccount;
