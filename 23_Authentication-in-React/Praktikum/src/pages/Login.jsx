/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import { useToken } from "../utils/states/contexts/token-context";
import { Input } from "../components/FormComponent";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const schema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleLogin(data) {
    setToken(JSON.stringify(data));
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center my-20">
        <h1 className=" font-bold text-2xl">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            register={register}
            name="email"
            label="Email"
            type="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            name="password"
            label="Password"
            type="password"
            error={errors.password?.message}
          />
          <Button label="submit" type="submit" className="w-20" />
        </form>
      </div>
    </>
  );
}
