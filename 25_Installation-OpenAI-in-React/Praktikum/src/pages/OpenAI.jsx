/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import React from "react";
import OpenAI from "openai";
import clsx from "clsx";

import { useTitle } from "../utils/hooks/customHooks";
import { Input } from "../components/FormComponent";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const configuration = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function IndexOpenAI() {
  useTitle("Open AI");
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(prompt);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] py-4 px-8 flex flex-col text-black">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <Input
            placeholder="Insert prompt"
            onChange={(event) => setPrompt(event.target.value)}
            className="w-[90vw]"
            name="insertPrompt"
            id="insertPrompt"
            ariaLabel="insert-prompt"
          />
          <Button type="submit" label="submit" className="px-3" ariaLabel="btn-submit" id="btn-submit" />
        </form>
      </div>
    </>
  );
}
