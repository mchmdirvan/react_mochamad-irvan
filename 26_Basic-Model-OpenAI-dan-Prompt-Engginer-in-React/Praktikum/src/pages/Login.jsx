/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import { useToken } from "../utils/states/contexts/token-context";
import { useTitle } from "../utils/hooks/customHooks";
import { login } from "../utils/API/auth/api";
import Swal from "../utils/swal";

import { Input } from "../components/FormComponent";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const schema = z.object({
  username: z.string().min(1, { message: "username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  useTitle("Login")
  const { changeToken } = useToken();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center my-20">
        <h1 className=" font-bold text-2xl">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            register={register}
            name="username"
            label="Username"
            type="text"
            error={errors.username?.message}
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
