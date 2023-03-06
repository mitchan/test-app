"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { signin } from "../lib/api";
import { TextField } from "./input/TextField";

export function SigninForm() {
  const router = useRouter();

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signin(form);
    router.push("/home");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 border border-black p-2 rounded-md"
    >
      <div className="flex flex-col gap-2">
        <TextField
          id="email"
          value={form.email}
          onChange={(e) => {
            setForm((oldForm) => ({
              ...oldForm,
              email: e.target.value,
            }));
          }}
          label="Email"
          placeholder="Email"
        />
        <TextField
          id="password"
          value={form.password}
          onChange={(e) => {
            setForm((oldForm) => ({
              ...oldForm,
              password: e.target.value,
            }));
          }}
          label="Password"
          placeholder="Password"
          type="password"
        />

        <button type="submit">submit</button>
      </div>
    </form>
  );
}
