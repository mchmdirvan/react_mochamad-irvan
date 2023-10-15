/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import OpenAI from "openai";

const configuration = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function IndexOpenAI() {
  return <div>OpenAI</div>;
}
