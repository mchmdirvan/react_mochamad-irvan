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

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await configuration.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    try {
      const response = await configuration.chat.completions.create({
        messages: [
          { role: "user", content: prompt },
          {
            role: "system",
            content:
              "Kamu adalah seorang tour guide yang bertugas untuk memandu wisatawan untuk mencari wisata di sekitarnya.",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] py-4 px-8 flex flex-col text-black">
        <div className="grow flex flex-col overflow-auto">
          {results.map((result) => (
            <p
              className={clsx(
                "border rounded-xl p-3 mb-4 w-fit",
                result.message.role === "assistant" ? "self-start" : "self-end"
              )}
              key={result.message.content}
            >
              {result.message.content}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <Input
            placeholder="Insert prompt"
            onChange={(event) => setPrompt(event.target.value)}
            className="w-[90vw]"
            name="insertPrompt"
            id="insertPrompt"
            ariaLabel="insert-prompt"
            value={prompt}
          />
          <Button
            type="submit"
            label={isLoading ? "Loading" : "Submit"}
            disabled={isLoading}
            className="px-3"
            ariaLabel="btn-submit"
            id="btn-submit"
          />
        </form>
      </div>
    </>
  );
}
